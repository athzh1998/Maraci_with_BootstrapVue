<template>
  <div id="app" class="rtl">
    <div id="nav">
      <top-header></top-header>
    </div>
    <router-view />
    <div>
      <my-footer></my-footer>
    </div>
  </div>
</template>

<script>
import TopHeader from "@/components/TopHeader.vue";
import myFooter from '@/components/myFooter.vue';

export default {
  components: {
    'top-header':TopHeader,
    'my-footer' : myFooter
  },
};
</script>


<style lang="scss">
@import "~@/assets/scss/vendors/bootstrap-vue/index";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  .container {
    max-width: 100%;
  }
}

#nav {
  padding: 0;
  background-color: #020111;

  a {
    color: white;

    &.router-link-exact-active {
      font-weight: bold;
      color: #5bbaae;
    }
  }
}
</style>
