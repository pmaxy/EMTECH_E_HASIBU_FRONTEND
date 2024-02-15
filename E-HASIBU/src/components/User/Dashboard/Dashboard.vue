<template>
  <div class="container_main position-relative grid grid-col-1 grid-row-12 h-screen w-screen shadow-lg">
    <nav class="navbar fixed top-0 left-0 right-0  h-12 bg-white   lg:row-start-1 lg:row-end-2 flex items-center w-full ">
        <Navbar />
    </nav>
    <section class="fixed flex w-screen justify-evenly top-12 bottom-0 left-0 right-0  sec1 lg:row-start-2 lg:row-end-12">
        <div class=" bg-gray-200 hidden lg:flex">
            <Sidebar/>
        </div>
        <div class="main  w-full flex flex-col h-screen overflow-auto">
             <div class="bg-gray-300 h-full "><router-view></router-view></div>
             <footer class=" bg-yellow-500 ">
              <Footer />
            </footer>
        </div>
    </section>
   
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