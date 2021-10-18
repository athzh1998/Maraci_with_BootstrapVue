<template>
    <b-modal hide-footer id="details-model" dir="rtl"> 
        <template #modal-header="{ close }" class="justify-content-center border-0">
            <h2 class="mx-auto">تفاصيل الرحلة</h2>
            <button type="button" aria-label="Close" class="close p-0 m-0" @click="close()">
                <b-icon class="h4" icon="x" aria-hidden="true"></b-icon>
            </button>
        </template>
        <template class="text-center">
            <div class="p-4">
            <b-row class="justify-content-between py-2">
                <b-col>
                <h2>رحلة 1</h2>
                </b-col>
                <b-col>
                <p class="text-dark text-right">
                    المالك: خالد محمد
                </p>
                </b-col>
            </b-row>
            <p class="text-dark text-justify">
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
            </p>
            <p>{{tripPrice}} ريال سعودي <span class="text-dark"> للشخص الواحد </span></p>
            <p>العدد المسموح = 5 اشخاص</p>
            <b-row class="justify-content-between" align-v="center">
                <b-col>
                <p><b-icon icon="broadcast-pin" aria-hidden="true"></b-icon> جدة</p>
                </b-col>
                <b-col>
                <b-button class="btn-secondary w-75">احجز الآن</b-button>
                </b-col>
                <b-col>
                <div v-if="liked" class="text-right">
                    <b-icon
                    @click="liked = false"
                    icon="heart-fill"
                    aria-hidden="true"
                    font-scale="1.25"
                    variant="danger"
                    ></b-icon>
                </div>
                <div v-else class="text-right">
                    <b-icon
                    @click="liked = true"
                    icon="heart"
                    aria-hidden="true"
                    font-scale="1.25"
                    variant="danger"
                    ></b-icon>
                </div>
                </b-col>
            </b-row>
            </div>
        </template>
    </b-modal>
</template>
<script>
export default {
    
}
</script>
<style>

</style>