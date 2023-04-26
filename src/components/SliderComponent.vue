<template>
  <div class="slide">
    <transition name="slide">
      <slot />
    </transition>
  </div>
</template>
<script>
export default {

}
</script>
<style scoped>
.slide-enter-active,
.slide-leave-active {
  @apply transition-opacity duration-300 ease-out;
}

.slide-enter,
.slide-leave-active {
  @apply opacity-0;
}
</style>