import viewNav from '../views/nav';
import dataBots from '../data/entities';
import viewListBotCard from '../views/list-botcards';

const Bots = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;

    this.run();
  }

  render() {
    return (`
    <div>${viewNav()}</div>
    <div class="container">
      <div class="row">
        ${viewListBotCard(dataBots)}
      </div>
    </div>
    `);
  }

  run() {
    this.el.innerHTML = this.render();
  }
};

export default Bots;
