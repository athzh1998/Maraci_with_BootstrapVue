<template>
<DashBoardLayout>
  <b-container>
    <section>
        <cover></cover>
      </section>


      <section class="sectionHeight">
        <b-container class="sectionsPadding">
          <section-header></section-header>
          <h1>الفئات</h1>
          <a class="showAllHeader" href="">عرض الكل</a>
          <b-row align-h="center" class="py-5">
            <postCard v-for="catogary in Categories" :key="catogary.id" :name="catogary.name" :imgSource="catogary.imgSource"></postCard>
          </b-row>
        </b-container>
          
      </section>


      <section class="grayBG sectionHeight">
        <b-container class="sectionsPadding">
          <section-header></section-header>
          <h1>المدونة</h1>
          <a class="showAllHeader" href="">عرض الكل</a>
          <b-row align-h="center" align-v="center" class="py-5">
            <b-col md='7' sm="12">
              <b-img src="img/Blog.png" fluid alt="Blog image" class="rounded-0"></b-img>
            </b-col>
            <b-col md='5'>
              <h2>جزر فرسان</h2>
              <p class="date">12 Sep 2021</p>
              <p>حافظت “جزيرة فرسان” جنوب غربي السعودية طيلة الفترة الماضية على مكانتها في أن تكون بقعة من الضوء شاسعة في محيط البحر الأحمر، حين ضمت جزرها الواسعة معالم الدهشة على شواطئها ذات الرمال البيضاء، واحتوت كنوزا من اللؤلؤ في قلب العمق التاريخي الذي تحمله الجزيرة، كما لفتها غابات...</p>
              <a class="showAll" href="">إعرف أكثر</a> 
            </b-col>
          </b-row>   
        </b-container>     
      </section>

      <section class="sectionHeight">
        <b-container class="sectionsPadding">
          <b-row align-h="center" class="py-5">
            <blog-card v-for="blogg in blogs.slice(0,3)" :key="blogg.id" :blogTitle="blogg.blogTitle" :blogImgSrc="blogg.blogImgSrc" :blogDatee="blogg.blogDatee" :blogText="blogg.blogText"></blog-card>
          </b-row>
        </b-container>
        
      </section>

  </b-container>
  </DashBoardLayout>
</template>

<script>
// @ is an alias to /src
import DashBoardLayout from '@/layouts/dashBoardLayout';
import post from '@/components/post.vue';
import cover from '@/components/cover.vue';
import sectionHeader from '@/components/sectionHeader.vue';
import blogCards from '@/components/blogCards.vue';

export default {
  name: "Home",
  components: {
    'DashBoardLayout': DashBoardLayout,
    'postCard' : post ,
    'cover' : cover,
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