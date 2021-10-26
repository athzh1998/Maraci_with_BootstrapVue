<template>
  <LoginAndSignUpLayout>
    <div class="loginBG sectionHeight">
      <b-row align-h="center">
        <b-col md="6" class="loginFormBackground my-5 pb-5">
          <b-row align-h="center">
            <b-col md="8">
              <img
                src="@/assets/img/logo.png"
                alt="Maraci Logo"
                height="130px"
                width="auto"
              />

              <div class="p-2">
                <!----------------------------------------------------------------------------------------->

                <b-form action="https://vuejs.org/" method="post" v-if="login">
                  <h3>تسجيل الدخول</h3>
                  <br />
                  <br />
                  <div class="pb-3">
                    <label for="email" class="d-flex">البريد الإلكتروني</label>
                    <b-form-input
                      type="text"
                      class="p-2"
                      v-model="email"
                      required
                    ></b-form-input>
                    <small v-if="invalidEmail" style="color: red">
                      {{ emailErrorMessage }}</small
                    >
                  </div>
                  <div class="pb-3">
                    <label for="password" class="d-flex">الرقم السري</label>
                    <b-form-input
                      id="password"
                      type="password"
                      class="p-2"
                      v-model="password"
                    ></b-form-input>
                    <small
                      v-if="invalidPassword"
                      style="color: red"
                    >
                      {{ passwordErrorMessage }}</small
                    >
                  </div>

                  <b-row align-h="between" class="pb-3">
                    <b-col
                      ><div class="float-right">
                        <b-form-checkbox value="me">تذكرني</b-form-checkbox>
                      </div></b-col
                    >
                    <b-col
                      ><div class="float-left">
                        <a
                          href="#"
                          class="linksLogin"
                          @click="
                            login = false;
                            forgetPassword = true;
                          "
                          >نسيت الرقم السري</a
                        >
                      </div></b-col
                    >
                  </b-row>

                  <b-row class="pb-3">
                    <b-col
                      ><b-button block class="btn-secondary" @click="isValid"
                        >تسجيل الدخول</b-button
                      ></b-col
                    >
                    <b-col
                      ><b-button
                        block
                        class="bg-transparent outline-light"
                        @click="
                          login = false;
                          signUp = true;
                        "
                        >إنشاء حساب</b-button
                      ></b-col
                    >
                  </b-row>
                </b-form>

                <!----------------------------------------------------------------------------------------->

                <b-form v-if="signUp">
                  <h3>إنشاء حساب</h3>
                  <br />
                  <br />
                  <div class="pb-3">
                    <label for="name" class="d-flex">الاسم</label>
                    <b-form-input
                      id="name"
                      type="text"
                      class="p-2"
                    ></b-form-input>
                  </div>
                  <div class="pb-3">
                    <label for="email" class="d-flex">البريد الإلكتروني</label>
                    <b-form-input
                      type="text"
                      class="p-2"
                      v-model="email"
                      required
                    ></b-form-input>
                    <small v-if="email && invalidEmail" style="color: red">
                      {{ emailErrorMessage }}</small
                    >
                  </div>
                  <div class="pb-3">
                    <label for="password" class="d-flex">الرقم السري</label>
                    <b-form-input
                      id="password"
                      type="password"
                      class="p-2"
                      v-model="password"
                    ></b-form-input>
                    <small
                      v-if="password && invalidPassword"
                      style="color: red"
                    >
                      {{ passwordErrorMessage }}</small
                    >
                  </div>
                  <b-row class="pt-2 pb-3" align-v="center" align-h="between">
                    <b-col
                      ><b-button class="btn-secondary" @click="isValid"
                        >إنشاء حساب</b-button
                      ></b-col
                    >
                    <b-col
                      ><div class="float-left">
                        <a
                          href="#"
                          class="linksLogin"
                          @click="
                            login = true;
                            signUp = false;
                          "
                          >لدي حساب بالفعل</a
                        >
                      </div></b-col
                    >
                  </b-row>
                </b-form>

                <!----------------------------------------------------------------------------------------->

                <b-form v-if="forgetPassword">
                  <h3>استعادة كلمة المرور</h3>
                  <br />
                  <br />
                  <div class="pb-3">
                    <label for="email" class="d-flex">البريد الإلكتروني</label>
                    <b-form-input
                      type="text"
                      class="p-2"
                      v-model="email"
                      required
                    ></b-form-input>
                    <small v-if="email && invalidEmail" style="color: red">
                      {{ emailErrorMessage }}</small
                    >
                  </div>

                  <b-row class="pb-3" align-v="center" align-h="between">
                    <b-col
                      ><b-button
                        class="btn-secondary"
                        block
                        @click="
                          forgetPassword = false;
                          validation = true;
                          resendVerificationCodeTimer();
                        "
                        >استعادة</b-button
                      ></b-col
                    >
                    <b-col
                      ><div class="float-left">
                        <a
                          href=""
                          class="linksLogin"
                          @click="
                            login = true;
                            forgetPassword = false;
                          "
                          >الغاء</a
                        >
                      </div></b-col
                    >
                  </b-row>
                </b-form>

                <!----------------------------------------------------------------------------------------->

                <b-form v-if="validation">
                  <h3>التحقق من الحساب</h3>
                  <br />
                  <br />
                  <div class="pb-3">
                    <label for="code" class="d-flex"
                      >كود التحقق المرسل على البريد الالكتروني</label
                    >
                    <b-form-input
                      id="code"
                      type="text"
                      class="p-2"
                    
                    ></b-form-input>
                  </div>

                  <b-row class="pb-3" align-v="center" align-h="between">
                    <b-col
                      ><b-button
                        class="btn-secondary"
                        block
                        @click="
                          resetPassword = true;
                          validation = false;
                        "
                        >تحقق</b-button
                      ></b-col
                    >
                    <b-col
                      ><div class="float-left">
                        <div v-if="timer != 0">
                          انتظر
                          {{ timer | minutesAndSeconds }}
                          دقيقة
                        </div>
                        <a
                          v-else
                          href="#"
                          class="linksLogin"
                          @click="resendVerificationCodeTimer()"
                          >اعد ارساله الى الجوال</a
                        >
                      </div></b-col
                    >
                  </b-row>
                </b-form>

                <!----------------------------------------------------------------------------------------->

                <b-form v-if="resetPassword">
                  <h3>تغيير كلمة السر</h3>
                  <br />
                  <br />
                  <div class="pb-3">
                    <label for="newPassword" class="d-flex"
                      >الرقم السري الجديد</label
                    >
                    <b-form-input
                      id="newPassword"
                      type="password"
                      class="p-2"
                    ></b-form-input>
                  </div>

                  <div class="pb-3">
                    <label for="newPassword2" class="d-flex"
                      >تأكيد الرقم السري الجديد</label
                    >
                    <b-form-input
                      id="newPassword2"
                      type="password"
                      class="p-2"
                    ></b-form-input>
                  </div>

                  <b-row class="pb-3" align-v="center" align-h="between">
                    <b-col
                      ><b-button
                        class="btn-secondary"
                        block
                        @click="
                          login = true;
                          resetPassword = false;
                        "
                        >حفظ</b-button
                      ></b-col
                    >
                    <b-col
                      ><div class="float-left">
                        <a
                          href=""
                          class="linksLogin"
                          @click="
                            login = true;
                            resetPassword = false;
                          "
                          >الغاء</a
                        >
                      </div></b-col
                    >
                  </b-row>
                </b-form>
              </div>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>
  </LoginAndSignUpLayout>
</template>

<script>
import LoginAndSignUpLayout from "@/layouts/loginAndSignUpLayout";
const MINUTES = 3 * 60;
export default {
  name: "login",
  data: () => {
    return {
      errors: [],
      name: null,
      email: '',
      password: '',
      invalidEmail: null,
      invalidPassword: null,
      login: true,
      signUp: false,
      forgetPassword: false,
      validation: false,
      resetPassword: false,
      emailErrorMessage: null,
      passwordErrorMessage: null,
      timer: MINUTES,
    };
  },
  filters: {
    minutesAndSeconds(value) {
      var minutes = Math.floor(parseInt(value, 10) / 60);
      var seconds = parseInt(value, 10) - minutes * 60;
      return `${minutes}:${seconds}`;
    },
  },
  components: {
    LoginAndSignUpLayout: LoginAndSignUpLayout,
  },

  mounted() {
    setInterval(() => {
      if (this.timer == 0) return;
      else this.timer -= 1;
    }, 1000);
  },

  methods: {
    resendVerificationCodeTimer() {
      this.timer = MINUTES;
    },
    isValid() {
      if (this.email.length===0 || !this.email.includes('@') || !this.email.includes('.')) {
        this.invalidEmail = true;
        this.emailErrorMessage = "البريد الإلكتروني المدخل غير صحيح";
      }else {
        this.invalidEmail = false;
        this.emailErrorMessage = "";
      }

      if (this.password.length < 8) {
        this.invalidPassword = true;
        this.passwordErrorMessage = "كلمة المرور يجب ان تكون اكثر من 8 خانات";
      }
      else {
        this.invalidPassword = false;
        this.passwordErrorMessage = "";
      }

      if (!this.invalidEmail && !this.invalidPassword) {
        window.location.href = "/";
      }
      

      
    },
  },
};
</script>
<style>
.loginFormBackground {
  background-color: rgb(0, 6, 22, 0.8);
}

.linksLogin {
  color: #9ad9c2;
  text-decoration: underline;
}
</style>
