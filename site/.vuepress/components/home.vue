<template>
  <div>
    <div style="margin-bottom: 12rem" v-if="timeToStart > 0">
      <center style="font-size: 2rem; font-weight: 700; text-transform: uppercase">
        <timer :time="timeToStart" />
      </center>
    </div>
    <join-button v-else-if="timeToStart < 0 && timeToEnd > 0" />
    <div style="margin-bottom: 12rem; display: flex; justify-content: center; overflow: hidden" v-else>
      <router-link to="leaderboard" style="text-decoration: none">
        <center>
          <img src="finish.svg" alt="Race is over" height="150px" width="auto">
          <h4 style="text-transform: uppercase">
            Check the Leaderboard
          </h4>
        </center>
      </router-link>
    </div>
    <tracks />
  </div>
</template>

<script>
import { events } from '../mixins/remaining-time';

export default {
  data() {
    return {
      startDate: new Date(process.env.CNS_START_DATE),
      endDate: new Date(process.env.CNS_END_DATE),
      timer: null,
      timeToStart: 1,
      timeToEnd: 0
    };
  },
  methods: {
    tick() {
      this.timeToStart = new Date(this.startDate - new Date());
      this.timeToEnd = new Date(this.endDate - new Date());

      events.$emit('tick', {
        timeToStart: this.timeToStart,
        timeToEnd: this.timeToEnd
      });
    }
  },
  mounted() {
    this.timer = setInterval(this.tick, 500);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
};
</script>

<style lang="stylus">
.home
  .theme-default-content
    max-width: $homePageWidth;
    padding: 0;

  .page-title
    font-size: 3.3rem !important;
    padding-top: 20vh !important;

    @media (max-width: $breakpointDesktop) {
      font-size: 1.3rem !important;
    }

  .page-subtitle
    font-size: 1.5rem !important;
    padding-bottom: 3rem;

    @media (max-width: $breakpointDesktop) {
      font-size: 1rem !important;
    }

  .join
    padding-bottom: 10rem;

  .footer
    margin-top: 10rem;
</style>