<template>
  <b-container>
    <section class="w-100">
      <cover></cover>
    </section>
    <section class="pb-4">
        <section-header></section-header>
        <h1>الفئات</h1>
        <a class="showAllHeader" href="">عرض الكل</a>
        <b-row class="p-4 m-4 d-flex justify-content-center">
        <postCard v-for="catogary in Categories" :key="catogary.id" :name="catogary.name" :imgSource="catogary.imgSource"></postCard>
      </b-row>
    </section>


    <section class="grayBG p-0">
      <section-header></section-header>
      <h1>المدونة</h1>
      <a class="showAllHeader" href="">عرض الكل</a>
      <blog></blog>
    </section>

    <section>
      <b-row align-h="center" class="px-4">
      <blog-card v-for="blogg in blogs" :key="blogg.id" :blogTitle="blogg.blogTitle" :blogImgSrc="blogg.blogImgSrc" :blogDatee="blogg.blogDatee" :blogText="blogg.blogText"></blog-card>
      </b-row>
    </section>

   
    
  </b-container>
</template>

<script>
// @ is an alias to /src


import post from '@/components/post.vue';
import cover from '@/components/cover.vue';
import blog from '@/components/blog.vue';
import sectionHeader from '@/components/sectionHeader.vue';
import blogCards from '@/components/blogCards.vue';

export default {
  name: "Home",
  components: {
    'postCard' : post ,
    'cover' : cover,
    'blog' : blog ,
    'section-header' : sectionHeader,
    'blog-card' : blogCards
    },
  mounted() {
    this.fetchData();
    this.fetchData2();
  },
  data() {
    return {
      Categories: [],
      blogs:[]
    };
  },
  methods: {
    async fetchData(){
      const res = await fetch("catogary.json");
      const val = await res.json();
      this.Categories=val;
      console.log(val);
    },
    async fetchData2(){
      const res = await fetch("blogs.json");
      const val = await res.json();
      this.blogs=val;
      console.log(val);
    }
  }
  
};
</script>

<style>




</style>
