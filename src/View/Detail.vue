<template>
    <div id="home">
        <Navbar />
     
        <div class="motor">
            <div class="motor">
        <button style="margin-left:1090px;" type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  ADD
</button>

<!-- Modal -->
<div  class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title" id="exampleModalLabel">Form<span v-show="!UpdateSubmit"> Tambah</span><span v-show="UpdateSubmit"> Update</span></h1>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
       <form @submit.prevent="add"  class="add"><br/><br/>
        <input type="hidden" v-model="formmotor.id" required>
        <label for=""  style="margin-right:10px">merk</label><br>
        <input type="text" v-model="formmotor.merk" required><br /><br/>
        <label for=""   style="margin-right:10px" >tipe</label><br>
        <input type="text" v-model="formmotor.tipe" required><br /><br/>
        <label for=""  style="margin-right:10px">Fuel</label><br>
        <input type="text" v-model="formmotor.bahan" required><br /><br/>
         <label for=""  style="margin-right:10px">Harga</label><br>
        <input type="text" v-model="formmotor.harga" required><br /><br/>
         <label for=""  style="margin-right:10px">Image</label><br>
        <input type="text" v-model="formmotor.image" required @click="close"><br><br />
         <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="submit" v-show="!UpdateSubmit" class="btn btn-primary">add <i class="fas fa-search-plus"></i></button>   
        <!-- jika tidak update maka tombol update tidak muncul --> 
        <button type="button" v-show="UpdateSubmit" @click="update(form)" class="btn btn-primary">Update<i class="fas fa-wrench"></i> </button> <!-- jika tombol edit di klik maka tombol add akan berubah menjadi update -->
    </form>
    </div>
      </div>
      <!-- <div class="modal-footer">
       
        <button type="button" class="btn btn-primary">Save changes</button>
      </div> -->
    </div>
  </div>
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
        <button style="margin-left:1090px;" type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  ADD
</button>

<!-- Modal -->
<div  class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title" id="exampleModalLabel">Form<span v-show="!UpdateSubmit"> Tambah</span><span v-show="UpdateSubmit"> Update</span></h1>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
       <form @submit.prevent="addMotor"  class="add"><br/><br/>
        <input type="hidden" v-model="formmobil.id" required>
        <label for=""  style="margin-right:10px">merk</label><br>
        <input type="text" v-model="formmobil.merk" required><br /><br/>
        <label for=""   style="margin-right:10px" >tipe</label><br>
        <input type="text" v-model="formmobil.tipe" required><br /><br/>
        <label for=""  style="margin-right:10px">Fuel</label><br>
        <input type="text" v-model="formmobil.bahan" required><br /><br/>
         <label for=""  style="margin-right:10px">Harga</label><br>
        <input type="text" v-model="formmobil.harga" required><br /><br/>
         <label for=""  style="margin-right:10px">Image</label><br>
        <input type="text" v-model="formmobil.image" required @click="close"><br><br />
         <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="submit" v-show="!UpdateSubmit" class="btn btn-primary">add <i class="fas fa-search-plus"></i></button>   
        <!-- jika tidak update maka tombol update tidak muncul --> 
        <button type="button" v-show="UpdateSubmit" @click="update(form)" class="btn btn-primary">Update<i class="fas fa-wrench"></i> </button> <!-- jika tombol edit di klik maka tombol add akan berubah menjadi update -->
    </form>
    </div>
      </div>
      <!-- <div class="modal-footer">
       
        <button type="button" class="btn btn-primary">Save changes</button>
      </div> -->
    </div>
  </div>
<table class="table table-dark">
       <tr>
        <th>No</th>
        <th>Merk</th>
        <th>Tipe</th>
        <th>Bahan bakar</th>
        <th>Harga</th>
        <th>Image</th>
        <th>Aksi</th>
        </tr> 
        <tr v-for="(user , index) in motors"
        :key="user.id"
        style="text-align: center;" >
        <td>{{ index + 1 }}</td>
        <td>{{ user.merk }}</td>
        <td>{{ user.tipe }}</td>
        <td>{{ user.bahan }}</td>
        <td>{{ user.harga }}</td>
         <td><img :src="user.image" alt="" width="100"></td> 
         <td><button @click="edit(user)" class="btn btn-primary"  data-toggle="modal" data-target="#exampleModal"><i class="fas fa-edit"></i> </button> <button @click="del(user)" class="btn btn-secondary"><i class="fas fa-trash-alt"></i> </button></td>
        </tr>
    </table>
    </div>
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
        axios.get('http://localhost:3000/mobils').then((res) => {
        this.motors = res.data //respon dari rest api dimasukan ke motors
      }).catch ((err) => {
        console.log(err);``
      })
    },
     addMotor(){
      axios.post('http://localhost:3000/motors/', this.formmotor).then(() => {
          this.load()
          this.formmotor.id = '';
          this.formmotor.merk = '';
          this.formmotor.tipe = '';
          this.formmotor.bahan = '';
          this.formmotor.harga = '';
          this.formmotor.image = '';
      })
      window.location.reload();
 },
 editMotor(user){ 
        this.updateSubmit = true
        this.formmotor.id = user.id 
        this.formmotor.merk = user.merk
        this.formmotor.tipe= user.tipe  
        this.formmotor.bahan = user.bahan 
        this.formmotor.harga = user.harga 
        this.formmotor.image = user.image 
 },
 updateMotor(formmotor){
        return axios.put('http://localhost:3000/motors/' + formmotor.id , {merk: this.formmotor.merk, tipe: this.formmotor.tipe, bahan: this.formmotor.bahan, harga: this.formmotor.harga, image: this.formmotor.image}).then(() => {
        this.load()
        this.formmotor.id = ''
        this.formmotor.merk = ''
        this.formmotor.tipe = ''
        this.formmotor.bahan = ''
        this.formmotor.harga = ''
        this.formmotor.image = ''
        this.UpdateSubmit = false
        window.location.reload()
      }).catch((err) => {
        console.log(err);
        
      })
    },
    delMotor(user){
      axios.delete('http://localhost:3000/motors/' + user.id ).then(() =>{
          this.load()
          let index = this.motors.indexOf(
            this.formmotor.merk, 
            this.formmotor.tipe,  
            this.formmotor.bahan,           
            this.formmotor.harga,           
            this.formmotor.image,           
          )
          this.motors.splice(index,1)
      })
  },
     add(){
      axios.post('http://localhost:3000/motors/', this.formmotor).then(() => {
          this.load()
          this.formmotor.id = '';
          this.formmotor.merk = '';
          this.formmotor.tipe = '';
          this.formmotor.bahan = '';
          this.formmotor.harga = '';
          this.formmotor.image = '';
      })
      window.location.reload();
 },
 edit(user){ 
        this.updateSubmit = true
        this.formmotor.id = user.id 
        this.formmotor.merk = user.merk
        this.formmotor.tipe= user.tipe  
        this.formmotor.bahan = user.bahan 
        this.formmotor.harga = user.harga 
        this.formmotor.image = user.image 
 },
 update(formmotor){
        return axios.put('http://localhost:3000/mobils/' + formmotor.id , {merk: this.formmotor.merk, tipe: this.formmotor.tipe, bahan: this.formmotor.bahan, harga: this.formmotor.harga, image: this.formmotor.image}).then(() => {
        this.load()
        this.formmotor.id = ''
        this.formmotor.merk = ''
        this.formmotor.tipe = ''
        this.formmotor.bahan = ''
        this.formmotor.harga = ''
        this.formmotor.image = ''
        this.UpdateSubmit = false
        window.location.reload()
      }).catch((err) => {
        console.log(err);
        
      })
    },
    del(user){
      axios.delete('http://localhost:3000/mobils/' + user.id ).then(() =>{
          this.load()
          let index = this.motors.indexOf(
            this.formmobil.merk, 
            this.formmobil.tipe,  
            this.formmobil.bahan,           
            this.formmobil.harga,           
            this.formmobil.image,           
          )
          this.motors.splice(index,1)
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