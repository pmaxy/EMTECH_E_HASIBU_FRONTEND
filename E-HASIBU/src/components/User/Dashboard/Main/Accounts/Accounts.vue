<template>
  <div>
  <router-link :to="{name:'AccountForm'}" class="bg-red-800 rounded text-white font-bold justify-center">ADD ACCOUNT</router-link>
    <h1 class=" font-bold text-center text colour-red-800">ACCOUNTS</h1>
   </div>
  <input class="rounded mr-80 border border-red-800" type="text" v-model="searchQuery" placeholder="search Account"/><br>
    <div class="filters mr-80"><br>
      <label class="rounded">Filter by:</label><br>
      <select class=" mr-2 mt-2 mb-2 rounded bg-red-800 text-white" V-model="nameFilter">
        <option Value="">All</option>
        <option value="">Code</option>
        <option value="">Type</option>
      </select>
      </div><br>
      <div class=" flex flex-col ">
    <table class="my-table  border border-red-100 w=full table-auto">
      <thead>
        <tr>
          <th class="px-4 py-2 border border-red-800 bg-white">Account Code</th>
          <th  class="px-4 py-2 border border-red-800 bg-white">Account Type</th>
          <th  class="px-4 py-2 border border-red-800 bg-white"> Account Balance</th>
          <th  class="px-4 py-2 border border-red-800 bg-white"> Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(account, index) in accounts" :key="index" class="border border-red-800" >
          <td class="px-4 py-2 border border-red-800">{{ account.code }}</td>
          <td class="px-4 py-2 border border-red-800">{{ account.type }}</td>
        <td class="px-4 py-2 border border-red-800">{{account.Balance }}</td>
        <td class="px-4 py-2 border border-grey bg-red-800 font-bold text-white">
          <button class="bg-red-800 font-bold text-white pd-2" @click="view " >view</button>
        </td>
        </tr>
      </tbody>
    </table>
  </div>

    <div class="pagination">
      <button @click="prevPage">Previous</button>
      <span>{{ currentPage }}/{{ totalPages }}</span>
      <button @click="nextPage">Next</button>
    </div>
   </template>

<script>
export default {
  name:"accounts",
  data() {
    return {
      accounts: [
        { code: '101', type: ' GL', Balance: '0.00', action: 'view'},
        { code: '201', type: 'ASSETS', Balance: '0.00',action: 'view'},
        { code: '301', type: 'LIABILITIES', Balance: '0.00',action: 'view'},
        { code: '401', type: 'EXPENSES', Balance: '0.00',action: 'view'},
        { code: '501', type: 'BANK ACCOUNT', Balance: '0.00',action: 'view'},
        { code: '601', type: 'CASH ACCOUNT', Balance: '0.00',action: 'view'},
        { code: '701', type: 'EQUITY', Balance: '0.00',action: 'view'}

            ],
        searchQuery: "",
        currentPage: 1,
        accountsPerPage: 10,
        };
  },
  computed: {
    filteredAccounts(){
      return this.accounts.filter((account) =>{
        const nameMatch=account.name.toLowerCase().includes(this.searchQuery.toLowerCase());
        const codeMatch =
        this.codeFilter ==="" ||
        (this.codeFilter === "101, 201, 301, 401, 501, 601, 701" && account.code) ||
        (this.typeFilter === "GL, ASSETS, LIABILITIES, EXPENSES, BANK ACCOUNT, CASH ACCOUNT, EQUITY" && account.type);
        return nameMatch && codeMatch
      });
      
    },
    totalPages() {
      return Math.ceil(this.filteredAccountslength/this.accountsPerPage);
    },
    
  },
  methods: {
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentpage < this.totalPages) {
        this.currentPage++;

      }
    },
    
    
  }
};

  
</script>

<style>

</style>