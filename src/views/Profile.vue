<template>
  <DashBoardLayout>
    <div class="loginBG">
      <b-container class="sectionsPadding sectionHeight">
        <b-row class="py-5 justify-content-end">
          <b-col md="4">
            <b-button size="lg" type="submit" class="w-100" to="/AddNewTrip"
              >انشر رحلتك
              <b-icon icon="plus" font-scale="1.5" aria-hidden="true"></b-icon>
            </b-button>
          </b-col>
        </b-row>
        <b-row align-v="center" align-h="center" class="h-50">
          <b-col lg="4" md='10' class="pb-4">
            <div class="darkenBackground p-2 pb-3 w-100">
              <b-list-group
                horizontal
                class="bg-transparent border-0 justify-content-between p-0"
              >
                <b-list-group-item class="bg-transparent border-0"
                  ><h3>اعدادات الحساب الشخصي</h3></b-list-group-item
                >
                <b-list-group-item class="bg-transparent border-0"
                  ><a href="#" v-b-modal.modal-prevent-closing
                    ><b-icon
                      class="h5 text-white"
                      icon="pencil-square"
                      aria-hidden="true"
                    ></b-icon></a
                ></b-list-group-item>
              </b-list-group>
              <div class="pr-5 sm-p-0">
                <b-list-group
                  horizontal
                  class="
                    bg-transparent
                    border-0
                    justify-content-between
                    align-items-center
                  "
                >
                  <b-list-group-item class="bg-transparent border-0"
                    ><h5 class="text-white">الإسم</h5></b-list-group-item
                  >
                  <b-list-group-item class="bg-transparent border-0"
                    ><h5 class="text-white">{{ name }}</h5></b-list-group-item
                  >
                </b-list-group>
                <b-list-group
                  horizontal
                  class="
                    bg-transparent
                    border-0
                    justify-content-between
                    align-items-center
                  "
                >
                  <b-list-group-item class="bg-transparent border-0"
                    ><h5 class="text-white">رقم الجوال</h5></b-list-group-item
                  >
                  <b-list-group-item class="bg-transparent border-0"
                    ><h5 class="text-white">{{ phone }}</h5></b-list-group-item
                  >
                </b-list-group>
                <b-list-group
                  horizontal
                  class="
                    bg-transparent
                    border-0
                    justify-content-between
                    align-items-center
                  "
                >
                  <b-list-group-item class="bg-transparent border-0"
                    ><h5 class="text-white textStyle">المدينة</h5></b-list-group-item
                  >
                  <b-list-group-item class="bg-transparent border-0"
                    ><h5 class="text-white">{{ city }}</h5></b-list-group-item
                  >
                </b-list-group>
              </div>
            </div>
          </b-col>

          <b-col lg="4" md='10' class="pb-4">
            <div class="darkenBackground p-2 pb-3 w-100">
              <b-list-group
                horizontal
                class="bg-transparent border-0 justify-content-between p-0"
              >
                <b-list-group-item class="bg-transparent border-0"
                  ><h3>الرحلات المفضلة</h3></b-list-group-item
                >
                <b-list-group-item class="bg-transparent border-0"
                  ><router-link to="/profile/favorateTrips" href=""
                    ><b-icon
                      class="h5 text-white"
                      icon="arrow-left-circle"
                      aria-hidden="true"
                    ></b-icon></router-link>
                    </b-list-group-item>
              </b-list-group>
              <div>
                <p class="text-white" style="font-size: 60px">4</p>
              </div>
            </div>
          </b-col>

          <b-col lg="4" md='10' class="pb-4">
            <div class="darkenBackground p-2 pb-3 w-100">
              <b-list-group
                horizontal
                class="bg-transparent border-0 justify-content-between p-0"
              >
                <b-list-group-item class="bg-transparent border-0 head"
                  ><h3>الرحلات المقدمة</h3></b-list-group-item
                >
                <b-list-group-item class="bg-transparent border-0"
                  ><a href="/profile/ProposedTrips"
                    ><b-icon
                      class="h5 text-white"
                      icon="arrow-left-circle"
                      aria-hidden="true"
                    ></b-icon></a
                ></b-list-group-item>
              </b-list-group>
              <div>
                <p class="text-white" style="font-size: 60px">1</p>
              </div>
            </div>
          </b-col>
        </b-row>
        <b-modal id="modal-prevent-closing" dir="rtl">
          <template #modal-header="{ close }" class="justify-content-center">
            <h1 class="text-center">تحديث معلومات الحساب</h1>
            <button
              type="button"
              aria-label="Close"
              class="close p-0 m-0"
              @click="close()"
            >
              <b-icon class="h4" icon="x" aria-hidden="true"></b-icon>
            </button>
          </template>
          <template>
            <div class="px-3">
              <form>
                <b-form-group
                  label="الإسم"
                  label-for="name-input"
                  invalid-feedback="Name is required"
                  class="inputLabel"
                >
                  <b-form-input
                    id="name-input"
                    class="inputBorder"
                    :placeholder="name"
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  label="رقم الجوال"
                  label-for="phone-input"
                  invalid-feedback="Name is required"
                  class="inputLabel"
                >
                  <b-form-input
                    id="phone-input"
                    class="inputBorder"
                    :placeholder="phone"
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  label="المدينة"
                  label-for="city-input"
                  invalid-feedback="Name is required"
                  class="inputLabel"
                >
                  <b-form-input
                    id="city-input"
                    class="inputBorder"
                    :placeholder="city"
                  ></b-form-input>
                </b-form-group>
                <b-form-group
                  label="الرقم السري القديم"
                  label-for="oldPassword-input"
                  invalid-feedback="Name is required"
                  class="inputLabel"
                >
                  <b-form-input
                    id="oldPassword-input"
                    class="inputBorder"
                    type="password"
                    placeholder="********"
                  ></b-form-input>
                </b-form-group>

                <b-form-group
                  label="الرقم السري الجديد"
                  label-for="newPassword-input"
                  invalid-feedback="Name is required"
                  class="inputLabel"
                >
                  <b-form-input
                    id="newPassword-input"
                    class="inputBorder"
                    type="password"
                    placeholder="أدخل الباسوورد الجديد"
                  ></b-form-input>
                </b-form-group>
              </form>
            </div>
          </template>
          <template #modal-footer="{ ok, cancel }">
            <button type="button" class="btn btn-secondary w-30" @click="ok()">
              تحديث
            </button>
            <button type="button" class="btn btn-link w-30" @click="cancel()">
              إلغاء
            </button>
          </template>
        </b-modal>
      </b-container>
    </div>
  </DashBoardLayout>
</template>
<script>
import DashBoardLayout from "@/layouts/dashBoardLayout";
export default {
  name: "Profile",
  components: {
    DashBoardLayout: DashBoardLayout,
  },
  data: function () {
    return {
      name: "أثير",
      phone: "0553819511",
      city: "جدة",
    };
  },
};
</script>
<style>

/*@media only screen and (max-width: 868px) {
  .textStyle {
    font-size: 30px;
  }

}*/

.modal-footer {
  justify-content: center !important;
}
.darkenBackground {
  background-color: rgba(133, 161, 240, 0.8);
  border-radius: 25px;
  height: 250px;
  color: white;
}
.inputBorder {
  border-color: #026873 !important;
  border-width: 2px !important;
  border-radius: 10px !important;
  font-size: 20px !important;
}
.inputLabel {
  color: #014e57 !important;
  font-size: 20px !important;
}
.w-30 {
  width: 30% !important;
}
</style>
