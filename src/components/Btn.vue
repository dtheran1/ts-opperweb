<template>
  <div
    class="bg-pinkCustom w-80 hover:bg-primary text-secondary hover:text-white h-[60px] rounded-md grid place-items-center mt-4">
    <button class="w-full h-full hover:scale-110">
      <slot />

    </button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'btn',
})
</script>
<style></style>