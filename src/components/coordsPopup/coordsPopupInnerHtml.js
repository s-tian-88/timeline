export function getCoordsPopupInnerHtml () {
  const html = `
  <form id="coords-popup-form">
    <label id="coords-popup-label" for="coords-popup-input">
      <b>Что-то пошло не так(</b></br>
      <p>
      К сожалению, нам не удалось определить ваше местоположение,
      пожалуйста, дайте разрешение на использование геолокации,
      либо введите координаты вручную.
      </p>

      Широта и долгота через запятую
    </label>
    <input type="text" placeholder="XX.XXXXX, XX.XXXXX" id="coords-popup-input">
    <button id="coords-popup-btn" disabled>Accept</button>
  </form>
  `

  return html;
}
