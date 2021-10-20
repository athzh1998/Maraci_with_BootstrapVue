<template>
  <DashBoardLayout>
    <div class="sectionsPadding">
      <div class="baby-blueBG my-5">
        <div class="px-5 py-1">
          <h1 class="text-left">تعديل تفاصيل الرحلة</h1>
        </div>
        <b-row class="py-4" align-h="center">
          <b-col md="8">
            <b-form id="editForm">
              <div>
                <label for="tripName" class="d-flex">اسم الرحلة</label>
                <b-form-input
                  id="tripName"
                  type="text"
                  v-model="TripName"
                ></b-form-input>
              </div>
              <div>
                <label id="tripCatogarySelect" for="tripCatogary" class="d-flex"
                  >الفئة</label
                >
                <select class="Add-dropdown" v-model="TripCatogary">
                  <b-icon icon="chevron-down" class="icons"></b-icon>
                  <option value="1">تأجير يخت</option>
                  <option value="2">تأجير قارب</option>
                  <option value="3">رحلات بحرية</option>
                  <option value="4">رحلات صيد</option>
                </select>
              </div>
              <div>
                <label id="tripLocationSelect" for="tripLocation" class="d-flex"
                  >المدينة</label
                >
                <select class="Add-dropdown">
                  <b-icon icon="chevron-down" class="icons"></b-icon>
                  <option value="1">جدة</option>
                  <option value="2">ينبع</option>
                </select>
              </div>

              <div>
                <label for="tripName" class="d-flex">تفاصيل العرض</label>
                <b-form-textarea
                  id="textarea"
                  rows="5"
                  max-rows="9"
                  v-model="TripText"
                ></b-form-textarea>
              </div>
            </b-form>
          </b-col>
        </b-row>
      </div>

      <div class="baby-blueBG mb-4">
        <b-row class="py-4" align-h="center">
          <b-col md="8">
            <b-form>
              <div>
                <label for="tripName" class="d-flex">الأيام</label>
                <b-form-input
                  id="tripName"
                  type="text"
                  v-model="TripDayes[0]"
                ></b-form-input>
              </div>
              <div>
                <label for="tripName" class="d-flex">السعر</label>
                <b-form-input
                  id="tripName"
                  type="text"
                  v-model="TripPrice"
                ></b-form-input>
              </div>
              <div>
                <label for="tripName" class="d-flex">رقم التواصل</label>
                <b-form-input
                  id="tripName"
                  type="text"
                  v-model="ownerNumber"
                ></b-form-input>
              </div>

              <div class="justify-content-center">
                <label for="tripName" class="d-flex">صور المركب</label>
                <div class="bg-white p-2">
                  <h5 class="text-left px-2">تحميل الصور</h5>
                  <vue-upload-multiple-image
                    dragText="اسحب الملفات للرفع"
                    browseText="او اضغط لإختيار الملفات"
                    primaryText="تم الرفع"
                    dropText="افلت الملفات هنا"
                    popupText="عنوان الصورة"
                    @upload-success="uploadImageSuccess"
                    @before-remove="beforeRemove"
                    @edit-image="editImage"
                    @data-change="dataChange"
                    :data-images="images"
                  ></vue-upload-multiple-image>
                </div>
                <b-row class="py-3" align-v="center">
                  <b-col>
                    <b-button class="btn-secondary w-75">تعديل</b-button>
                  </b-col>
                  <b-col>
                    <div>
                      <a
                        href=""
                        class="linksLogin"
                        style="font-size: 20px; color: #026873"
                        >الغاء</a
                      >
                    </div>
                  </b-col>
                </b-row>
              </div>
            </b-form>
          </b-col>
        </b-row>
      </div>
    </div>
  </DashBoardLayout>
</template>
<script>
import DashBoardLayout from "@/layouts/dashBoardLayout";
import VueUploadMultipleImage from "vue-upload-multiple-image";
export default {
  name: "EditTrip",
  data() {
    return {
      TripName: "رحلة الى البحر",
      TripCatogary: "3",
      TripLocation: "2",
      TripText:
        "هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.",
      TripDayes: ["الأحد", "الخميس"],
      TripPrice: "3000",
      ownerNumber: "0538195111",
      images: [],
    };
  },
  mounted() {
    //let catogaryId = this.TripCatogary;
    //let locationId = this.TripLocation;
    //this.editForm.controls['tripCatogarySelect'].setValue(catogaryId);
    //this.editForm.controls['tripLocationSelect'].setValue(locationId);
  },
  components: {
    DashBoardLayout: DashBoardLayout,
    VueUploadMultipleImage,
  },
  methods: {
    uploadImageSuccess(formData, index, fileList) {
      console.log("data", formData, index, fileList);
      // Upload image api
      // axios.post('http://your-url-upload', { data: formData }).then(response => {
      //   console.log(response)
      // })
    },
    beforeRemove(index, done, fileList) {
      console.log("index", index, fileList);
      var r = confirm("remove image");
      if (r == true) {
        done();
      }
    },
    editImage(formData, index, fileList) {
      console.log("edit data", formData, index, fileList);
    },
    dataChange(data) {
      console.log(data);
    },
  },
};
</script>
<style></style>
