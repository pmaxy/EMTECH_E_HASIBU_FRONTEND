<template>
    <div class="w-screen h-screen flex justify-center items-center bg-gray-200">
<form @submit="HandleSubmit" class="flex flex-col gap-6 bg-white pr-4 pl-4 pb-4 pt-4 items-center justify-center rounded-lg">
    <h2 class="text-red-900 font-bold">Create your password.</h2>
<div class="flex flex-col">
<label for="Email">Email</label>
<input class="outline outline-1 outline-offset-2 outline-red-900 rounded-lg text-sm font-style:italic pl-2 pr-2"  type="Email" id="Email" placeholder="Email address" v-model="formValues.Email">
</div>

<div class="flex flex-col">
<label for="Password">Password</label>
<input class="outline outline-1 outline-offset-2 outline-red-900 rounded-lg text-sm font-style:italic pl-2 pr-2" type="text" id="Password" placeholder="Password" v-model="formValues.Password">
</div>

<div class="flex flex-col">
 <label for="ConfirmPassword">Confirm Password</label>   
<input class=" outline outline-1 outline-offset-2 outline-red-900 rounded-lg text-sm font-style:italic pl-2 pr-2" type="text" placeholder="Confirm your password" id="ConfirmPassword" v-model="formValues.ConfirmPassword">
</div>

<div class="flex-col italic space-y-{0px]" >
    <p>Your password must be:</p>
    <div class="">
<input type="checkbox">
<label class="ml-2 text-sm" for="">At least 8 characters long</label>
</div>
<div class="">
<input type="checkbox">
<label class="ml-2 text-sm">At least 1 uppercase letter</label>
</div>
<div class="">
<input type="checkbox">
<label class="ml-2 text-sm" for="">At least 1 lowercase letter</label>
</div>
<div>
<input type="checkbox">
<label class="ml-2 text-sm" for="">At least 1 number</label>
</div>
<div>
<input type="checkbox">
<label class="ml-2 text-sm" for="">At least 1 special character (*, #, @)</label>
</div>
</div>
<div>
    <button class=" bg-red-900 rounded-lg pl-2 pr-2 hover:scale-[1.05] text-white">Sign Up</button>
</div>
</form>
    </div>
</template>

<script>
    export default {
        name:"CreatePassword",
        data(){
            return {
                formValues:{
                    Password:'',
                    ConfirmPassword:'',
                    Email:''
                }
            }
        },
        methods:{
            HandleSubmit(){
                console.log(data)
            }
        }
    }
</script>

<style>

</style>