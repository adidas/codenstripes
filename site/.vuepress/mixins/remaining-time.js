import Vue from 'vue';

export const events = new Vue();

export const remainingTime = {
  data() {
    return {
      timeToStart: 1,
      timeToEnd: 1,
      tickCb: null
    };
  },
  methods: {
    setRemainingTime({ timeToStart, timeToEnd }) {
      this.timeToStart = timeToStart;
      this.timeToEnd = timeToEnd;
    }
  },
  mounted() {
    this.tickCb = this.setRemainingTime.bind(this);
    events.$on('tick', this.tickCb);
  },
  beforeDestroy() {
    events.$off('tick', this.tickCb);
  }
};
