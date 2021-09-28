<template>
  <b-container>
    <cover></cover>
    <section>
        <img src="../../public/img/sectionHeader2.png" alt="Header">
        <br>
        <br>
        <h1>الفئات</h1>
          <a class="showAll" href="">عرض الكل</a>
        <b-row class="p-4 d-flex justify-content-center">
        <postCard v-for="catogary in Categories" :key="catogary.id" :name="catogary.name" :imgSource="catogary.imgSource"></postCard>
      </b-row>

      
    </section>
    
  </b-container>
</template>

<script>
// @ is an alias to /src

import post from '@/components/post.vue';
import cover from '@/components/cover.vue';
import sectionHeader from '@/components/sectionStart.vue';

export default {
  name: "Home",
  components: {
    'postCard' : post ,
    'cover' : cover,
    'section-header' : sectionHeader
    },
  mounted() {
    this.fetchData();
  },
  data() {
    return {
      Categories: []
    };
  },
  methods: {
    async fetchData(){
      const res = await fetch("catogary.json");
      const val = await res.json();
      this.Categories=val;
      console.log(val);
    }
  }
};
</script>

<style>




</style>
