const { SecretsManager, paginateListSecrets } = require("@aws-sdk/client-secrets-manager");

const sm = new SecretsManager({
  region: "us-west-2",
});

const batch = [];

module.exports = (async () => {
  for await (const page of paginateListSecrets({ client: sm }, {})) {
    for (const secret of page.SecretList) {
      if (secret?.Tags?.length === 2) {
        if (secret.Tags[0].Key === "Stage" && secret.Tags[1].Key === "Iteration") {
          batch.push(
            sm.deleteSecret({
              SecretId: secret.Name,
              ForceDeleteWithoutRecovery: true,
            })
          );
          if (batch.length >= 6) {
            batch.push(new Promise((r) => setTimeout(r, 500)));
            await Promise.all(batch);
            batch.length = 0;
          }
          console.log("deleted", secret.Name);
        }
      }
    }
  }
  await Promise.all(batch);
})();
