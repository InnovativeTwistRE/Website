/**
 * Shared contract every calculation module must return, per CLAUDE.md 19.2:
 * result, inputs, assumptions, warnings, formula version, and timestamp.
 *
 * This package only defines the shape formulas conform to. Individual
 * formulas (Cash Flow, Cap Rate, DSCR, WealthScore, etc.) are implemented in
 * the Investor Analysis Tools phase (CLAUDE.md 27), not here — Phase 1 is
 * architecture only.
 */
export interface CalculationResult<TInputs, TResult> {
  result: TResult;
  inputs: TInputs;
  assumptions: Record<string, string | number | boolean>;
  warnings: string[];
  formulaVersion: string;
  calculatedAt: string;
}

export function createCalculationResult<TInputs, TResult>(params: {
  result: TResult;
  inputs: TInputs;
  formulaVersion: string;
  assumptions?: Record<string, string | number | boolean>;
  warnings?: string[];
}): CalculationResult<TInputs, TResult> {
  return {
    result: params.result,
    inputs: params.inputs,
    assumptions: params.assumptions ?? {},
    warnings: params.warnings ?? [],
    formulaVersion: params.formulaVersion,
    calculatedAt: new Date().toISOString(),
  };
}
