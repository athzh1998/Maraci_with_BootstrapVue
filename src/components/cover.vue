<template>
  <b-row align-v="center" class="m-0 section1 justify-content-end">
    <b-col md="6" class="p-5">
      <div>
        <h5
          class="text-white text-justify pb-4"
          style="background-color: rgb(0, 6, 22, 0.8)"
        >
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
          النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من
          النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
        </h5>
        <div v-if="isloggedIn" align-v="center">
          <b-button
            size="lg"
            type="submit"
            class="btn-secondary w-75"
            to="/AddNewTrip"
            style="font-size: 20px !important; font-weight: bold"
            >انشر رحلتك
            <b-icon
              icon="plus"
              font-scale="1.5"
              aria-hidden="true"
              class="pt-1"
            ></b-icon>
          </b-button>
        </div>
        <div v-else>
          <b-button
            size="lg"
            type="submit"
            class="btn-secondary w-75"
            style="font-size: 20px !important; font-weight: bold"
            >سجل الآن</b-button
          >
        </div>
      </div>
    </b-col>
  </b-row>
</template>
<script>
export default {
  name: "cover",
  data: function () {
    return {
      
    };
  },
  props: {
  isloggedIn: Boolean,
  }
};
</script>
<style></style>
