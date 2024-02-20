<template>
  <h1 class="text-center font-bold ">ALL CUSTOMERS</h1>
  <router-link :to="{name :'Customer_info_form'}" class="bg-red-800 hover :bg-red-500 text-white font-bold py-1 px-1 rounded">Add Customer</router-link>
  <div>
  <section class=" dark:bg-gray-900 sm:p-5">
    <div class="mx-auto max-w-screen-xl">
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
                            <th scope="col" class="px-4 py-3">Customer Name</th>
                            <th scope="col" class="px-4 py-3">Phone Number</th>
                            <th scope="col" class="px-4 py-3">Action</th>
                            
                    
                         
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(row, index) in tableData" :key="index" class="border-b dark:border-gray-700">
                           
                        <td class="px-4 py-3">{{row.customerName}}</td>
                        <td class="px-4 py-3">{{row.phoneNumber}}</td>
                           
                       
                            <td>
          <button @click="handleViewClick(row)" class="px-4 py-2 text-blue-500 rounded hover:bg-gray-500">
            View
          </button>
          <button @click="handleEditClick(row)" class="px-4 py-2 text-blue-500 rounded hover:bg-gray-500">
            Edit
          </button>
          <button @click="deleteRow(index)" class="px-4 py-2 text-blue-500 rounded hover:bg-gray-500">
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
</template>

<script>
export default {
   name:"Quotation",
   data() {
    return{ 
      searchQuery: '',
        tableData: [
          {customerName: 'John Doe', phoneNumber: '254-728-788-990'},
          {customerName: 'Jane Doe', phoneNumber: '254-728-788-870'},
          {customerName: 'Grace Doe', phoneNumber: '254-762-788-990'},
          {customerName: 'Mark Doe', phoneNumber: '254-728-928-930'},
          {customerName: 'Joy Doe', phoneNumber: '254-789-783-991'},

        ],
    }
   },
   computed: {
    filteredTableData() {
      return this.tableData.filter(row => {
        const searchTerm = this.searchQuery.toLowerCase();
        return row.quotationNumber.toLowerCase().includes(searchTerm) ||
               row.status.toLowerCase().includes(searchTerm);
      });
    },
   },
   methods: {
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
   
 }
}
</script>

<style>

</style>