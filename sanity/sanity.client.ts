import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  projectId: "c48j0myz",
  dataset: "production",
  apiVersion: "2025-10-01",
  useCdn: false,
};

const client = createClient(config);

export default client;
