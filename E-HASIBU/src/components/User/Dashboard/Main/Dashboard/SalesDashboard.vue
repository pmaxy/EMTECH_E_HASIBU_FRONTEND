
<template>
<div class="w-200" >
  <div class="">
  <div class=" " v-if="ShowCustomerDetails">
  <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold ">Customer Id</label>
      <select v-model="customer.CustomerId" class="form-input block rounded-lg" type="text"></select>
    </div>  
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold mb-2">Customer Name</label>
      <input v-model="customer.CustomerName" class="form-input block rounded-lg max-w-sm" type="text">
    </div>
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold ">Email Address</label>
      <input v-model="customer.EmailAddress" class="form-input  block rounded-lg" type="email">
    </div> 
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold ">Phone Number</label>
      <input v-model="customer.PhoneNumber" class="form-input block rounded-lg" type="text">
    </div>  
    <div class="mb-4">
      <label class="block text-gray-700 text-sm font-bold ">Address</label>
      <input v-model="customer.Address" class="form-input block rounded-lg" type="text">
    </div>
    </div>
    <button @click="CustomerDetails" class="text-blue-500 cursor-pointer">Customer Details</button>
</div> 

  <div class="grid col-span-full" >
    <div class="bg-gray-200">
    <h2 class="text-red-900 text-2xl  flex mb-2 justify-center items-center">Point of Sale</h2>
    </div>
        <table class="text-sm text-gray-500">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" class="">Product Id</th>
          <th scope="col" class="">Product Name</th>
          <th scope="col" class="">Description</th>
          <th scope="col" class="">Unit Price</th>
          <th scope="col" class="">Quantity</th>
          <th scope="col" class="">Amount</th>
          <th scope="col" class="">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, index) in products" :key="index" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 ">
          <td class=" font-medium text-gray-900 dark:text-white">
            <select  v-model="product.ProductId" class="form-control rounded" type="text"></select>
          </td>
          <td class="">
            <input v-model="product.ProductName" class="form-control rounded" type="text" />
          </td>
          <td class="">
            <input v-model="product.Description" class="form-control rounded " type="text" />
          </td>
          <td class="">
            <input v-model="product.UnitPrice" class="form-control rounded " type="number"/>
          </td>
          <td class="">
            <input v-model="product.Quantity" class="form-control rounded" type="number"/>
          </td>
          <td class="">
            <input v-model="product.Amount" class="form-control rounded" type="number"/>
          </td>
          <td class="">
            <button @click="deleteRow(index)" class="fa fa-remove text-lg text-red-900 cursor:pointer bg-gray-300 rounded p-2 hover:scale-[1.05]" >Remove</button>
          </td>
        </tr>
      </tbody>
    </table>
    <button @click="addRow" class="w-max font-size:25px text-red-900 cursor:pointer p-2 bg-gray-300 rounded hover:scale-[1.05]">Add Item</button>
  <div class="flex items-center justify-center">
      <button @click="generateQuote" class="w-max font-semibold font-size:25px text-red-900 cursor:pointer p-2 bg-gray-300 rounded m-2 hover:scale-[1.05]">Generate Quote</button>
    <button @click="generateInvoice" class="w-max font-size:25px  font-semibold text-red-900 cursor:pointer p-2 bg-gray-300 rounded m-2 hover:scale-[1.05]">Generate Invoice</button>

</div>
  </div>

<div  >
<div class="mt-4 " v-if="ShowRecentTransactions">
  <div class="bg-gray-200">
      <h2 class="text-red-900  text-2xl  flex mb-2 justify-center items-center">Recent Transactions</h2>
  </div>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Color
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
            </tr>
        </tbody>
    </table>
</div>
<div>
  <button @click="RecentTransactions" class="text-blue-500 cursor-pointer">View Recent Transactions</button>
</div>



<div class="mt-4" v-if="ShowRecentQuotes">
<div class="bg-gray-200">
      <h2 class="text-red-900  text-2xl  flex mb-2 justify-center items-center">Recent Quotes</h2>
  </div>
    <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product name
                </th>
                <th scope="col" class="px-6 py-3">
                    Color
                </th>
                <th scope="col" class="px-6 py-3">
                    Category
                </th>
                <th scope="col" class="px-6 py-3">
                    Price
                </th>
            </tr>
        </thead>
        <tbody>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Apple MacBook Pro 17"
                </th>
                <td class="px-6 py-4">
                    Silver
                </td>
                <td class="px-6 py-4">
                    Laptop
                </td>
                <td class="px-6 py-4">
                    $2999
                </td>
            </tr>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Microsoft Surface Pro
                </th>
                <td class="px-6 py-4">
                    White
                </td>
                <td class="px-6 py-4">
                    Laptop PC
                </td>
                <td class="px-6 py-4">
                    $1999
                </td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Magic Mouse 2
                </th>
                <td class="px-6 py-4">
                    Black
                </td>
                <td class="px-6 py-4">
                    Accessories
                </td>
                <td class="px-6 py-4">
                    $99
                </td>
            </tr>
        </tbody>
    </table>
</div>
<div>
  <button @click="RecentQuotes" class="text-blue-500 cursor-pointer" >View Recent Quotes </button>
</div>
</div>


  
    </div>
</template>

<script>
export default {
  name: "SalesDashboard",
  data() {
    return {
      products: [
        {
          ProductId: '',
          ProductName: '',
          Description: '',
          UnitPrice: Number,
          Quantity: Number,
          Amount: Number
        }
      ],
      customer:{
        CustomerId:'',
        CustomerName:'',
        EmailAddress:'',
        PhoneNumber:'',
        Address:''
      },
ShowCustomerDetails: false ,
ShowRecentQuotes:false,
ShowRecentTransactions:false
    };
  },
  methods: {
    addRow() {
      // Prompt user to enter details for the new row
      const newProduct = {
        ProductId: '',
        ProductName: '',
        Description: '',
        UnitPrice: Number,
        Quantity: Number,
        Amount: Number
      };
      this.products.push(newProduct);
    },
    deleteRow(index) {
      this.products.splice(index, 1);
    },
    CustomerDetails() {
      this.ShowCustomerDetails = !this.ShowCustomerDetails;
    },

    RecentQuotes() {
      this.ShowRecentQuotes = !this.ShowRecentQuotes;
    },

    RecentTransactions() {
      this.ShowRecentTransactions = !this.ShowRecentTransactions;
    },
  }
};
</script>

<style scoped>

</style>
