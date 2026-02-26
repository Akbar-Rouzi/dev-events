// instrumentation-client.ts
import posthog from "posthog-js";

export function initPosthog() {
  if (typeof window === "undefined") return;            // don't run on server
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  const host = process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "/ingest";

  if (!key) {
    console.warn("PostHog key missing");
    return;
  }

  const isDev = process.env.NODE_ENV === "development";
  const debugFlag = isDev && process.env.NEXT_PUBLIC_POSTHOG_DEBUG !== "false";

  posthog.init(key, {
    api_host: host,
    ui_host: "https://us.posthog.com",
    capture_exceptions: true,
    debug: debugFlag,
  });
}