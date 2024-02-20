<template>
    <div>
      <router-link :to="{name :'Inventoryform'}" class="bg-red-800 text-center py-2 px-4 rounded focus:outline-none focus:shadow-outline ml-2 text-white rounded">Add item</router-link>
    <h1 class="font-bold text-center text colour-red-800">INVENTORY</h1>
    <div class="fixed top-0 left-0 w-full h-full z-50 flex justify-center items-center" v-show="showForm">
      <InventoryForm @close="showForm = false" @submit="addItem" />
    </div>
  <div>
    <input class="rounded ml-2 mr-80" type="text" v-model="searchQuery" placeholder="Search items..." /><br>
    <div  class="filters mr-80 "><br>
      <label class="rounded ml-2 ">Filter by quantity:</label><br>
      <select class="rounded ml-2 mb-2 mt-2" v-model="quantityFilter">
        <option value="">All</option>
        <option value="<10">Less than 10</option>
        <option value=">10">More than 10</option>
      </select>
    </div> <br>

    <table class="my-table w-full border border-gray-100 table-auto">
      <thead>
        <tr>
          <th class="px-4 py-2 border border-red-800 bg-white">Item Name</th>
          <th class="px-4 py-2 border border-red-800 bg-white">Quantity</th>
          <th class="px-4 py-2 border border-red-800 bg-white">Price</th>
          <th class="px-4 py-2 border border-red-800 bg-white">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in filteredItems" :key="item.id">
          <td class="px-4 py-2 border border-red-800 ">{{ item.name }}</td>
          <td class="px-4 py-2 border border-red-800 ">{{ item.quantity }}</td>
          <td class="px-4 py-2 border border-red-800 ">{{ item.price }}</td>
          <td class="px-4 py-2 border border-red-800">{{ item.description }}</td>
        </tr>
      </tbody>
    </table>

    <div class="pagination">
      <button @click="prevPage">Previous</button>
      <span>{{ currentPage }} / {{ totalPages }}</span>
      <button @click="nextPage">Next</button>
    </div>
<div>
    <label for="file-upload">Upload file: </label>
    <input type="file" id="file-upload" @change="uploadFile">
</div>
  </div>
  
                               
  
</div>
  </template>
  
  <script>
  export default {
    name:"Inventory",
      data() {
        return {
           
      items: [
        { id: 1, name: "Item 1", quantity: 5, price: 10, description: "This is item 1" },
        { id: 2, name: "Item 2", quantity: 20, price: 25, description: "This is item 2" },
        // ... more items
      ],
      searchQuery: "",
      quantityFilter: "",
      currentPage: 1,
      itemsPerPage: 10,
    };
  },
  computed: {
    filteredItems() {
      return this.items.filter((item) => {
        const nameMatch = item.name.toLowerCase().includes(this.searchQuery.toLowerCase());
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