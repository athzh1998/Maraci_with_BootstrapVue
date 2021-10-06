<template>
<div>
    <b-col class="p-2">
        <b-card
        :img-src="imgSource"
        img-alt="Image"
        
        class="catogary"
        >
        <b-card-text class="text-white" align-v="end"><h3>{{name}}</h3></b-card-text>
        <footer class="blockquote-footer">Someone famous in</footer>
        </b-card>
    </b-col>
</div>
</template>
<script>
export default {
    props:["name", "imgSource"]
};
</script>
<style lang="scss" scoped>

</style>