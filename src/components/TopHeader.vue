<template>
  <div>
    <b-navbar toggleable="md" class="navbar-dark">
      <b-navbar-brand href="/">
        <img
          src="@/assets/img/logo.png"
          alt="Maraci Logo"
          height="70px"
          width="auto"
        />
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse
        id="nav-collapse"
        is-nav
        class="justify-content-end align-items-center px-2"
      >
        <b-navbar-nav>
          <b-nav-item :to="{
            name: 'Home',
          }">الرئيسية</b-nav-item>
          <b-nav-item :to="{
            name:'About'
          }">من نحن</b-nav-item>
          <b-nav-item :to="{
            name: 'Blogs',
          }">المدونة</b-nav-item>


          <!--v-if and v-else -->
          <b-nav-item v-if="isloggedIn">
            <div class="px-3">
              <select
                id="topHeaderID"
                class="topHeaderDropdown"
                @change="changeFunc()"
                v-model="userOptions"
              >
                <option hidden value="0">{{ userName }}</option>
                <option value="1">لوحة التحكم</option>
                <option value="2">تسجيل الخروج</option>
              </select>
            </div>
          </b-nav-item>
          <b-nav-item v-else>
            <b-button to="/login" size="lg" class="btn-secondary"
              >تسجيل الدخول</b-button
            >
          </b-nav-item>
          <!--end v-if and v-else-->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-modal id="signout-model" hide-footer>
      <template
        #modal-header="{ close }"
        class="justify-content-center border-0"
      >
        <button
          type="button"
          aria-label="Close"
          class="close p-0 m-0"
          @click="close()"
        >
          <b-icon class="h4" icon="x" aria-hidden="true"></b-icon>
        </button>
      </template>
      <template class="text-center">
        <div class="m-3">
          <h4 class="text-center pb-3">تم تسجيل الخروج بنجاح</h4>
        </div>
      </template>
    </b-modal>
  </div>
</template>
<script>
export default {
  name: "topHeader",
  methods: {
    showModal (val) {
      console.log('showModal triggered')
      console.log(val)
      this.$refs.myModalRef.show()
    },
    changeFunc: function () {
      var selectBox = document.getElementById("topHeaderID");
      var selectedValue = selectBox.options[selectBox.selectedIndex].value;
      //alert(selectedValue);
      if (selectedValue == "1") {
        this.$router.push("/profile");
      } else if (selectedValue == "2") {
        this.$bvModal.show("signout-model")
        this.isloggedIn=false;
      }
    },
    
  },
  data: function () {
    return {
      userName: "أثير حسن",
      userOptions: "0",
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
    ]
    };
  },
  props: {
  isloggedIn: Boolean,
  }
};
</script>

<style>
.topHeaderDropdown {
  width: 255px;
  padding: 8px 12px;
  color: #026873;
  background-color: #fff;
  cursor: pointer;
  border-radius: 5px;
}

.topHeaderDropdown:focus,
.topHeaderDropdown:hover {
  outline: none;
  border: 1px solid #3c776f;
}

.topHeaderDropdown option {
  border: none;
}
</style>
