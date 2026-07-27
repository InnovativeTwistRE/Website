/**
 * The only package permitted to call an AI model provider directly
 * (Anthropic, OpenAI, or any other), per ADR-0001 and CLAUDE.md 14/18.
 * Domain and UI code call this interface — never a provider SDK directly —
 * so the provider/model stays replaceable and every AI output can carry
 * model/prompt/version metadata as CLAUDE.md 14 requires.
 *
 * No provider is wired yet: concrete implementations arrive in the AI
 * Intelligence phase (CLAUDE.md 27, priority 12).
 */
export interface AIProvider {
  readonly providerName: string;
  readonly modelVersion: string;
  generate(prompt: string): Promise<{
    text: string;
    modelVersion: string;
    promptVersion: string;
  }>;
}
