<template>
  <div class="w-screen h-screen flex items-center justify-center bg-gray-200">
    <form class="formGroup flex flex-col justify-center gap-4 rounded-lg pt-20 pb-20 pl-10 pr-10 bg-white items-center ring-1 ring-black-100 ring-inset">
      <h1 class="text-red-800 font-bold">RESET PASSWORD</h1>
        <div>
        <img class="bg-red-800" src="@/assets/user-solid.svg" alt="user">
        </div>

       <div class="flex flex-col italic">
         <label for="newPassword">New Password:</label>
         <input class="rounded-lg outline outline-offset-2 outline-1 outline-red-800 " type="text" id="userName" v-model="formValues.newPassword" />
      </div>

      <div class= "flex flex-col italic">
        <label for="confirmNewPassword">Confirm New Password:</label>
         <input class="rounded-lg outline outline-offset-2 outline-1 outline-red-800 " type="text" id="phoneEmail" v-model="formValues.confirmNewPassword"/>
      </div>

      <button class="rounded-xl bg-red-800 text-white hover:scale-[1.05] outline outline-offset-2 outline-1 outline-red-800 flex  pr-2 pl-2 pb-0.5 pt-0.5"  >Reset</button>
    </form>

  </div>
</template>

<script>
export default {
name:'login',
data(){
  return{
    formValues:{
      newPassword:'',
      confirmNewPassword:''
    }
  }
}

}
</script>

<style>

</style>