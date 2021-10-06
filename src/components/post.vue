<template>
    <b-col md="3" class="p-2">
            <b-card
            :img-src="imgSource"
            img-alt="Image"
            overlay
            class="catogary"
            >
            <b-card-title v-text="name" align-v="end">
            </b-card-title>
        </b-card>
    </b-col>
</template>
<script>
export default {
    props:["name", "imgSource"]
};
</script>
<style lang="scss" scoped>

</style>