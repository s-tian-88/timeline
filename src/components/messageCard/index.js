import { getMessageCardInnerHtml } from './messageCardInnerHtml';
import './messageCard.css';

import { dateFormatter } from '../../js/services';

export default class MessageCard {
  constructor(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error(`${container} is not HTMLelement`);
    }

    this.container = container;

    this.sendMessageBtnOnClick = this.sendMessageBtnOnClick.bind(this);
    this.deleteCardBtnOnClick = this.deleteCardBtnOnClick.bind(this);
    this.coordsPopupBtnOnClick = this.coordsPopupBtnOnClick.bind(this);

    document.querySelector('button#send-message-btn').addEventListener('click', this.sendMessageBtnOnClick);
    document.querySelector('button#coords-popup-btn').addEventListener('click', this.coordsPopupBtnOnClick);

  }

  render () {
    // pass
  }

  renderMessageCardElement (messageMode, coords) {

    const el = document.createElement('div');
    el.classList.add('message-card');

    const position = `[${coords.latitude}, ${coords.longitude}]`;
    const created = dateFormatter(Date.now());

    el.innerHTML = getMessageCardInnerHtml(messageMode, position, created);

    this.container.insertBefore(el, this.container.firstChild);

    el.querySelector('.delete').addEventListener('click', this.deleteCardBtnOnClick);

    return el;
  }

  sendMessageBtnOnClick () {

    const messageMode = localStorage.getItem('messageMode');

    if (messageMode === 'text' && (!document.querySelector('.text-message-textarea').value)) {
          return;
        }

    if (messageMode === 'video' && (document.querySelector('video#recorder').style.display === 'none')) {
          return;
        }


    if ( localStorage.getItem('coordinates') ) {
      const coords = JSON.parse(localStorage.getItem('coordinates'));
      this.sendMessage(coords);
    } else {
      document.querySelector('.coords-popup-widget').style.display = 'flex';
    }

  }

  coordsPopupBtnOnClick (e) {

    e.preventDefault();

    const [latitde, longitude] = document.querySelector('input#coords-popup-input').value.replaceAll(' ', '').split(',');
    const coords = {
      latitude: latitde,
      longitude: longitude
    }

    e.target.closest('.coords-popup-widget').style.display = 'none';

    this.sendMessage(coords);

  }

  sendMessage (coords) {

    const messageMode = localStorage.getItem('messageMode');


    switch(messageMode) {

      case 'text':

        const textarea = document.querySelector('.text-message-textarea');
        const text = textarea.value

        this.renderMessageCardElement(messageMode.toUpperCase(), coords);

        const contentArea = document.querySelector('.message-card-content');
        contentArea.textContent = text;
        contentArea.style.fontWeight = 'bold';


        textarea.value = '';
        textarea.style.height = 'auto';

        break;
      
      case 'video':

        const recorder = document.querySelector('video#recorder');

        const currentCardEl = this.renderMessageCardElement(messageMode.toUpperCase(), coords);
        const contentField = currentCardEl.querySelector('.message-card-content');
        const cardVideo = document.createElement('video');
        cardVideo.id = 'card-video';
        cardVideo.classList.add('message-video');
        cardVideo.setAttribute('controls', true);
        cardVideo.src = recorder.src;

        contentField.appendChild(cardVideo);

        break;

    }
  }

  deleteCardBtnOnClick (e) {
    const targetCardEl = e.target.closest('.message-card');
    targetCardEl.style.opacity = '0';
    setTimeout(() => {
      targetCardEl.remove()
    }, 500);
  }
}
