function Timer() {
    let timer = 0;
  
    this.start = () => {
      if (!timer) {
        timer = setInterval(() => {
          timer++;
        }, 1000);
      }
    };
  
    this.stop = () => {
      clearInterval(timer);
      timer = undefined;
    };

    this.getTimeSpent = () => {
        return timer;
    }
  }
  
  export default Timer;
  