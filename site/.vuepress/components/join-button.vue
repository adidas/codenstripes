<template>
  <center class="join">
    <glitch />
    <a class="glitch" :href="challengeLink" target="_blank" rel="noopener nofollow">
      <img src="/join-button.svg" alt="Join the challenge" height="100px" width="auto">
    </a>
  </center>
</template>

<script>
import { challengeLink } from '../mixins/challenge-link';

export default {
  mixins: [ challengeLink ]
};
</script>

<style lang="stylus">
.glitch:hover
  filter: url(#glitch)

  @media (hover: none)
    filter: url(#glitch)
</style>