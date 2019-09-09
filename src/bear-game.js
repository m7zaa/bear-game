// Back-end
export class HungryBear {

  constructor(name) {
    this.name = name;
    this.foodLevel = 10;
  }

  setHunger() {
    setInterval(() => {
      this.foodLevel--;
    }, 1000);
  }
  didYouGetEaten() {
    if (this.foodLevel > 0) {
      return false;
    } else {
      return true;
    }
  }

  feed() {
    if (this.foodLevel < 1) {
      return false;
    } else {
      this.foodLevel = 10;
      return true;
    }
  }
  showEaten() {
    if (this.foodlevel < 1) {
      console.log("showEaten");
    }
  }

}
