import "@babel/polyfill";
import "mutationobserver-shim";
import Vue from "vue";
import "./plugins/bootstrap-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

Vue.config.productionTip = false;

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap-v4-rtl/dist/css/bootstrap-rtl.css";
import "@/assets/css/global.css";

new Vue({
  router,
  store,
  render: (h) => h(App),
  data: {
    blogs: [
      {
          "id" : 1,
          "blogTitle" : "جزر فرسان",
          "blogDatee" : "1 صفر 1443",
          "blogText" : "حافظت “جزيرة فرسان” جنوب غربي السعودية طيلة الفترة الماضية على مكانتها في أن تكون بقعة من الضوء شاسعة في محيط البحر الأحمر، حين ضمت جزرها الواسعة معالم الدهشة على شواطئها ذات الرمال البيضاء، واحتوت كنوزا من اللؤلؤ في قلب العمق التاريخي الذي تحمله الجزيرة، كما لفتها غابات <br><br> هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
          "blogImgSrc" : "blog1.png"
      },
      {
          "id" : 2,
          "blogTitle" : "العنوان الثاني",
          "blogDatee" : "25 جمادى الأول 1442",
          "blogText" : "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف إضافة إلى زيادة عدد الحروف إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
          "blogImgSrc" : "blog2.png"
      },
      {
          "id" : 3,
          "blogTitle" : "العنوان الثالث",
          "blogDatee" : "14 رمضان 1440",
          "blogText" : "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف إضافة إلى زيادة عدد الحروف إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
          "blogImgSrc" : "blog3.png"
      },
      {
          "id" : 4,
          "blogTitle" : "العنوان الرابع",
          "blogDatee" : "14 رمضان 1440",
          "blogText" : "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف إضافة إلى زيادة عدد الحروف إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
          "blogImgSrc" : "blog3.png"
      },
      {
          "id" : 5,
          "blogTitle" : "العنوان الخامس",
          "blogDatee" : "14 رمضان 1440",
          "blogText" : "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف إضافة إلى زيادة عدد الحروف إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
          "blogImgSrc" : "blog1.png"
      },
      {
          "id" : 6,
          "blogTitle" : "العنوان السادس",
          "blogDatee" : "14 رمضان 1440",
          "blogText" : "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف إضافة إلى زيادة عدد الحروف إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
          "blogImgSrc" : "blog2.png"
      }
  ]
  }
}).$mount("#app");
