<template>
  <h1 class="text-center font-bold ">ALL CUSTOMERS</h1>
  <router-link :to="{name :'Customer_info_form'}" class="bg-red-800 hover :bg-red-500 text-white font-bold py-1 px-1 rounded">Add Customer</router-link>
 <div>
   <div class=" flex justify-end mt-4">
      <input v-model="searchQuery" @input="filterData" type="text" placeholder="search..." class="p-2 bg-white-500 rounded shadow-lg ">
    </div>
    <br>
  <table class="w-full text-left">
  <thead  class="border border-red-800 p-4">
    <tr>
      <th scope="col"  class=" px-6 py-3 textt-left">Customer Name</th>
      <th scope="col"  class=" px-6 py-3 textt-left">Phone Number</th>
      <th scope="col"  class=" px-6 py-3 textt-left">Action</th>
    </tr>
  </thead>
  <tr  class="border border-red-800 p-4" v-for="(row, index) in tableData" :key="index">
     <td class="px-6 py-4">{{ row.name }}</td>
     <td class="px-6 py-4">{{ row.phone_no }}</td>
     <td>
      <button class="px-4 py-2 text-blue-500 rounded hover:bg-gray-500">View</button>
      <button @click="$emit('edit-row', index)" class="px-4 py-2 text-blue-500 rounded hover:bg-gray-500">Edit</button>
        <button @click="deleteRow(index)" class="px-4 py-2 text-blue-500 rounded hover:bg-gray-500">Delete</button>

     </td>
  </tr>
  </table>
 </div>
</template>

<script>
export default {
name: "Customer Information",
data() {
  return {
    tableData: [
      {name: 'John Doe', phone_no: '254-728-788-990'},
      {name: 'Jane Doe', phone_no: '254-728-788-880'},
      {name: 'Grace Doe', phone_no: '254-744-788-990'}
    ]
  }
}
}
</script>

<style>

</style>