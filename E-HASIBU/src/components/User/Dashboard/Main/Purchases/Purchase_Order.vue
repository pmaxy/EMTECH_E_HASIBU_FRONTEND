
<template>
<div >
  <h1 class="bg-red-800 text-white font-bold text-center rounded-lg ml-3 mr-3 mt-1 shadow-xxl">PURCHASES ORDER</h1>
  
<div class="shadow-xl mx-auto max-w-screen-l mr-3 ml-3 rounded-lg ">
<form @submit.prevent="submitformValues" class="w-full pl-3 bg-white ">
    <div class="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_vendor_name" id="floating_vendor_name" class="block py-2.5 px-0 w-full mt-3 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-red-800 peer" placeholder=" " required />
        <label for="floating_vendor_name" class="peer-focus:font-medium absolute pt-1 text-sm text-red-800 dark:text-red-800 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-600 peer-focus:dark:text-red-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Vendor Name</label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
        <input type="tel" name="floating_phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-red-800 peer" placeholder=" " required />
        <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-red-800 dark:text-red-800 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-800 peer-focus:dark:text-red-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone Number </label>
    </div>
  <div class="relative z-0 w-full mb-5 group">
   
      <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-red-800 peer" placeholder=" " required />
      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-red-800 dark:text-red-800 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-red-800 peer-focus:dark:text-red-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>
  <div class="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_purchase_id" id="floating_purchase_id" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-800 focus:outline-none focus:ring-0 focus:border-red-800 peer" placeholder=" " required />
        <label for="floating_purchase_id" class="peer-focus:font-medium absolute text-sm text-red-800 dark:text-red-800 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-800 peer-focus:dark:text-red-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Purchase ID</label>
    </div>
  <div class="relative z-0 w-full mb-5  group">
      <input type="date" name="purchase_date" id="floating_purchase_date" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-800 focus:outline-none focus:ring-0 focus:border-red-800 peer" placeholder=" " required />
      <label for="floating_purchase_date" class="peer-focus:font-medium absolute text-xl text-red-800 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-800 peer-focus:dark:text-red-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Purchase Date</label>
  </div>
  <div class="relative z-0 w-full mb-5 pb-5 group">
        <input type="date" name="floating_delivery_date" id="floating_delivery_date" class="block py-2.5 px-0 w-full mb-5 pb-1 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-800 focus:outline-none focus:ring-0 focus:border-red-800 peer" placeholder=" " required />
        <label for="floating_delivery_date" class="peer-focus:font-medium absolute text-xl text-red-800 dark:text-red-800 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-red-800 peer-focus:dark:text-red-800 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Delivery Date</label>
    </div>
</form>
</div>
    <h3 class="bg-red-800 text-white font-bold rounded-lg ml-3 mr-3 pl-5 shadow-xl">Products</h3> 
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
                            <th scope="col" class="px-4 py-3">Items</th>
                            <th scope="col" class="px-4 py-3">Description</th>
                            <th scope="col" class="px-4 py-3">Quantity</th>
                            <th scope="col" class="px-4 py-3">Actions</th>
                    
                         
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(row, index) in tableData" :key="index" class="border-b dark:border-gray-700">
                           
                            <td class="px-4 py-3">{{row.item}}</td>
                            <td class="px-4 py-3">{{row.description}}</td>
                            <td class="px-4 py-3">{{row.quantity}}</td>
                       
                            <td>
          <button @click="handleViewClick(row)" class="px-4 py-2 text-red-800 rounded hover:bg-red-300">
            View
          </button>
          <button @click="handleEditClick(row)" class="px-4 py-2 text-red-800 rounded hover:bg-red-300">
            Edit
          </button>
          <button @click="deleteRow(index)" class="px-4 py-2 text-red-800 rounded hover:bg-red-300">
            Delete
          </button>
        </td>
        </tr>               
        </tbody>
         </table>
            </div> 
            </div>
            <button @click="addItem" class="text-white bg-red-800 w-25 rounded ml-4 mr-3 mt-2 mb-2 w-20 box-shadow-50" >Add Item</button>
            </div>
            </section>                
    </div>
    <!--------
      <div>
         <form a>
         <label for="item"> Item </label>
         <input v-model="item" type="item" id=" item"/>
         <label for="quantity">Quantity</label>
         <input v-model="quantity" type="" id="quantity"/>
         <label for="rate"> Rate </label>
         <input v-model="rate" type="rate" id=" rate"/>
         <label for="amount"> Amount </label>
         <input v-model="amount" type="" id=" amount" readonly/>
         <p>calculated Amount: {{amount}}</p>
         </form>
      </div>----->
      
      <div class="text-center font-bold">
      <button @click="cance" class="text-white bg-red-800 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 mr-1">Cance</button>
      <button type="submit" class="text-white bg-red-800 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800 ml-1">Submit</button>
      </div>
      <br><br>
    </div>
</template>

<script>
export default {
    name:"Purchase_Order",
    data() {
      return {
         formvalues: {
            buyerName:'',
            email:'',
         },
         tableData: [
          {item: 'Fabric', description: 'Silk pink', quantity: '3 rolls'},
          {item: 'Fabric', description: 'Pure cotton blue',  quantity: '2 rolls'},
          {item: 'Screen mesh', description: 'Fine, White',  quantity: '5 meters'},
          {item: 'Apricot Dye', description: 'Primary colors', quantity: '3tins'},
          {item: 'Sodium hydrosulphite', description: '500g',  quantity: '2tins'},
          {item: 'Interfacing', description: 'Felted',  quantity: '2rolls'},
          {item: 'Sewing thread', description: 'Nylon Pink',  quantity: '3pkts'},
        ],    
         searchQuery:'',
            filteredRows: this.rows,
            quantity: 0,
            rate: 0,
         }
      },
      methods: {
         addRow(){
            this.rows.push({
               item: "",
               description: "",
               quantity:"",
            });
         },
         cancel(){

         },
         submit(){

         },
         filterData() {
            this.filteredRows = this.rows.filter((row) => {
               return row.item.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
               row.description.toLowerCase().includes(this.searchQuery.toLocaleLowerCase());
            })
         }
  },
    }
    



      
</script>

<style>

</style>