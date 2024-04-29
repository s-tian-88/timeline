export function getCommonWidgetHtml () {
  const html = `
  <div class="widget-info"></div>
  <div class="widget-main"></div>
  <div class="widget-btns">
    <div class="text-btn-container btn-container">
      <input type="radio" id="text-radio-btn" name="widget-radio-btn" value="text">
      <label for="text-radio-btn"></label>
    </div>
    <div class="audio-btn-container btn-container">
      <input type="radio" id="audio-radio-btn" name="widget-radio-btn" value="audio">
      <label for="audio-radio-btn"></label>
    </div>
    <div class="video-btn-container btn-container">
      <input type="radio" id="video-radio-btn" name="widget-radio-btn" value="video">
      <label for="video-radio-btn"></label>
    </div>
  </div>
  `
  return html;
}
