<template>
  <b-col md="4" class="pb-3">
    <b-card class="text-dark text-left border-0">
      <b-card-img
        :src="blogImgSrc"
        alt="Blog img"
        img-top
        class="blog-img pb-3"
      ></b-card-img>
      <div class="px-3">
        <b-row class="justify-content-between">
          <b-col><b-card-title v-text="blogTitle"></b-card-title></b-col>
          <b-col
            ><div class="date float-left">{{ blogDatee }}</div>
            <br
          /></b-col>
        </b-row>
        <b-card-text>
          <p class="text-justify">
            {{ blogText | shorten }}
            <a class="showAll" href="/knowMoreAboutBlogs"> إعرف أكثر</a>
          </p>
          <!--:to="{name:'knowMoreAboutBlogs', params:{id}}"-->
        </b-card-text>
      </div>
    </b-card>
  </b-col>
</template>

<script>
export default {
  name: "blogCards",
  props: ["id", "blogTitle", "blogImgSrc", "blogText", "blogDatee"],
  filters: {
    shorten: function (v) {
      if (v.length > 200) return v.substring(0, 175) + " ...";
      else return v;
    },
  },
  methods: {},
};
</script>

<style>
.card-body {
  padding: 0 !important;
}
</style>
