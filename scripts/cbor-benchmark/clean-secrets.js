const { SecretsManager, paginateListSecrets } = require("@aws-sdk/client-secrets-manager");

const sm = new SecretsManager({
  region: "us-west-2",
});

(async () => {
  for await (const page of paginateListSecrets({ client: sm }, {})) {
    for (const secret of page.SecretList) {
      if (secret?.Tags?.length === 2) {
        if (secret.Tags[0].Key === "Stage" && secret.Tags[1].Key === "Iteration") {
          await sm.deleteSecret({
            SecretId: secret.Name,
            ForceDeleteWithoutRecovery: true,
          });
          console.log("deleted", secret.Name);
        }
      }
    }
  }
})();
