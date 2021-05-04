<template>
  <SWUpdatePopup v-slot="{ enabled, reload }">
    <div v-if="enabled" class="sw-update-popup">
      <button type="button" @click="reload">New version available! Click to refresh</button>
    </div>
  </SWUpdatePopup>
</template>

<script>
import SWUpdatePopup from '@vuepress/plugin-pwa/lib/SWUpdatePopup.vue';

export default {
  components: { SWUpdatePopup }
};
</script>


<style lang="stylus" scoped>
.sw-update-popup
  left: 50%
  transform: translateX(-50%)
  right: auto
  top: auto
  bottom: 2rem
  margin: 0 auto
  color: $backgroundColor
  background: $textColor
  border: 1px solid $backgroundColor
  border-radius: 0

  button
    font-size: inherit
    color: inherit
    background-color: inherit !important
    border: none
    outline: none

    &:hover
      cursor: pointer
      text-decoration: underline


  @media (max-width: $breakpointMobile)
    width: 80%
</style>