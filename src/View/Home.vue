<template>
    <div id="home">
        <Navbar />
     
        <div class="motor">
               <button style="margin-left:1090px;" type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  ADD
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title" id="exampleModalLabel">Form<span v-show="!updateSubmit"> Tambah</span><span v-show="updateSubmit"> Update</span></h1>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
       <form @submit.prevent="add"  class="add"><br/><br/>
        <input type="hidden" v-model="form.id" required>
        <label for=""  style="margin-right:10px">merk</label><br>
        <input type="text" v-model="form.merk" required><br /><br/>
        <label for=""   style="margin-right:10px" >tipe</label><br>
        <input type="text" v-model="form.tipe" required><br /><br/>
        <label for=""  style="margin-right:10px">Fuel</label><br>
        <input type="text" v-model="form.bahan" required><br /><br/>
         <label for=""  style="margin-right:10px">Harga</label><br>
        <input type="text" v-model="form.harga" required><br /><br/>
         <label for=""  style="margin-right:10px">Image</label><br>
        <input type="text" v-model="form.image" required @click="close"><br><br />
         <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="submit" v-show="!updateSubmit" class="btn btn-primary">add <i class="fas fa-search-plus"></i></button>   
        <!-- jika tidak update maka tombol update tidak muncul --> 
        <button type="button" v-show="updateSubmit" @click="update(form)" class="btn btn-primary">Update<i class="fas fa-wrench"></i> </button> <!-- jika tombol edit di klik maka tombol add akan berubah menjadi update -->
    </form>
      </div>
      <!-- <div class="modal-footer">
       
        <button type="button" class="btn btn-primary">Save changes</button>
      </div> -->
    </div>
  </div>
</div><br><br/>
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
        form: {
          id: '',
          merk: '',
          tipe: '',
          bahan: '',
          harga: '',
          image: '',
        },
        motors: '',
        updateSubmit: false
    }
  },
    mounted() {
         this.load()
        if (!sessionStorage.getItem("USER_DATA")) {
            this.$router.push("/")
        }
    },
  methods: {
    load(){
        axios.get('http://localhost:3000/motors/').then((res) => {
        this.motors = res.data //respon dari rest api dimasukan ke motors
      }).catch ((err) => {
        console.log(err);
      })
    },
    add(){
      axios.post('http://localhost:3000/motors/', this.form).then(() => {
          this.load()
          this.form.id = '';
          this.form.merk = '';
          this.form.tipe = '';
          this.form.bahan = '';
          this.form.harga = '';
          this.form.image = '';
      })
      window.location.reload();
 },
 edit(user){ 
        this.updateSubmit = true
        this.form.id = user.id 
        this.form.merk = user.merk
        this.form.tipe= user.tipe  
        this.form.bahan = user.bahan 
        this.form.harga = user.harga 
        this.form.image = user.image 
 },
 update(form){
        return axios.put('http://localhost:3000/motors/' + form.id , {merk: this.form.merk, tipe: this.form.tipe, bahan: this.form.bahan, harga: this.form.harga, image: this.form.image}).then(() => {
        this.load()
        this.form.id = ''
        this.form.merk = ''
        this.form.tipe = ''
        this.form.bahan = ''
        this.form.harga = ''
        this.form.image = ''
        this.updateSubmit = false
        window.location.reload()
      }).catch((err) => {
        console.log(err);
        
      })
    },
    del(user){
      axios.delete('http://localhost:3000/motors/' + user.id ).then(() =>{
          this.load()
          let index = this.motors.indexOf(
            this.form.merk, 
            this.form.tipe,  
            this.form.bahan,           
            this.form.harga,           
            this.form.image,           
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