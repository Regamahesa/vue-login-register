<template>
   <div class="up">
     <form @submit="login" class="kotak_login">
      <h4 class="tulisan_login">Login</h4>
        <label for="">Username</label>
        <input 
        type="text"
        name="username"
        v-model="form.username"
        required
        class="form_login"
        placeholder="Masukkan Username atau email .."
        />
        <label for="">Password</label>
         <input 
        type="password"
        name="password"
        v-model="form.password"
        required
        class="form_login"
        placeholder="Password.."
        />
        <button 
        type="submit"
        style="
        background-color: black;
        display: block;
        margin-left: auto;
        margin-right: auto;
        cursor: pointer;
        padding: 10px;
        border-radius: 10px;
        color: white;
        "
        >
        Login
        </button><br><br />
          <center>
            <a href="/register">Register</a>
            <span >Jika belum memiliki akun</span>
        </center>
        </form> 
      
   </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "LoginPage",
    data() {
        return {
            form: {
                username:"",
                password:"",
                useres:{},
            },
            acc: {},
        };
    },
    methods: {
        async getUser() {
            const user = await axios.get("http://localhost:3000/acc")
            this.acc = user.data;
        },
        
       login(e) {
        e.preventDefault();
        const login = this.acc.find(
            (data) =>
             data.username === this.form.username &&
             data.password === this.form.password 
        );
        // kondisi akun benar akan langsung masuk ke page home kalo salah muncul alert
        if (login === undefined) {
            alert("username or password not found");
        } else {
            var convertToString = JSON.stringify(login);
            sessionStorage.setItem("USER_DATA", convertToString);
            sessionStorage.setItem("role" , login.role);
            this.$router.push("/home");
             window.location.reload();
        }
       },
    },
    mounted() {
        this.getUser();
        this.$emit("toggleBar")
    }
}
</script>