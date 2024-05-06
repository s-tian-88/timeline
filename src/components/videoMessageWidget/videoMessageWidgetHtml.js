export function getVideoMessageWidgetInnerHtml () {
  const html = `
  <div class="video-container">
    <video id="gum" playsline autoplay muted></video>
    <video id="recorder" playsline controls loop></video>
  </div>
  <div class="video-message-widget-btns">
    <button id="reset" class="video-message-widget-btn"></button>
    <button id="stop" class="video-message-widget-btn"></button>
    <button id="start" class="video-message-widget-btn"></button>
  </div>

  `

  return html;
}
