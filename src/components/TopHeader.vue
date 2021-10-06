
<template>
  <div>
    <b-navbar toggleable="md" class="navbar-dark">
        <b-navbar-brand href="#">
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
          <b-nav-item to="/">الرئيسية</b-nav-item>
          <b-nav-item to="/about">من نحن</b-nav-item>
          <b-nav-item to="/blogs">المدونة</b-nav-item>
          <div v-if="loggedIn">
            <b-dropdown id="dropdown-left" text="Left align" variant="light" class="m-2">
              <b-dropdown-item href="#">Action</b-dropdown-item>
              <b-dropdown-item href="#">Another action</b-dropdown-item>
              <b-dropdown-item href="#">Something else here</b-dropdown-item>
            </b-dropdown>
          </div>
          <div v-else>
            <b-button @click="goToLogin()" size="lg" class="my-3 my-sm-0"
            >تسجيل الدخول</b-button>
          </div>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {
  name:'topHeader',
  methods: {
    goToLogin(){
      console.log("I am in the go to login method");
      this.$router.push('/login'); 
    }
  },
  data: function(){
    return {
    loggedIn: true
    };
  }
};
</script>
