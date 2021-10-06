<template>
  <b-container class="loginBG">
    <b-row  align-h="center">
      <b-col md='6' class="formBG">
        <img
            src="../../public/img/logo.png"
            alt="Maraci Logo"
            height="130px"
            width="auto"
          />
          <div class="login-form">
            <b-row align-h="center">
              <b-col md='8' sm='8'> 
                <b-form v-if="login" class="login-form">
                  <h3 class="mt-3">
                    تسجيل الدخول
                  </h3>
                  <div class="p-2">
                    <label for="phone-number" class="float-right">رقم الجوال</label>
                    <b-form-input type="text" required></b-form-input>
                  </div>
                  <div class="p-2">
                    <label for="password" class="float-right">الرقم السري</label>
                    <b-form-input type="password" required></b-form-input>
                  </div>
                  <div class="d-flex justify-content-between p-2">
                    <b-form-checkbox class="mb-2 mr-sm-2 mb-sm-0">تذكرني</b-form-checkbox>
                    <a href="#" @click="login=false; reset=true;">نسيت الرقم السري</a>
                  </div>
                  <div class="d-flex justify-content-between p-2">
                    <b-button class="btn-secondary btnWidth" >سجل الدخول</b-button>
                    <b-button @click="login=false; signup=true;" class="bg-transparent btn-outline-light btnWidth">إنشاء حساب</b-button>
                  </div>
                </b-form>


                <!---------------------------------------------------------------------->


                <b-form v-if="signup" class="sign-up-form" >
                  <h3 class="mt-3">
                    إنشاء حساب
                  </h3>
                  <div class="p-2">
                    <label for="user-name" class="float-right">الإسم</label>
                    <b-form-input type="text" required></b-form-input>
                  </div>
                  <div class="p-2">
                    <label for="phone-number" class="float-right">رقم الجوال</label>
                    <b-form-input type="text" required></b-form-input>
                  </div>
                  <div class="p-2">
                    <label for="password" class="float-right">الرقم السري</label>
                    <b-form-input type="password" required></b-form-input>
                  </div>
                  <div class="d-flex justify-content-between p-2">
                    <b-button class="btn-secondary btnWidth">إنشاء حساب</b-button>
                    <a href="#" @click="login=true; signup=false;">لدي حساب بالفعل</a>
                  </div>
                </b-form>



                <!---------------------------------------------------------------------->


                <b-form v-if="reset" class="forgeten-password-form">
                  <h3 class="mt-3">
                    إستعادة كلمة المرور
                  </h3>
                  <div class="p-2">
                    <label for="phone-number" class="float-right">رقم الجوال</label>
                    <b-form-input type="text" required></b-form-input>
                  </div>
                  <div class="d-flex justify-content-between p-2">
                    <b-button @click="reset=false; validation=true;" class="btn-secondary btnWidth">إستعادة</b-button>
                    <a href="#" @click="login=true; reset=false;">إلغاء</a>
                  </div>
                </b-form>

                

                <!---------------------------------------------------------------------->


                <b-form v-if="validation" class="Account-varification-form">
                  <h3 class="mt-3">
                    التحقق من الحساب
                  </h3>
                  <div class="p-2">
                    <label for="phone-number" class="float-right">كود التحقق المرسل على رقم الجوال</label>
                    <b-form-input type="text" required></b-form-input>
                  </div>
                  <div class="d-flex justify-content-between p-2">
                    <b-button @click="validation=false; changePassword=true;" class="btn-secondary btnWidth">تحقق</b-button>
                    <a href="#">timer</a>
                    <a href="#">أعد ارساله مرة آخرى</a>
                  </div>
                </b-form>


                <!---------------------------------------------------------------------->
                


                <b-form v-if="changePassword" class="change-password-form">
                  <h3 class="mt-3">
                    تغيير كلمة السر
                  </h3>
                  <div class="p-2">
                    <label for="password" class="float-right"> الرقم السري الجديد</label>
                    <b-form-input type="password" required></b-form-input>
                  </div>
                  <div class="p-2">
                    <label for="password2" class="float-right">تأكيد الرقم السري الجديد</label>
                    <b-form-input type="password" required></b-form-input>
                  </div>
                  <div class="d-flex justify-content-between p-2">
                    <b-button @click="changePassword=false; login=true;" class="btn-secondary btnWidth">حفظ</b-button>
                    <a href="#" @click="changePassword=false; login=true;">إلغاء</a>
                  </div>
                </b-form>
                
              </b-col>
            </b-row>
          </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

  export default {
    data() {
        return {
          login: true,
          signup: false,
          validation: false,
          changePassword: false,
          reset:false,
        };
      },
  }
</script>

<style>

.btnWidth{
  width:40%;
}

.formBG {
  background-color: rgb(0, 6, 22, 0.8);
  border-radius: 30px;
  padding: 4rem 0;
  margin: 2rem;
}
</style>
