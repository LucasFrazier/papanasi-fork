import type { BaseProps } from '~/models';
import './media.css';

export default function Media(props: BaseProps) {
  return <div class="pa-card__media--container">{props.children}</div>;
}
