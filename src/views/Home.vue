<template>
  <dash-BoardLayout :isloggedIn='this.isloggedIn'>
    <b-container>
      <section>
        <cover :isloggedIn='this.isloggedIn'></cover>
      </section>

      <section class="sectionHeight">
        <b-container class="sectionsPadding">
          <section-header></section-header>
          <h1>الفئات</h1>
          <a class="showAllLinkInTheSectionHeader" href="/AllTrips">عرض الكل</a>
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
          <a class="showAllLinkInTheSectionHeader" href="/blogs">عرض الكل</a>
          <b-row align-h="center" align-v="center" class="py-5">
            <b-col md="7" sm="12">
              <b-img
                :src="getImgUrl(this.blogs[4].blogImgSrc[0])"
                fluid
                alt="Blog image"
                class="rounded-0"
              ></b-img>
            </b-col>
            <b-col md="5">
              <h2 class="text-left">{{this.blogs[4].blogTitle}}</h2>
              <p class="date text-left">{{this.blogs[4].blogDatee}}</p>
              <p class="text-justify">
                {{stringReturn(this.blogs[4].blogText)| shorten}}
                <router-link
                class="showAllLinkIntTheBlogs"
                :to="{
                  name: 'AboutBlogs',
                  params: { id, blogTitle, blogDatee, blogText, blogImgSrc },
                }">
                إعرف أكثر
                </router-link>
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
  filters: {
    shorten: function (v) {
      if (v.length > 200) return v.substring(0, 175) + " ...";
      else return v;
    },
  },
   methods: {
     
      getImgUrl: function (pic) {
        return require("@/assets/img/" + pic);
      },
      stringReturn: function(arr){
      var str='';
      for (var i=0; i<arr.length; i++){
        str+=arr[i]["text"]+' '
      }
      return str;
    }
    },
  data: function () {
    return {
      
      isloggedIn:true,
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
        
    };
  },
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
