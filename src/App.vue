<template>
  <div class="wrap">
    <table>
      <thead>
        <tr>
          <th>업소명</th>
          <th>소재지</th>
          <th>제공서비스</th>
          <th>예약전화</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in shoplist" :key="index">
          <td>{{ item.shop }}</td>
          <td>{{ item.address }}</td>
          <td>{{ item.offer }}</td>
          <td>
            <a :href="`tel:${item.tel}`">{{ item.tel }}</a>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { computed } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    store.dispatch("fetchShop");
    const shoplist = computed(() => store.getters.getShopList);
    return {
      shoplist,
    };
  },
};
</script>

<style></style>
