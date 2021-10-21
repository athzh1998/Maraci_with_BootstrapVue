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
          <a class="showAllLinkInTheSectionHeader" href="">عرض الكل</a>
          <b-row align-h="center" class="py-5">
            <div>
              <b-col class="p-2">
                <a href="/catogaryPage">
                  <b-card
                    img-src="@/assets/img/Catogary1.png"
                    img-alt="Image"
                    overlay
                    class="zoomImg catogary"
                  >
                    <div></div>

                    <div
                      class="darkenImageCatogary h-100"
                      style="border-radius: 10px"
                    >
                      <b-row class="h-100 pb-2" align-v="end">
                        <b-col>
                          <b-card-text class="text-white"
                            ><h3>إستئجار يخت</h3></b-card-text
                          >
                        </b-col>
                      </b-row>
                    </div>
                  </b-card>
                </a>
              </b-col>
            </div>
            <div>
              <b-col class="p-2">
                <a href="/catogaryPage">
                <b-card
                  img-src="@/assets/img/Catogary-2.png"
                  img-alt="Image"
                  overlay
                  class="zoomImg catogary"
                >
                  <div
                    class="darkenImageCatogary h-100"
                    style="border-radius: 10px"
                  >
                    <b-row class="h-100 pb-2" align-v="end">
                      <b-col>
                        <b-card-text class="text-white"
                          ><h3>إستئجار قارب</h3></b-card-text
                        >
                      </b-col>
                    </b-row>
                  </div>
                </b-card>
                </a>
              </b-col>
            </div>
            <div>
              <b-col class="p-2">
                <a href="/catogaryPage">
                <b-card
                  img-src="@/assets/img/Catogary-4.png"
                  img-alt="Image"
                  overlay
                  class="zoomImg catogary"
                >
                  <div
                    class="darkenImageCatogary h-100"
                    style="border-radius: 10px"
                  >
                    <b-row class="h-100 pb-2" align-v="end">
                      <b-col>
                        <b-card-text class="text-white"
                          ><h3>رحلات بحرية</h3></b-card-text
                        >
                      </b-col>
                    </b-row>
                  </div>
                </b-card>
                </a>
              </b-col>
            </div>
            <div>
              <b-col class="p-2">
                <a href="/catogaryPage">
                  <b-card
                    img-src="@/assets/img/Catogary-3.png"
                    img-alt="Image"
                    overlay
                    class="zoomImg catogary"
                  >
                    <div
                      class="darkenImageCatogary h-100"
                      style="border-radius: 10px"
                    >
                      <b-row class="h-100 pb-2" align-v="end">
                        <b-col>
                          <b-card-text class="text-white"
                            ><h3>رحلات صيد</h3></b-card-text
                          >
                        </b-col>
                      </b-row>
                    </div>
                  </b-card>
                </a>
              </b-col>
            </div>
          </b-row>
        </b-container>
      </section>

      <section class="grayBG sectionHeight">
        <b-container class="sectionsPadding">
          <section-header></section-header>
          <h1>المدونة</h1>
          <a class="showAllLinkInTheSectionHeader" href="">عرض الكل</a>
          <b-row align-h="center" align-v="center" class="py-5">
            <b-col md="7" sm="12">
              <b-img
                src="@/assets/img/Blog.png"
                fluid
                alt="Blog image"
                class="rounded-0"
              ></b-img>
            </b-col>
            <b-col md="5">
              <h2 class="text-left">جزر فرسان</h2>
              <p class="date text-left">12 Sep 2021</p>
              <p class="text-justify">
                حافظت “جزيرة فرسان” جنوب غربي السعودية طيلة الفترة الماضية على
                مكانتها في أن تكون بقعة من الضوء شاسعة في محيط البحر الأحمر، حين
                ضمت جزرها الواسعة معالم الدهشة على شواطئها ذات الرمال البيضاء،
                واحتوت كنوزا من اللؤلؤ في قلب العمق التاريخي الذي تحمله الجزيرة،
                كما لفتها غابات ...
                <a class="showAllLinkIntTheBlogs" href="">إعرف أكثر</a>
              </p>
            </b-col>
          </b-row>
        </b-container>
      </section>

      <section class="sectionHeight">
        <div v-if="blogs.length" class="sectionsPadding">
          <b-row align-h="center" class="py-5">
            <b-col
              md="4"
              class="pb-4"
              v-for="blog in blogs.slice(0, 3)"
              :key="blog.id"
            >
              <blog-card
                :id="blog.id"
                :blogTitle="blog.blogTitle"
                :blogDatee="blog.blogDatee"
                :blogText="blog.blogText"
                :blogImgSrc="blog.blogImgSrc"
              >
              </blog-card>
            </b-col>
          </b-row>
        </div>
      </section>
    </b-container>
  </dash-BoardLayout>
</template>

<script>
// @ is an alias to /src
import DashBoardLayout from "@/layouts/dashBoardLayout";
import cover from "@/components/cover.vue";
import sectionHeader from "@/components/sectionHeader.vue";
import blogCards from "@/components/blogCards.vue";

export default {
  name: "Home",
  components: {
    "dash-BoardLayout": DashBoardLayout,
    cover: cover,
    "section-header": sectionHeader,
    "blog-card": blogCards,
  },
  data: function () {
    return {
      blogs: [
        {
          id: 1,
          blogTitle: "جزر فرسان",
          blogDatee: "1 صفر 1443",
          blogText:
            "حافظت “جزيرة فرسان” جنوب غربي السعودية طيلة الفترة الماضية على مكانتها في أن تكون بقعة من الضوء شاسعة في محيط البحر الأحمر، حين ضمت جزرها الواسعة معالم الدهشة على شواطئها ذات الرمال البيضاء، واحتوت كنوزا من اللؤلؤ في قلب العمق التاريخي الذي تحمله الجزيرة، كما لفتها غابات  هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق. طقس جزيرة فرسان هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.حافظت “جزيرة فرسان” جنوب غربي السعودية طيلة الفترة الماضية على مكانتها في أن تكون بقعة من الضوء شاسعة في محيط البحر الأحمر، حين ضمت جزرها الواسعة معالم الدهشة على شواطئها ذات الرمال البيضاء، واحتوت كنوزا من اللؤلؤ في قلب العمق التاريخي الذي تحمله الجزيرة، كما لفتها غابات ",
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
  /*mounted(){
    fetch('http://localhost:3000/blogs')
    .then(res => res.json)
    .then(data => this.blogs = data)
    .catch(err => console.log(err.message))
  }*/
};
</script>

<style>
.darkenImageCatogary {
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 30%,
    rgba(0, 0, 0, 1)
  );
}
</style>
