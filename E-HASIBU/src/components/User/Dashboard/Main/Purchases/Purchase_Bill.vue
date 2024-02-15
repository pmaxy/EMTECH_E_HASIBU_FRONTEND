<template>
  <h2 class=" bg-red-800 text-white pl-2 pr-2 pb-1 pt-1  ml-5 mr-10 mt-2 rounded">ALL BILLS</h2><br><br>
<router-link :to="{name :'New_Bill'}" class=" bg-red-800 text-white pl-2 pr-2 pb-1 pt-1  ml-5 mr-10 mt-2 rounded">Add Bill
</router-link><br><br>
<router-link :to="{name :'Paid_Bill'}" class=" bg-red-800 text-white pl-2 pr-2 pb-1 pt-1 mt-6 ml-5 mr-10 mt-2 rounded">Paid Bill
</router-link>
</template>

<script>
export default {

}
</script>

<style>

</style>