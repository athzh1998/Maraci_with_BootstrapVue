<template>
    <div>
        <b-navbar toggleable="md" class="d-flex justify-content-between w-100">
            
            <div>
                <b-navbar-brand href="#">
                <img src="../../public/img/logo.png" alt="Maraci Logo" height="70px" width="auto">
                </b-navbar-brand>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
            </div>
            
            <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav>
                        <b-nav-item to="/">الرئيسية</b-nav-item>
                        <b-nav-item to="/about">من نحن</b-nav-item>
                        <b-nav-item to="/about">المدونة</b-nav-item>
                        <b-button size="md" class="my-2 my-sm-0" type="submit">تسجيل الدخول</b-button>
                    </b-navbar-nav>                    
           </b-collapse>

        </b-navbar>
    </div>
</template>
<script>
export default {
    
}
</script>
