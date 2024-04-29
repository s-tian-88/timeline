import { getCommonWidgetHtml } from './commonWidgetHtml';
import './commonWidget.css';

export default class CommonWidget {
  constructor (container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error(`${container} is not HTMLElement`);
    }

    this.container = container;

    this.radioBtnOnChange = this.radioBtnOnChange.bind(this);
  }

  render () {
    this.renderCommonWidgetElement();
  }

  renderCommonWidgetElement () {
    const el = document.createElement('div');
    el.classList.add('widget');
    el.innerHTML = getCommonWidgetHtml();

    this.container.appendChild(el);

    const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach((rad) => {
      rad.addEventListener('change', this.radioBtnOnChange);
    });
  }

  radioBtnOnChange (e) {
    const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach((rad) => {
      if (e.target.value === rad.value) {
        rad.parentElement.classList.add('radio-btn-checked');
      } else {
        rad.parentElement.classList.remove('radio-btn-checked');
      }
    });
  }

}
