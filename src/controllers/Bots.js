const Bots = class {
  constructor(params) {
    this.el = document.querySelector('#root');
    this.params = params;

    this.run();
  }

  render() {
    return `
    <h1>Oooh, les belles lucioles !</h1>
    `;
  }

  run() {
    this.el.innerHTML = this.render();
  }
};

export default Bots;
