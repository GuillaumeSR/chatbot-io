import viewListMessages from './list-message';

export default (data) => (
  `
    <div class="chat-view">
      <div id="chat-container">
        ${viewListMessages(data)}
      </div>
    <div id="container">
      <input type="text" id="user-input" placeholder="Un bot vous répondra">
      <button id="send-button" onclick()="onKeyUp()">Send</button></div>
  </div>
  `
);

// export default (data) => {
//   console.log(data);
// };
