export class Clock {
  constructor({ template }) {
    this.template = template;
  }

  render() {
    let date = new Date();
    const hours = correctNumber(date.getHours());
    const minutes = correctNumber(date.getMinutes());
    const seconds = correctNumber(date.getSeconds());

    console.log(getFormattedOutput(this.template));

    function correctNumber(number) {
      return number < 10 ? "0" + number : number;
    }

    function getFormattedOutput(template) {
      return template
        .replace("h", hours)
        .replace("m", minutes)
        .replace("s", seconds);
    }
  }

  stop() {
    clearInterval(this.timer);
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }
}
