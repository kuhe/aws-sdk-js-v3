import { CredentialsProviderError } from "@smithy/property-provider";
import { getProfileName } from "@smithy/shared-ini-file-loader";
import { afterEach, beforeEach, describe, expect, test as it, vi } from "vitest";

import { isAssumeRoleProfile, resolveAssumeRoleCredentials } from "./resolveAssumeRoleCredentials";
import { resolveCredentialSource } from "./resolveCredentialSource";
import { resolveProfileData } from "./resolveProfileData";

vi.mock("@aws-sdk/nested-clients/sts", () => {
  return {
    getDefaultRoleAssumer: vi.fn().mockReturnValue(async () => ({})),
  };
});
vi.mock("@smithy/shared-ini-file-loader");
vi.mock("./resolveCredentialSource");
vi.mock("./resolveProfileData");

const getMockAssumeRoleProfile = () => ({
  role_arn: "mock_role_arn",
  role_session_name: "mock_role_session_name",
  external_id: "mock_external_id",
  mfa_serial: "mock_mfa_serial",
});

const getMockSourceProfileKeyValues = () => ({
  source_profile: "mock_source_profile",
});

const getMockProviderProfileKeyValues = () => ({
  credential_source: "mock_credential_source",
});

describe(isAssumeRoleProfile.name, () => {
  describe("returns false for falsy values", () => {
    it.each([false, 0, -0, "", null, undefined, NaN])("%s:", (falsyValue) => {
      expect(isAssumeRoleProfile(falsyValue)).toEqual(false);
    });
  });

  describe("returns false for data type which is not an object", () => {
    it.each([true, 1, "string"])("%s:", (notObject) => {
      expect(isAssumeRoleProfile(notObject)).toEqual(false);
    });
  });

  it.each(["role_arn"])("value at '%s' is not of type string", (key) => {
    [true, null, undefined, 1, NaN, {}].forEach((value) => {
      expect(
        isAssumeRoleProfile({
          ...getMockAssumeRoleProfile(),
          ...getMockSourceProfileKeyValues(),
          ...getMockProviderProfileKeyValues(),
          [key]: value,
        })
      ).toEqual(false);
    });
  });

  it.each(["role_session_name", "external_id", "mfa_serial"])(
    "value at '%s' is not of type string | undefined",
    (key) => {
      [true, null, 1, NaN, {}].forEach((value) => {
        expect(
          isAssumeRoleProfile({
            ...getMockAssumeRoleProfile(),
            ...getMockSourceProfileKeyValues(),
            ...getMockProviderProfileKeyValues(),
            [key]: value,
          })
        ).toEqual(false);
      });
    }
  );

  it("returns true for AssumeRoleWithSourceProfile", () => {
    expect(isAssumeRoleProfile({ ...getMockAssumeRoleProfile(), ...getMockSourceProfileKeyValues() })).toEqual(true);
  });

  it("returns true for AssumeRoleWithProviderProfile", () => {
    expect(isAssumeRoleProfile({ ...getMockAssumeRoleProfile(), ...getMockProviderProfileKeyValues() })).toEqual(true);
  });
});

describe(resolveAssumeRoleCredentials.name, () => {
  const mockCreds = {
    accessKeyId: "mockAccessKeyId",
    secretAccessKey: "mockSecretAccessKey",
  };
  const mockSourceCredsFromProfile = {
    accessKeyId: "mockProfileAccessKeyId",
    secretAccessKey: "mockProfileSecretAccessKey",
  };
  const mockSourceCredsFromCredential = {
    accessKeyId: "mockCredsAccessKeyId",
    secretAccessKey: "mockCredsSecretAccessKey",
  };

  const mockProfileName = "mockProfileName";
  const mockProfiles = { [mockProfileName]: {} };
  const mockOptions = {
    mfaCodeProvider: vi.fn(),
    roleAssumer: vi.fn().mockReturnValue(Promise.resolve(mockCreds)),
    roleAssumerWithWebIdentity: vi.fn(),
  };
  const mockCredentialSource = "mockCredentialSource";

  const getMockRoleAssumeParams = () => ({
    role_arn: "mock_role_arn",
    role_session_name: "mock_role_session_name",
    external_id: "mock_external_id",
    duration_seconds: "2000",
  });

  const getMockProfilesWithCredSource = (additionalData: any) => ({
    [mockProfileName]: {
      credential_source: mockCredentialSource,
      ...additionalData,
    },
  });

  beforeEach(() => {
    vi.mocked(getProfileName).mockReturnValue(mockProfileName);
    vi.mocked(resolveProfileData).mockResolvedValue(mockSourceCredsFromProfile);
    vi.mocked(resolveCredentialSource).mockReturnValue(async () => async () => mockSourceCredsFromCredential);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it("dynamically loads STS if roleAssumer is not available in options", async () => {
    const inputOptions = { ...mockOptions, roleAssumer: undefined };
    await resolveAssumeRoleCredentials(mockProfileName, mockProfiles, inputOptions);
    expect(inputOptions.roleAssumer).toBeDefined();
  });

  it("throws error if source_profile is in visited profiles", async () => {
    const mockProfileCurrent = "mockProfileCurrent";
    const mockProfilesWithCycle = { [mockProfileCurrent]: { source_profile: mockProfileName }, [mockProfileName]: {} };

    const expectedError = new CredentialsProviderError(
      `Detected a cycle attempting to resolve credentials for profile` +
        ` ${mockProfileName}. Profiles visited: ` +
        Object.keys({ mockProfileName: true }).join(", "),
      false
    );

    try {
      await resolveAssumeRoleCredentials(mockProfileCurrent, mockProfilesWithCycle, mockOptions, {
        mockProfileName: true,
      });
      fail(`expected ${expectedError}`);
    } catch (error) {
      expect(error).toStrictEqual(expectedError);
    }
  });

  it("gets sourceCreds from Profile data if source_profile is present", async () => {
    const mockProfileCurrent = "mockProfileCurrent";
    const mockRoleAssumeParams = getMockRoleAssumeParams();
    const mockProfilesWithSource = {
      [mockProfileCurrent]: {
        source_profile: mockProfileName,
        ...mockRoleAssumeParams,
      },
      [mockProfileName]: {
        role_arn: "mock_role_arn",
      },
    };

    const receivedCreds = await resolveAssumeRoleCredentials(mockProfileCurrent, mockProfilesWithSource, mockOptions);
    expect(receivedCreds).toStrictEqual(mockCreds);
    expect(resolveProfileData).toHaveBeenCalledWith(
      mockProfileName,
      mockProfilesWithSource,
      mockOptions,
      {
        mockProfileName: true,
      },
      false
    );
    expect(resolveCredentialSource).not.toHaveBeenCalled();
    expect(mockOptions.roleAssumer).toHaveBeenCalledWith(mockSourceCredsFromProfile, {
      RoleArn: mockRoleAssumeParams.role_arn,
      RoleSessionName: mockRoleAssumeParams.role_session_name,
      ExternalId: mockRoleAssumeParams.external_id,
      DurationSeconds: parseInt(mockRoleAssumeParams.duration_seconds),
    });
  });

  it("gets sourceCreds from Credentials Source if source_profile is absent", async () => {
    const mockRoleAssumeParams = getMockRoleAssumeParams();
    const mockProfilesWithCredSource = getMockProfilesWithCredSource(mockRoleAssumeParams);

    const receivedCreds = await resolveAssumeRoleCredentials(mockProfileName, mockProfilesWithCredSource, mockOptions);
    expect(receivedCreds).toStrictEqual(mockCreds);
    expect(resolveProfileData).not.toHaveBeenCalled();
    expect(resolveCredentialSource).toHaveBeenCalledWith(mockCredentialSource, mockProfileName, undefined);
    expect(mockOptions.roleAssumer).toHaveBeenCalledWith(mockSourceCredsFromCredential, {
      RoleArn: mockRoleAssumeParams.role_arn,
      RoleSessionName: mockRoleAssumeParams.role_session_name,
      ExternalId: mockRoleAssumeParams.external_id,
      DurationSeconds: parseInt(mockRoleAssumeParams.duration_seconds),
    });
  });

  it("sets role session name if not provided", async () => {
    const mockDateNow = Date.now();
    vi.spyOn(Date, "now").mockReturnValue(mockDateNow);

    const mockRoleAssumeParams = { ...getMockRoleAssumeParams(), role_session_name: undefined };
    const mockProfilesWithCredSource = getMockProfilesWithCredSource(mockRoleAssumeParams);

    const receivedCreds = await resolveAssumeRoleCredentials(mockProfileName, mockProfilesWithCredSource, mockOptions);
    expect(receivedCreds).toStrictEqual(mockCreds);
    expect(mockOptions.roleAssumer).toHaveBeenCalledWith(mockSourceCredsFromCredential, {
      RoleArn: mockRoleAssumeParams.role_arn,
      RoleSessionName: `aws-sdk-js-${mockDateNow}`,
      ExternalId: mockRoleAssumeParams.external_id,
      DurationSeconds: parseInt(mockRoleAssumeParams.duration_seconds),
    });
  });

  it("throws error is mfa_serial is provided", async () => {
    const mockRoleAssumeParams = getMockRoleAssumeParams();
    const mockMfaSerial = "mock_mfa_serial";
    const mockProfilesWithCredSource = getMockProfilesWithCredSource({
      ...mockRoleAssumeParams,
      mfa_serial: mockMfaSerial,
    });

    const expectedError = new CredentialsProviderError(
      `Profile ${mockProfileName} requires multi-factor authentication, but no MFA code callback was provided.`,
      false
    );
    try {
      await resolveAssumeRoleCredentials(mockProfileName, mockProfilesWithCredSource, {
        ...mockOptions,
        mfaCodeProvider: undefined,
      });
      fail(`expected ${expectedError}`);
    } catch (error) {
      expect(error).toStrictEqual(expectedError);
    }
    expect(mockOptions.roleAssumer).not.toHaveBeenCalled();
  });

  it("populates SerialNumber and TokenCode based on mfa_serial", async () => {
    const mockRoleAssumeParams = getMockRoleAssumeParams();
    const mockMfaSerial = "mock_mfa_serial";
    const mockProfilesWithCredSource = getMockProfilesWithCredSource({
      ...mockRoleAssumeParams,
      mfa_serial: mockMfaSerial,
    });

    const mockTokenCode = "mockTokenCode";
    mockOptions.mfaCodeProvider.mockResolvedValue(mockTokenCode);

    const receivedCreds = await resolveAssumeRoleCredentials(mockProfileName, mockProfilesWithCredSource, mockOptions);
    expect(receivedCreds).toStrictEqual(mockCreds);
    expect(mockOptions.roleAssumer).toHaveBeenCalledWith(mockSourceCredsFromCredential, {
      RoleArn: mockRoleAssumeParams.role_arn,
      RoleSessionName: mockRoleAssumeParams.role_session_name,
      ExternalId: mockRoleAssumeParams.external_id,
      SerialNumber: mockMfaSerial,
      TokenCode: mockTokenCode,
      DurationSeconds: parseInt(mockRoleAssumeParams.duration_seconds),
    });
  });
});
