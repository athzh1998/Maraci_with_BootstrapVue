<template>
    <div class="sectionsPadding">
        <section-header></section-header>
        <h1>المدونة</h1>
        <b-row align-h="center">
        <b-col md='10' class="text-dark pb-5"> 
            <h5 class="px-2">
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
            </h5>
        </b-col>
        </b-row>

        <b-row align-h="center" class="py-5">
            <blog-card v-for="blogg in blogs" :key="blogg.id" :blogTitle="blogg.blogTitle" :blogImgSrc="blogg.blogImgSrc" :blogDatee="blogg.blogDatee" :blogText="blogg.blogText"></blog-card>
          </b-row>

    </div>
</template>

<script>
import sectionHeader from '@/components/sectionHeader.vue';
import blogCards from '@/components/blogCards.vue';


export default {
  name: "Blogs",
  components: {
    'section-header' : sectionHeader,
    'blog-card' : blogCards
    },

    mounted() {
    this.fetchData2();
  },
    data() {
    return {
      blogs:[]
    };
  },

    methods:{
        async fetchData2(){
      const res = await fetch("blogs.json");
      const val = await res.json();
      this.blogs=val;
      console.log(val);
    }
    }
}
</script>
<style>

</style>
