
<template>
<router-link :to="{name :'Purchase_Bill'}"  class=" bg-red-800 text-white ml-5 mr-10 mt-2 rounded pl-4 pr-4">Previous
</router-link>
<div class="h-screen overflow-y-scroll">
  <h1 class="bg-white text-red-800 text-center font-bold">PAID BILL</h1>
   <div>
 <form @submit.prevent="submitformValues">
  <div class="bg-white mt-3 mb-3 mr-10 ml-5 text-red-800 rounded">
      <label for="vendorName" class="ml-3 mb-2"> Vendor Name: </label>
      <input type="vendorName" id="vendorName" class="bg-gray-200 mt-5 ml-3 mr-2 mb-3 w-60 rounded w-30 pl-2" placeholder="Start typing to select name" v-model="formvalues.vendorName">
       <select to="vendorDetails"  class="bg-white text-red-800 ml-5 mr-10 mt-2 rounded "></select></div>
   <div class="bg-white text-red-800 ml-5 mr-10 mt-2 rounded ">
          <label for="billDate" class="ml-3 mb-2">Bill Date: </label>
         <input type="date" id="billDate" class="bg-gray-200 mb-3 ml-2 mt-5 mr-2 rounded w-50 pl-2" placeholder="Bill Date"  v-model="formvalues.billDateDate"><br>
    </div>
    <div class="bg-white mt-3 mb-3 mr-10 ml-5 text-red-800 rounded">
    <label for="orderNumber" class="ml-3 mb-2">Order Number: </label>
         <input type="orderNumber" id="orderNumber" class="bg-gray-200 ml-2 mt-5 mb-3 mr-2 rounded w-50 pl-2" placeholder="Order Number"  v-model="formvalues.orderNumber">
    </div>
    <div class="bg-white mt-3 mb-3 mr-10 ml-5 text-red-800 rounded">
    <label for="amountPaid" class="ml-3 mb-2">Amount Paid: </label>
         <input type="number" id="amount" class="bg-gray-200 ml-2 mt-5 mb-3 mr-2 rounded w-50 pl-2" placeholder="Amount Paid"  v-model="formvalues.amountPaid">
    </div>
    <div class="bg-white mt-3 mb-3 mr-10 ml-5 text-red-800 rounded">
      <label for="paymentMethods" class="ml-3 mb-2 pl-2">Payment Methods</label>
    <select v-model="paymentMethod"  class="mt-1 mb-1 ml-2">
      <input type="">
    <option value="Bankaccount">Bank Account</option>
    <option value="cheque">Cheque</option>
    <option value="mobileMoney">Mobile Money</option>
    </select>
    </div>
    <div class="bg-white mt-3 mb-3 mr-10 ml-5 text-red-800 rounded">
    <label for="paymentDate" class="ml-3 mb-2">Payment Date: </label>
         <input type="date" id="paymentDate" class="bg-gray-200 ml-2 mt-5 mb-3 mr-2 rounded w-50 pl-2" placeholder="Payment Date"  v-model="formvalues.paymentDateDate">
    </div>
    <div class="text-center font-bold">
      <button @click="downloadInvoice" class="text-white bg-red-800 w-25 rounded ml-4 mr-4 mt-2 mb-2 w-40 box-shadow-50">Download Invoice</button><br>
      <button @click="cance" class="text-white bg-red-800 w-25 rounded ml-4 mr-4 mt-2 mb-2 w-20 box-shadow-50">Cance</button>
      <button @click="submit" class="text-white bg-red-800 w-25 rounded ml-4 mr-4 w-20 box-shadow-50" >Submit</button>
      </div>
      <div>
         <label for="item"> Item </label>
         <input v-model="item" type="item" id=" item"/>
         <label for="quantity">Quantity</label>
         <input v-model="quantity" type="number" id="quantity"/>
         <label for="rate"> Rate </label>
         <input v-model="rate" type="rate" id=" rate"/>
         <label for="amount"> Amount </label>
         <input v-model="amount" type="number" id=" amount" readonly/>
         <p>calculated Amount: {{amount}}</p>
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