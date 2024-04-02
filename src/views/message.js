export default (data) => {
  const {
    content,
    userType
  } = data;

  return `
  <div class="message ${userType}">
    <div class="contentdate">
      <img src="https://i.pinimg.com/736x/d3/01/b6/d301b6d9ee94cee3ce81bb3352c049af.jpg" alt="User 2" class="bot-image">
      <p> 12/06/23 </p>
    </div>
    <p>${content}</p>      
  </div>
  `;
};
