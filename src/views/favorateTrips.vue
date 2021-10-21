<template>
  <DashBoardLayout>
    <div class="sectionsPadding sectionHeight">
      <section-HeaderTall></section-HeaderTall>
      <h1>الرحلات المفضلة</h1>
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
      
    <b-row class="my-4">
        <b-col md='3' v-for="trip in Trips" :key="trip.id">
            <tripCard
            :id="trip.id"
            :tripName="trip.name"
            :tripImgSrc="trip.imgSource"
            :tripPrice="trip.price"
            :liked="liked"
            ></tripCard>
        </b-col>
    </b-row>
      
      
          
    </div>
  </DashBoardLayout>
</template>

<script>
import DashBoardLayout from "@/layouts/dashBoardLayout";
import sectionHeaderTall from "@/components/sectionHeaderTall.vue";
import searchBar from "@/components/searchBar.vue";
import TripCard from "@/components/tripCard.vue";

export default {
  name: "FavorateTrips",
  components: {
    DashBoardLayout: DashBoardLayout,
    "section-HeaderTall": sectionHeaderTall,
    "search-bar": searchBar,
    tripCard: TripCard,
  },
  data: function () {
      return {
        liked:true,
        Trips: [
            {
            imgSource: "imgCover.png",
            name: "رحلة 1",
            price: "100",
            id: 1,
            },
            {
            imgSource: "imgCover.png",
            name: "رحلة 2",
            price: "150",
            id: 2,
            },
            {
            imgSource: "imgCover.png",
            name: "رحلة 4",
            price: "800",
            id: 4,
            },
            {
            imgSource: "imgCover.png",
            name: "رحلة 6",
            price: "120",
            id: 6,
            
            },
            {
            imgSource: "imgCover.png",
            name: "رحلة 8",
            price: "520",
            id: 8,
            
            },
        ],
    }
  }
}
</script>

<style>

</style>