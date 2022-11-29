import type { BaseProps, BaseState, Dynamic, Intent, Variant } from '~/models';

export type PillProps = {
  variant?: Dynamic<Variant>;
  intent?: Dynamic<Intent>;
  disabled?: boolean;
} & BaseProps; // Extending a type via intersection. See below for BaseProps

// export type BaseProps = {
//   className?: string;
//   class?: string; // Fallback className
//   classList?: string; // Fallback class
//   children?: Children;
// };

export type PillState = {
  classes: { base: string };
} & BaseState;

// export type BaseState = {
//   loaded: boolean;
// };
