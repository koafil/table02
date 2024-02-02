<template>
  <div class="card flex justify-content-center">
<!--    {{ value }}-->
    <br>
    <AutoComplete
        v-model="value"
        multiple
        dropdown
        :suggestions="items"
        @complete="search"
    >
    </AutoComplete>
  </div>
  <myTable :findKeyArr="value"/>
</template>

<script setup>
import myTable from './components/myTable.vue'
import AutoComplete from 'primevue/autocomplete';
import {computed, ref } from "vue";
import { useFetch} from "@vueuse/core";

const value = ref("");
const items = ref([]);
const {isFetching:isFetching1, data } = useFetch(`http://192.168.50.5:3002/articul`).json();
//data.value = undefined;
//const search = (event) => {  items.value = [...Array(10).keys()].map((item) => event.query + '-' + item);
const search = (event) => {
    if (event.query.trim().length) {
      items.value =[event.query, ...data.value.rowData.filter((item) => {
        return item.toLowerCase().includes(event.query.toLowerCase())
      })]
    } else {
      items.value = [...data.value.rowData]
    }
}
</script>

<style scoped>

</style>
