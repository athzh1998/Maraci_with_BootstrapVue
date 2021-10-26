<template>
  <DashBoardLayout>
    <div class="sectionsPadding sectionHeight">
      <section-HeaderTall></section-HeaderTall>
      <h1>كل الرحلات</h1>
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
      
    <b-row class="my-4 h-100">
      <b-col lg='3' md='4' v-for="trip in Trips" :key="trip.id">
          
          <tripCard
          :id="trip.id"
          :tripName="trip.name"
          :tripAvailableNumber="trip.tripAvailableNumber"
          :tripOwner="trip.tripOwner"
          :tripText="trip.tripText"
          :tripImgSrc="trip.imgSource"
          :tripPrice="trip.price"
          :tripPhone="trip.tripPhone"
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
        liked:false,
      Trips: [
        {
          imgSource: "imgCover.png",
          name: "رحلة 1",
          price: "100",
          id: 1,
          tripAvailableNumber: '1',
          tripOwner: 'عبدالله محمد',
          tripText: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.',
          tripPhone:'0538195111'
        },
        {
          imgSource: "imgCover.png",
          name: "رحلة 2",
          price: "150",
          id: 2,
          tripAvailableNumber: '5',
          tripOwner: 'يوسف الشريف',
          tripText: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.',
          tripPhone:'0554440922'
        },
        {
          imgSource: "imgCover.png",
          name: "رحلة 3",
          price: "230",
          id: 3,
          tripAvailableNumber: '4',
          tripOwner: ' حسن الزهراني',
          tripText: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.',
          tripPhone:'0512991221'
        },
        {
          imgSource: "imgCover.png",
          name: "رحلة 4",
          price: "800",
          id: 4,
          tripAvailableNumber: '2',
          tripOwner: 'عبدالله القحطاني',
          tripText: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.',
          tripPhone:'0555555555'
        },
        {
          imgSource: "imgCover.png",
          name: "رحلة 5",
          price: "1000",
          id: 5,
          tripAvailableNumber: '5',
          tripOwner: 'أثير حسن',
          tripText: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.',
          tripPhone:'0505050505'
        },
        {
          imgSource: "imgCover.png",
          name: "رحلة 6",
          price: "120",
          id: 6,
          tripAvailableNumber: "6",
          tripOwner: 'نواف العصيمي',
          tripText: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.',
          tripPhone:'0126214235'
        },
        {
          imgSource: "imgCover.png",
          name: "رحلة 7",
          price: "800",
          id: 7,
          tripAvailableNumber: '2',
          tripOwner: 'عبدالله القحطاني',
          tripText: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.',
          tripPhone:'0555555555'
        },
        {
          imgSource: "imgCover.png",
          name: "رحلة 8",
          price: "1000",
          id: 8,
          tripAvailableNumber: '5',
          tripOwner: 'أثير حسن',
          tripText: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.',
          tripPhone:'0505050505'
        },
        {
          imgSource: "imgCover.png",
          name: "رحلة 9",
          price: "120",
          id: 9,
          tripAvailableNumber: "6",
          tripOwner: 'نواف العصيمي',
          tripText: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.',
          tripPhone:'0126214235'
        },
        
        {
          imgSource: "imgCover.png",
          name: "رحلة 10",
          price: "800",
          id: 10,
          tripAvailableNumber: '2',
          tripOwner: 'عبدالله القحطاني',
          tripText: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.',
          tripPhone:'0555555555'
        },
        {
          imgSource: "imgCover.png",
          name: "رحلة 11",
          price: "1000",
          id: 11,
          tripAvailableNumber: '5',
          tripOwner: 'أثير حسن',
          tripText: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.',
          tripPhone:'0505050505'
        },
        {
          imgSource: "imgCover.png",
          name: "رحلة 12",
          price: "120",
          id: 12,
          tripAvailableNumber: "6",
          tripOwner: 'نواف العصيمي',
          tripText: 'هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.',
          tripPhone:'0126214235'
        },
        
      ],
    }
  }
}
</script>

<style>

</style>