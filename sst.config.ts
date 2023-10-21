import type { SSTConfig } from "sst";
import { RemixSite } from "sst/constructs";
import { Tags } from "aws-cdk-lib";

export default {
  config(_input) {
    return {
      name: "powerrank",
      region: "us-east-1",
    };
  },
  stacks(app) {
    Tags.of(app).add("power-rankings-hackathon", "2023");
    app.stack(function Site({ stack }) {
      const site = new RemixSite(stack, "site");
      stack.addOutputs({
        url: site.url,
      });
    });
  },
} satisfies SSTConfig;
