<template>
  <DashBoardLayout>
    <b-container class="sectionsPadding">
      <b-row align-h="center" >
        <b-col lg="6" >
          <b-img
            src="@/assets/img/imgCover.png"
            alt="catogary 1 Header"
            class="imgSize pt-5"
          >
          </b-img>
        </b-col>
        <b-col lg="6" md="10">
          <section-header-tall></section-header-tall>
          <div class="py-lg-5">
            <h1>إستئجار يخت</h1>
            <br />
            <h5 class="text-justify">
              هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد
              هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو
              العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها
              التطبيق.
            </h5>
          </div>
        </b-col>
      </b-row>

      <!---------Serch Bar--------->
      <search-bar></search-bar>
      <!--------------------------->

     
      <b-row class="pb-5">
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
    </b-container>
  </DashBoardLayout>
</template>

<script>
import DashBoardLayout from "@/layouts/dashBoardLayout";
import sectionHeaderTall from "@/components/sectionHeader.vue";
import searchBar from "@/components/searchBar.vue";
import TripCard from "@/components/tripCard.vue";

var dropdownSelect = document.getElementsByClassName("dropdown-select");
var select = document.getElementsByClassName("select");
var dropdownList = document.getElementsByClassName("dropdown-list");

dropdownSelect.onclick = function () {
  dropdownList.classList.toggle("dropdown-list");
};

dropdownList.onclick = function () {
  select.innerHTML = "click";
};

export default {
  name: "trips",
  components: {
    DashBoardLayout: DashBoardLayout,
    "section-header-tall": sectionHeaderTall,
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
        
      ],
    };
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
