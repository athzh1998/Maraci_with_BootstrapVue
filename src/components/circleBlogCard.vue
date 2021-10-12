<template>
  <b-col md="12" class="pb-3">
    <b-card class="text-dark border-0 text-left p-4">
      <b-card-img
        :src="blogImgSrc"
        alt="Blog img"
        img-top
        class="circular pb-3"
      ></b-card-img>
      <b-card-title v-text="blogTitle"></b-card-title>
      <p v-text="blogDatee" class="date"></p>
      <b-card-text>
        <p>{{ blogText | shorten }}</p>
        <a class="showAll" href="/knowMoreAboutBlogs">إعرف أكثر</a>
      </b-card-text>
    </b-card>
  </b-col>
</template>

<script>
export default {
  name: "blogCards",
  props: ["blogTitle", "blogImgSrc", "blogText", "blogDatee"],
  filters: {
    shorten: function (v) {
      if (v.length > 200) return v.substring(0, 175) + " ...";
      else return v;
    },
  },
};
</script>

<style></style>
