import { useStore } from '@builder.io/mitosis';
import type { BaseProps } from '~/models';
import './trigger.css';

export default function Trigger(props: BaseProps) {
  const state = useStore({
    toggleSidebar() {
      // const sidebarRoot = document.querySelector('.pa-sidebar__root');
      const layout = document.querySelector('.layout');

      if (layout.classList.contains('sidebar-closed')) {
        // sidebarRoot.classList.remove('pa-sidebar__root--hide');
        layout.classList.remove('sidebar-closed');
      } else {
        // sidebarRoot.classList.add('pa-sidebar__root--hide');
        layout.classList.add('sidebar-closed');
      }
    }
  });

  return (
    <div class="pa-sidebar__trigger" onClick={() => state.toggleSidebar()}>
      {props.children}
    </div>
  );
}
