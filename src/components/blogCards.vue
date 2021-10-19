<template>
    <b-card class="text-left border-0">
      <div class="zoomImg mb-3">
        <b-card-img
          :src= getImgUrl(blogImgSrc)
          alt="Blog img"
          img-top
          class="blog-img pb-3"
        ></b-card-img>
      </div>
      
      <div class="px-3">
        <b-row class="justify-content-between">
          <b-col><b-card-title><h4>{{blogTitle}}</h4></b-card-title></b-col>
          <b-col
            ><div class="date float-left">{{ blogDatee }}</div>
            <br
          /></b-col>
        </b-row>
        <b-card-text>
          <p class="text-justify">
            {{ blogText | shorten }}
            <router-link class="showAllLinkIntTheBlogs" :to="{name:'AboutBlogs', params: {id}}"> إعرف أكثر</router-link>
          </p>
        </b-card-text>
      </div>
    </b-card>
</template>

<script>
export default {
  name: "blogCards",
  props: ["id","blogTitle", "blogImgSrc", "blogText", "blogDatee"],
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

<style>
.card-body {
  padding: 0 !important;
}

</style>
