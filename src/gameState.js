const gameState = {
  current: "INIT", //piece of state
  clock: 0,
  tick() {
    this.clock++;
    console.log(this.clock);
    return this.clock;
  },
  handleUserAction(icon) {
    console.log(icon);
  },
};

export default gameState;
