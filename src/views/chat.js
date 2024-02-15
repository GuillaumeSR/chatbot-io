export default () => (
  `   
    <div class="chat-view">
      <h2 id="chat-title">ChatBØT</h2>
    <div id="chat-container">
      <div class="message bot">
        <img src="https://katana-anime.com/cdn/shop/articles/727e572c1a4503e860f5779c0b72258b_640x.png?v=1654355532" alt="User 1" class="bot-image">
        <p>BONJOUR FDP</p>
      </div>
      <div class="message user">
        <img src="https://i.pinimg.com/736x/d3/01/b6/d301b6d9ee94cee3ce81bb3352c049af.jpg" alt="User 2" class="bot-image">
        <h5>Veldra</h5>
        <p>Aller c'est mute</p>
      </div>
    </div>
    <div id="container">
      <input type="text" id="user-input" placeholder="Un bot vous répondra">
      <button id="send-button" onclick()="onKeyUp()">Send</button></div>
  </div>
  `
);
