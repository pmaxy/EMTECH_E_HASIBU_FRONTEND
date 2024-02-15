<template>
  <div class="container_main position-relative grid grid-col-1 grid-row-12 h-screen w-screen overflow-auto">
    <nav class="navbar fixed top-0 left-0 right-0  h-14 bg-red-500  lg:row-start-1 lg:row-end-2">
        <Navbar />
    </nav>
    <div class="fixed flex w-screen justify-evenly top-14 bottom-0 left-0 right-0  sec1 lg:row-start-2 lg:row-end-12">
        <div class=" bg-gray-200 ">
            <Sidebar/>
        </div>
        <main class="main relative w-full flex flex-col overflow-auto">
             <div class="bg-gray-300  h-full "><router-view></router-view></div>
             <div class=" bg-yellow-500 fixed w-full bottom-0  ">
              <Footer />
            </div>
        </main>
    </div>
   
   </div>

</template>

<script>
import Footer from './footer/Footer.vue'
import Feedback from './Main/Feedback.vue'
import Navbar from './Navbar/Navbar.vue'
import Sidebar from './sidebar/Sidebar.vue'


export default {
    name:"Dashboard",
    components:{
        Navbar,
        Sidebar,
        Footer,
        Feedback,
    }

}
</script>         

<style>

</style>