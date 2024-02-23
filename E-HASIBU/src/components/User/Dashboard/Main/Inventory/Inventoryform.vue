<template>
    <div>
        <router-link :to="{name :'Inventory'}" class="bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Back</router-link>
        </div>
        <div class="bg-white max-w-md mx-auto rounded shadow-md px-8 py-6">    
  <form  @submit.prevent="submitForm">
    <div class=" text-red-800 ">
    <div>
  <label for="itemName" >Item Name</label><br>
  <input class="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline rounded"  type="text"  v-model="ItemName"/>
</div>
  <div>
  <label for="Quantity" >Quantity</label> <br> 
  <input class="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline rounded "  type="number" v-model="Quantity"/>
</div>
  <div>
  <label for="Price" >Price</label><br>
  <input class="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline rounded"  type="number" v-model="Price"/>
</div>
<div>
  <label for="Description" >Description</label><br>
  <input class="shadow appearance-none border w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline rounded" type="text" v-model="Description"/>
</div>
</div> 
<!--Add more form fields if needed-->
</form><br><br>
<div> 
    <button class="bg-red-400 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">submit</button>
</div>
</div>
</template>

<script>
export default {
    name:"Inventoryform",
    data () {
        return {
            Item:'',
            Quantity:'0',
            Price:'0',
            Description:'',
        };
    },
    Methods: {
        submitForm () {
            //Emit an event to parent component to handle form submission
            console.log ('form submitted');
            this.$Emit ('submit', {
                itemName:this.itemName,
                quantity:this.Quantity,
                price:this.Price,
                description:Description
            }

            )
        }

    }

    }


</script>

<style>

</style>



