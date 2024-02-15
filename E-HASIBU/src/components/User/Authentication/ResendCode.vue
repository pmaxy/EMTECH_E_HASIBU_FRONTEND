<template>
  <div class="w-screen h-screen flex items-center justify-center bg-gray-200">
    <form class="form-group flex flex-col justify-center gap-4 rounded-lg pt-20 pb-20 pl-10 pr-10 bg-white items-center ring-1 ring-black-100 ring-inset"> 
      <div>
        <h2 class="text-red-800 font-bold">CONFIRM CODE</h2>
      </div>
      <div class="flex flex-col items-center ">
        
         <input class= "rounded-lg outline outline-offset-2 outline-1 outline-red-800" type="text " id="insertCode" placeholder="Insert Code"/>
         <label class="italic" for="insertCode">Insert Code</label>
       </div>
   <div class="flex flex-col hover:scale-[1.05] ">
    <a href="#">Resend Code</a>
   </div>


       <button class="rounded-xl bg-red-800 outline outline-offset-2 outline-1 outline-red-800 text-white hover:scale-[1.05] flex  pr-2 pl-2 pb-0.5 pt-0.5" >Submit</button>
    </form>
  </div>
</template>

<script>
export default {
data(){
  return{
    formValues:{
      insertCode:''
    }
  }
}
}
</script>

<style>

</style>