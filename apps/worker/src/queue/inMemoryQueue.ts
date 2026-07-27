import { randomUUID } from "node:crypto";
import type { Queue, QueueJob } from "./types";

/** Reference implementation used only until a durable queue is wired. */
export class InMemoryQueue implements Queue {
  private jobs: QueueJob[] = [];

  async enqueue<TPayload>(type: string, payload: TPayload): Promise<QueueJob<TPayload>> {
    const job: QueueJob<TPayload> = {
      id: randomUUID(),
      type,
      payload,
      enqueuedAt: new Date().toISOString(),
    };
    this.jobs.push(job as QueueJob);
    return job;
  }

  async dequeue(): Promise<QueueJob | undefined> {
    return this.jobs.shift();
  }

  async ack(_id: string): Promise<void> {
    // No-op for the in-memory reference implementation.
  }
}
