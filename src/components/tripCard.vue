<template>
    <b-col md='3' >
      <b-modal hide-footer id="reservation-model" dir="rtl"> 
            <template #modal-header="{ close }" class="justify-content-center border-0">
              <h2 class="mx-auto">معلومات الاتصال للحجز</h2>
              <button type="button" aria-label="Close" class="close p-0 m-0" @click="close()">
                  <b-icon class="h4" icon="x" aria-hidden="true"></b-icon>
                </button>
            </template>
            <template class="text-center">
              
              <!--<imgSwiper></imgSwiper>-->
              <br>
              <h2 class="text-center" style="color:#026873">المالك: خالد محمد</h2>
              <p class="text-center">بإمكانك الآن الاتصال للحجز والاستفسار بالرقم التالي: </p>
              <br>
              <h2 class="text-center">0553330933</h2>
              <br>
              <br>
            </template>
        </b-modal>

<b-modal hide-footer id="details-model" dir="rtl"> 
        <template #modal-header="{ close }" class="justify-content-center border-0">
            <h2 class="mx-auto">تفاصيل الرحلة</h2>
            <button type="button" aria-label="Close" class="close p-0 m-0" @click="close()">
                <b-icon class="h4" icon="x" aria-hidden="true"></b-icon>
            </button>
        </template>
        <template class="text-center">
            
            <div class="p-4">
            <b-row class="justify-content-between my-auto py-2">
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
            <p class="boldAndBlue">{{tripPrice}} ريال سعودي <span class="text-dark"> للشخص الواحد </span></p>
            <p class="boldAndBlue">العدد المسموح = 5 اشخاص</p>
            <b-row class="justify-content-between align-items-center">
                <b-col>
                <p class="my-auto"><b-icon icon="geo-alt-fill" aria-hidden="true" style="color:#9AD9C2;"></b-icon> جدة  </p>
                </b-col>
                <b-col class="mx-auto">
                <b-button v-b-modal.reservation-model @click="$bvModal.hide('details-model')" class="btn-secondary mx-auto">احجز الآن</b-button>
                </b-col>
                <b-col>
                  <div class="mx-auto">
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
                  </div>
                
                </b-col>
            </b-row>
            </div>
        </template>
    </b-modal>
        
      <b-card
        class="border-0 shadow bg-white rounded my-3"
        style="border-radius: 15px"
      >
      <div class="zoomImg mb-3">
        <b-card-img :src= getImgUrl(tripImgSrc) alt="صور من الرحلة" img-top
        >
        </b-card-img>
      </div>
        
        <div class="px-4" >
          <b-row align-v="center">
          <b-col>
            <b-card-title class="text-left"><h4>{{tripName}}</h4></b-card-title>
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
        <b-card-text class="pb-3 text-left">
          <span class="boldAndBlue">{{tripPrice}} ريال سعودي </span>
          <span class="text-dark"> للشخص الواحد </span>
        </b-card-text>
        <b-row class="pb-2">
          <b-col>
            <b-button href="#"  v-b-modal.reservation-model variant="secondary" class="border-0"
              >إحجز الآن</b-button
            >
          </b-col>
          <b-col>
            <b-button href="#" v-b-modal.details-model class="detalesBtn border-0">التفاصيل</b-button>
          </b-col>
        </b-row>
        </div>
      </b-card>
    </b-col>
    
</template>
<script>
//import imgSwiper from "@/components/imgSwiper";
export default {
  name: "Trips",
  data: function () {
    return {
      liked: false,
    };
  },
  props: ["id","tripName","tripImgSrc","tripPrice"],
  methods: {
    getImgUrl: function(pic) {
      return require('@/assets/img/'+pic);

  }
  },
  components: {
    //'imgSwiper':imgSwiper,
  }
  
};
</script>
<style>
.darkenImageCatogary {
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 30%,
    rgba(0, 0, 0, 0.7)
  );
}

.card-img{
  width: 100%;
  overflow: hidden !important;
}




.detalesBtn {
  background-color: #5bbaae !important;
  color: white;
  border: none;
}

.boldAndBlue {
  font-weight: bold;
  color: #026873;
}

.detalesBtn :hover {
  background-color: #4fa79c;

}
</style>
