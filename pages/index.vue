<template>
  <div>
    <img :src="response.details.ext_1.url" width="800" />
    <div>{{ response.details.ext_2 }}</div>
    <div>{{ response.details.ext_3 }}</div>

    <div v-for="n in response.details.ext_4" :key="n.slag">
      <img :src="n.ext_4.url" width="400" />
      <div>{{ n.ext_5 }}</div>
      <div>{{ n.ext_6 }}</div>
    </div>
    
     <!-- response.details.ext_7  -->
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, app }) {
    try {
      const response = await $axios.$get(
        process.env.BASE_URL + "/rcms-api/4/service/8"
      );
      console.log(response);
      return { response };
    } catch (e) {
      console.log(e.message);
    }
  },
};
</script>
