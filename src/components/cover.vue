<template>
    <b-row align-v="center" class="m-0 section1 justify-content-end">
        <b-col md="6" class="p-5">
            <div>
                <p class="cover-paraghraph">هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.</p>
                <div v-if="loggedIn">
                    <b-button size="lg" type="submit" class="w-75">انشر رحلتك 
                        <b-icon icon="plus" font-scale="1.5" aria-hidden="true"></b-icon>
                    </b-button>
                </div>
                <div v-else>
                    <b-button size="lg" type="submit" class="w-75">سجل الآن</b-button>
                </div>
            </div>
        </b-col>
    </b-row>
</template>
<script>
export default {
    name:"cover",
    data: function(){
    return {
    loggedIn: true
    };
  }
}
</script>
<style>

</style>