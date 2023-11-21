<template>
<!--  <div>-->
<!--    <a href="https://vitejs.dev" target="_blank">-->
<!--      <img src="/vite.svg" class="logo" alt="Vite logo" />-->
<!--    </a>-->
<!--    <a href="https://vuejs.org/" target="_blank">-->
<!--      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />-->
<!--    </a>-->
<!--  </div>-->
<!--  <HelloWorld msg="Vite + Vue" />-->
  <div class="card flex justify-content-center">
    {{ value }}
    <br>
    <Button label="Submit" />
    <AutoComplete v-model="value" multiple :suggestions="items" @complete="search" />
  </div>
  <myTable />
</template>

<script setup>
//import HelloWorld from './components/HelloWorld.vue'
import myTable from './components/myTable.vue'
import Button from "primevue/button"
import AutoComplete from 'primevue/autocomplete';
import {computed, ref } from "vue";
import { useFetch} from "@vueuse/core";

const value = ref("");
const items = ref([]);
const {isFetching:isFetching1, data } = useFetch(`http://192.168.50.5:3002/articul`).json();
//const search = (event) => {  items.value = [...Array(10).keys()].map((item) => event.query + '-' + item);
const search = (event) => {
  console.log(event.query)
//  items.value = [...Array(3).keys()].map((item) => event.query + '-' + item);
  if (event.query) {
    console.log(data.value)
    items.value =[event.query, ...data.value.rowData.filter((item) => {
      return item.toLowerCase().includes(event.query.toLowerCase())
    })]
  } else {
    items.value = []
  }
}
</script>

<style scoped>

</style>
