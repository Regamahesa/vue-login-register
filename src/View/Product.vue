<template>
    <div id="home">
        <Navbar />
     
        <div class="motor">
<table class="table table-dark">
       <tr>
        <th>No</th>
        <th>Merk</th>
        <th>Tipe</th>
        <th>Bahan bakar</th>
        <th>Harga</th>
        <th>Image</th>
        </tr> 
        <tr v-for="(motor , index) in motors"
        :key="motor.id"
        style="text-align: center;" >
        <td>{{ index + 1 }}</td>
        <td>{{ motor.merk }}</td>
        <td>{{ motor.tipe }}</td>
        <td>{{ motor.bahan }}</td>
        <td>{{ motor.harga }}</td>
         <td><img :src="motor.image" alt="" width="100"></td>
        </tr>
    </table>
    </div>
    <div class="motor">
<table class="table table-dark">
       <tr>
        <th>No</th>
        <th>Merk</th>
        <th>Tipe</th>
        <th>Bahan bakar</th>
        <th>Harga</th>
        <th>Image</th>
        </tr> 
        <tr v-for="(user , index) in mobils"
        :key="user.id"
        style="text-align: center;" >
        <td>{{ index + 1 }}</td>
        <td>{{ user.merk }}</td>
        <td>{{ user.tipe }}</td>
        <td>{{ user.bahan }}</td>
        <td>{{ user.harga }}</td>
         <td><img :src="user.image" alt="" width="100"></td>
        </tr>
    </table>
    </div>
    </div>
</template>

<script> 
import axios from 'axios'
import Navbar from "../components/Navbar.vue";
export default {
    name:"HomePage",
    components:{
        Navbar,
    },
      data(){
    return{
        formmotor: {
          id: '',
          merk: '',
          tipe: '',
          bahan: '',
          harga: '',
          image: '',
        },
        motors: '',
        updateSubmit: false,
        
         formmobil: {
          id: '',
          merk: '',
          tipe: '',
          bahan: '',
          harga: '',
          image: '',
        },
        mobils: '',
        UpdateSubmit: false
    }
  },
    mounted() {
         this.loadmotor()
         this.loadmobil()
        if (!sessionStorage.getItem("USER_DATA")) {
            this.$router.push("/")
        }
    },
  methods: {
    loadmotor(){
        axios.get('http://localhost:3000/motors/').then((res) => {
        this.motors = res.data //respon dari rest api dimasukan ke motors
      }).catch ((err) => {
        console.log(err);
      })
    },
    loadmobil(){
        axios.get('http://localhost:3000/mobils/').then((res) => {
        this.mobils = res.data //respon dari rest api dimasukan ke motors
      }).catch ((err) => {
        console.log(err);``
      })
    },
//   CLOSE
close() {
    window.location.reload();
}
},

   }
</script>

<style>
.add {
color: #000;
}
.motor{
 margin: 100px;
}

</style>