import type { BaseProps } from '~/models';
import './cta.css';

export default function CTA(props: BaseProps) {
  return <div class="pa-card__cta--container">{props.children}</div>;
}
