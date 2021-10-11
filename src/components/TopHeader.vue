
<template>
  <div>
    <b-navbar toggleable="md" class="navbar-dark">
          <b-navbar-brand href="/">
            <img
              src="../../public/img/logo.png"
              alt="Maraci Logo"
              height="70px"
              width="auto"
            />
          
            
          </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav class="justify-content-end px-2">
        <b-navbar-nav>
          <b-nav-item to="/" >الرئيسية</b-nav-item>
          <b-nav-item to="/about">من نحن</b-nav-item>
          <b-nav-item to="/blogs">المدونة</b-nav-item>

          <!--v-if and v-else -->
          <b-nav-item v-if="loggedIn">
            <b-dropdown split text="اسم المستخدم" variant="light" style="width:200px">
              <b-dropdown-item-button @click="goToProfile()">لوحة التحكم</b-dropdown-item-button>
              <b-dropdown-item-button @click="signOut()">تسجيل الخروج</b-dropdown-item-button>
            </b-dropdown>
          </b-nav-item>
          <b-nav-item v-else>
            <b-button to="/login" size="lg" class="m-0 my-sm-0"
            >تسجيل الدخول</b-button>
          </b-nav-item>
          <!--end v-if and v-else-->

        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name:'topHeader',
  methods: {
    goToLogin: function(){
      this.$router.push('/login'); 
    },
    goToProfile: function(){
      this.$router.push('/profile'); 
    },
    signOut: function(){
      this.loggedIn=false;
      this.$router.pop();
    }
  },
  data: function(){
    return {
    loggedIn: true
    };
  }
};
</script>

<style>
.dropdown-item{
  color:#014E57 !important;
  padding: 0.25rem 0rem;
  font-size: 16px;
  font-weight: unset;
}

</style>
