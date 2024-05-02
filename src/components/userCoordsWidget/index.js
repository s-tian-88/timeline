import { coordsValidate } from '../../js/validation';

import { getUserCoordsWidget } from './userCoordsWidgetHtml';
import './userCoordsWidget.css';

export default class UserCoordsWidget {
  constructor(container) {
    this.container = container;
  }

  render () {
    this.renderUserCoordsWidgetElemnent();
  }

  renderUserCoordsWidgetElemnent () {
    const el = document.createElement('div');
    el.classList.add('user-coords-widget');
    el.innerHTML = getUserCoordsWidget();

    this.container.appendChild(el);

    el.querySelector('.set-coords-form').addEventListener('submit', this.coordsWidgetOnSubmit);
  }

  coordsWidgetOnSubmit (e) {
    e.preventDefault();
    if (e.submitter.classList.contains('cancle')) {
      alert('Введите координаты или разрешите доступ к геоданным')
    } else {

      const coordsString = e.target.querySelector('.set-coords-input').value;

      const coordsObj = coordsValidate(coordsString);
      if ( coordsObj ) {
        localStorage.setItem('userCoordinates', JSON.stringify(coordsObj));
        e.target.closest('.user-coords-widget').remove();
      }

    }
  }
}
