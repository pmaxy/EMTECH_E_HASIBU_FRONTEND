<template>
  <div
    class="grid grid-col-1 lg:grid-col-4 lg:grid-row-5 overflow-auto auto-cols-auto "
  >
    <ul
      class="lg:row-start-1 lg:row-end-2 w-full items-center lg:col-start-1 justify-between lg:col-end-7 gap-2 bg-gray-200 grid md:grid-col-4 lg:grid-col-7 grid-col-1"
    >
      <li class="list_button flex md:col-start-1 md:col-end-2">
        <router-link
          :to="{ name: 'Sales' }"
          class="p-2 bg-white rounded-lg gap-2 items-center row hover:scale-[1.05] flex"
        >
          <span>
            <font-awesome-icon
              :icon="['fa', 'plus']"
              :style="{ color: 'maroon' }"
            />
            Create Invoive</span
          >
        </router-link>
      </li>

      <li class="list_Button flex md:col-start-2 md:col-end-3">
        <router-link
          :to="{ name: 'Sales' }"
          class="p-2 bg-white rounded-lg flex gap-2 items-center row hover:scale-[1.05]"
        >
          <span
            ><font-awesome-icon
              :icon="['fa', 'plus']"
              :style="{ color: 'maroon' }"
            />Add Sale</span
          >
        </router-link>
      </li>

      <li class="list_Button flex md:col-start-3 md:col-end-4">
        <router-link
          :to="{ name: 'Purchase_Bill' }"
          class="p-2 bg-white rounded-lg flex gap-2 items-center row hover:scale-[1.05]"
        >
          <span
            ><font-awesome-icon
              :icon="['fa', 'plus']"
              :style="{ color: 'maroon' }"
            />
            Add Purchase</span
          >
        </router-link>
      </li>

      <li
        class="list_Button flex lg:col-start-4 lg:col-end-5 md:col-start-1 md:col-end-2"
      >
        <router-link
          :to="{ name: 'Expenses' }"
          class="p-2 bg-white rounded-lg flex gap-2 items-center row hover:scale-[1.05]"
        >
          <span
            ><font-awesome-icon
              :icon="['fa', 'plus']"
              :style="{ color: 'maroon' }"
            />
            Record Expense</span
          >
        </router-link>
      </li>

      <li
        class="list_Button flex lg:col-start-5 lg:col-end-6 md:col-start-2 md:col-end-3"
      >
        <router-link
          :to="{ name: 'Sales' }"
          class="p-2 bg-white rounded-lg flex gap-2 items-center row hover:scale-[1.05]"
        >
          <span>
            <font-awesome-icon
              :icon="['fa', 'plus']"
              :style="{ color: 'maroon' }"
            />
            Add New Customer</span
          >
        </router-link>
      </li>

      <li
        class="list_Button flex lg:col-start-6 lg:col-end-7 md:col-start-3 md:col-end-4"
      >
        <router-link
          :to="{ name: 'Purchase_Bill' }"
          class="p-2 bg-white rounded-lg flex gap-2 items-center row hover:scale-[1.05]"
        >
          <span
            ><font-awesome-icon
              :icon="['fa', 'plus']"
              :style="{ color: 'maroon' }"
            />
            Add Vendor</span
          >
        </router-link>
      </li>
    </ul>

    <ul
      class="grid md:grid-col-3 md:grid-row-5 w-full lg:row-start-2 lg:row-end-3 lg:col-start-1 lg:col-end-3 justify-between lg:grid-col-5"
    >
      <li
        class="list_Card flex lg:col-start-1 lg:col-end-2 md:col-start-1 md:col-end-2 mt-4 mb-4"
      >
        <router-link
          :to="{ name: 'Sales' }"
          class="py-10 px-20  bg-white rounded-lg flex gap-2 items-center row hover:scale-[1.05]"
        >
          <span>
            <font-awesome-icon
              :icon="['fa', 'plus']"
              :style="{ color: 'maroon' }"
            />
            Today's Sales</span
          >
          <span>{{ TodaysSales }}</span>
          <span>{{ Percentage }}</span>
        </router-link>
      </li>

      <li
        class="list_Card flex lg:col-start-2 lg:col-end-3 md:col-start-2 md:col-end-3 mt-4 mb-4"
      >
        <router-link
          :to="{ name: 'Sales' }"
          class="px-20 py-10 bg-white rounded-lg flex gap-2 items-center row hover:scale-[1.05]"
        >
          <span>
            <font-awesome-icon
              :icon="['fa', 'plus']"
              :style="{ color: 'maroon' }"
            />
            Today's Profit</span
          >
          <span>{{ TodaysProfit }}</span>
          <span>{{ Percentage }}</span>
        </router-link>
      </li>

      <li
        class="list_Card flex lg:col-start-3 lg:col-end-4 md:col-start-1 md:col-end-2 mt-4 mb-4"
      >
        <router-link
          :to="{ name: 'Sales' }"
          class="py-10 px-20 bg-white rounded-lg flex gap-2 items-center row hover:scale-[1.05]"
        >
          <span>
            <font-awesome-icon
              :icon="['fa', 'plus']"
              :style="{ color: 'maroon' }"
            />
            Today's Expenses</span
          >
          <span>{{ TodaysExpenses }}</span>
          <span>{{ Percentage }}</span>
        </router-link>
      </li>

      <li
        class="list_Card flex lg:col-start-4 lg:col-end-5 md:col-start-2 md:col-end-3 mt-4 mb-4"
      >
        <router-link
          :to="{ name: 'Sales' }"
          class="py-10 px-20 bg-white rounded-lg flex gap-2 items-center row hover:scale-[1.05]"
        >
          <span>
            <font-awesome-icon
              :icon="['fa', 'plus']"
              :style="{ color: 'maroon' }"
            />
            New Customers</span
          >
          <span>{{ NewCustomers }}</span>
          <span>{{ Percentage }}</span>
        </router-link>
      </li>
    </ul>
    <ul
      class="grid lg:row-start-3 lg:row-end-4 lg:col-start-1 lg:col-end-3 bg-rose-800"
    >
      <li>jhjd</li>
    </ul>
    <ul
      class="grid lg:row-start-4 lg:row-end-5 lg:col-start-1 lg:col-end-3 bg-purple-500"
    >
      <li>hgjhjd</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Dashboard_home",
  components: {},
  data() {
    return {
      Sales: 1000,
      Profit: 1000,
      Expenses: 1000,
      NewCustomers: 12,
      Percentage: "2%",
    };
  },
};
</script>

<style>
</style>