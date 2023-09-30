import { onMount, Show, useMetadata, useStore } from '@builder.io/mitosis';
import './slide.css';
import type { SlideProps, SlideState } from './slide.model';
import { slideService } from './slide.service';

useMetadata({ isAttachedToShadowDom: true });

export default function Slide(props: SlideProps) {
  const state = useStore<SlideState>({
    loaded: false,
    classes: { base: '' }
  });

  onMount(() => {
    state.loaded = true;
    state.classes = slideService.getClasses(props.rounded, props.className);
  });

  return (
    <Show when={state.loaded}>
      <div class={`${state.classes.base} ${props.id}-slide`}>{props.children}</div>
    </Show>
  );
}
