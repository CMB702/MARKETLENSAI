import { withLambda } from "@netlify/aws-lambda-compat";
import type { Config } from "@netlify/functions";
import serverless from "serverless-http";
import app from "../../artifacts/api-server/dist/app.mjs";

// The API build runs before Netlify bundles this function. Keep every API
// endpoint under /api so the frontend can use the same URL in every deploy.
const apiHandler = serverless(app);

export default withLambda(async (event, context) => apiHandler(event, context));

export const config: Config = {
  path: ["/api", "/api/*"],
};
