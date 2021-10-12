<template>
  <dash-BoardLayout>
    <div class="loginBG">
      <b-container class="sectionsPadding">
        <b-row class="sectionHeight w-100" align-v="center">
          <b-col md="4">
            <div class="darkenBackground p-2 w-100">
              <b-row>
                <b-col md="10"><h5>اعدادات الحساب الشخصي</h5></b-col>
                <b-col md="2"
                  ><a href=""
                    ><b-icon
                      icon="pencil-square"
                      aria-hidden="true"
                    ></b-icon></a
                ></b-col>
              </b-row>
              <b-row>
                <b-col><p class="profileParagraph">الإسم</p></b-col>
                <b-col></b-col>
              </b-row>
              <b-row>
                <b-col><p class="profileParagraph">رقم الجوال</p></b-col>
                <b-col></b-col>
              </b-row>
              <b-row>
                <b-col><p class="profileParagraph">المدينة</p></b-col>
                <b-col></b-col>
              </b-row>
            </div>
          </b-col>

          <b-col md="4">
            <div class="darkenBackground p-5 w-100"></div>
          </b-col>
          <b-col md="4">
            <div class="darkenBackground p-5 w-100"></div>
          </b-col>
        </b-row>
      </b-container>
    </div>
  </dash-BoardLayout>
</template>
<script>
import DashBoardLayout from "@/layouts/dashBoardLayout";
export default {
  name: "Profile",
  components: {
    "dash-BoardLayout": DashBoardLayout,
  },
};
</script>
<style>
.darkenBackground {
  background-color: rgba(0, 6, 22, 0.8);
}
.profileParagraph {
  color: white;
  font-size: 16px;
}
</style>
