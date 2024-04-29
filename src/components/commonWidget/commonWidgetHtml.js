export function getCommonWidgetHtml () {
  const html = `
  <div class="widget-info"></div>
  <div class="widget-main"></div>
  <div class="widget-btns">
    <div class="text-btn-container btn-container">
      <input type="radio" id="text-radio-btn" name="widget-radio-btn" value="text">
      <label for="text-radio-btn">
        <i class="fa-regular fa-comment fa-2x"></i>
      </label>
    </div>
    <div class="audio-btn-container btn-container">
      <input type="radio" id="audio-radio-btn" name="widget-radio-btn" value="audio">
      <label for="audio-radio-btn">
        <i class="fa-solid fa-microphone-lines fa-2x"></i>
      </label>
    </div>
    <div class="video-btn-container btn-container">
      <input type="radio" id="video-radio-btn" name="widget-radio-btn" value="video">
      <label for="video-radio-btn">
        <i class="fa-solid fa-film fa-2x"></i>
      </label>
    </div>
  </div>
  `
  return html;
}
