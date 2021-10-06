<template>
  <div class="sectionsPadding">
    <section-header></section-header>
    <h1>عن مراسي</h1>
    <b-row align-h="center">
      <b-col md='10' class="text-dark pb-5"> 
        <h5>
          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
        </h5>
      </b-col>
    </b-row>

    <div class="py-5">
      <b-row>
        <b-col md="6" sm='8' class="py-2">
          <b-card
              img-src="../../public/img/ourVision.png"
              img-alt="Image"
              overlay
              class="catogary"
              >
              <b-card-text class="text-white p-4">
                <h3>المدونة</h3>
                <p class="text-white text-left">

                          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
                </p>

              </b-card-text>
          </b-card>
        </b-col>
        <b-col md='6' sm='8' class="py-2">
          <b-card
              img-src="../../public/img/ourMessage.png"
              img-alt="Image"
              overlay
              class="catogary"
              >
              <b-card-text class="text-white p-4">
                <h3 >الرسالة</h3>
                <p class="text-white text-left">

                          هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
                </p>

              </b-card-text>
          </b-card>
        </b-col>
      </b-row>
    </div>
    
  </div>
</template>

<script>
import sectionHeader from '@/components/sectionHeader.vue';

export default {
  name: "About",
  components: {
    'section-header' : sectionHeader,
    },
}
</script>

<style>

</style>