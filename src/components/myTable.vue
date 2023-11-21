<template>
  <div class="card">
    <DataTable :value="products"
               @page="onPage($event)"
               lazy paginator
               :rows=rows
               :rowsPerPageOptions="[5, 10, 20, 50]"
               tableStyle="min-width: 50rem"
               :totalRecords="totalRecords"
               :loading="loading"
    >
      <Column field="id" header="ID"></Column>
      <Column field="articul" header="Артикул"></Column>
      <Column field="info" header="Инфо"></Column>
    </DataTable>
  </div>
</template>

<script setup>
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import { useFetch} from "@vueuse/core";
import { ref, onMounted, computed} from 'vue';
//import { ProductService } from '@/service/ProductService';
//onMounted(() => {
//  ProductService.getProductsMini().then((data) => (products.value = data));
//});
defineProps({
  findKeyArr: Object,
})
const totalRecords = ref(0)
const rows = ref(5);
const page = ref(0);

const products = ref([
  {
    id: 1,
    articul: "837468237",
    info: "ХЗзззз",
  },
  {
    id: 2,
    articul: "837468237",
    info: "ХЗзззз",
  },
]);
// onMounted ( () => {
//   loading.value = true;
// });
const url = computed(()=>{
  // return `http://192.168.50.5:3002/tovars?page=${page.value}&npp=${limit.value}&s=${findKey.value}`
  return `http://192.168.50.5:3002/tovars?page=${page.value}&npp=${rows.value}`
})
const {isFetching:loading, error, data } = useFetch(url, {
  refetch: true,
  afterFetch(ctx){
    totalRecords.value=ctx.data.total;
    products.value = ctx.data.rowData;
    return ctx
  }
}).json();

const onPage = (event) => {
  rows.value=event.rows;
  page.value=event.page+1;
};
</script>

<style scoped>

</style>