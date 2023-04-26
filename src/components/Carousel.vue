<template>
  <div class="carousel">
    <slot :currentSlide="currentSlide" />

    <!-- Pagination -->
    <div class="pagination mt-20 flex justify-center gap-4 items-center">
      <span v-for="(slide, i) in getSlideCount" :key="i" @click="goToSlide(i)"
        class="cursor-pointer w-14 h-2 rounded-full shadow-md shadow-grayCustom"
        :class="i + 1 === currentSlide ? 'bg-gray-100' : 'bg-gray-600'">
      </span>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
export default defineComponent({
  name: 'Carousel',
  props: {
    isRegister: {
      type: Boolean,
      default: false
    }
  },
  setup() {
    const currentSlide = ref(1)
    const getSlideCount = ref<number | null>(null)
    const autoPlayEnabled = ref(true)
    const timeoutDuration = ref(5000)

    const nextSlide = () => {
      if (currentSlide.value === getSlideCount.value) {
        currentSlide.value = 1;
        return;
      }
      currentSlide.value += 1;
    };

    const goToSlide = (index: number) => {
      currentSlide.value = index + 1;
    };

    const autoPlay = () => {
      setInterval(() => {
        nextSlide();
      }, timeoutDuration.value);
    };
    if (autoPlayEnabled.value) {
      autoPlay();
    }
    onMounted(() => {
      getSlideCount.value = document.querySelectorAll(".slide").length;
    });

    return {
      currentSlide,
      nextSlide,
      getSlideCount,
      goToSlide
    }
  }
})
</script>
<style scoped></style>