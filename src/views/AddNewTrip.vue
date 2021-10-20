<template>
  <DashBoardLayout>
    <div class="sectionsPadding sectionHeight">
      <section-HeaderTall></section-HeaderTall>
      <h1>الرحلات المقدمة</h1>
      <b-row align-h="center">
        <b-col md="10" class="text-dark pb-5">
          <h5 class="px-2 text-justify">
            هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا
            النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد
            من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
          </h5>
        </b-col>
      </b-row>
      <div class="baby-blueBG mb-4">
        <div class="px-5 py-1">
          <h1 class="text-left">تفاصيل الرحلة</h1>
        </div>
        <b-row class="py-4" align-h="center">
          <b-col md="8">
            <b-form>
              <div>
                <label for="tripName" class="d-flex">اسم الرحلة</label>
                <b-form-input id="tripName" type="text"></b-form-input>
              </div>
              <div>
                <label for="tripName" class="d-flex">الفئة</label>

                <select class="Add-dropdown">
                  <b-icon icon="chevron-down" class="icons"></b-icon>
                  <option valut="1">تأجير يخت</option>
                  <option value="2">تأجير قارب</option>
                  <option value="3">رحلات بحرية</option>
                  <option value="4">رحلات صيد</option>
                </select>
              </div>
              <div>
                <label for="tripName" class="d-flex">المدينة</label>
                <select class="Add-dropdown">
                  <b-icon icon="chevron-down" class="icons"></b-icon>
                  <option value="Jed">جدة</option>
                  <option value="Yun">ينبع</option>
                </select>
              </div>

              <div>
                <label for="tripName" class="d-flex">تفاصيل العرض</label>
                <b-form-textarea
                  id="textarea"
                  rows="5"
                  max-rows="9"
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
                <b-form-input id="tripName" type="text"></b-form-input>
              </div>
              <div>
                <label for="tripName" class="d-flex">السعر</label>
                <b-form-input id="tripName" type="text"></b-form-input>
              </div>
              <div>
                <label for="tripName" class="d-flex">رقم التواصل</label>
                <b-form-input id="tripName" type="text"></b-form-input>
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
                    <b-button class="btn-secondary w-75">نشر</b-button>
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
import sectionHeaderTall from "@/components/sectionHeaderTall.vue";
import VueUploadMultipleImage from "vue-upload-multiple-image";
export default {
  name: "NewTrip",
  data() {
    return {
      images: [],
    };
  },
  components: {
    DashBoardLayout: DashBoardLayout,
    "section-HeaderTall": sectionHeaderTall,
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

<style>
.baby-blueBG {
  background-color: #d9e7e2;
  border-radius: 10px;
  font-size: 30px;
  color: #014e57;
}

.Add-dropdown {
  width: 100%;
  color: #014e57;
  background-color: #fff;
  border: 1px solid #9ad9c2;
  cursor: pointer;
  border-radius: 8px;
}

.Add-dropdown:focus,
.Add-dropdown:hover {
  outline: none;
  border: 1px solid #3c776f;
}

.Add-dropdown option {
  border: none;
}
</style>
