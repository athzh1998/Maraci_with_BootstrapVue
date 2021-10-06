<template>
  <b-container class="loginBG">
    <b-row  align-h="center">
      <b-col md='6' class="loginForm">
        <img
            src="../../public/img/logo.png"
            alt="Maraci Logo"
            height="130px"
            width="auto"
          />
          <b-container class="Login">
            <b-row align-h="center">
              <b-col md="8">
                <b-form
                title="تسجيل الدخول"
                 align-h="start"
                 class="loginForm"
                >
                    <h3>تسجيل الدخول</h3>
                    <b-form-group
                        id="input-group-1"
                        label="رقم الجوال"
                        label-for="input-1"
                        class="text-left"
                    >
                    <b-form-input
                        id="input-1"
                        type="text"
                        placeholder=""
                        required
                    ></b-form-input>
                    </b-form-group>
                    <b-form-group
                    id="input-group-2"
                        label="الرقم السري"
                        label-for="input-2"
                        class="text-left"
                    >
                    <b-form-input
                        id="input-2"
                        type="password"
                        required
                    ></b-form-input>
                    </b-form-group>
                    <div>
                    <b-form-checkbox value="me">تذكرني</b-form-checkbox>
                    <a href="">نسيت كلمة المرور</a>
                    </div>
                    <b-row class="py-3" align-h="between">
                    <b-col md=6>
                        <b-button type="submit" class="btn-secondary">سجل الدخول</b-button>
                    </b-col>
                    <b-col md=6>
                        <b-button type="reset" class="newAccount bg-transparent btn-outline-light">إنشاء الحساب</b-button>
                    </b-col>
                    </b-row>
                </b-form>

                
              </b-col>
            </b-row>
          </b-container>

          <b-container class="SignUP" style="display: none;">
              <h3>إنشاء حساب</h3>
            </b-container>    
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

</script>
<style>

</style>