export default (data) => {
  const {
    content,
    userType
  } = data;

  return `
  <div id="chat-container">
    <div class="message ${userType}">
      <img src="https://i.pinimg.com/736x/d3/01/b6/d301b6d9ee94cee3ce81bb3352c049af.jpg" alt="User 2" class="bot-image">
      <p>${content}</p>
    </div>
  </div>
  `;
};

// export default () => (`
//   <div id="chat-container">
//     <div class="message user">
//       <img src="https://i.pinimg.com/736x/d3/01/b6/d301b6d9ee94cee3ce81bb3352c049af.jpg" alt="User 2" class="bot-image">
//       <p>test</p>
//     </div>
//   </div>
// `);
