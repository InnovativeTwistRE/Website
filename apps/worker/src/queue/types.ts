export interface QueueJob<TPayload = unknown> {
  id: string;
  type: string;
  payload: TPayload;
  enqueuedAt: string;
}

/**
 * Queue abstraction so the provider can change later (ADR-0001). Phase 1
 * ships only the in-memory reference implementation below. The durable
 * implementation (Postgres-backed initially, per ADR-0001) is wired once the
 * worker has real jobs to run — that needs schema decisions that belong to
 * a later phase, not this scaffold.
 */
export interface Queue {
  enqueue<TPayload>(type: string, payload: TPayload): Promise<QueueJob<TPayload>>;
  dequeue(): Promise<QueueJob | undefined>;
  ack(id: string): Promise<void>;
}
