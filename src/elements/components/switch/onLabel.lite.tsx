import './onLabel.css';
import type { BaseProps } from '~/models';

export default function OnLabel(props: BaseProps) {
  return <div class={`on-label ${props.className}`}>{props.children}</div>;
}
