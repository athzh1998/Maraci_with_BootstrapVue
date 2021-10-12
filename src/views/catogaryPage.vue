<template>
  <DashBoardLayout>
    <b-container class="sectionsPadding">
      <b-row class="pb-5" style="min-height: calc(100vh - 120px)">
        <b-col md="6" class="pt-4">
          <b-img
            src="@/assets/img/imgCover.png"
            alt="catogary 1 Header"
            class="imgSize"
          >
          </b-img>
        </b-col>
        <b-col md="6">
          <section-header-tall></section-header-tall>
          <h1>إستئجار يخت</h1>
          <br />
          <h5 class="text-justify text-dark">
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
            النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد
            من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
          </h5>
        </b-col>
      </b-row>
      <b-row class="pt-5">
        <b-col md="3">
          <div>
            <b-dropdown
              split
              text="المدينة: "
              variant="light"
              class="my-2 w-100"
            >
              <b-dropdown-item href="#">جدة</b-dropdown-item>
              <b-dropdown-item href="#">ينبع</b-dropdown-item>
            </b-dropdown>
          </div>
        </b-col>
        <b-col md="3">
          <div>
            <b-dropdown
              split
              text="ترتيب بحسب: "
              variant="light"
              class="my-2 w-100"
            >
              <b-dropdown-item href="#">المضاف حديثاً</b-dropdown-item>
              <b-dropdown-item href="#">الأقل سعراً</b-dropdown-item>
              <b-dropdown-item href="#">الأعلى سعراً</b-dropdown-item>
              <b-dropdown-item href="#">العروض</b-dropdown-item>
            </b-dropdown>
          </div>
        </b-col>
        <b-col md="3">
          <div class="dropdown">
            <span>Mouse over me</span>
            <div class="dropdown-content">
              <p>Hello World!</p>
            </div>
          </div>
        </b-col>

        <b-col md="3" class="ml">
          <b-input-group class="my-2 w-100">
            <b-form-input class="LoginInput" size="sm" placeholder="ابحث هنا">
            </b-form-input>
            <b-input-group-prepend>
              <span class="input-group-text" size="sm">
                <b-icon
                  icon="search"
                  aria-hidden="true"
                  class="btn p-0"
                  variant="Secondary"
                ></b-icon
              ></span>
            </b-input-group-prepend>
          </b-input-group>
        </b-col>
      </b-row>
      <b-row align-h="center" class="pb-5">
        <post
          v-for="catogary in Catogaries"
          :key="catogary.id"
          :name="catogary.name"
          :imgSource="catogary.imgSource"
        ></post>
      </b-row>
    </b-container>
  </DashBoardLayout>
</template>

<script>
import DashBoardLayout from "@/layouts/dashBoardLayout";
import sectionHeaderTall from "@/components/sectionHeaderTall.vue";
import Post from "@/components/post.vue";

export default {
  name: "Catogary",
  components: {
    DashBoardLayout: DashBoardLayout,
    "section-header-tall": sectionHeaderTall,
    post: Post,
  },
  mounted() {
    this.fetchData();
  },
  data() {
    return {
      Catogaries: [],
    };
  },
  methods: {
    async fetchData() {
      const res = await fetch("catogary.json");
      const val = await res.json();
      this.Catogaries = val;
    },
  },
};
</script>
<style>
.topCol {
  align-items: start !important;
}

.imgSize {
  max-width: 100%;
  height: auto;
}

.dropdown {
  position: relative;
  display: inline-block;
  color: #014e57;
  background-color: #d9e7e2;
  border: #5bbaae;
  border-width: 2px;
  cursor: context-menu;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #d9e7e2;
  border: #5bbaae;
  color: #026873;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  padding: 12px 16px;
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}
</style>
