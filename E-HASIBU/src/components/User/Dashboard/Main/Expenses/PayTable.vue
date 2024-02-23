<template>
  <router-link :to="{name:'Payroll'}" class="bg-red-800 font-bold text-white rounded pr-5 pl-5"> Add Payroll</router-link>
  

  <div class=" ml-5 mt-5 w-50 bg-gray-200">
    <table class="table auto flex flex-col gap-4 pr-6 pl-4 pb-2 pt-2 justify-center items-center rounded w-200" >
    <thead>
      <tr class="border border-red-800 rounded-lg">
        <th class="px-4 py-2 border border-red-800  w-40">Name</th>
        <th class="px-4 py-2 border border-red-800 ">ID</th>
        <th class="px-4 py-2 border border-red-800">Account Number</th>
        <th class="px-4 py-2 border border-red-800">Amount</th>
      </tr>
    </thead>
    <tbody>
<tr v-for="(record,index)  in records" :key="index">
        <td  v-for="(cell,cellIndex) in record" class="border px-4 py-3 border border-red-800">{{  }}</td>
        
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
  name:"PayTable",
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