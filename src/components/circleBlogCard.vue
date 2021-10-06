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
                    <p>{{blogText | shorten}}</p>
                    <a class="showAll" href="/knowMoreAboutBlogs">إعرف أكثر</a>  
                </b-card-text>
            </div>
        </b-card>
    </b-col>
</template>

<script>
export default {
    name:'blogCards',
    props:["blogTitle","blogImgSrc","blogText", "blogDatee"],
    filters:{
        shorten:  function(v){
            if (v.length>200)
            return v.substring(0,175) +' ...';
            else 
            return v;
            } 
    }
}
</script>

<style>
.card-body{
    padding: 0 !important;
}
</style>