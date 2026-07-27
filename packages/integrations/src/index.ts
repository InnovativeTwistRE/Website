/**
 * Every external vendor (MLS/IDX, CRM, mapping, email, SMS, payments, etc.)
 * is accessed through an adapter implementing this interface — core domain
 * objects are never coupled directly to a vendor-specific schema, per
 * CLAUDE.md 18 and ADR-0001. Concrete adapters (MLS, Propertyware, BoldTrail,
 * etc.) are implemented in the Advanced Integrations phase (CLAUDE.md 27).
 */
export interface IntegrationAdapter<TConfig, TClient> {
  readonly providerName: string;
  connect(config: TConfig): Promise<TClient>;
}
