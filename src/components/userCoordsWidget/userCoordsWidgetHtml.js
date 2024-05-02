export function getUserCoordsWidget () {
  const html = `
  <div class="user-coords-widget-header">
    User denied Geolocation
  </div>
  <div class="user-coords-widget-message">
    Enter coords or enable location permission!
  </div>
  <div class="user-coords-widget-footer">
    <fieldset>
    <legend>Type your coords here</legend>
    <form class="set-coords-form">
      <input class="set-coords-input" type="text" placeholder="xx.xxxxx, xx.xxxxx">
      <div class="set-coords-form-btns">
        <button class="send user-coords-btn"></button>
        <button class="cancle user-coords-btn"></button>
      </div>
    </form>
    </fieldset>
  </div>
  `

  return html;
}
