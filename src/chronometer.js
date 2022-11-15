class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId = null;
  }

  start(printTimeCallback) {
      this.intervalId = setInterval(() => {
      this.currentTime += 1;
      if (printTimeCallback !== undefined) {
        printTimeCallback()
      }
    }, 1000);
  }

  getMinutes() {
    const minutesPassed = Math.floor(this.currentTime / 60)
    return minutesPassed
  }

  getSeconds() {
    const secAfterMinut = this.currentTime % 60
    return secAfterMinut
  }

  computeTwoDigitNumber(value) {
    if (value <= 9) {
      return String(value).padStart(2, '0');
    } else {return String(value)}
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.currentTime = 0;
  }

  split() {
    const seconds = this.computeTwoDigitNumber(this.getSeconds());
    const minutes = this.computeTwoDigitNumber(this.getMinutes());
    return `"${minutes}mm:${seconds}ss"`
  }
}
