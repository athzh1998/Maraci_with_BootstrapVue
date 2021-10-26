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
          <br>
          <div class="text-justify mt-5" v-for="(blogT, index) in $route.params.blogText" :key="index">
            <h4 style="font-size: 30px">
              {{ blogT.title +" "}}
            </h4>
            <p style="font-size: 25px">
              {{blogT.text +" "}}
            </p>
          </div>

          <swiper class="swiper mb-5 " :options="swiperOption2">
            <swiper-slide class="swiper-slide-style" v-for="image in $route.params.blogImgSrc" :key="image">
              <b-img class="blogCursol" :src="getImgUrl(image)" fluid :alt="$route.params.blogTitle"></b-img>
              </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
            <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
          </swiper>

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
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

import DashBoardLayout from "@/layouts/dashBoardLayout";
import blogCards from "@/components/blogCards.vue";
export default {
  props: ["id", "blogTitle", "blogDatee", "blogText","blogImgSrc"],
  components: {
    "dash-BoardLayout": DashBoardLayout,
    blogCards: blogCards,
      Swiper,
      SwiperSlide,
  },
  data: function () {
    return {
       swiperOption2: {
          // Enable lazy loading
          lazy: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        },
       blogs: [
        {
          id: 1,
          blogTitle: "أملج",
          blogDatee: "26 اكتوبر 2021",
          blogText: [
            {
              title: 'أين تقع أملج',
              text: 'تقع مدينة أملج في الجهة الغربيّة من المملكة العربية السعودية  على ساحل البحر الأحمر .'
            },
            {
              title: 'كيفية الوصول إلى "أملج"',
              text: 'يمكنك الوصول إلى أملج بالسيارة.'
            },
            {
              title: '"أملج" : من مسمى المدينة البيضاء إلى مسمى الحوراء إلى مسمى أملج"',
              text: 'تُعد أملج محافظة من محافظات منطقة تبوك تقع على ساحل البحر الأحمر بين مدينة الوجه شمالًا ومدينة ينبع جنوبًا، وتبعد عن مدينة تبوك بحوالي 500 كيلومتراً.'
            },
            {
              title: '',
              text: 'تكتسب أملج موقعًا مميزًا أكسبها أهمية كبيرة حيث تُعد جزر أملج إحدى أهم الوجهات في المملكة العربية السعودية المميزة بأكثر من 100 جزيرة، تقع شواطئ أملج الرملية على ساحل البحر الأحمر، تحتضن أملج وجهة سياحية تزخر بالجمال، رمالٍ ناصعة البياض، وشواطئ فيروزية، و الشعب المرجانية، والدلافين، والمحميات الطبيعية التي تزورها الطيور المهاجرة، أشجار النخيل وأشجار المانجو'
            }
            ,
            {
              title: '',
              text: 'يمكنك الاستمتاع بالعديد من التجارب المبهرة، والمناظر الخلابة من على متن قارب أو من خلال المشي على أطراف شواطئها الساحرة، أو التعرف على مجموعة متنوعة من الحياة البحرية عند الغوص. '
            },
            {
              title: 'ملاحظة:',
              text: 'الصور من تصوير الزوّار'
            }
          ],
          blogImgSrc: ["amlj3.jpeg", "amlj2.jpeg", "amlj1.jpeg","amlj4.jpeg","amlj5.jpeg","amlj6.jpeg",]
        },
        {
          id: 2,
          blogTitle: "شاطئ السيف",
          blogDatee: "27 اكتوبر 2021",
          blogText: [
            {
              title: 'أين يقع "شاطئ السيف" ',
              text: 'يقع شاطئ السيف في مدينة جدة على الشاطئ الجنوبي مجاورٍ للبحر الأحمر.'
            },
            {
              title: 'كيفية الوصول إلى "شاطئ السيف"',
              text: 'يمكنك الوصول إلى شاطئ السيف بالسيارة.'
            },
            {
              title: '"شاطئ السيف"',
              text: 'يشتهر شاطئ السيف بصفاء الشاطئ، وطبيعته الساحرة، و أجواءه الخلابة بالإضافة إلى المساحات الخضراء، والجلسات الخرسانية، والمظلات، ومناطق لعب الأطفال وعددٍ من المميزات تمنح الزوّار الراحة.'
            },
            {
              title: '',
              text: 'فالرحلة إلى شاطئ السيف مختلفة تمامًا؛ إذ كنت تبحث عن مكان مميز لقضاء عطلة نهاية الأسبوع مع العائلة أو الأصدقاء أو إذ كنت تبحث عن مكان بعيدًا عن صخب الحياة يُعد شاطئ السيف ملاذًا استثنائيًا. لكن في الوقت نفسه يأخذنا صفاء الشاطئ والإطلالة الخلّابة في رحلة اكتشاف للتعرف على مجموعة متنوعة من الأنشطة منها السباحة، ركوب الخيل، الذهاب في رحلة صيد، الدراجات الرباعية، الاسترخاء، ممارسة رياضة المشي وغيرها. ولرفاهية متكاملة سيتمكن أهالي جدة والزوار من الاستمتاع بالشاطئ على مدار 24 ساعة. '
            }
            ,
            {
              title: 'ملاحظة:',
              text: 'الصور من تصوير الزوّار'
            }
            ,
          ],
          blogImgSrc:["saif1.jpeg","saif2.jpeg","saif3.jpeg","saif4.jpeg","saif5.jpeg","saif6.jpeg","saif7.jpeg","saif8.jpeg"],
        },
        {
          id: 3,
          blogTitle: "جزيرة المرجان ",
          blogDatee: "28 اكتوبر 2021",
          blogText: [
            {
              title: 'أين يقع "جزيرة المرجان"',
              text: 'تقع جزيرة المرجان في مدينة الدمام شرق المملكة العربية السعودية.'
            },
            {
              title: 'كيفية الوصول إلى  "جزيرة المرجان"',
              text: 'يمكنك الوصول إلى جزيرة المرجان عن طريق جسر على جانبيه حماية حجرية يبلغ طولها 1.8 كلم.'
            },
            {
              title: ' "جزيرة المرجان"',
              text: 'جزيرة المرجان هي جزيرة سياحية ترفيهية، تُعد إحدى أهم الأماكن في مدينة الدمام، وهي أول جزيرة اصطناعية بالمملكة العربية السعودية. بُنيت جزيرة المرجان سنة 1991م, تبلغ مساحة الجزيرة 53 ألف متر مربع، تتميز ببرجٍ يتوسطها بتصميمٍ مميز وفريد يبلغ ارتفاعه 30 مترًا، يمكنك مشاهدة البرج من أي نقطة بكورنيش الدمام. حيث تتمتع الجزيرة بحياة مذهلة، وبمسطحاتها وأشجارها الخضراء، وشعابها المرجانية تضم الجزيرة مساحات خضراء شاسعة لممارسة رياضة المشي، مرسى لقوارب التنزه، ألعاب للأطفال وتمكن الأطفال من اللعب في الشاطئ والسباحة والعديد من الأنشطة '
            },
            {
              title: 'تُعد جزيرة المرجان الأخيار الأفضل لأهالي المنطقة الشرقية وللزّوار .',
              text: ''
            },
            {
              title: 'ملاحظة:',
              text: 'الصور من تصوير الزوّار'
            }
          ],
          blogImgSrc:["murjan1.jpeg","murjan2.jpeg","murjan3.jpeg"],
        },
        {
          id: 4,
          blogTitle: "جزيرة بياضة",
          blogDatee: "28 اكتوبر 2021",
          blogText: [
            {
              title: 'أين يقع "جزيرة بياضة"',
              text: 'تقع جزيرة بياضة على بُعد 35 إلى 40 دقيقة من محافظة جدة.'
            },
            {
              title: 'كيفية الوصول إلى  "جزيرة بياضة"',
              text: 'يمكنك الوصول لى جزيرة بياضة، من أي مرسى في مدينة جدة.'
            },
            {
              title: '"جزيرة بياضة" مالديف جدة',
              text: 'تُعد جزيرة بياضة من أهم الأماكن السياحية والترفيهية المميزة في المملكة العربية السعودية. تتميز بتربتها البيضاء، لون المياه الفيروزي و الشعاب المرجانية الخلابة، '
            },
            {
              title: '',
              text: 'تقدم جزيرة بياضة للزوّار من مختلف مناطق المملكة العربية السعودية  لحظاتٍ لا تنسى عبر العديد من الأنشطة البحرية : القوارب الهوائية، السكوتر المائي، دباب البحر، قوارب الكاياك، الغوص، ممشى.تنوع الأنشطة أمرٌ مذهل بالفعل لذلك جاءت ردة فعلنا الأولى بالاستمتاع والتناغم.'
            },
            {
              title: '',
              text: 'في النهار أو المساء على متن قارب أو يخت إذ كنت تبحث عن مكان للاسترخاء والاستجمام بعيدًا عن ضوضاء المدينة أو عن تجارب ممتعة وجولات لا تنتهي لقضاء أفضل الأوقات.'
            },
            {
              title: 'ملاحظة:',
              text: ' الصور من تصوير الزوّار للشاطئ'
            }
          ],
          blogImgSrc:[ "bayadhah18.jpeg","bayadhah1.jpeg","bayadhah2.jpeg","bayadhah3.jpeg","bayadhah4.jpeg","bayadhah5.jpeg","bayadhah6.jpeg","bayadhah7.jpeg","bayadhah8.jpeg","bayadhah9.jpeg","bayadhah10.jpeg","bayadhah11.jpeg","bayadhah12.jpeg","bayadhah13.jpeg","bayadhah14.jpeg","bayadhah15.jpeg","bayadhah16.jpeg","bayadhah17.jpeg"]
        },
        {
          id: 5,
          blogTitle:  "جزر فرسان" ,
          blogDatee: "29 اكتوبر 2021",
          blogText: [
            {
              title: 'أين يقع  "جزر فرسان" ',
              text: 'تقع جزر فرسان على بُعد 42 كيلومتراً عن ساحل مدينة جازان، في القسم الجنوبي الشرقي للبحر الأحمر.'
            },
            {
              title: 'كيفية الوصول إلى   "جزر فرسان" ',
              text: 'يمكنك الوصول إلى الجزيرة عن طريق عبّارة قادمة من ميناء جازان .'
            },
            {
              title: ' "جزر فرسان" ',
              text: 'نلقي ضوءًا عن قرب على "جزر فرسان" لما تحمله من معالم مميزة تخطف الأنفاس، تضمّ مجموعة جزر فرسان أكثر من 84 جزيرة أهمها جزيرة فرسان، جزيرة السقيد، جزيرة قماح، جزيرة دمسك، جزيرة زفاف، جزيرة دوشك، جزيرة كيرة وجزيرة سلوبة. تعد "جزيرة فرسان" كنز من كنوز المملكة العربية السعودية بينما يتشكل كنز الزوار في صُنع ذكرياتٍ جميلة، حيث يمثل الشاطئ بانحناءته الخلّابة، ورماله البيضاء الناعمة، والمياه الفيروزية النقية، وأشجار المانغروف الخضراء، وطقسه المعتدل طوال العام وجهة واعدة تمتلك كافة المقومات لقضاء عطلة مثالية مع العائلة أو الأصدقاء.'
            },
            {
              title: '',
              text: 'وفي رحلة مُبهرة لا يمكن أن تكتمل متعة الزوار إلا بمغامرة في أعماق البحر لاستكشاف الحياة البحرية الفريدة، ولمشاهدة الدلافين والأسماك وشعابها المرجانية ذو المظهر الساحر. '
            },
            {
              title: '',
              text: 'عادةً ما يتدفق جموع الزوّار لرؤية مشهد فاتن.. قد يكون "شروق الشمس" أول ضوء تتم رؤيته من الصباح، أو غروب الشمس حيث يمثّل أعجوبة طبيعية ترسم في أذهان الزوار لوحة تبقى في الذاكرة للأبد، حينما تغيب الشمس كليًا تتلألأ السماء بالنجوم البراقة ويصبح الوقت مثالي لتأمل البحر والاستماع إلى إيقاع الموج.'
            },
            {
              title: 'ملاحظة:',
              text: 'الرقم ٤٢ من موقع المركز الوطني لتنمية الحياة الفطرية، صور جزر فرسان من تصوير خالد زاروق '
            }
          ],
          blogImgSrc:[ "farasan1.jpeg","farasan2.jpeg","farasan3.jpeg","farasan4.jpeg","farasan5.jpeg","farasan6.jpeg","farasan7.jpeg","farasan8.jpeg","farasan9.jpeg","farasan10.jpeg","farasan11.jpeg","farasan12.jpeg","farasan13.jpeg",],
        },
      ],
    };
  },
  
    methods: {
      getImgUrl: function (pic) {
        return require("@/assets/img/" + pic);
      },
    }
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

.darken{
   background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 1));
}

.swiper-slide-style {
    text-align: center;
    background: #000 !important;
  }
  
.blogCursol {
      width: auto;
      height: auto;
      max-width: 100%;
      max-height: 100%;
      transform: translate(-50%, -50%);
      position: absolute;
      left: 50%;
      top: 50%;
  }
</style>
