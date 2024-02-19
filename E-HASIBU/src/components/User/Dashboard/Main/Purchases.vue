
<template>
<div class="h-screen overflow-y-scroll">
  <h1 class="bg-white text-red-800 text-center">PURCHASES ORDER</h1>
  
 <form @submit.prevent="submitformValues">
   <div>
      <h2>Client Information </h2>
        <p class="bg-white text-red-800 ml-5 mr-10 mt-2 rounded"> <label for="firstName">First Name: </label>
         <input type="text" id="firstName" class="bg-gray-200 mt-5 ml-2 mr-2 rounded w-50" placeholder="First Name"  v-model="formvalues.firstName">
         <label for="middleName">Middle Name:  </label>
         <input type="text" id="middleName" class="bg-gray-200 ml-2 mt-5 mr-2 rounded w-50" placeholder="Middle Name"  v-model="formvalues.middleName">
         <label for="lastName">Last Name: </label>
         <input type="text" id="lastName" class="bg-gray-200 mt-5 ml-2 mr-2 rounded w-50" placeholder="Last Name"  v-model="formvalues.lastName"><br>
         <label for="email">Email: </label>
         <input type="text" id="email" class="bg-gray-200 ml-2 mt-5 mr-2 rounded w-80" placeholder="Email" v-model="formvalues.email"><br>
         <label for="phone">Phone: </label>
         <input type="index" id="phone" class="bg-gray-200 ml-2 mt-5 mr-2 rounded w-60" placeholder="Phone" v-model="Phone"><br>
          <label for="address">Address: </label>
         <input type="index" id="address" class="bg-gray-200 mb-2 ml-2 mt-5 mr-2 rounded w-60" placeholder="address" v-model="Address"><br></p>
   </div>
   <div>
      <h2>Billing Information</h2>
    <p class="bg-white text-red-800 ml-5 mr-10 mt-2 rounded"><label for="billingAddress">Billing Address: </label>
         <input type="text" id="billingAddress" class="bg-gray-200 ml-2 mt-5 mr-2 rounded w-50" placeholder="Billing Address"  v-model="formvalues.billingAddress"><br>
          <label for="city">City: </label>
         <input type="text" id="city" class="bg-gray-200 ml-2 mt-5 mr-2 rounded w-50" placeholder="City"  v-model="formvalues.city"><br>
          <label for="Terms and Conditions">Terms and Conditions: </label>
         <input type="text" id="termsandConditions" class="bg-gray-200 ml-2 mt-5 mr-2 rounded w-50" placeholder="Terms and Conditions"  v-model="formvalues.termsandConditions"><br>
          <label for="purchaseDate">Purchase Date: </label>
         <input type="date" id="purchaseDate" class="bg-gray-200 mb-3 ml-2 mt-5 mr-2 rounded w-50" placeholder="Purchase Date"  v-model="formvalues.purchaseDate"><br></p>
    </div>
    <div class="bg-white mt-3 mb-3 mr-10 ml-5 text-red-800 rounded">
    <label for="purchaseId">Purchase ID: </label>
         <input type="text" id="purchaseId" class="bg-gray-200 ml-2 mt-5 mb-3 mr-2 rounded w-50" placeholder="Purchase ID"  v-model="formvalues.purchaseId">
    </div>
    <div class="bg-white mt-3 mb-3 mr-10 ml-5 text-red-800 rounded">
    <label for="deliveryDate">Delivery Date: </label>
         <input type="text" id="deliveryDate" class="bg-gray-200 ml-2 mt-5 mb-3 mr-2 rounded w-50" placeholder="Delivery Date"  v-model="formvalues.deliveryDate">
    </div>
    <h3>Products</h3>
    <input v-model="searchTerm" class="pl-10 mr-30 mb-5 mt-3 rounded item-center bg-red-800" placeholder="search products">
      <div>
      <table class="table-auto border-collapse border ml-4 mr-20 w-full">
        <thead>
          <tr>
            <th class="border border-red-800 p-2 bg-red-100">Item</th>
            <th class="border border-red-800 p-2 bg-red-100">Description</th>
            <th class="border border-red-800 p-2 bg-red-100">Quantity </th>
            <th class="border border-red-800 p-2 bg-red-100">Rate</th>
            <th class="border border-red-800 p-2 bg-red-100">Amount</th>
          </tr>
        </thead>
      <tbody>
      <tr v-for="(row, index) in rows" :key="index">
      <td v-for="(cell, cellIndex) in row" :key="cellIndex" class="border border-red-800 p-2" >{{cell}}</td>
      </tr>
      </tbody>
      </table>
      <div class="flex-justify-right">
      <button @click="removeItem" class="text-white bg-red-800 w-25 rounded ml-4 mr-3 mt-2 mb-2 w-20 box-shadow-50">Remove</button>
      <button @click="addItem" class="text-white bg-red-800 w-25 rounded ml-4 mr-3 mt-2 mb-2 w-20 box-shadow-50" >Add Item</button>
   </div>
   </div>
      <div class="text-center font-bold">
      <button @click="cance" class="text-white bg-red-800 w-25 rounded ml-4 mr-4 mt-2 mb-2 w-20 box-shadow-50">Cance</button>
      <button @click="submit" class="text-white bg-red-800 w-25 rounded ml-4 mr-4 w-20 box-shadow-50" >Submit</button>
      </div>
      <div>
         <label for="item"> Item </label>
         <input v-model="item" type="text" id=" item"/>
         <label for="quantity">Quantity</label>
         <input v-model="quantity" type="number" id="quantity"/>
         <label for="rate"> Rate </label>
         <input v-model="rate" type="text" id=" rate"/>
         <label for="amount"> Amount </label>
         <input v-model="amount" type="number" id=" amount" readonly/>
         <p>calculated Amount: {{amount}}</p>
      </div>
      <div>
      <h2>Billing Information</h2>
    <p class="bg-white text-red-800 ml-5 mr-10 mt-2 rounded"><label for="billingAddress">Billing Address: </label>
         <input type="text" id="billingAddress" class="bg-gray-200 ml-2 mt-5 mr-2 rounded w-50" placeholder="Billing Address"  v-model="formvalues.billingAddress"><br>
          <label for="city">City: </label>
         <input type="text" id="city" class="bg-gray-200 ml-2 mt-5 mr-2 rounded w-50" placeholder="City"  v-model="formvalues.city"><br>
          <label for="Terms and Conditions">Terms and Conditions: </label>
         <input type="text" id="termsandConditions" class="bg-gray-200 ml-2 mt-5 mr-2 rounded w-50" placeholder="Terms and Conditions"  v-model="formvalues.termsandConditions"><br>
          <label for="purchaseDate">Purchase Date: </label>
         <input type="date" id="purchaseDate" class="bg-gray-200 mb-3 ml-2 mt-5 mr-2 rounded w-50" placeholder="Purchase Date"  v-model="formvalues.purchaseDate"><br></p>
    </div>
 </form>
    </div>
   

  
  
</template>

<script>
export default {
    name:"PURCHASES",
    data() {
      return {
         formvalues: {
            buyerName:'',
            email:'',
         },
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