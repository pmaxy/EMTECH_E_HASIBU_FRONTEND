<template>
  <div>
    <h2>VENDOR LIST</h2>
    <div>
          <input class="border border-red-800 rounded mt-5 mb-2 ml-2 mr-80" type="text" v-model="searchQuery" placeholder="Search items..." /><br>
    <table border="1">
      <thead>
        <tr class="border border-red-800 rounded-lg">
          <th class="pl-2 pr-2 pb-2 pt-2 mr-10 ml-2">Vendor Name</th>
          <th class="pl-2 pr-2 pb-2 pt-2 mr-10 ml-2">Email</th>
          <th class="pl-2 pr-2 pb-2 pt-2 mr-10 ml-2">Phone</th>
          <th class="pl-2 pr-2 pb-2 pt-2 mr-10 ml-2">Display Name</th>
          <th class="pl-2 pr-2 pb-2 pt-2 mr-10 ml-2">Vendor Type</th>
          <th class="pl-2 pr-2 pb-2 pt-2 mr-10 ml-2">Other Details</th>
          <th class="pl-2 pr-2 pb-2 pt-2 mr-10 ml-2">Address</th> 
          <th class="pl-2 pr-2 pb-2 pt-2 mr-10 ml-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr class="border border-red-800 rounded-lg" v-for="(item, index) in tableData" :key="item.id">
          <td class="pl-2 pr-2 pb-2 pt-2 mr-10 ml-10">{{ item.vendorName }}</td>
          <td class="pl-2 pr-2 pb-2 pt-2 mr-10 ml-10">{{ item.email }}</td>
          <td class="pl-2 pr-2 pb-2 pt-2 mr-10 ml-10">{{ item.phone }}</td>
          <td class="pl-2 pr-2 pb-2 pt-2 mr-10 ml-10">{{ item.displayName }}</td>
          <td class="pl-2 pr-2 pb-2 pt-2 mr-10 ml-10">{{ item.vendorType }}</td>
          <td class="pl-2 pr-2 pb-2 pt-2 mr-10 ml-10">{{ item.otherDetails }}</td>
          <td class="pl-2 pr-2 pb-2 pt-2 mr-10 ml-10">{{ item.address }}</td>
          <td>
            <button type="button" @click="deleteItem(index)" class="bg-red-800 w-30 text-white pr-2 pl-2 ml-1 mr-3 rounded-lg">Delete</button>
            <button type="button" @click="editItem(index)" class="bg-red-800 w-30 text-white pl-2 pr-2 ml-3 mr-1 mt-1 rounded-lg">Edit</button>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="pagination">
      <button @click="prevPage" class="bg-red-800 text-white font-bold mt-2 mb-2 ml-2 mr-2 pl-2 pr-2 rounded-lg">Previous</button>
      <span class="bg-red-800 text-white font-bold mt-2 mb-2 ml-1 mr-1 pl-2 pr-2 rounded-lg">{{ currentPage }} / {{ totalPages }}</span>
      <button @click="nextPage" class="bg-red-800 text-white font-bold mt-2 mb-2 ml-2 mr-2 pl-3 pr-3 rounded-lg">Next</button>
    </div>
    </div>
    <h2 class="bg-red-800 tex-white-300 font-bold rounded-lg w-40 mt-2 ml-3 mb-2 pl-4"> New Vendor</h2>
    <form  @submit.prevent="submitForm" class="bg-red-800 w-100 text-white pl-2 pr-2 ml-3 mr-1 mt-1 rounded-lg">
      <div>
        <label for="vendorName">Vendor Name:</label>
        <input type="text" id="vendor name" v-model="formData.vendorName" class=" w-60 text-red-800 pl-2 pr-2 ml-3 mr-1 mt-2 mb-3 rounded-lg" required>
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="formData.email" class=" w-75 text-red-800 pl-2 pr-2 ml-3 mr-1 mt-2 mb-3 rounded-lg" required>
      </div>
      <div>
        <label for="phone">Phone:</label>
        <input type="phone" id="Phone" v-model="formData.phone" class=" w-30 text-red-800 pl-2 pr-2 ml-3 mr-1 mt-2 mb-3 rounded-lg" required>
      </div>
      <div>
        <label for="displayName">Display Name:</label>
        <input type="displayName" id="displayName" v-model="formData.displayName" class=" w-30 text-red-800 pl-2 pr-2 ml-3 mr-1 mt-2 mb-3 rounded-lg" required>
      </div>
      <div>
        <label for="vendortype">Vendor Type:</label>
        <input type="text" id="vendorType" v-model="formData.vendorType" class=" w-30 text-red-800 pl-2 pr-2 ml-3 mr-1 mt-2 mb-3 rounded-lg" required>
      </div>
      <div>
        <label for="otherDetails">Other Details:</label>
        <input type="otherDetails" id="otherDetails" v-model="formData.otherDetails" class=" w-30 text-red-800 pl-2 pr-2 ml-3 mr-1 mt-2 mb-3 rounded-lg" required>
      </div>
      <div>
        <label for="address">Address:</label>
        <input type="address" id="address" v-model="formData.address" class=" w-30 text-red-800 pl-2 pr-2 ml-3 mr-1 mt-2 mb-3 rounded-lg" required>
      </div>
      <button type="submit" class="bg-white w-30 text-red-800 font-bold mb-2 pl-2 pr-2 ml-3 mr-1 mt-1 rounded-lg">Add</button>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const tableData = ref([]); 
    const formData = ref({
      vendorName: "",
      email: "",
      phone:"",
      displayName:"",
      vendorType:"",
      otherDetails:"",
      address:"",
    });

    const submitForm = () => {
      const newItem = {
        id: tableData.value.length + 1, 
        ...formData.value, 
      };
      tableData.value.push(newItem);
      formData.value.vendorName = "";
      formData.value.email = "";
      formData.value.phone = "";
      formData.value.displayName = "";
      formData.value.vendorType = "";
      formData.value.otherDetails = "";
      formData.value.addres = "";
    };

    const deleteItem = (index) => {
      if (tableData.value.length > 1) {
        tableData.value.splice(index, 1);
      } else {
        alert("Cannot remove the only item!");
      }
    };

    const editItem = (index) => {
      alert(`Edit item at index ${index}`);
    };

    return {
      tableData,
      formData,
      submitForm,
      deleteItem,
      editItem,
    };
  },
    totalPages() {
      return Math.ceil(this.filteredItems.length / this.itemsPerPage);
    },
  }
</script>
