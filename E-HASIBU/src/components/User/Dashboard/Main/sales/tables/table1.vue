<template>
    <div class="h-screen overflow-y-scroll ml-5 mr-5">
     <div>
   <h2 class="text-center font-bold">ALL QUOTATIONS</h2>
      <router-link :to="{name :'Quotation_form'}" class="bg-red-800 hover :bg-red-500 text-white font-bold py-1 px-1 rounded">Add Form</router-link>
    
 </div>
   <div class="p-4 flex justify-between items-center">
     <div class="mt-4">
       <label class="rounded">Filter by Date</label>
        <select v-model="selectedDateRange"  class="p-2 bg-white-500 rounded shadow-lg">
         <option value="all">All</option>
         <option value="today">Today</option>
         <option value="1day">1 Day Ago</option>
          <option value="7days">7 Days Ago</option>
           <option value="30days">30 Days Ago</option>
            <option value="1year">1 Year Ago</option>
             <option value="older">Older</option>
        </select>
     </div>
     <div class="mt-4">
       <input v-model="searchQuery" @input="filterData" type="text" placeholder="search..." class="p-2 bg-white-500 rounded shadow-lg">
 
     </div>
     </div>
       <table @edit-row="handleEditRow" class="w-full">
        <thead>
         <tr>
           <th class="border border-red-800 p-4">Quotation Number</th>
           <th class="border border-red-800 p-4">Status</th>
           <th class="border border-red-800 p-4">Date</th>
           <th class="border border-red-800 p-4">Action</th>
         </tr>
        </thead>
        <tbody>
         <tr v-for="(row, index) in filteredTableData" :key="index">
           <td  class="border border-red-800 p-4">{{ row.quotationNumber }}</td>
           <td  class="border border-red-800 p-4">{{ row.status }}</td>
            <td  class="border border-red-800 p-4">{{ row.date }}</td>
           <td class="p-4 flex justify-end space-x-2 border border-red-800">
             <button class="px-4 py-2 text-blue-500 rounded hover:bg-gray-500">View</button>
             <button @click="$emit('edit-row', index)" class="px-4 py-2 text-blue-500 rounded hover:bg-gray-500">Edit</button>
             <button @click="deleteRow(index)" class="px-4 py-2 text-blue-500 rounded hover:bg-gray-500">Delete</button>
 
           </td>
         </tr>
        </tbody>
       </table>
     <h2>PAYMENT METHODS</h2>
     <h2>EMTECH HUB</h2>
     <h2>EMTECH HUB</h2>
     <h2>EMTECH HUB</h2>
     <h2>EMTECH HUB</h2>

                           
     </div>
 </template>
 
 <script>
 export default {
    name:"Quotation",
    data() {
     return{ 
       searchQuery: '',
         tableData: [
           {quotationNumber: '###', status: 'approved', date: '2024-02-18'},
           {quotationNumber: '###', status: 'paid',  date: '2024-02-02'},
           {quotationNumber: '###', status: 'declined',  date: '2024-01-18'},
           {quotationNumber: '###', status: 'unpaid', date: '2023-09-18'},
           {quotationNumber: '###', status: 'waiting',  date: '2023-05-18'},
 
         ],
         selectedDateRange: 'all',
     }
    },
    computed: {
     filteredTableData() {
       return this.tableData.filter( (row)=> {
         return row.quotationNumber.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
                row.status.toLowerCase().includes(this.searchQuery.toLowerCase()) 
       })
     },
 
    },
    methods: {
    deleteRow(index) {
     if (confirm("Are you sure you want to delete this quote?"))
     this.tableData.splice(index, 1)
    },
    handleEditRow(index) {
     console.log('Edit row:', index)
    },
    
   
  
  }
 }
 </script>
 
 <style>
 
 </style>