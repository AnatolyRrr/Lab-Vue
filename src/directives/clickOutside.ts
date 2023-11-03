import type { DirectiveBinding } from 'vue';

interface ExtendedHTMLElement extends HTMLElement {
  clickOutsideHandler: (event: Event) => void;
}

export default {
  mounted(el: ExtendedHTMLElement, binding: DirectiveBinding) {
    el.clickOutsideHandler = (event) => {
      if (!(el === event.target || el.contains(event.target as Node))) {
        binding.value();
      }
    };
    document.body.addEventListener('click', el.clickOutsideHandler);
  },
  unmounted(el: ExtendedHTMLElement) {
    document.body.removeEventListener('click', el.clickOutsideHandler);
  }
};
