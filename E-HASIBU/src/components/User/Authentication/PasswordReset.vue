<template>
  <div class="w-screen h-screen flex items-center justify-center bg-gray-200">
    <form class="formGroup flex flex-col justify-center gap-4 rounded-lg pt-20 pb-20 pl-10 pr-10 bg-white items-center ring-1 ring-black-100 ring-inset">
      <h1 class="text-red-800 font-bold">RESET PASSWORD</h1>

      <div class= "flex flex-col">
        <label for="email">Email</label>
         <input class="rounded-lg outline outline-offset-2 outline-1 outline-red-800 " type="text" id="email" v-model="formValues.phoneEmail"/>
      </div>

      <button class="rounded-xl bg-red-800 text-white hover:scale-[1.05] outline outline-offset-2 outline-1 outline-red-800 flex  pr-2 pl-2 pb-0.5 pt-0.5"  >Submit</button>
    </form>

  </div>
</template>

<script>
export default {
name:'login',
data(){
  return{
    formValues:{
      userName:'',
      email:''
    }
  }
}

}
</script>

<style>

</style>