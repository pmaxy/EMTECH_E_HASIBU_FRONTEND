<template>
    <div class="w-screen h-screen flex justify-center items-center bg-gray-200">
<form @submit.prevent="HandleSubmit" class="flex flex-col gap-4 bg-white pr-4 pl-4 pb-4 pt-4 items-center justify-center rounded-lg">
    <h2 class="text-red-900 font-lg font-bold">Verification</h2>
    <h3>Enter the OTP sent to {{PhoneNumber}} <br> in the field below</h3>

<div class="flex flex-col">
<label for="VerificationCode">Verification Code</label>
<input class="outline outline-1 outline-offset-2 outline-red-900 rounded-lg" type="text text-sm italic" placeholder="Enter code" id="VerificationCode" v-model="formValues.VerificationCode">
</div>

<div>
    <button class=" bg-red-900 rounded-lg pl-2 pr-2 hover:scale-[1.05] text-white outline outline-1 outline-offset-2 outline-red-900">Submit</button>
</div>
<div class="flex gap-2 italic no-underline hover:underline">
    <a href="#">Resend code</a>
    <a href="#">Send via email</a>
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
                    VerificationCode:'',
                },
PhoneNumber:'0712\****60'
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