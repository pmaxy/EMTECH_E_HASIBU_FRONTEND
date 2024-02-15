<template>
<div class="w-screen h-screen flex items-center justify-center bg-gray-200">

<form class="formGroup flex flex-col justify-center gap-3 rounded-lg pt-10 pb-10 pl-10 pr-10 bg-white items-center ring-1 ring-black-100 ring-inset">
<h1 class="text-red-800 font-bold text-lg" >E-HASIBU PLATFORM</h1>
<h2 class="text-red-800 font-bold text-bs pb-8">Sign in to your account</h2>

<div class="userName flex flex-col">
  <label for="email">Email</label>
  <input class="rounded-lg outline outline-offset-2 outline-1 outline-red-800 " type="text" id="email" v-model="formValues.userName"/>
</div>

<div class="password flex flex-col">
   <label for="password">Password</label>
   <input class="rounded-lg outline outline-offset-2 outline-1 outline-red-800 " type="text" id="Password" v-model="formValues.password"/>
</div>

<div class="flex gap-4" >
  <div class="no-underline hover:underline"> 
  <a href="#">Forgot Password?</a>
  </div>

  </div>
   <div class="flex flex-col">
  <button class="rounded-xl outline outline-offset-2 outline-1 outline-red-800 bg-red-800  text-white hover:scale-[1.05] flex  pr-2 pl-2 pb-0.5 pt-0.5"  >Submit</button>
  </div>
</form>
</div>
</template>

<script>
export default {
 name:'PasswordReset',
 data(){
return{
  formValues:{
    email:'',
    password:'',
    forgotPassword:false
  }
  }
}
 }


</script>

<style>

  

</style>