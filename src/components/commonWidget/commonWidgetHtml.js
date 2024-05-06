export function getCommonWidgetHtml () {
  const html = `
  <div class="common-message-widget-info"></div>
  <div class="common-message-widget-main"></div>
  
  <div class="common-widget-btns">
    <button id="send-message-btn" class="common-widget-btn disabled-btn"></button>
    <button id="text-message-btn" class="common-widget-btn"></button>
    <button id="audio-message-btn" class="common-widget-btn"></button>
    <button id="video-message-btn" class="common-widget-btn"></button>
  </div>
  `
  return html;
}
