<template>
  <DashBoardLayout>
    <div class="sectionPadding sectionHeight">
      <section-header></section-header>
      <h1>اتصل بنا</h1>
      <b-row class="h-100" align-h="center" align-v="center">
        <b-col md="10" class="callUsText pb-5">
          <br /><br /><br />
          <h5 class="px-2">
            إذا كنت ترغب في سماع صوت في الطرف الآخر ، فنحن موجودون من أجلك بكل
            ما تحتاجه.
          </h5>
          <br />
          <h5>اتصل على</h5>
          <h5 style="font-weight: bold">05046773900</h5>
          <br />
          <h5>
            خطوط الهاتف لدينا مفتوحة:<br />
            السبت - الخميس 09:00 صباحا - 10:00 مساءا<br />
            الجمعة 2:00 مساءا - 10:00 مساءا
          </h5>
        </b-col>
      </b-row>
    </div>
  </DashBoardLayout>
</template>

<script>
import DashBoardLayout from "@/layouts/dashBoardLayout";
import sectionHeader from "@/components/sectionHeader.vue";

export default {
  name: "CallUS",
  components: {
    DashBoardLayout: DashBoardLayout,
    "section-header": sectionHeader,
  },
};
</script>
<style>
.callUsText {
  font-size: 20px;
  color: #014e57;
}
</style>
