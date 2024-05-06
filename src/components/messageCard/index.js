import { getMessageCardInnerHtml } from './messageCardInnerHtml';
import './messageCard.css';

export default class MessageCard {
  constructor(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error(`${container} is not HTMLelement`);
    }

    this.container = container;

    this.sendMessageBtnOnClick = this.sendMessageBtnOnClick.bind(this);
    this.deleteCardBtnOnClick = this.deleteCardBtnOnClick.bind(this);

    document.querySelector('button#send-message-btn').addEventListener('click', this.sendMessageBtnOnClick);
  }

  render () {
    // pass
  }

  renderMessageCardElement (messageMode) {

    const el = document.createElement('div');
    el.classList.add('message-card');

    const userCoords = JSON.parse(localStorage.getItem('userCoordinates'));
    const position = `[${userCoords.lat}], [${userCoords.lon}]`;
    const created = Date.now();

    el.innerHTML = getMessageCardInnerHtml(messageMode, position, created);

    this.container.insertBefore(el, this.container.firstChild);

    el.querySelector('.delete').addEventListener('click', this.deleteCardBtnOnClick);

    return el;
  }

  sendMessageBtnOnClick () {

    const messageMode = localStorage.getItem('messageMode');

    if ( messageMode === 'text' ) {

      const textarea = document.querySelector('.text-message-textarea');

      if (textarea.value) {
        const text = textarea.value
        this.renderMessageCardElement('Text message');

        const contentArea = document.querySelector('.message-card-content');
        contentArea.textContent = text;
        contentArea.style.fontWeight = 'bold';


        textarea.value = '';
        textarea.style.height = 'auto';
      }
    } else if ( messageMode === 'video' ) {

      const recorder = document.querySelector('video#recorder');
      if ( recorder.style.display === 'none' ) {
        return
      }

      const currentCardEl = this.renderMessageCardElement('Video message');
      const contentField = currentCardEl.querySelector('.message-card-content');
      const cardVideo = document.createElement('video');
      cardVideo.id = 'card-video';
      cardVideo.classList.add('message-video');
      cardVideo.setAttribute('controls', true);
      cardVideo.src = recorder.src;

      contentField.appendChild(cardVideo);

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
