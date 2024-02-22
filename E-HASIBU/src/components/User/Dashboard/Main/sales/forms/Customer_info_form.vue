<template>
<div>
  <h1 class="text-center font-bold">NEW CUSTOMER DETAILS</h1>
  <h2 class="font-bold">Customer Type</h2>
  <div class="flex items-center space-x-4 mt-4">
    <label for="isIndividual">isIndividual</label>
    <input type="checkbox"
    id="isIndividual"
    name="CustomerType"
    v-model="isIndividual"
    class="form-checkbox h-4 w-4 text-red-800 focus:ring-2 focus:ring-red-800"
    :disabled="selectedCustomerType === 'business'"/>

  </div>
  </div>
</template>

<script>
export default {
  name:"Customer_info_form"

}
</script>

<style>

</style>