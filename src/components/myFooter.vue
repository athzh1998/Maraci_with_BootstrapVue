<template>
  <div>
    <!-- Footer -->
    <footer
      class="text-white text-center p-4"
      style="background-color: #026873"
    >
      <b-container>
        <b-row>
          <b-col md="2">
            <a href="/"
              ><img
                src="@/assets/img/logo.png"
                alt="Maraci Logo"
                height="70px"
                width="auto"
            /></a>
          </b-col>
          <b-col md="4" class="justify-content-center">
            <b-list-group
              horizontal
              class="justify-content-around border-0 px-0"
              style="font-size: 18px; font-weight: bold"
            >
              <b-list-group-item class="bg-transparent border-0 px-0">
                <a class="text-white" href="/">الرئيسية</a>
              </b-list-group-item>
              <b-list-group-item class="bg-transparent border-0 px-0">
                <a class="text-white" href="/about">من نحن</a>
              </b-list-group-item>
              <b-list-group-item class="bg-transparent border-0 px-0">
                <a class="text-white" href="/Blogs">المدونة</a>
              </b-list-group-item>
              <b-list-group-item class="bg-transparent border-0 px-0">
                <a class="text-white" href="/callUs">اتصل بنا</a>
              </b-list-group-item>
            </b-list-group>
          </b-col>
          <b-col md="3" style="font-size: 12px" class="py-3">
            © 2021 Copyright: جميع الحقوق محفوظة لصالح
            <a class="text-white" href="/">موقع مراسي</a>
          </b-col>
          <b-col md="2" class="justify-content-center">
            <b-list-group horizontal class="px-0 justify-content-around">
              <b-list-group-item class="bg-transparent border-0">
                <a href="https://web.whatsapp.com/"  target="_blank">
                  <img src="@/assets/img/whatsapp.png" alt="instagram logo" />
                </a>
              </b-list-group-item>
              <b-list-group-item class="bg-transparent border-0">
                <a href="https://www.instagram.com/"  target="_blank">
                  <img src="@/assets/img/instagram.png" alt="instagram logo" />
                </a>
              </b-list-group-item>
              <b-list-group-item class="bg-transparent border-0">
                <a href="https://twitter.com/"  target="_blank">
                  <img src="@/assets/img/twitter.png" alt="twitter logo" />
                </a>
              </b-list-group-item>
            </b-list-group>
          </b-col>
        </b-row>
      </b-container>
    </footer>
    <!-- Footer -->
  </div>
</template>
<script>
export default {};
</script>
<style>
.list-group-item {
  display: block;
  background-color: transparent;
  border: none;
  padding: 0%;
}
</style>
