<template>
<LoginAndSignUpLayout>
<b-container class="loginBG">
  <b-row align-h="center">
    <b-col md='6' class="loginFormBackground my-5 pb-5">
      <b-row align-h="center">
        <b-col md='8'>
          <img
              src="../../public/img/logo.png"
              alt="Maraci Logo"
              height="130px"
              width="auto"
            />

          
            <div class="p-2">

    <!----------------------------------------------------------------------------------------->

              <b-form v-if="login">
                <h3>تسجيل الدخول</h3>
                <br>
                <br>
                <div class="pb-3">
                  <label for="phone" class="labelRight">رقم الجوال</label>
                  <b-form-input
                    id="phone"
                    type="text"
                    class="p-2"
                  ></b-form-input>
                </div>
                <div class="pb-3">
                <label for="password" class="labelRight">الرقم السري</label>
                  <b-form-input
                    id="password"
                    type="password"
                    class="p-2"
                  ></b-form-input>
                </div>
                  
                    <b-row align-h="between" class="pb-3" >
                      <b-col><b-form-checkbox value="me">تذكرني</b-form-checkbox></b-col>
                      <b-col><a href="#"  @click="login=false; forgetPassword=true;" class="text-left">نسيت الرقم السري</a></b-col>
                    </b-row>

                    <b-row class="pb-3">
                      <b-col><b-button block >تسجيل الدخول</b-button></b-col>
                      <b-col><b-button block class="bg-transparent outline-light"
                      @click="login=false; signUp=true;">إنشاء حساب</b-button></b-col>
                    </b-row>
              </b-form>


          <!----------------------------------------------------------------------------------------->


          <b-form v-if="signUp">
                <h3>إنشاء حساب</h3>
                <br>
                <br>
                <div class="pb-3">
                  <label for="name" class="labelRight">الاسم</label>
                  <b-form-input
                    id="name"
                    type="text"
                    class="p-2"
                  ></b-form-input>
                </div>
                <div class="pb-3">
                  <label for="phone" class="labelRight">رقم الجوال</label>
                  <b-form-input
                    id="phone"
                    type="text"
                    class="p-2"
                  ></b-form-input>
                </div>
                <div class="pb-3">
                <label for="password" class="labelRight">الرقم السري</label>
                  <b-form-input
                    id="password"
                    type="password"
                    class="p-2"
                  ></b-form-input>
                </div>
                    <b-row class="pb-3" align-v="center" align-h="between">
                      <b-col md='6'><b-button block >إنشاء حساب</b-button></b-col>
                      <b-col md='6'><a href="#" class="text-left"  @click="login=true; signUp=false;">لدي حساب بالفعل</a></b-col>
                    </b-row>
              </b-form>

              <!----------------------------------------------------------------------------------------->

              <b-form v-if="forgetPassword">
                <h3>استعادة كلمة المرور</h3>
                <br>
                <br>
                <div class="pb-3">
                  <label for="phone" class="labelRight">رقم الجوال</label>
                  <b-form-input
                    id="phone"
                    type="text"
                    class="p-2"
                  ></b-form-input>
                </div>
                
                    <b-row class="pb-3" align-v="center" align-h="between">
                      <b-col><b-button block @click="forgetPassword=false; resetPassword=true;">استعادة</b-button></b-col>
                      <b-col><a href="" class="text-left"  @click="login=true; forgetPassword=false;">الغاء</a></b-col>
                    </b-row>
              </b-form>

<!----------------------------------------------------------------------------------------->

              <b-form v-if="validation">
                <h3>التحقق من الحساب</h3>
                <br>
                <br>
                <div class="pb-3">
                  <label for="code" class="labelRight">كود التحقق المرسل على رقم الجوال</label>
                  <b-form-input
                    id="code"
                    type="text"
                    class="p-2"
                  ></b-form-input>
                </div>
                
                    <b-row class="pb-3" align-v="center" align-h="between">
                      <b-col><b-button block @click="resetPassword=true; validation=false;">تحقق</b-button></b-col>
                      <b-col><a href="" class="text-left">اعد ارساله الى الجوال</a></b-col>
                    </b-row>
              </b-form>

<!----------------------------------------------------------------------------------------->

              <b-form v-if="resetPassword">
                <h3>تغيير كلمة السر</h3>
                <br>
                <br>
                <div class="pb-3">
                  <label for="newPassword" class="labelRight">الرقم السري الجديد</label>
                  <b-form-input
                    id="newPassword"
                    type="password"
                    class="p-2"
                  ></b-form-input>
                </div>

                <div class="pb-3">
                  <label for="newPassword2" class="labelRight">تأكيد الرقم السري الجديد</label>
                  <b-form-input
                    id="newPassword2"
                    type="password"
                    class="p-2"
                  ></b-form-input>
                </div>
                
                    <b-row class="pb-3" align-v="center" align-h="between">
                      <b-col><b-button block @click="login=true; resetPassword=false;">حفظ</b-button></b-col>
                      <b-col><a href="" class="text-left" @click="login=true; resetPassword=false;">الغاء</a></b-col>
                    </b-row>
              </b-form>


            </div>
        </b-col>
      </b-row> 
    </b-col>
  </b-row>
 
</b-container>
   </LoginAndSignUpLayout>
</template>

<script>
import LoginAndSignUpLayout from '@/layouts/loginAndSignUpLayout';
export default {
  name: 'login',
  data: function (){
    return{
      login: true,
      signUp: false,
      forgetPassword: false,
      validation: false,
      resetPassword:false
    };
    
  }, 
  components: {
    'LoginAndSignUpLayout' : LoginAndSignUpLayout
  }
}
</script>
<style>
.loginFormBackground{
  background-color: rgb(0, 6, 22, 0.8);
}


.labelRight{
  display: flex;
}
</style>