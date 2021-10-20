<template>
  <b-col md="3">
    <b-modal hide-footer id="successfulDelete-model" dir="rtl">
      <template
        #modal-header="{ close }"
        class="justify-content-center border-0"
      >
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
        <b-img center src="@/assets/img/success.png" alt="Trip Deleted"></b-img>
        <h2 class="text-dark text-center">تم حذف الرحلة بنجاح</h2>
      </template>
    </b-modal>

    <b-modal id="sureOfDelete-model" hide-footer>
      <template
        #modal-header="{ close }"
        class="justify-content-center border-0"
      >
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
        <div class="m-3">
          <h4 class="text-center pb-3">
            هل انت متأكد من حذف الرحلة الخاصة بك؟
          </h4>
          <b-row class="justify-content-between">
            <b-col md="5"
              ><b-button
                v-b-modal.successfulDelete-model
                @click="$bvModal.hide('sureOfDelete-model')"
                class="bg-transparent"
                style="border: 2px solid #026873; color: #026873"
              >
                نعم، احذف الرحلة</b-button
              ></b-col
            >
            <b-col md="5">
              <b-button @click="$bvModal.hide('sureOfDelete-model')"
                >لا، لست متأكد</b-button
              ></b-col
            >
          </b-row>
        </div>
      </template>
    </b-modal>

    <b-card
      class="border-0 shadow bg-white rounded my-3"
      style="border-radius: 15px"
    >
      <div class="zoomImg mb-3">
        <b-card-img
          :src="getImgUrl(tripImgSrc)"
          alt="صور من الرحلة"
          img-top
          class="zoomImg"
        >
        </b-card-img>
      </div>

      <div class="px-4">
        <b-row align-v="center">
          <b-col>
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
        <b-row class="pb-2">
          <b-col>
            <b-button href="/EditTrip" variant="secondary" class="border-0"
              >تعديل</b-button
            >
          </b-col>
          <b-col>
            <b-button
              href="#"
              v-b-modal.sureOfDelete-model
              class="detalesBtn border-0"
              >حذف</b-button
            >
          </b-col>
        </b-row>
      </div>
    </b-card>
  </b-col>
</template>
<script>
export default {
  name: "Trips",
  data: function () {
    return {
      liked: false,
    };
  },
  props: ["tripName", "tripImgSrc", "tripPrice"],
  methods: {
    getImgUrl: function (pic) {
      return require("@/assets/img/" + pic);
    },
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
.TripImg {
  width: 100%;
  height: 220px;
  overflow: hidden;
  border-radius: 15px;
}

.TripImg:hover .card-img {
  -webkit-transform: scale(1.2);
  transform: scale(1.1);
  transition: 0.5s ease-in-out;
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
