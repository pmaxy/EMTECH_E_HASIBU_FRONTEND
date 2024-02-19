
<template>
    <div class=" w-64 p-3 h-full overflow-auto">
        <div class="profile">
  
        </div>
         <ul  class="side_button gap-2 flex flex-col ">

            <li  class="list_button  ">
              <router-link :to="{name:'Dashboard_home'}" class="p-2 bg-white bg-gradient-to-br from-white to-red-50 rounded-lg  flex gap-2 items-center row hover:scale-[1.05]">
                <img src="@/assets/house-solid.svg" class="w-10 bg-gradient-to-br from-red-500 to-red-900 rounded-lg p-2 text-red " alt="dashboard">
                <span>Dashboard</span>
              </router-link>   
             
            </li>
            <li  class="list_button  ">
              <router-link :to="{name:'Sales'}" class="p-2 bg-white rounded-lg bg-gradient-to-br from-white to-red-50  flex gap-2 items-center row hover:scale-[1.05]">
                <img src="@\assets\internship-3833168-3185247.png" class="w-10 bg-gradient-to-br from-red-500 to-red-900 rounded-lg p-2" alt="dashboard">
                <span>Sales</span>
              </router-link>   
             
            </li>

            <li  class="list_button  ">
              <div>
                <div @click="closeNav" class="p-2 bg-white rounded-lg flex gap-2 items-center row hover:scale-[1.05]">
              
                <img src="@\assets\internship-3833168-3185247.png"  class="w-10 bg-red-800 rounded-lg p-2" alt="dashboard">
                <span>Purchases</span>
                </div>
                <ul v-if="isHidden" class="p-2 flex flex-col gap-1">
                  <li class="bg-white rounded-lg p-2 hover:scale-[1.03] shadow-lg"><router-link :to="{name:'Purchase_Order'}">Purchase order</router-link></li>
                  <li class="bg-white rounded-lg p-2 hover:scale-[1.03] shadow-lg"><router-link :to="{name:'Vendor_Details'}">Vendor Details</router-link></li>
                  <li class="bg-white  rounded-lg p-2 hover:scale-[1.03] shadow-lg"><router-link :to="{name:'Purchase_Bill'}">Purchase Bill </router-link></li>
                </ul>
              </div>
              
            </li>    <li  class="list_button  ">
              <router-link :to="{name:'Inventory'}" class="p-2 bg-white rounded-lg bg-gradient-to-br from-white to-red-50 flex gap-2 items-center row hover:scale-[1.05]">
                <img src="@\assets\internship-3833168-3185247.png" class="w-10 bg-gradient-to-br from-red-500 to-red-900 rounded-lg p-2" alt="dashboard">
                <span>Inventory</span>
              </router-link>   
             
            </li>    
            <li  class="list_button  ">
              <router-link :to="{name:'Accounts'}" class="p-2 bg-white rounded-lg bg-gradient-to-br from-white to-red-50 flex gap-2 items-center row hover:scale-[1.05]">
                <img src="@\assets\internship-3833168-3185247.png" class="w-10 bg-gradient-to-br from-red-500 to-red-900 rounded-lg p-2" alt="dashboard">
                <span>Accounts</span>
              </router-link>   
             
            </li>    
            <li  class="list_button  ">
              <router-link :to="{name:'Budget'}" class="p-2 bg-white rounded-lg bg-gradient-to-br from-white to-red-50 flex gap-2 items-center row hover:scale-[1.05]">
                <img src="@\assets\internship-3833168-3185247.png" class="w-10 bg-gradient-to-br from-red-500 to-red-900 rounded-lg p-2" alt="dashboard">
                <span>Budget</span>
              </router-link>   
             
            </li>    
            <li  class="list_button  ">
              <router-link :to="{name:'Expenses'}" class="p-2 bg-white rounded-lg  bg-gradient-to-br from-white to-red-50 flex gap-2 items-center row hover:scale-[1.05]">
                <img src="@\assets\internship-3833168-3185247.png" class="w-10 bg-gradient-to-br from-red-500 to-red-900 rounded-lg p-2" alt="dashboard">
                <span>Expenses</span>
              </router-link>   
             
            </li>    
            <li  class="list_button  ">
              <router-link :to="{name:'Reports'}" class="p-2 bg-white rounded-lg bg-gradient-to-br from-white to-red-50 flex gap-2 items-center row hover:scale-[1.05]">
                <img src="@\assets\internship-3833168-3185247.png" class="w-10 bg-gradient-to-br from-red-500 to-red-900 rounded-lg p-2" alt="dashboard">
                <span>Reports</span>
              </router-link> 

             
            </li> 
            <li  class="list_button  ">
              <router-link :to="{name:'Returns'}" class="p-2 bg-white rounded-lg bg-gradient-to-br from-white to-red-50 flex gap-2 items-center row hover:scale-[1.05]">
                <img src="@\assets\internship-3833168-3185247.png" class="w-10 bg-gradient-to-br from-red-500 to-red-900 rounded-lg p-2" alt="dashboard">
                <span>Returns</span>
              </router-link>   
             
            </li>  
             <li  class="list_button  ">
              <router-link :to="{name:'Settings'}" class="p-2 bg-white rounded-lg bg-gradient-to-br from-white to-red-50  flex gap-2 items-center row hover:scale-[1.05]">
                <img src="@\assets\internship-3833168-3185247.png" class="w-10 bg-gradient-to-br from-red-500 to-red-900 rounded-lg p-2" alt="dashboard">
                <span>Settings</span>
              </router-link>   
             
            </li>
            <li  class="list_button  ">
              <router-link :to="{name:'Feedback'}" class="p-2 bg-white rounded-lg bg-gradient-to-br from-white to-red-50 flex gap-2 items-center row hover:scale-[1.05]">
                <img src="@\assets\internship-3833168-3185247.png" class="w-10 bg-gradient-to-br from-red-500 to-red-900 rounded-lg p-2" alt="dashboard">
                <span>Feedback</span>
              </router-link>   
             
            </li>

          
      
         </ul>

   
    </div>


   
  
  </template>
  
  <script>
  export default {
  
      name:"Sidebar",

      props:{
        isHidden:{
          type:Boolean}
      },

        data(){
        return{
           isHidden:false
        }
        

      },
          methods:{

        closeNav(){ 
           this.isHidden=!this.isHidden
        }

      },
  
  }
  </script>
  
  <style scoped>
  
  </style>