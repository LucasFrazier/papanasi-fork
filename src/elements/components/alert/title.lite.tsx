import { onMount, Show, useMetadata, useStore } from '@builder.io/mitosis';
import type { TitleProps, TitleState } from './title.model';
import { titleService } from './title.service';
import './title.css';

useMetadata({ isAttachedToShadowDom: true });

export default function Heading(props: TitleProps) {
  const state = useStore<TitleState>({
    loaded: false,
    classes: { base: '' }
  });

  onMount(() => {
    state.loaded = true;
    state.classes = titleService.getClasses(props.variant, props.className);
  });

  return (
    <Show when={state.loaded}>
      <div class={state.classes.base}>{props.children}</div>
    </Show>
  );
}
