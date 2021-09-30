<template>
    <div>
        <b-col class="py-2">
            <b-card
                :title="name"
                :img-src="imgSource"
                img-alt="Image"
                overlay
                class="catogary"
                >
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