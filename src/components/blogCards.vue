<template>
    <b-col md="4" class="pb-3">
        <b-card class="text-dark text-left blogs">
            <b-card-img :src="blogImgSrc" alt="Blog img" img-top class="blog-img pb-3"></b-card-img> 
            <div class="px-3">
                <b-row align-h="between">
                    <b-card-title v-text="blogTitle"></b-card-title>
                    <p v-text="blogDatee" class="date"></p>                
                </b-row>
                <b-card-text>
                    <p style="  text-align: justify;
  text-justify: inter-word;">{{blogText | shorten}}</p>
                    <a class="showAll" :href="blogView(blogTitle,blogImgSrc,blogText, blogDatee)">إعرف أكثر</a>  
                </b-card-text>
            </div>
        </b-card>
    </b-col>
</template>

<script>
export default {
    name:'blogCards',
    props:{
        blogTitle: String,
        blogImgSrc: String,
        blogText: String, 
        blogDatee: String
        },
    filters:{
        shorten:  function(v){
            if (v.length>200)
            return v.substring(0,175) +' ...';
            else 
            return v;
            } 
    },
    methods: {
        blogView: function(blogTitle,blogImgSrc,blogText, blogDatee){
            return {
                name: "knowMoreAboutBlogs",
                params: {
                title: blogTitle,
                img: blogImgSrc,
                text: blogText,
                date: blogDatee
                }
            };
        }
}
}
</script>

<style>
.card-body{
    padding: 0 !important;
}
</style>