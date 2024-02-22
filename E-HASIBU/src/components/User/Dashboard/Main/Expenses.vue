<template>
    
    <div class="flex justify-center items-center h-screen w-screen bg-gray-200">
    <form class="flex flex-col gap-4 pr-6 pl-4 pb-2 pt-2 justify-center items-center rounded-lg bg-white">
    <h1 class="block text-red-700 text-sm font-bold mb-2">PAYROLL</h1>

      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="name">Name:</label>
        <input
          v-model="name"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight   focus:shadow-outline"
          id="name"
          type="text"
          
          required
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="id">
          ID:
        </label>
        <input
          v-model="id"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight  focus:shadow-outline "
          id="id"
          type="text"
          
          required
        />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="accountNumber">
          Account Number:
        </label>
        <input
        v-model="accountNumber"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight outline-red-800 focus:shadow-outline"
          id="accountNumber"
          type="text"
          required
          />
      </div >
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="amount">Amount</label>
        <input v-model="amount"
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="accountNumber"
          type="text"/>
      </div>
      <div class="bg-red-800 text-white font-bold rounded w-20 text-center">
        <button @click="submit">Submit</button>
      </div>
  

      
    </form>
  </div>
  </template>
  
  <script>
  export default {
  }
  </script>
  
  <style>
  
  </style>