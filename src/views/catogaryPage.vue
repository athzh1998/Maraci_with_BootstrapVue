<template>
  <DashBoardLayout>
    <b-container class="sectionsPadding">
      <b-row class="pb-5" style="min-height: calc(100vh - 120px)" >
        <b-col md="6" class="pt-4">
          <b-img
            src="@/assets/img/imgCover.png"
            alt="catogary 1 Header"
            class="imgSize"
          >
          </b-img>
        </b-col>
        <b-col md="6">
          <section-header-tall></section-header-tall>
          <div class="py-md-5">
            <h1>إستئجار يخت</h1>
          <br />
          <h5 class="text-justify">
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
            النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد
            من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
          </h5>
          </div>
          
        </b-col>
      </b-row>

      <!---------Serch Bar--------->
      <search-bar></search-bar>
      <!--------------------------->

        <div v-for="trip in Trips"  :key="trip.id">
          <h4>{{trip.name}}</h4>
        </div>
      <b-row  class="pb-5">
       
        <tripCard v-for="trip in trips"
          :key="trip.id"
          :id="trip.id"
          :tripName="trip.name"
          :tripImgSrc="trip.imgSource"
          :tripPrice="trip.price"></tripCard>
        
      </b-row>
    </b-container>
  </DashBoardLayout>
</template>

<script>
import DashBoardLayout from "@/layouts/dashBoardLayout";
import sectionHeaderTall from "@/components/sectionHeader.vue";
import searchBar from "@/components/searchBar.vue";
import TripCard from "@/components/tripCard.vue";

var dropdownSelect=document.getElementsByClassName('dropdown-select');
var select=document.getElementsByClassName('select');
var dropdownList=document.getElementsByClassName('dropdown-list');


dropdownSelect.onclick = function() {
  dropdownList.classList.toggle('dropdown-list')
}

dropdownList.onclick = function(){
    select.innerHTML='click';
  }


export default {
  name: "trips",
  components: {
    DashBoardLayout: DashBoardLayout,
    "section-header-tall": sectionHeaderTall,
    "search-bar": searchBar,
    "tripCard": TripCard,
  },
   
  data() {
    return {
      Trips: []
    }
  },
  
};
</script>
<style>
.topCol {
  align-items: start !important;
}

.imgSize {
  max-width: 100%;
  height: auto;
}



</style>
