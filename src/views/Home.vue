<template>
<dash-BoardLayout>
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
            
            <div>

           
            <b-col class="p-2">
              <a href="/catogaryPage">
                <b-card
                  img-src="../../public/img/Catogary1.png"
                  img-alt="Image"
                  overlay
                  class="catogary"
                  >
                      <div  class="darkenImageCatogary h-100" style="border-radius:10px">
                          <b-row class='h-100' align-v="end">
                              <b-col>
                                  <b-card-text class="text-white"><h3>إستئجار يخت</h3></b-card-text>
                              </b-col>
                          </b-row>
                      </div> 
                  </b-card>
              </a>
          </b-col>
        </div>
        <div>
          <b-col class="p-2">
              <b-card
              img-src="../../public/img/Catogary-2.png"
              img-alt="Image"
              overlay
              class="catogary"
              >
                  <div  class="darkenImageCatogary h-100" style="border-radius:10px">
                      <b-row class='h-100' align-v="end">
                          <b-col>
                              <b-card-text class="text-white"><h3>إستئجار قارب</h3></b-card-text>
                          </b-col>
                      </b-row>
                  </div> 
              </b-card>
          </b-col>
        </div>
        <div>
          <b-col class="p-2">
              <b-card
              img-src="../../public/img/Catogary-4.png"
              img-alt="Image"
              overlay
              class="catogary"
              >
                  <div  class="darkenImageCatogary h-100" style="border-radius:10px">
                      <b-row class='h-100' align-v="end">
                          <b-col>
                              <b-card-text class="text-white"><h3>رحلات بحرية</h3></b-card-text>
                          </b-col>
                      </b-row>
                  </div> 
              </b-card>
          </b-col>
        </div>
        <div>
          <b-col class="p-2">
              <b-card
              img-src="../../public/img/Catogary-3.png"
              img-alt="Image"
              overlay
              class="catogary"
              >
                  <div  class="darkenImageCatogary h-100" style="border-radius:10px">
                      <b-row class='h-100' align-v="end">
                          <b-col>
                              <b-card-text class="text-white"><h3>رحلات صيد</h3></b-card-text>
                          </b-col>
                      </b-row>
                  </div> 
              </b-card>
          </b-col> </div>
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
              <p class="text-justify">حافظت “جزيرة فرسان” جنوب غربي السعودية طيلة الفترة الماضية على مكانتها في أن تكون بقعة من الضوء شاسعة في محيط البحر الأحمر، حين ضمت جزرها الواسعة معالم الدهشة على شواطئها ذات الرمال البيضاء، واحتوت كنوزا من اللؤلؤ في قلب العمق التاريخي الذي تحمله الجزيرة، كما لفتها غابات ... <a class="showAll" href="">إعرف أكثر</a> </p>
              
            </b-col>
          </b-row>   
        </b-container>     
      </section>

      <section class="sectionHeight">
        <b-container class="sectionsPadding">
          <b-row align-h="center" class="py-5">
            <blog-card v-for="blogg in blogs.slice(0,3)" :key="blogg.id" :id="blogg.id" :blogTitle="blogg.blogTitle" :blogImgSrc="blogg.blogImgSrc" :blogDatee="blogg.blogDatee" :blogText="blogg.blogText"></blog-card>
          </b-row>
        </b-container>
        
      </section>

  </b-container>
  </dash-BoardLayout>
</template>

<script>
// @ is an alias to /src
import DashBoardLayout from '@/layouts/dashBoardLayout';
import cover from '@/components/cover.vue';
import sectionHeader from '@/components/sectionHeader.vue';
import blogCards from '@/components/blogCards.vue';

export default {
  name: "Home",
  components: {
    'dash-BoardLayout': DashBoardLayout,
    'cover' : cover,
    'section-header' : sectionHeader,
    'blog-card' : blogCards
    },
  mounted() {
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
  }
  
};
</script>

<style>
</style>