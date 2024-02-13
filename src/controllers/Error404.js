const Error404 = class {
  constructor() {
    this.el = document.querySelector('#root');

    this.run();
  }

  render() {
    return '';
  }

  run() {
    this.el.innerHTML = this.render();
  }
};

export default Error404;
