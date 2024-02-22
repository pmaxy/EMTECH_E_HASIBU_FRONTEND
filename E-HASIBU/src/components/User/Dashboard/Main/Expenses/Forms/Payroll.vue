<template>
<router-link :to="{name:'PayTable'}" class="bg-red-800 font-bold text-white rounded pr-5 pl-5">Previous</router-link>
    
<div class=" h-screen  overflow-y-scroll ml-5 bg-gray-200">
    <form class=" gap-4 mr-10 ml-5 mt-2   rounded-lg bg-white">
    <h1 class="block text-red-700 text-sm font-bold ml-5 mb-2">PAYROLL</h1>
    

    <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold ml-5 mb-2" for="name">Name:</label>
        <input
        v-model="name"
        class="shadow appearance-none  border border-red-800 border rounded-lg ml-5 w-80 bg-gray-200 py-2 px-3 text-gray-700 leading-tight   focus:shadow-outline"
        id="name"
        type="text"
        
        required
        />
    </div>
    <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold ml-5 mb-2" for="id">
        ID:
        </label>
        <input
        v-model="id"
        class="shadow appearance-none border border-red-800 border rounded-lg ml-5 w-80 bg-gray-200 py-2 px-3 text-gray-700 leading-tight  focus:shadow-outline "
        id="id"
        type="text"
        
        required
        />
    </div>
    <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold ml-5 mb-2" for="accountNumber">
        Account Number:
        </label>
        <input
        v-model="accountNumber"
    class="shadow appearance-none  border border-red-800 border rounded-lg ml-5 w-80 bg-gray-200 py-2 px-3 text-gray-700 leading-tight outline-red-800 focus:shadow-outline"
        id="accountNumber"
        type="text"
        required
        />
    </div >
    <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold ml-5 mb-2" for="amount">Amount</label>
        <input v-model="amount"
        class="shadow appearance-none   border border-red-800 border rounded-lg ml-5 w-80 bg-gray-200 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="accountNumber"
        type="text"/>
    </div>
    <div class="bg-red-800 text-white font-bold rounded w-20 text-center">
        <button @click="submit">Submit</button>
    </div>  
    </form>
</div>



</template>
<script>
export default{
    name:"Payroll",
data (){
    return{
    records:[
    ['', '', '', '',]
    ]
    }
},
methods:{
    remove(index) {
    this.records.splice(index,1)
    },
    addItem(){
    this.records.push(
    ['', '', '', '',]
    
    )
    }
}

}
</script>