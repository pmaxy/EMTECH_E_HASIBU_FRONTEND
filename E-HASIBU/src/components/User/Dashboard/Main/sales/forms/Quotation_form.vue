<template>
<h1 class="font-bold text-center">NEW QUOTE</h1>
     <router-link :to="{name :'Quotation'}" class="bg-red-800 hover :bg-red-500 text-white font-bold py-1 px-1 rounded">Previous</router-link>
<div>
  <div>
    <h3 class="font-bold ml-3">GENERAL DETAILS</h3>
       <form>
    <div >
     <p class="bg-white mt-1 ml-3 mr-5 rounded"><label for="quotation no" class="text-red-800">Quotation No</label> <br>
      <input type="number" class="border border-red-800 mb-1 rounded w-80" id="quotation no" placeholder="Enter Quotation No" v-model="formValues.quotation">
      <br> 
      <label for="date of issue"   class="text-red-800">Date of Issue:</label> <br>
      <input type="date"  class="border border-red-800 mb-1 rounded w-80" id="date of issue" placeholder="Select date" v-model="formValues.date">
       <br> 
      <label for="expiry date" class="text-red-800">Expiry Date:</label><br>
      <input type="date"  class="border border-red-800 mb-1 rounded w-80" id="expiry date" placeholder="select expiry date" v-model="formValues.expiry">
        <br> 
      <label for="status"  class="text-red-800">Status:</label><br>
      <select id="status"  class="border border-red-800 mb-1 rounded w-80" v-model="formValues.status"> 
        <option value="">Select status</option>
        <option value="Approved">Approved</option>
        <option value="declined">Declined</option>
        <option value="waiting">Waiting</option>
        <option value="paid">Paid</option>
        <option value="unpaid">Unpaid</option>
      </select></p> 

    </div>
    <h3 class="font-bold ml-3 mt-5">CUSTOMERS INFORMATION</h3>
    <div class="bg-white  mt-1 ml-3 mr-5 rounded">
       <label for="business/customers name"  class="text-red-800">Business/Customers Name</label><br>
      <input type="text"  class="border border-red-800 mb-1 rounded w-80" id="business/customers name" placeholder="Enter Name" v-model="formValues.businessName">
      <br> 
       <label for="business/customers address"  class="text-red-800">Business/Customers Address</label><br>
      <input type="text"  class="border border-red-800 mb-1 rounded w-80" id="business/customers address" placeholder="Enter Address" v-model="formValues.adress">
      <br> 
       <label for="business/customers contact"  class="text-red-800">Business/Customers Contact</label><br>
      <input type="text"  class="border border-red-800 mb-1 rounded w-80" id="business/customers contact" placeholder="Enter Contact" v-model="formValues.contact">
    </div>
   </form>
    <h3 class="font-bold mt-5">PAYMENT DETAILS</h3>
   <div class="bg-white mt-1 ml-3 mr-5 rounded ">
   
    <table class="table-auto border-collapse  border border-red-800 w-full">
      <thead>
        <tr class="bg-white-200">
          <th class="border border-red-800 p-4">Item Name</th>
          <th class="border border-red-800 p-4">Description</th>
          <th class="border border-red-800 p-4">Quantity</th>
          <th class="border border-red-800 p-4">Rate</th>
          <th class="border border-red-800 p-4">Total</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(row, index) in rows" :key="index">
          <td v-for="(cell, cellIndex) in row" :key="cellIndex" class="border border-red-800 p-4">
            <input v-model="row[cellIndex]" class="w-full">
          </td>
        </tr>
      </tbody>
    </table>
    <div class="flex justify-between mt-4">
     <button @click="addRow" class="bg-red-800 hover :bg-red-500 text-white font-bold py-1 px-1 rounded">Add Row</button>
    <button @click="removeItem"  class="bg-red-800 hover :bg-red-500 text-white font-bold py-1 px-1 rounded">Remove</button> 
    </div>
   </div>
   <h4>Terms and Conditions</h4>
   <div>
    <textarea class="border-2 border-red-800 rounded p-2 h-auto w-full resize-none" placeholder="Enter terms and conditions" v-model="textareaContent"></textarea>
   </div>
   </div>
   <div class="flex justify-center mt-4">
    <button @click="submitForm" class="bg-red-800 hover :bg-red-500 text-white font-bold py-1 px-1 rounded">SUBMIT</button>
   </div>
   </div>
</template>

<script>
export default {

  name:'Quotation_form',

   data() {
    return{
        formValues: {
        quotation: Number,
        date:Date,
        expiry: Date,
        status: '',
        businessName: '',
        adress: "",
        contact: '',
      },
        rows: [
          ['', '', '', '', '']
        ],
        textareaContent: '',
     
    }},
    
    methods: {
    addRow(){
      this.rows.push(['', '', '', '', ''])
    },
    removeItem(index) {
      this.rows.pop( index,1)
    },
    submitForm () {
      
    }
   }
}
</script>

<style>

</style>