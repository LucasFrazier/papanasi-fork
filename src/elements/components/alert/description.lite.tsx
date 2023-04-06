import type { BaseProps } from '~/models';
import './description.css';

export default function Description(props: BaseProps) {
  return <div class={`pa-alert__description`}>{props.children}</div>;
}
