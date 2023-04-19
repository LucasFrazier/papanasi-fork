import type { BaseProps } from '~/models';
import './root.css';

export default function Root(props: BaseProps) {
  return (
    <div class="pa-tooltip__root" tabIndex={0}>
      {props.children}
    </div>
  );
}
