<template>
  <div>
    <h2>VENDOR LIST</h2>
    <div>
          <input class=" rounded mt-5 mb-2 ml-2 mr-80" type="text" v-model="searchQuery" 
          placeholder="Search vendor name, email, or other details...." /><br/>
    <table border="1" class="bg-white text-red-800  ml-5 mr-5 mt-2 rounded shadow-xxl">
      <thead>
        <tr class="bg-gray-300 rounded-lg">
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
        <tr class=" rounded-lg" v-for="(item, index) in filteredItems" :key="item.id">
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
    
<!---------
<form class="bg-white shadow-xl max-w-md mx-auto">
  <div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_first_name" id="floating_first_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_first_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">First name</label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_last_name" id="floating_last_name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_last_name" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
    </div>
  </div>
  <div class="relative z-0 w-full mb-5 group">
      <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>
   <div class="grid md:grid-cols-2 md:gap-6">
    <div class="relative z-0 w-full mb-5 group">
        <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (123-456-7890)</label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_company" id="floating_company" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_company" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company Name</label>
    </div>
  </div>
  <div class="relative z-0 w-full mb-5 group">
      <input type="text" name="floating_vendor_type" id="floating_vendor_type" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_vendor_type" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Vendor Type</label>
  </div>
  <div class="relative z-0 w-full mb-5 group">
      <input type="text" name="other_details" id="floating_repeat_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_other_details" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Other Details (currency)</label>
  </div>
 <div class="relative z-0 w-full mb-5 group">
      <input type="address" name="address" id="floating_address" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_address" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Address (P.O.Box, Code, City)</label>
  </div>
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
------>
    <form  @submit.prevent="submitForm" class=" w-100 text-red-800 pl-2 pr-2 ml-3 mr-1 mt-1 rounded-lg">
      <div>
        <label for="vendorName" class=" w-80 mt-1 ml-2 mr-10 rounded ">Vendor Name:</label><br>
        <input type="name" id="vendor name" placeholder="" v-model="formData.vendorName" class=" ml-2 mt-1 mr-2 rounded w-80" required>
      </div>
      <div>
        <label for="email" class=" w-80 mt-1 ml-2 mr-10 rounded ">Email:</label><br>
        <input type="email" id="email" placeholder="" class=" ml-2 mt-1 mr-2 rounded w-80 border-0"  v-model="formData.email" required>
      </div>
      <div>
        <label for="phone" class=" w-80 mt-1 ml-2 mr-10 rounded ">Phone:</label><br>
        <input type="phone" id="Phone" v-model="formData.phone" class=" ml-2 mt-1 mr-2 rounded w-80" required>
      </div>
      <div>
        <label for="displayName" class=" w-80 mt-1 ml-2 mr-10 rounded ">Display Name:</label><br>
        <input type="displayName" id="displayName" v-model="formData.displayName" class=" ml-2 mt-1 mr-2 rounded w-80" required>
      </div>
      <div>
        <label for="vendortype" class=" w-80 mt-1 ml-2 mr-10 rounded ">Vendor Type:</label><br>
        <input type="vendorType" id="vendorType" v-model="formData.vendorType" class=" ml-2 mt-1 mr-2 rounded w-80" required>
      </div>
      <div>
        <label for="otherDetails" class=" w-80 mt-1 ml-2 mr-10 rounded ">Other Details:</label><br>
        <input type="otherDetails" id="otherDetails" v-model="formData.otherDetails" class=" ml-2 mt-1 mr-2 rounded w-80" required>
      </div>
      <div>
        <label for="address" class=" w-80 mt-1 ml-2 mr-10 rounded ">Address:</label><br>
        <input type="address" id="address" v-model="formData.address" class=" ml-2 mt-1 mr-2 rounded w-80" required>
      </div>
      <button type="submit" class="bg-white w-30 text-red-800 font-bold mb-2 pl-2 pr-2 ml-3 mr-1 mt-1 rounded-lg">Add</button>
    </form>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

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
    const searchQuery = ref('');

    const filteredItems = computed (() => {
      if (!searchQuery.value) {
        return tableData.value;
      }
        const searchTerm = searchQuery.value.toLowerCase();
        return tableData.value.filter((item) => {
          return (
            item.vendorName.toLowerCase().includes(searchTerm) ||
            item.email.toLowerCase().includes(searchTerm) ||
            item.phone.toLowerCase().includes(searchTerm) ||
            item.displayName.toLowerCase().includes(searchTerm) ||
            item.other
          )
        }

        )
      }
    )

    return {
      tableData,
      formData,
      submitForm,
      deleteItem,
      editItem,
      filteredItems,
    };
  },
    totalPages() {
      return Math.ceil(this.filteredItems.length / this.itemsPerPage);
    },
  }
</script>