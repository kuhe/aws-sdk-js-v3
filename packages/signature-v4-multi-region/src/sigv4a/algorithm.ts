import * as elliptic from "elliptic";

const EC = elliptic.ec;
const ec = new EC("p256");

const ALGORITHM = "AWS4-ECDSA-P256-SHA256";

/**
 * 115792089210356248762697446949407573529996955224135760342422259061068512044369 - 2
 *
 * The N value from section 3.2.1.3 of https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-186.pdf
 * Used as the N value for the algorithm described in section A.2.2 of https://nvlpubs.nist.gov/nistpubs/FIPS/NIST.FIPS.186-5.pdf
 */
const BIG_N_MINUS_2 = new Uint8Array([
  1, 1, 5, 7, 9, 2, 0, 8, 9, 2, 1, 0, 3, 5, 6, 2, 4, 8, 7, 6, 2, 6, 9, 7, 4, 4, 6, 9, 4, 9, 4, 0, 7, 5, 7, 3, 5, 2, 9,
  9, 9, 6, 9, 5, 5, 2, 2, 4, 1, 3, 5, 7, 6, 0, 3, 4, 2, 4, 2, 2, 2, 5, 9, 0, 6, 1, 0, 6, 8, 5, 1, 2, 0, 4, 4, 3, 6, 7,
]);

/**
 * Calculates a Sigv4a signature.
 */
export async function calculateSignature(signingKey: string, stringToSign: string): Promise<string> {
  const _signingKey = ec.keyFromPublic(signingKey, "hex");
  const signature = _signingKey.sign(stringToSign);

  // TODO: hex encode
  return signature.toDER();
}

export async function generateSigningKey(accessKey: string, secretAccessKey: string): Promise<Uint8Array> {
  const encoder = new TextEncoder();
  const inputKey = encoder.encode(`AWS4A${secretAccessKey}`);
  const kdfContext = new Uint8Array(accessKey.length + 1);

  let counter = 1;
  let key: Uint8Array = new Uint8Array();

  while (true) {
    for (let i = 0; i < accessKey.length; ++i) {
      kdfContext[i] = accessKey[i].charCodeAt(0);
    }
    kdfContext[kdfContext.length - 1] = counter;

    const fis: number[] = [...encoder.encode(ALGORITHM)];
    fis.push(0);
    fis.push(...kdfContext);
    fis.push(256);

    const _key = inputKey; // TODO: new hmac sha256

    const buf: number[] = [];
    buf.push(1);
    buf.push(...fis);
    let tag = "hmac sign" + _key + buf; // TODO: hmac sign key with buf
    tag = tag.slice(0, 32);

    const k0: Uint8Array = encoder.encode(tag); // TODO: U256 from bytes.

    if (compare(k0, BIG_N_MINUS_2) <= 0) {
      const pk = add(k0, new Uint8Array([1]));
      const d = pk;
      key = d;
      break;
    }

    counter += 1;
  }

  return key;
}

/**
 * Compare as big integers with each member being one digit.
 * @returns -1, 0, or 1.
 */
function compare(a: Uint8Array, b: Uint8Array): number {
  const width = Math.max(a.length, b.length);
  for (let i = 0; i < width; ++i) {
    const digit_a = a[i + a.length - width] | 0;
    const digit_b = b[i + b.length - width] | 0;
    if (digit_a < digit_b) {
      return -1;
    }
    if (digit_a > digit_b) {
      return 1;
    }
  }
  return 0;
}

/**
 * Adds b to a and returns a new Uint8Array.
 * Arrays are treated as digits of big integers.
 */
function add(a: Uint8Array, b: Uint8Array): Uint8Array {
  const width = Math.max(a.length, b.length);
  for (let i = 0; i <= width; ++i) {
    const digit_a = a[i + a.length - width] | 0;
    const digit_b = b[i + b.length - width] | 0;
  }
  // TODO
  return new Uint8Array();
}
