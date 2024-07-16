const Swiper = {
  initializeSwiper: function (swipeFunction) {
    const { left, right } = swipeFunction;
    this.swipeLeft = function () {
      try {
        left();
      } catch (err) {
        throw err;
      }
    };
    this.swipeRight = function () {
      try {
        right();
      } catch (err) {
        throw err;
      }
    };
  },
};

export default Swiper;
