<template>
<div>
    <b-col class="p-2">
        <b-card
        :img-src="imgSource"
        img-alt="Image"
        overlay
        class="catogary"
        >
            <div  class="darkenImageCatogary h-100" style="border-radius:10px">
                <b-row class='h-100' align-v="end">
                    <b-col>
                        <b-card-text class="text-white"><h3>{{name}}</h3></b-card-text>
                    </b-col>
                </b-row>
            </div> 
        </b-card>
    </b-col>
</div>
</template>
<script>
export default {
    props:["name", "imgSource"]
};
</script>
<style>
.darkenImageCatogary{
    background: linear-gradient(to bottom, rgba(0,0,0,0) 30%, rgba(0,0,0,0.7));
    
}
</style>