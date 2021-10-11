<template>
<dash-BoardLayout>
<b-container>
    <b-row class="blogImgViewMore" align-v="center" align-h="center">
        <!--<div>
            <h1 class="text-white" v-text='blogs[this.id-1].blogTitle'></h1>
            <p class="text-white" v-text='blogs[this.id-1].blogDatee'></p>  
        </div>-->
    </b-row>
    <b-container class="sectionsPadding sectionHeight">
        <b-row>
            <b-col md='8' class="p-4 text-justify">
                <!--<p class="blogParagraph"  v-text='blogs[this.id-1].blogText'></p>-->
            </b-col>
            <b-col md='4' class="py-4 px-2">
                <br>
                <h2>إقرأ أكثر عن</h2>
                <b-row>
                    <!--<circle-blogCard v-for="blogg in blogs.slice(0,2)" :key="blogg.id" :id="blogg.id" :blogTitle="blogg.blogTitle" :blogImgSrc="blogg.blogImgSrc" :blogDatee="blogg.blogDatee" :blogText="blogg.blogText"></circle-blogCard>-->
                </b-row>
            </b-col>
        </b-row>
    </b-container>
</b-container>
</dash-BoardLayout>
</template>
<script>
import DashBoardLayout from '@/layouts/dashBoardLayout';
//import circleBlogCard from '@/components/circleBlogCard.vue';
export default {
    //props:['id'],
    components: {
    'dash-BoardLayout': DashBoardLayout,
    //'circle-blogCard' : circleBlogCard
    },
    /*mounted() {
        this.fetchData();
    },
    data() {
        return {
        blogs:[]
        };
    },
    methods: {
        async fetchData(){
        const res = await fetch("blogs.json");
        const val = await res.json();
        this.blogs=val;
        console.log(val);
        }
    }*/
}   
</script>
<style>

.blogImgViewMore{
        background-image: url('../../public/img/Blog.png');
        background-repeat: no-repeat;
        background-position: center center;
        -webkit-background-size: cover;
        background-size: cover;
        height: calc(60vh);
  } 
.blogParagraph{
    font-size: 25px !important;
    padding: 1.5rem 0;
}
</style>