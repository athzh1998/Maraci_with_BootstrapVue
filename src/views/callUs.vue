<template>
  <DashBoardLayout>
    <div class="sectionPadding sectionHeight">
      <section-header></section-header>
      <h1>اتصل بنا</h1>
      <b-row class="h-100" align-h="center" align-v="center">
        <b-col md="10" class="callUsText pb-5">
          <br /><br />
          <p class="px-2">
            إذا كنت ترغب في سماع صوت في الطرف الآخر ، فنحن موجودون من أجلك بكل
            ما تحتاجه.
          </p>
          <br />
          <p>اتصل على</p>
          <p style="font-weight: bold">05046773900</p>
          <br />
          <p>
            خطوط الهاتف لدينا مفتوحة:<br />
            السبت - الخميس 09:00 صباحا - 10:00 مساءا<br />
            الجمعة 2:00 مساءا - 10:00 مساءا
          </p>
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
  font-size: 22px;
  color: #014e57;
}
</style>
