import { onMount, Show, useMetadata, useStore, onUpdate } from '@builder.io/mitosis';
import './root.css';
import type { RootProps, RootState } from './root.model';
import { rootService } from './root.service';

useMetadata({ isAttachedToShadowDom: true });

export default function Root(props: RootProps) {
  const state = useStore<RootState>({
    loaded: false,
    classes: { base: '' },
    slideIndex: 0
  });

  onMount(() => {
    state.loaded = true;
    state.classes = rootService.getClasses(props.rounded, props.className);
    setTimeout(() => {
      const slides = document.querySelectorAll(`.${props.id}-slide`);
      slides.forEach((slide, index) => index !== 0 && slide.classList.add('hidden'));
    }, 125);
  });

  onUpdate(() => {
    const slides = document.querySelectorAll(`.${props.id}-slide`);
    const dots = document.querySelectorAll(`.${props.id}-dot`);

    // Slides
    slides.forEach((slide, index) => {
      if (!slide.classList.contains('hidden')) {
        slide.classList.add('hidden');
      }
      if (index === state.slideIndex) {
        slide.classList.remove('hidden');
      }
    });

    // Dots
    dots.forEach((dot, index) => {
      if (dot.classList.contains('pa-slider__dot--active')) {
        dot.classList.remove('pa-slider__dot--active');
      }
      if (index === state.slideIndex) {
        dot.classList.add('pa-slider__dot--active');
      }
    });
  }, [state.slideIndex]);

  function setSlide(num: number) {
    const numChildren = props.children.length;

    if (num != state.slideIndex && num >= 0 && num < numChildren) {
      state.slideIndex = num;
    } else if (num >= numChildren) {
      state.slideIndex = 0;
    } else if (num < 0) {
      state.slideIndex = numChildren - 1;
    }
  }

  return (
    <Show when={state.loaded}>
      <div class={state.classes.base}>
        {/* // Prev // */}
        <a
          class={`pa-slider__prev`}
          onClick={() => setSlide(state.slideIndex - 1)}
          onKeyDown={(event) => event.key === 'Enter' && setSlide(state.slideIndex - 1)}
          tabIndex={0}
        >
          &#10094;
        </a>
        {/* // Slides // */}
        {props.children}
        {/* // Next // */}
        <a
          class={`pa-slider__next`}
          onClick={() => setSlide(state.slideIndex + 1)}
          onKeyDown={(event) => event.key === 'Enter' && setSlide(state.slideIndex + 1)}
          tabIndex={0}
        >
          &#10095;
        </a>
        {/* // Dots // */}
        <div style={{ textAlign: 'center' }}>
          {props.children.map((_, index: number) => (
            <span
              key={index}
              class={`${props.id}-dot ${index === 0 ? 'pa-slider__dot--active' : ''}`}
              onClick={() => setSlide(index)}
              onKeyDown={(event) => event.key === 'Enter' && setSlide(index)}
              tabIndex={0}
            ></span>
          ))}
        </div>
      </div>
    </Show>
  );
}
