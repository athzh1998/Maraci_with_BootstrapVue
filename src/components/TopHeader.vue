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
          <b-nav-item to="/about">المدونة</b-nav-item>
          <b-button size="lg" class="my-3 my-sm-0" type="submit"
            >تسجيل الدخول</b-button
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>
<script>
export default {};
</script>
