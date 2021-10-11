<template>
<dash-BoardLayout>
    <div class="loginBG">
        <b-row>
            <b-col md='4' class="darkenBackground my-5 pb-5">

            </b-col>
            <b-col md='4' class="darkenBackground my-5 pb-5">

            </b-col>
            <b-col md='4' class="darkenBackground my-5 pb-5">

            </b-col>
        </b-row>
    </div>
</dash-BoardLayout>
    
</template>
<script>
import DashBoardLayout from '@/layouts/dashBoardLayout';
export default {
     name: "Profile",
  components: {
    'dash-BoardLayout': DashBoardLayout,
  }
}
</script>
<style>
.darkenBackground{
  background-color: rgb(0, 6, 22, 0.8);
}
</style>