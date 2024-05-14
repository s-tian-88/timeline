import { fromEvent } from 'rxjs';
import { pluck, debounceTime, map, filter } from 'rxjs/operators';
import { coordsValidator } from '../../js/services';
import { getCoordsPopupInnerHtml } from './coordsPopupInnerHtml';
import './coordsPopup.css';

export default class CoordsPopup {
  constructor(container) {
    this.container = container;
  }

  render () {
    this.renderUserCoordsWidgetElemnent();
  }

  renderUserCoordsWidgetElemnent () {
    const el = document.createElement('div');
    el.classList.add('coords-popup-widget');
    el.innerHTML = getCoordsPopupInnerHtml();

    this.container.appendChild(el);
    const coordsPopupBtn = el.querySelector('button#coords-popup-btn');

    const coordsInput = el.querySelector('input[type="text"]');
    fromEvent(coordsInput, 'input')
      .pipe (
        pluck('target', 'value'),
        debounceTime(300),
        map(value => coordsValidator(value)),
      )
      .subscribe (
        value => {
          console.log(value);
          coordsPopupBtn.disabled = !value
        }
      );


  }

}
