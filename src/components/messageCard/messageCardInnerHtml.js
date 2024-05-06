export function getMessageCardInnerHtml (messageMode, position, created) {
  const html = `
  <div class="message-card-header">${messageMode}</div>
  <div class="message-card-content"></div>
  <div class="message-card-footer">
    <div class="message-card-footer-content">
      <span>Date: ${created}</span>
      <span>Position: ${position}</span>
    </div>
    <div class="message-card-footer-btns">
      <button class="message-card-btn delete"></button>
      <button class="message-card-btn like"></button>
      <button class="message-card-btn mark"></button>
    </div>
  </div>
  `

  return html;
}
