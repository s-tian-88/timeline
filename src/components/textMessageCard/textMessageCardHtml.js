export function getTextMessageCardHtml (text, position, created) {
  const html = `
  <div class="text-message-card-header">Text message</div>
  <div class="text-message-card-content">${text}</div>
  <div class="text-message-card-footer">
    <div class="text-message-card-footer-content">
      <span>Date: ${created}</span>
      <span>Position: ${position}</span>
    </div>
    <div class="text-message-card-footer-btns">
      <button class="text-message-card-btn delete"></button>
      <button class="text-message-card-btn like"></button>
      <button class="text-message-card-btn mark"></button>
    </div>
  </div>
  `

  return html;
}
