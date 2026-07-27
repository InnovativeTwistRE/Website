import { z } from "zod";

/**
 * Decimal-safe money representation. Money is always a string
 * (e.g. "1234.56"), never a JS number — floating point is not decimal-safe
 * and CLAUDE.md 19.2 / database.md both require decimal-safe handling.
 */
export const MoneySchema = z.object({
  amount: z
    .string()
    .regex(/^-?\d+(\.\d{1,2})?$/, "amount must be a decimal string with up to 2 decimal places"),
  currency: z.string().length(3).default("USD"),
});
export type Money = z.infer<typeof MoneySchema>;

/** Standard entity identifier shape used across shared schemas. */
export const EntityIdSchema = z.string().uuid();
export type EntityId = z.infer<typeof EntityIdSchema>;
