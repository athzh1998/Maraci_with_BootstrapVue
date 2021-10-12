
<template>
  <div>
    <div id="nav">
      <top-header></top-header>
    </div>
    <div>
    <slot/>
    </div>
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