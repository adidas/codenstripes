<template>
  <span v-if="time > 0">
    <span v-if="days > 0">{{ days }}d </span>
    {{ hours }}:{{ minutes }}:{{ seconds }}
  </span>
  <span v-else>--:--:--</span>
</template>

<script>

export default {
  props: [ 'time' ],
  computed: {
    days() {
      return Math.floor(this.time / (1000 * 60 * 60 * 24));
    },
    hours() {
      return Math.floor((this.time / (1000 * 60 * 60)) % 24).toString().padStart(2, '0');
    },
    minutes() {
      return Math.floor((this.time / 1000 / 60) % 60).toString().padStart(2, '0');
    },
    seconds() {
      return Math.floor((this.time / 1000) % 60).toString().padStart(2, '0');
    }
  }
};
</script>