import { describe, expect, it } from "vitest";
import { InMemoryQueue } from "./inMemoryQueue";

describe("InMemoryQueue", () => {
  it("enqueues and dequeues in FIFO order", async () => {
    const queue = new InMemoryQueue();
    await queue.enqueue("test", { n: 1 });
    await queue.enqueue("test", { n: 2 });

    const first = await queue.dequeue();
    const second = await queue.dequeue();

    expect(first?.payload).toEqual({ n: 1 });
    expect(second?.payload).toEqual({ n: 2 });
  });

  it("returns undefined when empty", async () => {
    const queue = new InMemoryQueue();
    expect(await queue.dequeue()).toBeUndefined();
  });
});
