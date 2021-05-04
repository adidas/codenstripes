<template>
  <div class="theme-container"
      :class="pageClasses"
      @touchstart="onTouchStart"
      @touchend="onTouchEnd"
  >
    <Navbar @toggle-sidebar="toggleSidebar" />

    <div
      class="sidebar-mask"
      @click="toggleSidebar(false)"
    />

    <Sidebar
      :items="sidebarItems"
      @toggle-sidebar="toggleSidebar"
    >
      <template #top>
        <slot name="sidebar-top" />
      </template>
      <template #bottom>
        <slot name="sidebar-bottom" />
      </template>
    </Sidebar>

    <main class="page">

      <div class="theme-default-content">
        <h1 class="page-title" v-if="$frontmatter.pageTitle">{{ $frontmatter.pageTitle }}</h1>
        <p class="page-subtitle" v-if="$frontmatter.pageSubtitle">{{ $frontmatter.pageSubtitle }}</p>

        <Content class="page-content" />
      </div>


      <footer-links />
    </main>
  </div>
</template>

<script>
import Navbar from '@vuepress/theme-default/components/Navbar.vue';
import Sidebar from '@vuepress/theme-default/components/Sidebar.vue';
import { resolveSidebarItems } from '@vuepress/theme-default/util';

export default {
  components: {
    Navbar,
    Sidebar
  },

  data () {
    return {
      isSidebarOpen: false
    }
  },

  computed: {

    sidebarItems () {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      );
    },

    pageClasses() {
      const userPageClass = this.$page.frontmatter.pageClassNames;

      return [
        {
          'sidebar-open': this.isSidebarOpen,
          'no-sidebar': !this.sidebarItems.length
        },
        userPageClass
      ];
    }
  },

  mounted() {
    this.$router.afterEach(() => {
      this.isSidebarOpen = false
    });
  },

  methods: {
    toggleSidebar (to) {
      this.isSidebarOpen = typeof to === 'boolean' ? to : !this.isSidebarOpen;
      this.$emit('toggle-sidebar', this.isSidebarOpen);
    },

    // side swipe
    onTouchStart (e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY
      };
    },

    onTouchEnd (e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x;
      const dy = e.changedTouches[0].clientY - this.touchStart.y;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true);
        } else {
          this.toggleSidebar(false);
        }
      }
    }
  }
};
</script>

<style lang="stylus">
$navbarPaddingHorizontalDesktop = 3rem
$navbarPaddingHorizontalMobile = 1.5rem

.navbar
  padding-left: $navbarPaddingHorizontalDesktop
  padding-right: $navbarPaddingHorizontalDesktop

  @media (max-width: $breakpointDesktop)
    text-align: center

  .logo
    max-width: 5rem

  .links
    right: $navbarPaddingHorizontalDesktop
    padding-left: $navbarPaddingHorizontalDesktop

.page-content
  margin-top: 2rem
</style>