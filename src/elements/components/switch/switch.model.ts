import type { BaseProps, BaseState, Dynamic, Intent, Variant } from '~/models';

export type SwitchProps = {
  variant?: Dynamic<Variant>;
  inputId: string;
  onText: string;
  offText: string;
} & BaseProps; // Extending a type via intersection. See below for BaseProps

// export type BaseProps = {
//   className?: string;
//   class?: string; // Fallback className
//   classList?: string; // Fallback class
//   children?: Children;
// };

export type SwitchState = {
  classes: { base: string };
} & BaseState;

// export type BaseState = {
//   loaded: boolean;
// };
