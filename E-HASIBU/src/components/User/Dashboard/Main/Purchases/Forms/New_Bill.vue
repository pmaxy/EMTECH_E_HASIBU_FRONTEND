
<template>
<router-link :to="{name :'Purchase_Bill'}" class=" bg-red-800 text-white ml-5 mr-10 mt-2 pl-3 pr-3 rounded-lg">Previous
</router-link>
<div class="h-screen overflow-y-scroll rounded-lg">
  <h1 class="bg-white text-red-800 text-center font-bold">NEW BILL</h1>
  <div class="shadow-xl mx-auto max-w-screen-l mr-3 ml-3 rounded-lg ">
<form @submit.prevent="submitformValues" class="w-full pl-3 bg-white ">
    <div class="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_vendor_name" id="floating_vendor_name" class="block py-2.5 px-0 w-full mt-3 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-red-800 peer" placeholder=" " required />
        <label for="floating_vendor_name" class="peer-focus:font-medium absolute pt-1 text-sm text-red-800 dark:text-red-800 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-600 peer-focus:dark:text-red-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Vendor Name</label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
        <input type="text" name="order_number" id="order_number" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-red-800 peer" placeholder=" " required />
        <label for="order_number" class="peer-focus:font-medium absolute text-sm text-red-800 dark:text-red-800 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-800 peer-focus:dark:text-red-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Order Number </label>
    </div>
  <div class="relative z-0 w-full mb-5 group">
   
      <input type="amount" name="floating_email" id="floating_amount" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-red-800 peer" placeholder=" " required />
      <label for="floating_amount" class="peer-focus:font-medium absolute text-sm text-red-800 dark:text-red-800 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-red-800 peer-focus:dark:text-red-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Amount</label>
  </div>
  <div class="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_payment_method" id="floating_payment_method" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-800 focus:outline-none focus:ring-0 focus:border-red-800 peer" placeholder=" " required />
        <label for="floating_payment_method" class="peer-focus:font-medium absolute text-sm text-red-800 dark:text-red-800 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-800 peer-focus:dark:text-red-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Payment Method</label>
    </div>
  <div class="relative z-0 w-full mb-5  group">
      <input type="date" name="bill_date" id="floating_bill_date" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-800 focus:outline-none focus:ring-0 focus:border-red-800 peer" placeholder=" " required />
      <label for="floating_bill_date" class="peer-focus:font-medium absolute text-xl text-red-800 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-800 peer-focus:dark:text-red-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Bill Date</label>
  </div>
  <div class="relative z-0 w-full mb-5 pb-5 group">
        <input type="date" name="floating_due_date" id="floating_due_date" class="block py-2.5 px-0 w-full mb-5 pb-1 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-800 focus:outline-none focus:ring-0 focus:border-red-800 peer" placeholder=" " required />
        <label for="floating_due_date" class="peer-focus:font-medium absolute text-xl text-red-800 dark:text-red-800 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-800 peer-focus:dark:text-red-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Due Date</label>
    </div>
    <div>
    <label for="file-upload" class="text-white bg-red-800 w-25 rounded ml-4 mr-4 mt-2 mb-2 w-40 box-shadow-50">Upload Invoice: </label>
    <input type="file" id="file-upload" @change="uploadFile">
</div>
    <div class="text-center font-bold">
      <button @click="cance" class="text-white bg-red-800 w-25 rounded ml-4 mr-4 mt-2 mb-2 w-20 box-shadow-50">Cance</button>
      <button @click="submit" class="text-white bg-red-800 w-25 rounded ml-4 mr-4 w-20 box-shadow-50" >Submit</button>
      </div>
 </form>
   </div>
    </div>
</template>

<script>
export default {
    name:"New_Bill",
    data() {
      return {
         formvalues: {
            buyerName:'',

         },
         isHidden:false,
         showForm:false,
            rows: [
               ['', '', '', '', '',]
            ],
            quantity: 0,
            rate: 0,
         }
      },
      methods: {
         removeItem(index) {
            this.rows.splice(index,1)
         },
         addItem(){
            this.rows.push(['', '', '', '', '',])
         },
         cancel(){

         },
         submit(){

         },
          uploadFile(event) {
      // Handle file upload logic here
      console.log("Uploading file:", event.target.files[0]);
        }   
  },
   computed:{
      amount() {
         return this.quantity * this.rate;
      }
   }
    }
    



      
</script>

<style>

</style>