import viewMessage from './message';

// export default (data) => {
//   console.log(data.map((message) => viewMessage(message)).join(''));
// };

export default (data) => (
  data.map((message) => viewMessage(message)).join('')
);
