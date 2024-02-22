
<template>
<div >
  <h1 class="bg-gray text-red-800 text-center shadow-xl">PURCHASES ORDER</h1>
  

<form @submit.prevent="submitformValues" class="w-full pl-3 bg-white shadow-xl ml-1 mr2 mx-auto">
    <div class="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_first_name" id="floating_vendor_name" class="block py-2.5 px-0 w-full mt-3 text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_vendor_name" class="peer-focus:font-medium mt-3 mb-2 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Vendor Name</label>
    </div>
    <div class="relative z-0 w-full mb-5 group">
        <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_phone" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone Number (123-456-7890)</label>
    </div>
  <div class="relative z-0 w-full mb-5 group">
   
      <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>
  <div class="relative z-0 w-full mb-5 group">
        <input type="text" name="floating_purchase_id" id="floating_purchase_id" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_purchase_id" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Purchase ID</label>
    </div>
  <div class="relative z-0 w-full mb-5 group">
      <input type="date" name="purchase_date" id="floating_purchase_date" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
      <label for="floating_purchase_date" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Purchase Date</label>
  </div>
  <div class="relative z-0 w-full mb-5 group">
        <input type="DATE" name="floating_delivery_date" id="floating_delivery_date" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
        <label for="floating_delivery_date" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Delivery Date</label>
    </div>
</form>
    <h3>Products</h3>
      <div>
      <table class="table-auto border-collapse border ml-4 mr-20 w-full">
        <thead>
          <tr>
            <th class="border border-red-800 p-2 bg-red-100">Item</th>
            <th class="border border-red-800 p-2 bg-red-100">Description</th>
            <th class="border border-red-800 p-2 bg-red-100">Quantity </th>
            <th class="border border-red-800 p-2 bg-red-100">Rate</th>
            <th class="border border-red-800 p-2 bg-red-100">Amount</th>
          </tr>
        </thead>
      <tbody>
      <tr v-for="(row, index) in filteredRows" :key="index">
         <td class="pl-2 pr-2 pb-2 pt-2 mr-10 ml-10">{{ row.item }}</td>
         <td class="pl-2 pr-2 pb-2 pt-2 mr-10 ml-10">{{ row.description }}</td>
         <td class="pl-2 pr-2 pb-2 pt-2 mr-10 ml-10">{{ row.quantity }}</td>
         <td class="pl-2 pr-2 pb-2 pt-2 mr-10 ml-10">{{ row.rate }}</td>
         <td class="pl-2 pr-2 pb-2 pt-2 mr-10 ml-10">{{ row.amount }}</td>
      </tr>
      </tbody>
      </table>
      <div class="flex-justify-right">
      <button @click="removeItem" class="text-white bg-red-800 w-25 rounded ml-4 mr-3 mt-2 mb-2 w-20 box-shadow-50">Remove</button>
      <button @click="addItem" class="text-white bg-red-800 w-25 rounded ml-4 mr-3 mt-2 mb-2 w-20 box-shadow-50" >Add Item</button>
   </div>
   </div> 
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
      </div>
      <div class="text-center font-bold">
      <button @click="cance" class="text-white bg-red-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-1">Cance</button>
      <button type="submit" class="text-white bg-red-800 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 ml-1">Submit</button>
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
         searchQuery:'',
            rows: [
               ['', '', '', '', '',]
            ],
            filteredRows: this.rows,
            quantity: 0,
            rate: 0,
         }
      },
      methods: {
         removeItem(index) {
            this.rows.splice(index,1)
         },
         addItem(){
            const itemToAdd ={ ...this.newItem}
            this.rows.push(['', '', '', '', '',])
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