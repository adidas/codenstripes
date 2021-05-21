<template>
  <footer class="footer">
    <div class="footer__content">
      <div class="footer__col">
        <p><a href="https://adidas.com/" target="_blank" rel="noopener noreferrer">adidas.com<OutboundLink /></a></p>
        <p><a href="https://careers.adidas-group.com/teams/growers/information-technology?locale=en&utm_source=challenge&utm_medium=website&utm_campaign=codenstripes" target="_blank" rel="noopener noreferrer">adidas Careers<OutboundLink /></a></p>
        <p><a href="https://github.com/adidas" target="_blank" rel="noopener noreferrer">adidas GitHub<OutboundLink /></a></p>
      </div>
      <div class="footer__col footer__col--right">
        <p><a href="https://adidas.github.io/legal-notice" target="_blank" rel="noopener noreferrer">adidas GitHub Legal Notice<OutboundLink /></a></p>
        <p><a href="https://adidas.github.io/privacy-notice" target="_blank" rel="noopener noreferrer">adidas GitHub Privacy Notice<OutboundLink /></a></p>
        <p><a href="https://www.adidas-group.com/en/service/imprint/" target="_blank" rel="noopener noreferrer">Imprint<OutboundLink /></a></p>
        <p><a href="mailto:code-n-stripes@adidas.com" rel="noopener noreferrer">Contact</a></p>
      </div>
    </div>
  </footer>
</template>

<script>
import NavLink from '@vuepress/theme-default/components/NavLink.vue';

export default {
  components: {
    NavLink
  }
};
</script>

<style lang="stylus">

.footer
  padding: 1rem 3rem
  border-top: 1px solid white
  text-transform: uppercase


  a
    font-weight: 700 !important


  .footer__content
    display: flex
    flex-direction: row
    margin: 0 auto

    @media (max-width: $breakpointDesktop)
      flex-direction: column-reverse


  .footer__col
    flex: 1
    text-align: left

    @media (max-width: $breakpointDesktop)
      text-align: center !important

    &.footer__col--right
      text-align: right
</style>