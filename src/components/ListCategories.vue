<template >
  <div>
    <p>{{ name }}</p>
  </div>
</template>
<script lang="ts">
import { ref, defineComponent } from 'vue'
export default defineComponent({
  name: 'ListCategories',
  props: {
    name: string
  },
  setup() {
    const categories = ref([])


    return {
      categories
    }
  }
})
</script>
<style>
  
</style>