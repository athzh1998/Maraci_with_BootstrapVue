<template>
    <DashBoardLayout>
    <div class="sectionsPadding sectionHeight">
      <section-HeaderTall></section-HeaderTall>
      <h1>الرحلات المقدمة</h1>
      <b-row align-h="center">
        <b-col md="10" class="text-dark pb-5">
          <h5 class="px-2 text-justify">
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
            النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد
            من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
          </h5>
        </b-col>
      </b-row>

      <!---------Serch Bar--------->
      <search-bar></search-bar>
      <!--------------------------->


      <b-row  v-if="tripName" class="align-items-center my-5">
          <proposed-TripCard  :tripName="this.tripName"
          :tripImgSrc="this.tripImgSrc"
          :tripPrice="this.tripPrice" ></proposed-TripCard> 
          <b-col md='3' >
            <b-button size="lg" type="submit" class="w-100" to="/AddNewTrip" 
            ><!--style="border-style: dashed; color: grey; border-color: grey; height:100%;"bg-transparent text-dark -->
            انشر رحلتك 
              <b-icon icon="plus" font-scale="1.5" aria-hidden="true"></b-icon>
            </b-button>
          </b-col> 
          </b-row>
          <div v-else class="justify-content-center my-5">
            <p class="text-dark m-3" >لا يوجد رحلة مقدمة انشر واحدة الان</p>
            <b-button size="lg" type="submit" class="w-25 mb-5" to="/AddNewTrip" 
            ><!--style="border-style: dashed; color: grey; border-color: grey; height:100%;"bg-transparent text-dark -->
            انشر رحلتك 
              <b-icon icon="plus" font-scale="1.5" aria-hidden="true"></b-icon>
            </b-button>
          </div>
          
         
     
      </div>
  </DashBoardLayout>
</template>
<script>
import DashBoardLayout from "@/layouts/dashBoardLayout";
import sectionHeaderTall from "@/components/sectionHeaderTall.vue";
import searchBar from "@/components/searchBar.vue";
import proposedTripCard from "@/components/proposedTripCard.vue";

export default {
    name: "ProposedTrips",
    components: {
        DashBoardLayout: DashBoardLayout,
        "section-HeaderTall": sectionHeaderTall,
        "search-bar": searchBar,
        'proposed-TripCard':proposedTripCard
    },
    data: function(){
        return{
            tripName:'اسم الرحلة',
            tripImgSrc:'imgCover.png',
            tripPrice:'3000'
        }
    }
}
</script>
<style>

</style>