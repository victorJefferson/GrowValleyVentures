import { defineCloudflareConfig } from "@opennextjs/cloudflare";

export default defineCloudflareConfig({
	incrementalCache: "dummy",
	images: {
		service: "default",
	},
});
