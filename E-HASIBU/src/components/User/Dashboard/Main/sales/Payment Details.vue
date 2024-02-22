<template>
  <h1 class="font-bold text-center hover:text-gray-400">PAYMENT INFORMATION</h1>
  <div class="bg-white mt-4 ml-4 mr-4 ">
    <div>
      <div>
          <h3 class="font-bold">PAYMENT DETAILS</h3>
        </div>
        </div>
    
      <div class="ml-7 mt-7 mr-7">
      
        <form class="max-w-full">
  <div class="relative z-0 w-full mb-5  group">
      <input type="date" name="date" id="date" v-model="formValues.date" class="block py-2.5   px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-800 focus:outline-none focus:ring-0 focus:border-red-800 peer" placeholder=" " required />
      <label for="date" class="peer-focus:font-medium  absolute text-md text-black-500 dark:text-gray-400 duration-300  transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto ">Transaction Date</label>
  </div>
  <div  class="relative z-0 w-full mb-5 group " >
    <label for="payment mode" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Mode of Payment</label>
  <select id="payment mode" v-model="formValues.paymentMode" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-800 focus:outline-none focus:ring-0 focus:border-red-800 peer">
    <option>Cash</option>
    <option>Cheque</option>
    <option>Mpesa</option>
    <option>Card</option>
  </select>
  </div>
  <div class="relative z-0 w-full mb-5 group ">
    <label for="payment status" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Payment Status</label>
  <select id="payment status" v-model="formValues.paymentStatus" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-800 focus:outline-none focus:ring-0 focus:border-red-800 peer">
    <option>Complete</option>
    <option>Incomplete</option>  
  </select>
  </div>
  <div class="relative z-0 w-full mb-5 group ">
    <input type="text"  name="amount" id="amount" v-model="formValues.amount" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-800 focus:outline-none focus:ring-0 focus:border-red-800 peer" placeholder=" " required />
        <label for="amount" class="peer-focus:font-medium absolute text-md text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate- ">Amount</label>
  </div>
  <div  class="relative z-0 w-full mb-5 group ">
    <input type="text"  name="payment_reason" id="payment_reason" v-model="formValues.paymentReason" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-800 focus:outline-none focus:ring-0 focus:border-red-800 peer" placeholder=" "  />
        <label for="payment_Reason" class="peer-focus:font-medium absolute text-lg font-b text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-">Reason for Payment</label>
  </div>
  <button class="text-white bg-red-800 hover:bg-gray-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">SAVE</button>
  </form>

</div>
  </div>
</template>

<script>
export default {
  name: "Payment Details",
  data() {
    return {
      formValues: {
        date: "date",
        paymentmode:"",
        paymentStatus: "",
        Amount: "",
        paymentReason: ""
      }
    }
  }

}
</script>

<style>

</style>