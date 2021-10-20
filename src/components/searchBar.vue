<template>
  <b-row class="pt-5">
    <b-col md="3">
      <div class="py-3">
        <select class="dropdown">
          <b-icon icon="chevron-down" class="icons"></b-icon>
          <option disabled selected>المدينة:</option>
          <option value="Jed">جدة</option>
          <option value="Yun">ينبع</option>
        </select>
      </div>
    </b-col>
    <b-col md="3">
      <div class="py-3">
        <select class="dropdown">
          <b-icon icon="chevron-down" class="icons"></b-icon>
          <option disabled selected>ترتيب بحسب:</option>
          <option value="new">المضاف حديثاً</option>
          <option value="lowest">الأقل سعراً</option>
          <option value="heighest">الأعلى سعراً</option>
          <option value="offer">العروض</option>
        </select>
      </div>
    </b-col>

    <b-col md="3" class="ml-auto">
      <b-input-group class="my-2 w-100">
        <b-form-input class="LoginInput" size="sm" placeholder="ابحث هنا">
        </b-form-input>
        <b-input-group-prepend>
          <span class="input-group-text" size="sm">
            <b-icon
              icon="search"
              aria-hidden="true"
              class="btn p-0"
              variant="Secondary"
            ></b-icon
          ></span>
        </b-input-group-prepend>
      </b-input-group>
    </b-col>
  </b-row>
</template>
<script>
export default {};
</script>
<style>
.dropdown {
  width: 100%;
  padding: 8px 12px;
  color: #026873;
  background-color: #d9e7e2;
  border: 1px solid #5bbaae;
  cursor: pointer;
  border-radius: 8px;
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
