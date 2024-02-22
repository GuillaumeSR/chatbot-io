import viewBotCard from './botcard';

export default (data) => (
  data.map((bot) => viewBotCard(bot)).join('')
);
