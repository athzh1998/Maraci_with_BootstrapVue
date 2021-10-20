<template>
    <b-card class="text-dark border-0 text-left p-4">
      <b-card-img
        :src= getImgUrl(blogImgSrc)
        alt="Blog img"
        img-top
        rounded="circle"
      ></b-card-img>
      <b-card-title v-text="blogTitle"></b-card-title>
      <p v-text="blogDatee" class="date"></p>
      <b-card-text>
        <p>{{ blogText | shorten }}</p>
        <router-link class="showAllLinkIntTheBlogs" :to="{name:'AboutBlogs', params: {id,blogTitle,blogDatee,blogText,blogImgSrc}}"> إعرف أكثر</router-link>
      </b-card-text>
    </b-card>
</template>

<script>
export default {
  name: "circlBlogCard",
  props: ['id',"blogTitle", "blogImgSrc", "blogText", "blogDatee"],
  filters: {
    shorten: function (v) {
      if (v.length > 200) return v.substring(0, 175) + " ...";
      else return v;
    },
  },
   methods: {
    getImgUrl: function(pic) {
      return require('@/assets/img/'+pic);
  }
  }
};
</script>

<style></style>
