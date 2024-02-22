<template>
    <router-link :to="{name:'general_expenses'}" class="bg-red-800 font-bold text-white rounded pr-5 pl-5"> Add Expenses</router-link>


<div class=" ml-5 mt-5 w-50 bg-gray-200">
    <input type="text" v-model="searchgQuery" class="border border-red-800 ronded ml-2 mb-2 mt-2" placeholder="search items">
    <table class="table auto flex flex-col gap-4 pr-6 pl-4 pb-2 pt-2  rounded w-full" >
    <thead>
    <tr class="border border-red-800 rounded-lg">
        <th class="px-4 py-3 w-60">Item</th>
        <th class="px-4 py-3 w-50">Description</th>
        <th class="px-4 py-3">Date </th>
        <th class="px-4 pl-30 py-3">Amount</th>
    </tr>
    </thead>
    <tbody>
<tr class="border border-red-800" v-for="(records,index)  in records" :key="index">
        <td  class=" px-4 py-3 ">{{ records.item }}</td><hr>
        <td  class=" px-4 py-3 ">{{ records.description }}</td>
        <td  class=" px-4 py-3 ">{{ records.date }}</td>
        <td  class=" px-4 py-3 ">{{ records.amount }}</td>
    </tr>
    </tbody>
</table>
<div class="flex justify-right">
    <button @click="addItem" class="mt-1 bg-red-800 text-white  rounded mb-2 ml-4">Add item</button>
    <button @click="remove" class="mt-1  bg-red-800 text-white ml-80 rounded mb-2 ml-4">Remove</button>

</div>
</div> 

<br>
<br>
<br>
</template>
<script>
export default{ 
    name:'General_Expense',
data (){
    return{
    records:[
    {item: 'rent', description:'1 month',date: '2/2/2024',amount :'20000'},
    {item: 'salary', description:'1 month,6 people',date: '2/2/2024',amount :'120000'}

    ],
    searchgQuery:''
    }
},

methods:{
    remove(index) {
    this.records.splice(index,1)
    },
    addItem(){
    this.records.push(
    ['item', 'description', 'date', 'amount',]
    
    )
    }
}

}
</script>