<template>
  <div id="app">
    <div id="nav" >
      <top-header> </top-header>
    </div>
    <router-view />
  </div>
</template>

<script>
import TopHeader from '@/components/TopHeader.vue';
export default {
  components: {
    'top-header' : TopHeader
  }
}
</script>

    TopHeader
<style lang="scss">
@import "~@/assets/scss/vendors/bootstrap-vue/index";
#app {
  font-family: Avenir, Somar, Helvetica, Arial, sans-serif;
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
   background-color:#020111 ;


  a {
    color: white;

    &.router-link-exact-active {
      font-weight: bold;
      color: #5BBAAE;
    }
  }
}
</style>
