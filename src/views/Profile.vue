<template>
<dash-BoardLayout>
    <div class="loginBG">
      <b-container class="sectionsPadding">
            <b-row class="sectionHeight" align-v="center">
              <b-col md='4'>
                <div class="darkenBackground p-2 pb-3 w-100">
                  <b-list-group horizontal class="bg-transparent border-0 justify-content-between p-0">
                    <b-list-group-item class="bg-transparent border-0"><h5 >اعدادات الحساب الشخصي</h5></b-list-group-item>
                    <b-list-group-item  class="bg-transparent border-0"><a href=""><b-icon class="h5 text-white" icon="pencil-square" aria-hidden="true"></b-icon></a></b-list-group-item>
                  </b-list-group>
                  <div class="pr-5 sm-p-0">
                    <b-list-group horizontal class="bg-transparent border-0 justify-content-between align-items-center">
                      <b-list-group-item class="bg-transparent border-0 "><h5 >الإسم</h5></b-list-group-item>
                      <b-list-group-item  class="bg-transparent border-0"><h5> أثير</h5></b-list-group-item>
                    </b-list-group>
                    <b-list-group horizontal class="bg-transparent border-0 justify-content-between align-items-center">
                      <b-list-group-item class="bg-transparent border-0"><h5 >رقم الجوال</h5></b-list-group-item>
                      <b-list-group-item  class="bg-transparent border-0"><h5> 0553391100</h5></b-list-group-item>
                    </b-list-group>
                    <b-list-group horizontal class="bg-transparent border-0 justify-content-between align-items-center">
                      <b-list-group-item class="bg-transparent border-0"><h5>المدينة</h5></b-list-group-item>
                      <b-list-group-item  class="bg-transparent border-0"><h5>جدة</h5></b-list-group-item>
                    </b-list-group>
                  </div>
                </div>
              </b-col>


              <b-col md='4'>
                <div class="darkenBackground p-2 pb-3 w-100">
                  <b-list-group horizontal class="bg-transparent border-0 justify-content-between p-0">
                    <b-list-group-item class="bg-transparent border-0"><h5 >الرحلات المفضلة</h5></b-list-group-item>
                    <b-list-group-item  class="bg-transparent border-0"><a href=""><b-icon class="h5 text-white" icon="arrow-left-circle" aria-hidden="true"></b-icon></a></b-list-group-item>
                  </b-list-group>
                  <div>
                    <p class="text-white" style="font-size:60px;">4</p>
                  </div>
                </div>
              </b-col>

              <b-col md='4'>
                <div class="darkenBackground p-2 pb-3 w-100">
                  <b-list-group horizontal class="bg-transparent border-0 justify-content-between p-0">
                    <b-list-group-item class="bg-transparent border-0 head"><h5 >الرحلات المقدمة</h5></b-list-group-item>
                    <b-list-group-item  class="bg-transparent border-0"><a href=""><b-icon class="h5 text-white" icon="arrow-left-circle" aria-hidden="true"></b-icon></a></b-list-group-item>
                  </b-list-group>
                  <div>
                    <p class="text-white" style="font-size:60px;">1</p>
                  </div>
                </div>
                
              </b-col>
        </b-row>
      </b-container>
        
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
  background-color: rgba(0, 6, 22, 0.8);
  border-radius: 25px;
  min-height:240px;
}

</style>