import viewBot from './bot';

export default (data) => (
  `<div class="bot-view">
    <div class="list-group list-group-numbered">
      ${data.map((bot) => viewBot(bot)).join('')}
    </div>
  </div>`
);
