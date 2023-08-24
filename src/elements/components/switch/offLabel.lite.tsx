import './offLabel.css';
import type { BaseProps } from '~/models';

export default function OffLabel(props: BaseProps) {
  return <div class={`off-label ${props.className}`}>{props.children}</div>;
}
