<template>
<div class="w-screen h-screen flex flex-grow justify-center items-center bg-gray-200 w-full grid grid-cols-3 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
<form class="flex flex-col gap-4 bg-gray-200 pr-4 pl-4 pt-4 pb-4  w-full">
<ul class=" col-start-1 col-end-3 row-start-1 row-end-2 flex flex-col justify-center items-center w-full bg-red-900">
  <img class="w-full object-cover md:h-auto md:w-48 md:rounded-none" src="../assets/user.svg" alt="user">
  <li class="text-white">Welcome, {{firstName}} {{lastName}}</li>
 </ul>

<ul class="flex flex-col gap-4 mb-4 grid-col-3 row-start-2 col-start-1 col-end-3 ">
  <h2 class="font-bold text-bs">Personal Details</h2>
  <li  class="flex">
    <label for="firstName">First Name</label>
    <input class="bg-gray-200 ml-3 rounded-lg w-100 outline outline-1 hover:outline-4 outline-gray-600 " type="text" id="firstName" v-model="formValues.firstName"/>
  </li>

   <li  class="flex">
    <label for="lastName">Last Name</label>
    <input class="bg-gray-200 ml-3 rounded-lg w-100 outline outline-1 hover:outline-4 outline-gray-600" type="text" id="lastName" v-model="formValues.lastName"/>
  </li>

   <li  class="flex ">
    <label for="email">Email</label>
    <input class="bg-gray-200 ml-3 rounded-lg w-100 outline outline-1 hover:outline-4 outline-gray-600" type="text" id="email" v-model="formValues.email"/>
  </li>

   <li  class="flex ">
    <label for="nationalId">National ID</label>
    <input class="bg-gray-200 ml-3 rounded-lg w-100 outline outline-1 hover:outline-4 outline-gray-600" type="text" id="nationalID" v-model="formValues.nationalID"/>
  </li>

   <li  class="flex ">
    <label for="phoneNo">Phone Number</label>
    <input class="bg-gray-200 ml-3 rounded-lg w-100 outline outline-1 hover:outline-4 outline-gray-600" type="text" id="phoneNo" v-model="formValues.phoneNo"/>
  </li>
</ul>


<ul class="flex flex-col gap-4 mb-4">
  <h2 class="font-bold text-bs">Business Information</h2>
  <li  class="flex">
    <label for="businessName">Business Name</label>
    <input class="bg-gray-200 ml-3 rounded-lg w-100 outline outline-1 hover:outline-4 outline-gray-600" type="text" id="businessName" v-model="formValues.businessName"/>
  </li>

   <li  class="flex">
    <label for="VATReg">VAT Registration Status</label>
    <input class="bg-gray-200 ml-3 rounded-lg w-100 outline outline-1 hover:outline-4 outline-gray-600" type="text" id="VATreg" v-model="formValues.VATReg"/>
  </li>

   <li  class="flex ">
    <label for="accountNo">Account Number</label>
    <input class="bg-gray-200 ml-3 rounded-lg w-100 outline outline-1 hover:outline-4 outline-gray-600" type="text" id="accountNo" v-model="formValues.accountNo"/>
  </li>
</ul>



<ul class="flex flex-col gap-4 mb-4">
  <h2 class="font-bold text-bs">Address</h2>
  <li  class="flex">
    <label for="physicalAddress">Physical Address</label>
    <input class="bg-gray-200 ml-3 rounded-lg w-100 outline outline-1 hover:outline-4 outline-gray-600" type="text" id="physicalAddress" v-model="formValues.physicalAddress"/>
  </li>

   <li  class="flex ">
    <label for="streetName">Street Name</label>
    <input class="bg-gray-200 ml-3 rounded-lg w-100 outline outline-1 hover:outline-4 outline-gray-600" type="text" id="streetName" v-model="formValues.streetName"/>
  </li>
  </ul>
  <h2 class="font-bold text-bs">Geolocation</h2>
 
    <MapComponent/>
   
   </form>
  </div>
</template>

<script>
import MapComponent from './MapComponent.vue'

export default {
  components:{
     MapComponent
  },
  data(){
    return{

    formValues:{
      firstName:'',
      lastName:'',
      email:'',
      nationalID:'',
      phoneNo:'',
      businessName:'',
      VATReg:'',
      accountNo:'',
      address:'',
      streetName:'',
      location:''
      }
    }
  }

}
</script>

<style>


</style>