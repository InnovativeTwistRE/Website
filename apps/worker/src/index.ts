import { loadEnv } from "@innovative-twist/config";
import { InMemoryQueue } from "./queue";

/**
 * apps/worker entrypoint — a real, independently deployable Node.js process,
 * not a Vercel serverless function (ADR-0001). Phase 1 only proves the
 * process starts, loads its environment, and can talk to the queue
 * abstraction; actual job handlers arrive with the phases that need them.
 */
async function main() {
  const env = loadEnv();
  const queue = new InMemoryQueue();

  console.log(`[worker] starting, database configured: ${Boolean(env.DATABASE_URL)}`);

  await queue.enqueue("noop", {});
  const job = await queue.dequeue();
  console.log(`[worker] processed placeholder job ${job?.id ?? "none"}`);
}

main().catch((error) => {
  console.error("[worker] fatal error", error);
  process.exitCode = 1;
});
