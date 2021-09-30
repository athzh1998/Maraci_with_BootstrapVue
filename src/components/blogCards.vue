<template>
     <b-col md="4" class="p-0">
        <b-card
            class="text-dark text-left blogs"
        >
            <b-card-img :src="blogImgSrc" alt="Blog img" img-top class="blog-img pb-3"> </b-card-img> 
            <div class="px-4">
                <b-row class="d-flex justify-content-between">
                <b-card-title v-text="blogTitle"></b-card-title>
                <p v-text="blogDatee" class="date"></p>                
                </b-row>
                <b-card-text>
                    <p v-text="blogText"></p>
                    <a class="showAll" href="">إعرف أكثر</a>  
                </b-card-text>
            </div>
        </b-card>
     </b-col>
     </template>

<script>
export default {
    props:["blogTitle","blogImgSrc","blogText", "blogDatee"]
}
</script>

<style>
    
.card-body{
    padding: 0 ;
}
</style>