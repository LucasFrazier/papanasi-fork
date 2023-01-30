import type { BaseProps } from '~/models';
import './section.css';

export default function Section(props: BaseProps) {
  return (
    <div className="pa-secondary-footer__section">
      {props.children}
      {/* <h4>Section Title</h4>
      <ul>
        <li>Link</li>
        <li>Link</li>
        <li>Link</li>
      </ul> */}
    </div>
  );
}
