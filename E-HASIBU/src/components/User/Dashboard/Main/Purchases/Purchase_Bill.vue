<template>
<div>
  <h2 class=" bg-red-800 text-white pl-2 pr-2 pb-1 pt-1  ml-5 mr-10 mt-2 rounded-lg">ALL BILLS</h2><br>
<router-link :to="{name :'New_Bill'}" class=" bg-red-800 text-white pl-2 pr-2 pb-1 pt-1  ml-5 mr-10 mt-1 rounded-lg shadow-xl">Add Bill
</router-link><br><br>
<router-link :to="{name :'Paid_Bill'}" class=" bg-red-800 text-white pl-2 pr-2 pb-1 pt-1 mt-6 ml-5 mr-10 mb-1 mt-1 rounded-lg">Paid Bill
</router-link>
    <div >
        <div  class="filters mr-80 "><br>
      <label class="rounded-lg ml-2">Filter by Status:</label><br>
      <select v-model="statusFilter" class="rounded-lg ml-2 text-red-800 border-border-red-800"> 
        <option value="">All</option>
        <option value="">Approved Bills</option>
        <option value="">Paid Bills</option>
        <option value=">10">Partially Paid Bills</option>
        <option value=">10">Overdue Bills</option>
        <option value=">10">Unpaid Bills</option>
        <option value=">10">Open Bills</option>
        <option value=">10">Draft Bills</option>
      </select>
    </div> <br>
    </div>
    <div>
   <section class=" dark:bg-gray-900 sm:p-5 rounded-lg">
    <div class="mx-auto max-w-screen-xl rounded-lg">
        <!-- Start coding here -->
        <div class="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
            <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
                <div class="w-full md:w-1/2">
                    <form class="flex items-center">
                        <label for="simple-search" class="sr-only">Search</label>
                        <div class="relative w-full">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                                </svg>
                            </div>
                            
                            <input v-model="searchQuery" @input="filterData" type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search" required="">
                        </div>
                    </form>
                </div>
               </div>
                    
            <div class="overflow-x-auto">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-4 py-3">Order Number</th>
                            <th scope="col" class="px-4 py-3">Status</th>
                            <th scope="col" class="px-4 py-3">Bill Date</th>
                            <th scope="col" class="px-4 py-3">Actions</th>
                    
                         
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(row, index) in filteredTableData" :key="index" class="border-b dark:border-gray-700">
                           
                            <td class="px-4 py-3">{{row.orderNumber}}</td>
                            <td class="px-4 py-3">{{row.status}}</td>
                            <td class="px-4 py-3">{{row.date}}</td>
                       
                            <td>
          <button @click="handleViewClick(row)" class="px-4 py-2 text-red-800 rounded hover:bg-gray-500">
            View
          </button>
          <button @click="handleEditClick(row)" class="px-4 py-2 text-red-800 rounded hover:bg-gray-500">
            Edit
          </button>
          <button @click="deleteRow(index)" class="px-4 py-2 text-red-800 rounded hover:bg-gray-500">
            Delete
          </button>
        </td>
        </tr>               
        </tbody>
         </table>
            </div> 
            </div>
            </div>
            </section>                
    </div>
 <!------
    <div class="pagination" >
      <button @click="prevPage" class="bg-red-800 text-white font-bold">Previous</button>
      <span>{{ currentPage }} / {{ totalPages }}</span>
      <button @click="nextPage" class="bg-red-800 text-white font-bold">Next</button>
    </div>
  </div> ----->
</div>
  </template>
<script>
export default {
    name:"Purchase_Bills",
      data() {
        return {
       tableData: [
          {orderNumber: 'V2809W', status: 'approved', date: '2024-02-18'},
          {orderNumber: 'F2812A', status: 'paid',  date: '2024-02-02'},
          {orderNumber: 'R0306M', status: 'partially Paid',  date: '2024-01-18'},
          {orderNumber: 'J0703R', status: 'unpaid', date: '2023-09-18'},
          {orderNumber: 'E2022E', status: 'open bills',  date: '2023-05-18'},
          {orderNumber: 'W1998N', status: 'Overdue bills',  date: '2023-05-18'},
          {orderNumber: 'E1992A', status: 'draft bills',  date: '2023-05-18'},
        ],    
      searchQuery: "",
      statusFilter: "",
      currentPage: 1,
      itemsPerPage: 10,
    };
  },
  computed: {
    filteredTableData() {
      return this.tableData.filter((row) => {      
         const searchTerm = this.searchQuery.toLowerCase();
         const nameMatch = 
          row.orderNumber.toLowerCase().includes(searchTerm) ||
                row.status.toLowerCase().includes(searchTerm);

        const statusMatch =
          this.statusFilter === "" ||
        this.statusFilter === this.statusFilter ===row.status;
        return nameMatch && statusMatch;
      });
    },
    totalPages() {
      return Math.ceil(this.filteredItems.length / this.itemsPerPage);
    },
  },
  methods: {
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    uploadFile(event) {
      // Handle file upload logic here
      console.log("Uploading file:", event.target.files[0]);
        },  
        deleteRow(index) {
    if (confirm("Are you sure you want to delete this quote?"))
    this.tableData.splice(index, 1)
   },
   handleEditClick(row) {
      if (confirm("Are you sure you want to edit this quote?")) {
        // Navigate to edit page (update routing based on your setup)
        this.$router.push({ name: "Quotation_edit", params: { id: row.id } });
      }
    },
  },
};


</script>

<style>

</style>