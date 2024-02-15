<template>
  <div class="nav grid grid-col-3 pl-3 pr-3 justify-between w-full ">
    <div class="col-start-1 col-end-2 ">
      <ul class="flex justify-between flex-row gap-32 ">
        <li class="flex gap-3">
          <img src="@/assets/receipt-solid.svg"  class="w-6" alt="">
          <span class="font-bold text-red-800">E-HASIBU</span>
        </li>
        <li class="relative">
          <form action="" method="post">
           
            <div> 
              <Label class="absolute left-3 top-1">Search</Label>
              <input type="search" name="" id="" class="rounded-lg bg-gray-200 p-2">
            </div>
           
          </form>
          
        </li>
      </ul>
    </div>

      <div class="col-start-2 col-end-3 flex gap-3">
        <img src="@/assets/gauge-solid.svg" class="w-6" alt="">
        <img src="@/assets/bell-solid.svg" class="w-6" alt="">
        <img src="@/assets/user-solid.svg" class="w-6" alt="">
        
      </div>
   
  </div>
</template>

<script>
export default {
  name:"Navbar"
}
</script>

<style>

</style>