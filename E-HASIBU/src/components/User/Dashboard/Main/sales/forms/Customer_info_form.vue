<template>
  <router-link :to="{name :'Customer Information'}" class="bg-red-800 hover :bg-red-500 text-white font-bold py-1 px-1 rounded">Previous</router-link>
<div>
  <h1 class="text-center font-bold">NEW CUSTOMER DETAILS</h1>
  <h2 class="font-bold">Customer Type</h2>
  <!--<div class="flex items-center space-x-4 mt-4">
    <label for="isIndividual">isIndividual</label>
    <input type="checkbox"
    id="isIndividual"
    name="CustomerType"
    v-model="isIndividual"
    class="form-checkbox h-4 w-4 text-red-800 focus:ring-2 focus:ring-red-800"
    :disabled="selectedCustomerType === 'business'"/> 

  </div> -->
  

<fieldset>
  <legend class="sr-only">Customer Type</legend>

  <div class="flex items-center mb-4">
    <input id="customer-type-option-1" type="radio" name="customer type" value="Individual" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" checked>
    <label for="customer-type-option-1" class="block ms-2  text-sm font-medium text-gray-900 dark:text-gray-300">
      Individual
    </label>
  </div>

  <div class="flex items-center mb-4">
    <input id="customer-type-option-2" type="radio" name="customer type" value="Business" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600">
    <label for="customer-type-option-2" class="block ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">
      Business
    </label>
  </div>

</fieldset>

  </div>
</template>

<script>
export default {
  name:"Customer_info_form",
  


}
</script>

<style>

</style>