import viewMessage from './message';

export default (data) => (
  data.map((message) => viewMessage(message)).join('')
);
