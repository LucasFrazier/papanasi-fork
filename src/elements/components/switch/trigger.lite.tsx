import type { TriggerProps } from './trigger.model';
import './trigger.css';

export default function Trigger(props: TriggerProps) {
  return (
    <span
      class={`switch pa-switch__trigger ${props.rounded ? 'pa__border-radius--' + props.rounded : ''} ${
        props.variant ? 'pa-switch__trigger--' + props.variant : ''
      }`}
    >
      <span
        class={`thumb ${props.rounded ? 'pa__border-radius--' + props.rounded : ''} ${
          props.variant ? 'pa-switch__trigger--' + props.variant : ''
        }`}
      ></span>
    </span>
  );
}
