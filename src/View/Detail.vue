<template>
    <div id="detail">
        <Navbar />
        <h1>Ini halaman Detail page</h1>
    </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
    name:"DetailPage",
    components:{
        Navbar,
    },
     mounted() {
        if (!sessionStorage.getItem("USER_DATA")) {
            this.$router.push("/")
        }
    },
}
</script>