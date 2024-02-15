<template>
  <div class="text-red-800 ml-5 rounded-lg">
    <h2 class="text-center"><b>VENDOR Details</b></h2>
    <div class="bg-white ml-2 mr-2 rounded-lg">
    <ul>
      <li v-for="(vendor, index) in vendors" :key="index">
        {{ vendor.name }} - Email: {{ vendor.email }} - Phone: {{ vendor.phone }}
        - Company Name: {{ vendor.company }} - Vendor Type: {{ vendor.type }} - Vendor Display Name: {{vendor.display}} -Other Details: {{ vendor.details }} - Addresses: {{ vendor.addresses }}
        <button @click="editVendor(index)" class="bg-red-800 w-30 text-white ml-3 mr-1 mt-1 rounded-lg">Edit</button>
        <button @click="deleteVendor(index)" class="bg-red-800 w-30 text-white ml-1 mr-3 rounded-lg">Delete</button>
      </li>
    </ul>
    <form v-if="showForm" @submit.prevent="submitForm">
      <h3>{{ isEditing ? 'Edit Vendor' : 'Add Vendor' }}</h3>
      <div>
        <label for="vendorName">Vendor Name:</label>
        <input type="name" v-model="formVendor.firstName" class="bg-gray-200 ml-2 mr-2 rounded-lg" placeholder="First Name" required />
        <input type="name" v-model="formVendor.lastName" class="bg-gray-200 ml-2 mr-2 rounded-lg" placeholder="Last Name" required />
      </div><br>
      <div> 
        <label for="vendorEmail">Email:</label>
        <input type="email" v-model="formVendor.email" class="bg-gray-200 ml-2 rounded-lg w-80" required />
      </div><br>
      <div> 
        <label for="vendorPhone">Phone:</label>
        <input type="tel" v-model="formVendor.phone" class="bg-gray-200 ml-2 rounded-lg" required />
      </div><br>
      <div>
        <label for="vendorCompany">Company Name:</label>
        <input type="company" v-model="formVendor.companyName" class="bg-gray-200 ml-2 rounded-lg w-80" required />
      </div><br>
      <div>
      <label for="vendorType">Vendor Type:</label>
        <input type="company" v-model="formVendor.type" class="bg-gray-200 ml-2 rounded-lg w-80" required />
      </div><br>
      <div>
      <label for="vendorDisplay">Vendor Display Name:</label>
        <input type="display" v-model="formVendor.DisplayName" class="bg-gray-200 ml-2 rounded-lg w-80" required />
      </div><br>
      <div>
        <label for="vendorDetails">Other Details:</label>
        <input type="text" v-model="formVendor.curency" class="bg-gray-200 ml-2 rounded-lg w-50" placeholder="Curency" required />
         <input type="text" v-model="formVendor.paymentTerms" class="bg-gray-200 ml-2 rounded-lg w-80" placeholder="Payment Terms" required />
      </div><br>
      <div>
        <label for="vendorAddresses">Addresses:</label>
        <input type="address" v-model="formVendor.billingAddress" class="bg-gray-200 ml-2 rounded-lg w-80" placeholder="Billing Address (P.O.Box, Code, City)" required />
         <input type="address" v-model="formVendor.shippingAddress" class="bg-gray-200 ml-2 rounded-lg w-80" placeholder="Shipping Address (P.O.Box, Code, City)" required />
      </div><br>
      <button type="submit" class="bg-red-800 w-30 text-white ml-1 mr-3 font-bold m-1 pl-2 pr-2 rounded-lg">{{ isEditing ? 'Update Vendor' : 'Add Vendor' }}</button>
      <button type="button" @click="cancelForm" class="bg-red-800 w-30 text-white ml-1 mr-3 m-1 pl-2 pr-2 font-bold rounded-lg">Cancel</button>

    </form>

    <button @click="showAddForm" class="bg-red-800 w-30 text-white ml-1 mr-3 m-1 pr-2 pl-2 font-bold rounded-lg">Add Vendor</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'VendorList',
  props: {
    initialVendors: Array,
  },
  setup(props) {
    const vendors = ref(props.initialVendors || []);
    const showForm = ref(false);
    const isEditing = ref(false);
    const formVendor = ref({ name: '', email: '', phone: '', companyName:'',vendorDisplay:'', vendorType:'', otherDetails:'', addresses:''});
    let editIndex = null;

    const showAddForm = () => {
      showForm.value = true;
      isEditing.value = false;
      formVendor.value = { name: '', email: '', phone: '', companyName:'',vendorDisplay:'', vendorType:'', otherDetails:'', addresses:''};
    };

    const editVendor = (index) => {
      editIndex = index;
      showForm.value = true;
      isEditing.value = true;
      formVendor.value = { ...vendors.value[index] };
    };

    const deleteVendor = (index) => {
      vendors.value.splice(index, 1);
    };

    const cancelForm = () => {
      showForm.value = false;
      editIndex = null;
    };

    const submitForm = () => {
      if (isEditing.value) {
        // Update existing vendor
        vendors.value[editIndex] = { ...formVendor.value };
      } else {
        // Add new vendor
        vendors.value.push({ ...formVendor.value });
      }

      showForm.value = false;
      editIndex = null;
    };

    return {
      vendors,
      showForm,
      isEditing,
      formVendor,
      showAddForm,
      editVendor,
      deleteVendor,
      cancelForm,
      submitForm,
    };
  },
};

</script>

<style>

</style>