<template>
    <div class="w-screen h-screen flex justify-center items-center bg-gray-200">
<form @submit.prevent="HandleSubmit" class="flex flex-col gap-4 bg-white pr-4 pl-4 pb-4 pt-4 items-center justify-center rounded-lg">
    <h2>To proceed with registration,<br> enter the following details.</h2>

<div class="flex flex-col">
<label for="AccountNumber">Account Number</label>
<input class="outline outline-2 outline-offset-2 outline-red-900 rounded-lg" type="text" id="AccountNumber" v-model="formValues.AccountNumber">
</div>

<div class="flex flex-col">
 <label for="IDNumberOrBusinessNumber">ID/Business Number</label>   
<input class="outline outline-2 outline-offset-2 outline-red-900 rounded-lg" type="text" id="IDNumberOrBusinessNumber" v-model="formValues.IDNumberOrBusinessNumber">
</div>
<div>
<input type="checkbox" id="terms" v-model="formValues.terms">
<label class="font-style: italic" for="terms">I agree to the terms of service. <br>and privacy policy</label>
</div>
<div>
    <button class=" bg-red-900 rounded-lg pl-2 pr-2 hover:scale-[1.05] text-white">Sign Up</button>
</div>
</form>
    </div>
</template>

<script>
    export default {
        name:"SignUp",
        data(){
            return {
                formValues:{
                    AccountNumber:'',
                    IDNumberOrBusinessNumber:'',
                    terms:false
                }
            }
        },
        methods:{

            HandleSubmit(){
                console.log('form values',this.formValues)
            }
        }
    }
</script>

<style>

</style>