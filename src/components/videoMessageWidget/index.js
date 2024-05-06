import { getVideoMessageWidgetInnerHtml } from './videoMessageWidgetHtml';
import './videoMessageWidget.css';

export default class VideoMessageWidget {
  constructor(container) {
    if (!(container instanceof HTMLElement)) {
      throw new Error(`${container} is not HTMLelement`);
    }

    this.container = container;

    this.videoMessageBtnOnClick = this.videoMessageBtnOnClick.bind(this);
    this.startStream = this.startStream.bind(this);
    this.resetRecorderBtnOnClick = this.resetRecorderBtnOnClick.bind(this);

    const videoMessageBtn = document.querySelector('button#video-message-btn');

    videoMessageBtn.addEventListener('click', this.videoMessageBtnOnClick);
    videoMessageBtn.addEventListener('click', this.startStream);
  }

  render () {
    this.renderVideoMessageWidgetElement();
  }

  renderVideoMessageWidgetElement () {
    const el = document.createElement('div');
    el.classList.add('video-message-widget');
    el.innerHTML = getVideoMessageWidgetInnerHtml();

    this.container.appendChild(el);

    el.querySelector('video#recorder').style.display = 'none';

    const startRecorderBtn = el.querySelector('button#start');
    const resetRecorderBtn = el.querySelector('button#reset');

    startRecorderBtn.addEventListener('click', this.startRecorderBtnOnClick);
    resetRecorderBtn.addEventListener('click', this.resetRecorderBtnOnClick);
  }

  videoMessageBtnOnClick (e) {

    const enableWidget = document.querySelector('.enable-widget');
    if ( enableWidget ) {
      enableWidget.style.opacity = '0';
      enableWidget.classList.remove('enable-widget');
    }

    const videoMessageWidgetEl = document.querySelector('.video-message-widget');
    videoMessageWidgetEl.classList.add('enable-widget');
    document.querySelector('.common-message-widget-info').textContent = 'Video';
    setTimeout(() => {
      videoMessageWidgetEl.style.opacity = '1';
    });

    document.querySelectorAll('.common-widget-btn').forEach((btn) => {
      if ( btn.classList.contains('disabled-btn') ) {
        btn.classList.remove('disabled-btn')
      }
    });

    e.target.classList.add('disabled-btn');
    localStorage.setItem('messageMode', 'video');

  }

  async startStream () {

    let stream

    try {
      stream = await navigator.mediaDevices.getUserMedia({video: true});
    } catch (e) {
      console.log(e);
      return;
    }

    const videoPlayer = document.querySelector('video#gum');
    videoPlayer.srcObject = stream;
    videoPlayer.addEventListener('canplay', () => {
      videoPlayer.play();
    });
  }

  startRecorderBtnOnClick (e) {

    e.target.style.display = 'none'
    const stop = document.querySelector('button#stop');
    stop.style.display = 'block'


    const player = document.querySelector('video#gum');
    const stream = player.srcObject;

    const mediaRecoder = new MediaRecorder(stream);
    const chunks = [];

    mediaRecoder.addEventListener('start', () => {
      console.log('start recording');
    });

    mediaRecoder.addEventListener('dataavailable', (event) => {
      console.log('add data');
      chunks.push(event.data);
    });

    mediaRecoder.addEventListener('stop', () => {
      console.log('stop recording');
      const blob = new Blob(chunks);

      player.style.display = 'none';
      
      const recorder = document.querySelector('video#recorder');
      recorder.style.display = 'block';
      recorder.src = URL.createObjectURL(blob);

    });

    stop.addEventListener('click', () => {

      stop.style.display = 'none';
      document.querySelector('button#start').style.display = 'block';

      mediaRecoder.stop();
    });

    mediaRecoder.start();
  }

  resetRecorderBtnOnClick (e) {
    document.querySelector('video#recorder').style.display = 'none';
    document.querySelector('video#gum').style.display = 'block';
  }

}
