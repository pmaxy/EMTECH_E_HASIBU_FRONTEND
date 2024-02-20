
<template>
  <router-link :to="{name:'Accounts'}" class="bg-red-800 rounded text-white font-bold">ACCOUNTS</router-link>
  <div>
    
       <div class="w-full max-w-md rounded shadow-md justify-center ml-80 bg-white mx-auto px-8 py-15 " >
    <form @submit.prevent="submitForm">
      <br>
      <label for="accountCode">ACCOUNT CODE:</label><br>
      <br>
      <input  class="rounded border border-red-800 w-80" type="number" id="accountCode" v-model="accountCode">
      <br>
      <br>
      <br>
      <label for="accountType">ACCOUNT TYPE:</label><br>
      <br>
      <input class="rounded border border-red-800 w-80" type="text" id="accountType" v-model="accountType">
      <br>
      <br>
      <br>
      <label for="openingBalance">OPENING BALANCE:</label><br>
      <br>
      <input class="rounded border border-red-800 w-80" type="number" id="openingBalance" v-model="openingBalance">
      <br>
      <br>
      <br>
      <button  class="bg-red-800 rounded text-white font-bold" type="submit">Submit</button>
    </form>
    </div>
  </div>
  
    </template>

  <script>

export default {
  name:"AccountForm",
  data() {
    return {
      accountCode: '',
      accountType: '',
      openingBalance:''
    };
  },

methods: {
    submitForm() {
      // You can emit an event or perform any other actions here
      console.log('Form submitted');
    }
  }
};
  </script>