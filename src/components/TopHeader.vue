<template>
  <div>
    <b-navbar toggleable="md" class="navbar-dark">
      <b-navbar-brand href="/">
        <img
          src="@/assets/img/logo.png"
          alt="Maraci Logo"
          height="70px"
          width="auto"
        />
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav class="justify-content-end align-items-center px-2">
        <b-navbar-nav>
          <b-nav-item to="/">الرئيسية</b-nav-item>
          <b-nav-item to="/about">من نحن</b-nav-item>
          <b-nav-item to="/blogs">المدونة</b-nav-item>

          <!--v-if and v-else -->
          <b-nav-item v-if="loggedIn">
            <div class="px-3">
            <select id='topHeaderID' class="topHeaderDropdown" @change="changeFunc();">
             <b-icon icon="chevron-down" class="icons"></b-icon>
              <option disabled selected>{{userName}}</option>
              <option value="1">لوحة التحكم</option>
              <option value="2">تسجيل الخروج</option>
            </select>
          </div>
          </b-nav-item>
          <b-nav-item v-else>
            <b-button to="/login" size="lg" class="btn-secondary"
              >تسجيل الدخول</b-button
            >
          </b-nav-item>
          <!--end v-if and v-else-->
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-modal id="signout-model" hide-footer>
           <template #modal-header="{ close }" class="justify-content-center border-0">
              <button type="button" aria-label="Close" class="close p-0 m-0" @click="close()">
                  <b-icon class="h4" icon="x" aria-hidden="true"></b-icon>
                </button>
            </template>
            <template class="text-center">
            <div class="m-3">
              <h4 class="text-center pb-3">تم تسجيل الخروج بنجاح</h4>
            </div>
            </template>
            
            
        </b-modal>
  </div>
  
</template>
<script>

export default {
  name: "topHeader",
  methods: {
    changeFunc: function(){
      var selectBox = document.getElementById("topHeaderID");
      var selectedValue = selectBox.options[selectBox.selectedIndex].value;
      //alert(selectedValue);
      if(selectedValue=='1'){
        this.$router.push("/profile");
      }
      else if(selectedValue=='2') {
        this.loggedIn = false;
       
        this.$router.push("/");
      }
    },
  },
  data: function () {
    return {
      loggedIn: true,
      userName: 'أثير حسن'
    };
  },
};
</script>

<style>
.topHeaderDropdown{
  width: 255px;
  padding: 8px 12px;
  color: #026873;
  background-color: #fff;
  cursor: pointer;
  border-radius: 5px;
}

.topHeaderDropdown:focus,
.topHeaderDropdown:hover {
  outline:none;
  border: 1px solid #3c776f;
  
}

.topHeaderDropdown option{
  border:none;
}
</style>
