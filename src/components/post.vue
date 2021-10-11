<template>
    <div style="max-width:270px;"><b-col>
           
        
            <b-card
           class="border-0 shadow bg-white rounded my-4"
           style="border-radius: 15px;"
        >
        <b-card-img :src="imgSource"
            alt="صور من الرحلة"
            img-top
            class="pb-3">
        </b-card-img>
        <b-row class="justify-content-between">
            <b-col>
                <b-card-title class="text-dark">{{ name }}</b-card-title>
            </b-col>
            <b-col>
                <div v-if="liked">
                    <b-icon @click="liked=false" icon="heart-fill" aria-hidden="true" font-scale="1.25" variant="danger"></b-icon>
                </div>
                <div v-else >
                    <b-icon @click="liked=true" icon="heart" aria-hidden="true" font-scale="1.25" variant="danger"></b-icon>
                </div>
            </b-col>
        </b-row>
            <b-card-text class="pb-3">
                <span class="boldAndBlue">
                    100 ريال سعودي 
                </span>
                <span class="text-dark">
                    للشخص الواحد
                </span>
            
            </b-card-text>
            <b-row class="pb-2">
              <b-col >
                <b-button href="#" variant="secondary" class="border-0">إحجز الآن</b-button>
            </b-col>
            <b-col>
                <b-button href="#" class="detalesBtn border-0">التفاصيل</b-button>
            </b-col>  
            </b-row>
        </b-card>
        
        

    </b-col></div>
</template>
<script>

export default {
    name:'catogaryPost',
    data: function(){
        return {
            liked: false
        }
    },
    props:["name", "imgSource"]
};
</script>
<style>
.darkenImageCatogary{
    background: linear-gradient(to bottom, rgba(0,0,0,0) 30%, rgba(0,0,0,0.7));
    
}

.detalesBtn{
    background-color: #5BBAAE !important;
    color: white;
    border: none;
}

.boldAndBlue{
    font-weight: bold;
    color: #026873;
}

.detalesBtn :hover{
    background-color:#4FA79C;
}
</style>