// botAnswers(userMessage) {
//   let botAnswer = '';

//   if (userMessage.toLowerCase() === 'ronaldo') {
//     botAnswer = 'Suiiiii';
//   } else if (userMessage.toLowerCase() === 'bonjour') {
//     botAnswer = 'Bonsoir !';
//   } else if (userMessage.toLowerCase() === 'hein ?') {
//     botAnswer = 'Appagnan !';
//   } else if (userMessage.toLowerCase() === 'appagnan') {
//     botAnswer = 'TG';
//   } else {
//     botAnswer = 'Hein ?';
//   }

//   return botAnswer;
// }

// newMessage(content, userType = 'user') {
//   let existingEntries = JSON.parse(localStorage.getItem('messages'));
//   if (existingEntries == null) existingEntries = [];
//   const entry = {
//     content,
//     userType
//   };
//   localStorage.setItem('message', JSON.stringify(entry));

//   existingEntries.push(entry);

//   const botAnswer = this.botAnswers(content);
//   if (botAnswer !== '') {
//     const botEntry = {
//       content: botAnswer,
//       userType: 'bot'
//     };
//     existingEntries.push(botEntry);
//     localStorage.setItem('messages', JSON.stringify(existingEntries));
//   }

//   // if (userType === 'user' && content.toLowerCase() === 'ronaldo') {
//   //   const botAnswer = 'Suiiiiiii';
//   //   const botEntry = {
//   //     content: botAnswer,
//   //     userType: 'bot'
//   //   };
//   //   existingEntries.push(botEntry);
//   //   localStorage.setItem('messages', JSON.stringify(existingEntries));
//   // }

//   this.el.innerHTML = this.render();
//   const elRightSide = document.querySelector('.messages-section');
//   elRightSide.scrollTo(0, elRightSide.scrollHeight);
// }