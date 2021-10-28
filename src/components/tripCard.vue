<template>
    <div style="border-radius: 15px">
      <b-card
      class="h-100 border-0 shadow bg-white rounded my-3"
      style="border-radius: 15px"
    >
      <div class="zoomImg mb-3">
        <b-card-img :src="getImgUrl(tripImgSrc)" alt="صور من الرحلة" img-top>
        </b-card-img>
      </div>

      <div class="px-4">
        <b-row align-v="center">
          <b-col md='8'>
            <b-card-title class="text-left"
              ><h4>{{ tripName }}</h4></b-card-title
            >
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
          <span class="boldAndBlue">{{ tripPrice }} ريال سعودي </span>
          <span class="text-dark"> للشخص الواحد </span>
        </b-card-text>
        <b-row class="pb-2" align-h="center">
          <b-col>
            <b-button
              v-b-modal="reservationModalId(id)"
              variant="secondary"
              class="border-0 px-1"
              >إحجز الآن</b-button
            >
          </b-col>
          <b-col>
            <b-button 
            v-b-modal="detailsModalId(id)" 
            class="detalesBtn border-0 px-1"
            >
            التفاصيل
            </b-button>
          </b-col>
        </b-row>
      </div>
    </b-card>
    <b-modal hide-footer :id="`reservation-model` + id">
      <template
        #modal-header="{ close }"
        class="justify-content-center border-0"
      >
        <h2 class="mx-auto">معلومات الاتصال للحجز</h2>
        <button
          type="button"
          aria-label="Close"
          class="close p-0 m-0"
          @click="close()"
        >
          <b-icon class="h4" icon="x" aria-hidden="true"></b-icon>
        </button>
      </template>
      <template class="text-center">
        <!--<imgSwiper></imgSwiper>-->
        <br />
        <h2 class="text-center" style="color: #026873">المالك: {{tripOwner}}</h2>
        <p class="text-center">
          بإمكانك الآن الاتصال للحجز والاستفسار بالرقم التالي:
        </p>
        <br />
        <h2 class="text-center">{{tripPhone}}</h2>
        <br />
        <br />
      </template>
    </b-modal>

    <b-modal size="lg" hide-footer :id="`details-model` + id" dir="rtl">
      <template
        #modal-header="{ close }"
        class="justify-content-center border-0"
      >
        <h2 class="mx-auto">تفاصيل الرحلة</h2>
        <button
          type="button"
          aria-label="Close"
          class="close p-0 m-0"
          @click="close()"
        >
          <b-icon class="h4" icon="x" aria-hidden="true"></b-icon>
        </button>
      </template>
      <template class="text-center">
        <!-- swiper -->
        
           <swiper :options="swiperOption" >
           <swiper-slide v-for="img in images" :key="img.id" class="mt-4">
             <img :src="getImgUrl(tripImgSrc)" style="width:100%; object-fit:cover;"/></swiper-slide>
             <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
   
       


        <div class="p-4">
          <b-row class="justify-content-between my-auto py-2">
            <b-col>
              <h2>{{tripName}}</h2>
            </b-col>
            <b-col>
              <p class="text-dark text-right">المالك: {{tripOwner}}</p>
            </b-col>
          </b-row>
          <p class="text-dark text-justify">
            {{tripText}}
          </p>
          <p class="boldAndBlue">
            {{ tripPrice }} ريال سعودي
            <span class="text-dark"> للشخص الواحد </span>
          </p>
          <p class="boldAndBlue">العدد المسموح = {{tripAvailableNumber}} اشخاص</p>
          <b-row class="justify-content-between align-items-center">
            <b-col>
              <p class="my-auto">
                <b-icon
                  icon="geo-alt-fill"
                  aria-hidden="true"
                  style="color: #9ad9c2"
                ></b-icon>
                جدة
              </p>
            </b-col>
            <b-col class="mx-auto pb-2">
              <b-button
                v-b-modal="reservationModalId(id)"
                class="btn-secondary mx-auto "
                >احجز الآن</b-button
              >
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
    </div>
    
</template>
<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  name: "Trips",
  data() {
    return {
      images: [
        {
          id: 1,
          img: "imgCover.png",
        },
        { id: 2, img: "imgCover.png" },
        { id: 3, img: "imgCover.png" },
        { id: 4, img: "imgCover.png" },
        { id: 5, img: "imgCover.png" },
        { id: 6, img: "imgCover.png" },
      ],
      
      swiperOption: {
          slidesPerView: 2.5,
          spaceBetween: 30,
          loop: true,
          centeredSlides: true,
          mousewheelControl: true, 
          keyboardControl: true, 
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          breakpoints: {
            1024: {
              slidesPerView: 2,
              spaceBetween: 40
            },
            768: {
              slidesPerView: 1.5,
              spaceBetween: 20
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 10
            }
          }
        }
    };
  },
  props: ["id", "tripName", "tripOwner", "tripText" , "tripAvailableNumber","tripPhone" ,"tripImgSrc", "tripPrice", "liked"],
  methods: {
    getImgUrl: function (pic) {
      return require("@/assets/img/" + pic);
    },
    reservationModalId(id) {
      return "reservation-model" + id;
    },
    detailsModalId(id) {
      return "details-model" + id;
    },
  },
  components: {
    Swiper,
    SwiperSlide,

  },
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

.card-img {
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

.swiper-wrapper{
  height: 400px !important;
}

.swiper-slide img{
  border-radius: 10px;
}

.swiper-slide-active {
  transform: scale(1.1);
  transition: 0.4s;
}

</style>
