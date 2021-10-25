<template>
  <b-row class="pt-5">
    <b-col lg='3' md='4'>
      <div class="py-3">
        <select class="dropdown" v-model="userOptions1">

          <option hidden value="0">المدينة:</option>
          <option value="1">جدة</option>
          <option value="2">ينبع</option>
        </select>
      </div>
    </b-col>
    <b-col lg='3' md='4'>
      <div class="py-3">
        <select class="dropdown" v-model="userOptions2">
          <option hidden value="0">ترتيب بحسب:</option>
          <option value="1">المضاف حديثاً</option>
          <option value="2">الأقل سعراً</option>
          <option value="3">الأعلى سعراً</option>
          <option value="4">العروض</option>
        </select>
      </div>
    </b-col>
    <b-col lg='3' md='4' class="ml-auto">
      <div class="py-3">
        <b-input-group>
          <b-form-input v-model=searchText class="border-left-0 " placeholder="إبحث هنا" style="color: #026873; background-color: #d9e7e2; border: 1px solid #5bbaae;">
          </b-form-input>
          <b-input-group-prepend>
            <span class="input-group-text" style="color: #026873; background-color: #d9e7e2; border: 1px solid #5bbaae;"><b-icon icon="search" style="color:#9AD9C2;" ></b-icon></span>
          </b-input-group-prepend>
        </b-input-group>
      </div>
    </b-col>

  </b-row>
</template>
<script>
export default {
  data: function(){
    return {
      searchText:'',
      userOptions1: "0",
      userOptions2: "0",
    }
  },

};
</script>
<style>

.dropdown {
  width: 100%;
  padding: 8px 12px;
  color: #026873;
  background-color: #d9e7e2;
  border: 1px solid #5bbaae;
  cursor: pointer;
  border-radius: 4px;
}

.dropdown:focus,
.dropdown:hover {
  outline: none;
  border: 1px solid #3c776f;
}

.dropdown option {
  border: none;
}

</style>
