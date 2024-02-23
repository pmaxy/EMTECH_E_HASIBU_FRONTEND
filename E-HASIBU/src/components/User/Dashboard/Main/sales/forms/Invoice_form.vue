<template>
  <h1 class="font-bold text-center">NEW INVOICE</h1>
<div>
    <div class="bg-white ml-5 mr-5 shadow-lg">
        <h3 class="font-medium ml-8 mr-8 mt-5 ">GENERAL DETAILS</h3>
        <form class="ml-8 mr-8">
    <div class="relative z-0 w-full mt-5 mb-3  group font-medium">
        <input type="text"  name="invoiceNumber" id="invoiceNumber" v-model="formValues.invoiceNumber" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-800 focus:outline-none focus:ring-0 focus:border-red-800 peer" placeholder=" " required />
        <label for="invoiceNumber" class="peer-focus:font-medium absolute text-md text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate- ">Invoice Number</label>
   </div>
   <div class="relative z-0 w-full mt-5 mb-3 group font-medium ">
        <input type="date"  name="issueDate" id="issueDate" v-model="formValues.issueDate" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-800 focus:outline-none focus:ring-0 focus:border-red-800 peer" placeholder=" " required />
        <label for="issueDate" class="peer-focus:font-medium absolute text-md text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate- ">Date of Issue</label>
   </div>
   <div class="relative z-0 w-full mt-5 mb-3 group font-medium ">
        <input type="date"  name="expiryDate" id="expiryDate" v-model="formValues.expiryDate" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-800 focus:outline-none focus:ring-0 focus:border-red-800 peer" placeholder=" " required />
        <label for="expiryDate" class="peer-focus:font-medium absolute text-md text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate- ">Expiry Date</label>
   </div>
   <div  class="relative z-0 w-full mb-5  group " >
    <label for="payment mode" class="block mb-1 text-sm font-medium text-gray-900 dark:text-white">Select Status</label>
  <select id="payment mode" v-model="formValues.paymentMode"   class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-800 focus:outline-none focus:ring-0 focus:border-red-800 peer">
    <option>Approved</option>
    <option>Declined</option>
    <option>Waiting</option>
    <option>Paid</option>
    <option>Unpaid</option>
  </select>
  </div>

  <div class="">
    <h3 class="font-medium ">CUSTOMERS INFORMATION</h3>
    <div class="relative z-0 w-full mt-5 mb-3  group font-medium ">
        <input type="text"  name="Name" id="Name" v-model="formValues.name" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-800 focus:outline-none focus:ring-0 focus:border-red-800 peer" placeholder=" " required />
        <label for="Name" class="peer-focus:font-medium absolute text-md text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate- ">Business/Customer Name</label>
   </div>
   <div class="relative z-0 w-full mt-5 mb-3  group font-medium ">
        <input type="text"  name="adress" id="adress" v-model="formValues.adress" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-800 focus:outline-none focus:ring-0 focus:border-red-800 peer" placeholder=" " required />
        <label for="adress" class="peer-focus:font-medium absolute text-md text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate- ">Business/Customer Address</label>
   </div>
   <div class="relative z-0 w-full mt-5 mb-3  group font-medium ">
        <input type="text"  name="contact" id="contact" v-model="formValues.contact" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-red-800 focus:outline-none focus:ring-0 focus:border-red-800 peer" placeholder=" " required />
        <label for="contact" class="peer-focus:font-medium absolute text-md text-black-500 dark:text-black-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate- ">Business/Customer Contact</label>
   </div>
  </div>
</form>
<div>
    <h3 class="font-medium ml-8 mr-8">PAYMENT DETAILS</h3>
    <div class="overflow-x-auto">
                <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 ml-8 mr-8">
                    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" class="px-4 py-3">Item Name</th>
                            <th scope="col" class="px-4 py-3">Description</th>
                            <th scope="col" class="px-4 py-3">Quantity</th>
                            <th scope="col" class="px-4 py-3">Rate</th>
                            <th scope="col" class="px-4 py-3">Total</th>
                    
                         
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(row, index) in tableData" :key="index" class="border-b dark:border-red-800 ">
                           
                            <td class="px-4 py-3">{{row.itemName}}</td>
                            <td class="px-4 py-3">{{row.description}}</td>
                            <td class="px-4 py-3">{{row.quantity}}</td> 
                            <td class="px-4 py-3">{{row.rate}}</td>
                            <td class="px-4 py-3">{{row.total}}</td> 
                       
                           
        </tr>               
        </tbody>
         </table>
            </div> 
</div>
    </div>
</div>
</template>

<script>
export default {
    name: "Invoice_form",
    data() {
        return{
            formValues: {
                invoiceNumber: "",
                issueDate: "",
                expiryDate: "",
                status: "",
                name: "",
                address: "",
                contact: "",
            },
            tableData: [
          {itemName:'Sugar', description:'Mumias', quantity:'10kgs', rate:'200', total:'2000'},
          {itemName:'Rice', description:'Pishori', quantity:'10 bags', rate:'2000', total:'20000'}
        ],

        }
    }

}
</script>

<style>

</style>