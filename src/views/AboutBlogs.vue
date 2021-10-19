<template>
  <dash-BoardLayout>
    <div class="sectionHeight">
      <h1>This is blog details page</h1>
      <p>The blog id is {{ $route.params.id }}</p>
    </div>
  </dash-BoardLayout>
</template>
<script>
import DashBoardLayout from "@/layouts/dashBoardLayout";
//import circleBlogCard from '@/components/circleBlogCard.vue';
export default {
  //props:['id'],
  components: {
    "dash-BoardLayout": DashBoardLayout,
    //'circle-blogCard' : circleBlogCard
  },
  /*mounted() {
        this.fetchData();
    },
    data() {
        return {
        blogs:[]
        };
    },
    methods: {
        async fetchData(){
        const res = await fetch("blogs.json");
        const val = await res.json();
        this.blogs=val;
        console.log(val);
        }
    }*/
};
</script>
<style>
.blogImgViewMore {
  background-image: url("../assets/img/Blog.png");
  background-repeat: no-repeat;
  background-position: center center;
  -webkit-background-size: cover;
  background-size: cover;
  height: calc(60vh);
}
.blogParagraph {
  font-size: 25px !important;
  padding: 1.5rem 0;
}
</style>
