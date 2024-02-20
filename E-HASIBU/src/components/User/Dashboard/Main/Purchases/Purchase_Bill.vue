<template>
<div>
  <h2 class=" bg-red-800 text-white pl-2 pr-2 pb-1 pt-1  ml-5 mr-10 mt-2 rounded">ALL BILLS</h2><br>
<router-link :to="{name :'New_Bill'}" class=" bg-red-800 text-white pl-2 pr-2 pb-1 pt-1  ml-5 mr-10 mt-1 rounded">Add Bill
</router-link><br><br>
<router-link :to="{name :'Paid_Bill'}" class=" bg-red-800 text-white pl-2 pr-2 pb-1 pt-1 mt-6 ml-5 mr-10 mb-1 mt-1 rounded">Paid Bill
</router-link>
    <div >
    <input class="border border-red-800 rounded mt-5 ml-2 mr-80" type="text" v-model="searchQuery" placeholder="Search items..." /><br>
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

    <table class="my-table w-full  border border-gray-100 table-auto">
      <thead>
        <tr>
          <th class="px-4 py-2 border border-red-800 bg-white">Vendor Name</th>
          <th class="px-4 py-2 border border-red-800 bg-white">Status</th>
          <th class="px-4 py-2 border border-red-800 bg-white">Amount</th>
          <th class="px-4 py-2 border border-red-800 bg-white">Bill Date</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in filteredItems" :key="item.id">
          <td class="px-4 py-2 border border-red-800">{{ item.name }}</td>
          <td class="px-4 py-2 border border-red-800">{{ item.status }}</td>
          <td class="px-4 py-2 border border-red-800">{{ item.amount }}</td>
          <td class="px-4 py-2 border border-red-800">{{ item.date }}</td>
        </tr>
      </tbody>
    </table>

    <div class="pagination" >
      <button @click="prevPage" class="bg-red-800 text-white font-bold">Previous</button>
      <span>{{ currentPage }} / {{ totalPages }}</span>
      <button @click="nextPage" class="bg-red-800 text-white font-bold">Next</button>
    </div>
  </div>
</div>
  </template>
<script>
export default {
    name:"Purchase Bills",
      data() {
        return {
           
      items: [
        { id: 1, name: "Item 1", status: 5, amount: 10, billDate: "This is item 1" },
        { id: 2, name: "Item 2", status: 20, amount: 25, billDate: "This is item 2" },
        // ... more items
      ],
      searchQuery: "",
      statusFilter: "",
      currentPage: 1,
      itemsPerPage: 10,
    };
  },
  computed: {
    filteredItems() {
      return this.items.filter((item) => {       const nameMatch = item.name.toLowerCase().includes(this.searchQuery.toLowerCase());
        const quantityMatch =
          this.quantityFilter === "" ||
          (this.quantityFilter === "<10" && item.quantity < 10) ||
          (this.quantityFilter === ">10" && item.quantity > 10);
        return nameMatch && quantityMatch;
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
        }   
  },
};


</script>

<style>

</style>