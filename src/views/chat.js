import viewListMessages from './list-message';

export default (data) => (
  `
    <div class="chat-view">
      <h2 id="chat-title">ChatBØT</h2>
      ${viewListMessages(data)}
    <div id="container">
      <input type="text" id="user-input" placeholder="Un bot vous répondra">
      <button id="send-button" onclick()="onKeyUp()">Send</button></div>
  </div>
  `
);

// export default (data) => {
//   console.log(data);
// };
