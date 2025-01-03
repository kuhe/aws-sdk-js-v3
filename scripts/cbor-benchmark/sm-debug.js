const { SecretsManager: SecretsManagerCbor } = require("@aws-sdk/client-secrets-manager-cbor");
const { fromIni } = require("@aws-sdk/credential-providers");

const sm = new SecretsManagerCbor({
  region: "us-west-2",
  credentials: fromIni({
    profile: "cbor",
  }),
  maxAttempts: 1,
});

sm.deleteSecret({
  SecretId: "cbor-test",
  ForceDeleteWithoutRecovery: true,
})
  .then(async () => {
    await new Promise((r) => setTimeout(r, 2000));

    return sm.createSecret({
      Name: "cbor-test",
      SecretBinary: new Uint8Array([0]),
      Tags: [
        { Key: "Stage", Value: "Production" },
        { Key: "Iteration", Value: "000" },
      ],
    });
  })
  .then(console.log);
