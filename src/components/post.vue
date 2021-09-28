<template>
    <div class="p-2">
        <b-col>
            <b-card
                :title="name"
                :img-src="imgSource"
                img-alt="Image"
                overlay
                class="card"
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