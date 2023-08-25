import type { BaseProps } from '~/models';
import './actionBar.css';

export default function ActionBar(props: BaseProps) {
  return <div class={`pa-card__action-bar ${props.className}`}>{props.children}</div>;
}
