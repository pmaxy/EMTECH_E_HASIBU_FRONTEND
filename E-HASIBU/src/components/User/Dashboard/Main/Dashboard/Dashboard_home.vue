<template>

  <div class="grid grid-col-2 lg:grid-row-5 m-auto  gap-3 p-3   w-full ">
    <ul class="lg:row-start-1 pb-1 lg:row-end-2 items-center w-full justify-start grid-col-1">
  <li>
    <h2 class="font-medium italic"> <font-awesome-icon
              :icon="['fas', 'house-user']"
              :style="{ color: 'maroon' }"
            /> /Dashboard</h2>
  </li>
</ul>
    <ul
      class="lg:row-start-2 pb-4 lg:row-end-3 items-center w-full justify-strech lg:col-start-1 gap-1 lg:col-end-2  grid md:grid-col-4 lg:grid-col-7 grid-col-1"
    >
      <li class="list_button flex md:col-start-1 md:col-end-2">
        <router-link
          :to="{ name: 'Quotation' }"
          class="p-2 bg-white rounded-lg gap-2 items-center row hover:scale-[1.05] flex bg-gradient-to-br from-white to-red-50"
        >
        <div   class=" items-center bg-gradient-to-br from-red-500 to-red-900 shadow-md shadow-gray-300 transition-transform px-1 rounded-full"
>
         
            <font-awesome-icon
              :icon="['fa', 'plus']"
              :style="{ color: 'white' }"
            />
          </div>
             <span>Create Invoive</span
          >
        </router-link>
      </li>

      <li class="list_Button flex md:col-start-2 md:col-end-3">
        <router-link
          :to="{ name: 'Quotation' }"
          class="p-2 bg-white rounded-lg flex gap-2 items-center row hover:scale-[1.05] bg-gradient-to-br from-white to-red-50"
        >
        <div   class=" items-center bg-gradient-to-br from-red-500 to-red-900 shadow-md shadow-gray-300 transition-transform px-1 rounded-full"
>
         
            <font-awesome-icon
              :icon="['fa', 'plus']"
              :style="{ color: 'white' }"
            />
          </div>
          <span
            >
            Add Sale</span
          >
        </router-link>
      </li>

      <li class="list_Button flex md:col-start-3 md:col-end-4">
        <router-link
          :to="{ name: 'Quotation' }"
          class="p-2 bg-white rounded-lg flex gap-2 items-center row hover:scale-[1.05] bg-gradient-to-br from-white to-red-50"
        >
        <div   class=" items-center bg-gradient-to-br from-red-500 to-red-900 shadow-md shadow-gray-300 transition-transform px-1 rounded-full"
>
         
            <font-awesome-icon
              :icon="['fa', 'plus']"
              :style="{ color: 'white' }"
            />
          </div>
          <span
            >
            Add Purchase</span
          >
        </router-link>
      </li>

      <li
        class="list_Button flex lg:col-start-4 lg:col-end-5 md:col-start-1 md:col-end-2"
      >
        <router-link
          :to="{ name: 'Expenses' }"
          class="p-2 bg-white rounded-lg flex gap-2 items-center row hover:scale-[1.05] bg-gradient-to-br from-white to-red-50"
        >
        <div   class=" items-center bg-gradient-to-br from-red-500 to-red-900 shadow-md shadow-gray-300 transition-transform px-1 rounded-full"
>
         
            <font-awesome-icon
              :icon="['fa', 'plus']"
              :style="{ color: 'white' }"
            />
          </div>
          <span
            >
            Record Expense</span
          >
        </router-link>
      </li>

      <li
        class="list_Button flex lg:col-start-5 lg:col-end-6 md:col-start-2 md:col-end-3"
      >
        <router-link
          :to="{ name: 'Quotation' }"
          class="p-2 bg-white rounded-lg flex gap-2 items-center row hover:scale-[1.05] bg-gradient-to-br from-white to-red-50"
        >
        <div   class=" items-center bg-gradient-to-br from-red-500 to-red-900 shadow-md shadow-gray-300 transition-transform px-1 rounded-full"
>
         
            <font-awesome-icon
              :icon="['fa', 'plus']"
              :style="{ color: 'white' }"
            />
          </div>
          <span>
           
            Add New Customer</span
           >
        </router-link>
      </li>

      <li
        class="list_Button flex lg:col-start-6 lg:col-end-7 md:col-start-3 md:col-end-4"
      >
        <router-link
          :to="{ name: 'Quotation' }"
          class="p-2 bg-white rounded-lg flex gap-2 items-center row hover:scale-[1.05] bg-gradient-to-br from-white to-red-50"
        >
        <div   class=" items-center bg-gradient-to-br from-red-500 to-red-900 shadow-md shadow-gray-300 transition-transform px-1 rounded-full"
>
         
            <font-awesome-icon
              :icon="['fa', 'plus']"
              :style="{ color: 'white' }"
            />
          </div>
          <span
            >
            Add Vendor</span
          >
        </router-link>
      </li>
    </ul>

    <ul
      class="grid md:grid-col-3 w-full gap-2 items-center row-start-3  lg:col-start-1 justify-around  lg:grid-col-2  border-t border-b border-black pb-2 pt-2"
    >

        <li 
          
          class="lg:col-start-1  lg:col-end-2 md:col-start-1 md:col-end-2 h-full flex flex-col items-strech"
        >
          <div
            
            class="max-w-lg rounded-2xl  m-auto overflow-auto shadow-xl bg-white bg-gradient-to-br from-white to-red-50"
          >
            <div
              
              class="w-3/4 inline-flex items-center text-white bg-gradient-to-br from-red-500 to-red-900 shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform font-medium text-sm px-5 py-2.5 text-center"
            >
              <fa-icon
                
                class="ng-fa-icon px-2 text-3xl text-white"
                ng-reflect-icon="[object Object]"
                ><svg
                  role="img"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="business-time"
                  class="svg-inline--fa fa-business-time"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 640 512"
                >
                  <path
                    fill="currentColor"
                    d="M184 48H328c4.4 0 8 3.6 8 8V96H176V56c0-4.4 3.6-8 8-8zm-56 8V96H64C28.7 96 0 124.7 0 160v96H192 352h8.2c32.3-39.1 81.1-64 135.8-64c5.4 0 10.7 .2 16 .7V160c0-35.3-28.7-64-64-64H384V56c0-30.9-25.1-56-56-56H184c-30.9 0-56 25.1-56 56zM320 352H224c-17.7 0-32-14.3-32-32V288H0V416c0 35.3 28.7 64 64 64H360.2C335.1 449.6 320 410.5 320 368c0-5.4 .2-10.7 .7-16l-.7 0zm320 16a144 144 0 1 0 -288 0 144 144 0 1 0 288 0zM496 288c8.8 0 16 7.2 16 16v48h32c8.8 0 16 7.2 16 16s-7.2 16-16 16H496c-8.8 0-16-7.2-16-16V304c0-8.8 7.2-16 16-16z"
                  ></path></svg></fa-icon
              ><span  class="text-base text-gray-50"
                >Sales</span
              >
            </div>
            <div  class="px-10 py-4">
              <div
                
                class="font-semibold text-lg mb-2"
              >
                Today Sales
              </div>
              <p
                
                class="font-bold text-4xl text-gray-700"
              >
                25.1M
              </p>
            </div>
          </div>
        </li>

        <li
          
          class="lg:col-start-2 lg:col-end-3 md:col-start-2 md:col-end-3 w-full h-full"
        >
          <div
            
            class="max-w-lg rounded-2xl overflow-hidden shadow-xl bg-white bg-gradient-to-br from-white to-red-50"
          >
            <div  class="w-full flex flex-row">
              <div
                
                class="w-3/4 inline-flex items-center text-white bg-gradient-to-br from-red-500 to-red-900 shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform font-medium text-sm px-5 py-2.5 text-center"
              >
                <fa-icon
                  
                  class="ng-fa-icon px-2 text-3xl text-white"
                  ng-reflect-icon="[object Object]"
                  ><svg
                    role="img"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fas"
                    data-icon="money-bill-1"
                    class="svg-inline--fa fa-money-bill-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 576 512"
                  >
                    <path
                      fill="currentColor"
                      d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm64 320H64V320c35.3 0 64 28.7 64 64zM64 192V128h64c0 35.3-28.7 64-64 64zM448 384c0-35.3 28.7-64 64-64v64H448zm64-192c-35.3 0-64-28.7-64-64h64v64zM176 256a112 112 0 1 1 224 0 112 112 0 1 1 -224 0zm76-48c0 9.7 6.9 17.7 16 19.6V276h-4c-11 0-20 9-20 20s9 20 20 20h24 24c11 0 20-9 20-20s-9-20-20-20h-4V208c0-11-9-20-20-20H272c-11 0-20 9-20 20z"
                    ></path></svg></fa-icon
                ><span
                  
                  class="text-base text-gray-50"
                  >Profit</span
                >
              </div>
              <div
                
                class="w-1/4 flex justify-end flex-1 items-center text-base font-bold text-red-800"
              >
                +8%
                <svg
                  
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-5 h-5"
                >
                  <path
                    
                    fill-rule="evenodd"
                    d="M5.293 7.707a1 1 0 010-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L6.707 7.707a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
            </div>
            <div  class="px-10 py-4">
              <div
                
                class="font-semibold text-lg mb-2"
              >
                Today Profit
              </div>
              <p
                
                class="font-bold text-4xl text-gray-700"
              >
                2000K
              </p>
            </div>
          </div>
        </li>
        <li
          
          class="lg:col-start-3 lg:col-end-4 md:col-start-1 md:col-end-2 w-full h-full"
        >
          <div
            
            class="max-w-lg rounded-2xl overflow-hidden shadow-xl bg-white bg-gradient-to-br from-white to-red-50"
          >
            <div
              
              class="w-3/4 inline-flex items-center text-white bg-gradient-to-br from-red-500 to-red-900 shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform font-medium text-sm px-5 py-2.5 text-center"
            >
              <fa-icon
                
                class="ng-fa-icon text-white px-2 text-3xl"
                ng-reflect-icon="[object Object]"
                ><svg
                  role="img"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="store"
                  class="svg-inline--fa fa-store"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M547.6 103.8L490.3 13.1C485.2 5 476.1 0 466.4 0H109.6C99.9 0 90.8 5 85.7 13.1L28.3 103.8c-29.6 46.8-3.4 111.9 51.9 119.4c4 .5 8.1 .8 12.1 .8c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.1 0 49.3-11.4 65.2-29c15.9 17.6 39.1 29 65.2 29c26.2 0 49.3-11.4 65.2-29c16 17.6 39.1 29 65.2 29c4.1 0 8.1-.3 12.1-.8c55.5-7.4 81.8-72.5 52.1-119.4zM499.7 254.9l-.1 0c-5.3 .7-10.7 1.1-16.2 1.1c-12.4 0-24.3-1.9-35.4-5.3V384H128V250.6c-11.2 3.5-23.2 5.4-35.6 5.4c-5.5 0-11-.4-16.3-1.1l-.1 0c-4.1-.6-8.1-1.3-12-2.3V384v64c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V384 252.6c-4 1-8 1.8-12.3 2.3z"
                  ></path></svg></fa-icon
              ><span  class="text-base text-gray-50"
                >Stock Level</span
              >
            </div>
            <div  class="px-10 py-4">
              <div
                
                class="font-semibold text-lg mb-2"
              >
                Today Stock Level
              </div>
              <p
                
                class="font-bold text-4xl text-gray-700"
              >
                400
              </p>
            </div>
          </div>
        </li>
        <li
          
          class="lg:col-start-4 lg:col-end-5 md:col-start-2 md:col-end-3 w-full h-full"
        >
          <div
            
            class="max-w-lg rounded-2xl overflow-hidden shadow-xl bg-white bg-gradient-to-br from-white to-red-50"
          >
            <div
              
              class="w-3/4 inline-flex items-center text-white bg-gradient-to-br from-red-500 to-red-900 shadow-md shadow-gray-300 hover:scale-[1.02] transition-transform font-medium text-sm px-5 py-2.5 text-center"
            >
              <fa-icon
                
                class="ng-fa-icon px-2 text-3xl text-white"
                ng-reflect-icon="[object Object]"
                ><svg
                  role="img"
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="cart-shopping"
                  class="svg-inline--fa fa-cart-shopping"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 576 512"
                >
                  <path
                    fill="currentColor"
                    d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
                  ></path></svg></fa-icon
              ><span  class="text-base text-gray-50"
                >Orders</span
              >
            </div>
            <div  class="px-10 py-4">
              <div
                
                class="font-semibold text-lg mb-2"
              >
                Today Orders
              </div>
              <p
                
                class="font-bold text-4xl text-gray-700"
              >
                20
              </p>
            </div>
          </div>
        </li>
      
    </ul>
    <ul
      class="grid lg:row-start-4 lg:col-start-1 gap-1 lg:col-end-2 gap-6 w-full  grid-col-4 items-center justify-around pb-2"
    >
      <li class="lg:col-start-1 lg:col-end-3">
        <performanceChart />
      </li>
      <li class="lg:col-start-3 lg:col-end-4">
        <salesChart />
      </li>
    </ul>
    <ul
      class="grid lg:row-start-5  lg:row-end-6 gap-6  lg:col-start-1 gap-1 lg:col-end-2 grid-col-4 items-center justify-around"
    >
      <li class="lg:col-start-1 xl:col-end-2">
        <DailySalesByItem />
      </li>

      <li class="lg:col-start-2 lg:col-end-4">
        <ExpensesLineChart />
      </li>
    </ul>
  </div>
</template>
<script>
import VueApexCharts from "vue3-apexcharts";
import salesChart from "./salesChart.vue";
import performanceChart from "./performanceChart.vue";
import DailySalesByItem from "./DailySalesByItem.vue";
import ExpensesLineChart from "./ExpensesLineChart.vue";
export default {
  name: "Dashboard_home",
  components: {
    apexchart: VueApexCharts,
    salesChart,
    performanceChart,
    DailySalesByItem,
    ExpensesLineChart,
  },

  data() {
    return {
      series: [
        {
          name: "Sales",
          data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
        },
      ],
      chartOptions: {
        chart: {
          type: "line",
        },
        xaxis: {
          categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
        },
      },
    };
  },
};
</script>

<style></style>
