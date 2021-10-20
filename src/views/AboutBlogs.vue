<template>
  <dash-BoardLayout>
    <div class="blogImgViewMore d-flex my-auto">
      <div class="m-auto">
        <h3 style="font-size: 60px">{{ $route.params.blogTitle }}</h3>
        <p class="text-white">{{ $route.params.blogDatee }}</p>
      </div>
    </div>
    <div class="sectionsPadding">
      <b-row>
        <b-col md="8">
          <p class="text-justify my-5" style="font-size: 30px">
            {{ $route.params.blogText }}
          </p>
        </b-col>
        <b-col md="4"
          ><h2 class="pt-5 px-4 pb-3 text-left">اقرأ أكثر عن</h2>
          <b-row align-h="center" class="pb-4">
            <b-col
              md="10"
              class="my-3"
              v-for="blog in blogs.slice(0, 2)"
              :key="blog.id"
            >
              <blogCards
                :id="blog.id"
                :blogTitle="blog.blogTitle"
                :blogDatee="blog.blogDatee"
                :blogText="blog.blogText"
                :blogImgSrc="blog.blogImgSrc"
              >
              </blogCards>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>
  </dash-BoardLayout>
</template>
<script>
import DashBoardLayout from "@/layouts/dashBoardLayout";
import blogCards from "@/components/blogCards.vue";
export default {
  props: ["id", "blogTitle", "blogDatee", "blogText"],
  components: {
    "dash-BoardLayout": DashBoardLayout,
    blogCards: blogCards,
  },
  data: function () {
    return {
      blogs: [
        {
          id: 1,
          blogTitle: "جزر فرسان",
          blogDatee: "1 صفر 1443",
          blogText:
            "حافظت “جزيرة فرسان” جنوب غربي السعودية طيلة الفترة الماضية على مكانتها في أن تكون بقعة من الضوء شاسعة في محيط البحر الأحمر، حين ضمت جزرها الواسعة معالم الدهشة على شواطئها ذات الرمال البيضاء، واحتوت كنوزا من اللؤلؤ في قلب العمق التاريخي الذي تحمله الجزيرة، كما لفتها غابات.  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. طقس جزيرة فرسان هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى. إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.حافظت “جزيرة فرسان” جنوب غربي السعودية طيلة الفترة الماضية على مكانتها في أن تكون بقعة من الضوء شاسعة في محيط البحر الأحمر، حين ضمت جزرها الواسعة معالم الدهشة على شواطئها ذات الرمال البيضاء، واحتوت كنوزا من اللؤلؤ في قلب العمق التاريخي الذي تحمله الجزيرة، كما لفتها غابات .",
          blogImgSrc: "blog1.png",
        },
        {
          id: 2,
          blogTitle: "العنوان الثاني",
          blogDatee: "25 جمادى الأول 1442",
          blogText:
            "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف إضافة إلى زيادة عدد الحروف إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
          blogImgSrc: "blog2.png",
        },
        {
          id: 3,
          blogTitle: "العنوان الثالث",
          blogDatee: "14 رمضان 1440",
          blogText:
            "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف إضافة إلى زيادة عدد الحروف إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
          blogImgSrc: "blog3.png",
        },
        {
          id: 4,
          blogTitle: "العنوان الرابع",
          blogDatee: "14 رمضان 1440",
          blogText:
            "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف إضافة إلى زيادة عدد الحروف إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
          blogImgSrc: "blog3.png",
        },
        {
          id: 5,
          blogTitle: "العنوان الخامس",
          blogDatee: "14 رمضان 1440",
          blogText:
            "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف إضافة إلى زيادة عدد الحروف إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
          blogImgSrc: "blog1.png",
        },
        {
          id: 6,
          blogTitle: "العنوان السادس",
          blogDatee: "14 رمضان 1440",
          blogText:
            "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف إضافة إلى زيادة عدد الحروف إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
          blogImgSrc: "blog2.png",
        },
      ],
    };
  },
  filters: {
    newling: function (v) {
      return v.split(".");
    },
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
  text-align: center;
  background-size: cover;
  height: calc(60vh);
}
.blogParagraph {
  font-size: 25px !important;
  padding: 1.5rem 0;
}
</style>
