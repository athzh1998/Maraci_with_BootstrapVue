<template>
  <DashBoardLayout>
    <div class="sectionsPadding sectionHeight">
      <section-header></section-header>
      <h1>عن مراسي</h1>
      <b-row align-h="center">
        <b-col md="10" class="text-dark pb-5">
          <h5 class="text-justify">
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
            النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد
            من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
          </h5>
        </b-col>
      </b-row>

      <div class="py-5">
        <b-row align-h="center"> 
          <b-col lg="6" md="10" class="pb-5">
            <b-card
              img-src="@/assets/img/ourVision.png"
              img-alt="Image"
              overlay
              class="catogary"
            >
              <div class="darkenImage h-100" style="border-radius: 10px">
                <b-row class="h-100" align-v="end">
                  <b-col>
                    <b-card-text class="text-white p-4">
                      <h3 style="font-size: 30px">الرؤية</h3>
                      <p class="text-white text-justify">
                        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد
                        تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد
                        مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة
                        عدد الحروف التى يولدها التطبيق.
                      </p>
                    </b-card-text>
                  </b-col>
                </b-row>
              </div>
            </b-card>
          </b-col>
          <b-col lg="6" md="10" class="pb-5" align-v="center">
            <b-card
              img-src="@/assets/img/ourMessage.png"
              img-alt="Image"
              overlay
              class="catogary"
            >
              <div class="darkenImage h-100" style="border-radius: 10px">
                <b-row class="h-100" align-v="end">
                  <b-col>
                    <b-card-text class="text-white p-4">
                      <h3 style="font-size: 30px">الرسالة</h3>
                      <p class="text-white text-justify">
                        هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد
                        تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد
                        مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة
                        عدد الحروف التى يولدها التطبيق.
                      </p>
                    </b-card-text>
                  </b-col>
                </b-row>
              </div>
            </b-card>
          </b-col>
        </b-row>
      </div>
    </div>
  </DashBoardLayout>
</template>

<script>
import DashBoardLayout from "@/layouts/dashBoardLayout";
import sectionHeader from "@/components/sectionHeader.vue";

export default {
  name: "About",
  components: {
    DashBoardLayout: DashBoardLayout,
    "section-header": sectionHeader,
  },
};
</script>

<style>
.darkenImage {
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 5%, rgba(0, 0, 0, 1));
}
</style>
