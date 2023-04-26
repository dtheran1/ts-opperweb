<template>
  <div class="carousel">
    <slot :currentSlide="currentSlide" />

    <!-- Navigation -->
    <div v-if="navEnabled" class="navigate">
      <div class="toggle-page left">
        <button @click="prevSlide">prev</button>
      </div>
      <div class="toggle-page right">
        <button @click="nextSlide">next</button>
      </div>
    </div>

    <!-- Pagination -->
    <div v-if="pagintationEnabled"
      class="absolute bottom-4 w-full flex justify-center items-center h-1 rounded-full gap-4">
      <span @click="goToSlide(index)" v-for="(slide, index) in getSlideCount" :key="index"
        class="cursor-pointer w-10 h-2 shadow-md rounded-full shadow-grayCustom"
        :class="index + 1 === currentSlide ? 'bg-gray-100' : 'bg-gray-600'">
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
    },
    navEnabled: {
      type: Boolean,
      default: false
    },
    pagintationEnabled: {
      type: Boolean,
      default: true
    },
    startAutoPlay: {
      type: Boolean,
      default: true
    },
    pagination: {
      type: Boolean,
      default: true
    },
    timeout: {
      type: Number,
      default: 5000
    },
    navigation: {
      type: Boolean,
      default: false
    }
    // carouselSlides: {
    //   type: Array,
    //   default: () => [],
    //   required: true
    // }
  },
  setup(props) {
    const currentSlide = ref(1);
    const getSlideCount = ref<number | null>(null);
    const autoPlayEnabled = ref(
      props.startAutoPlay === undefined ? true : props.startAutoPlay
    );
    const timeoutDuration = ref(props.timeout === undefined ? 5000 : props.timeout);
    const pagintationEnabled = ref(
      props.pagination === undefined ? true : props.pagination
    );
    const navEnabled = ref(props.navigation === undefined ? false : props.navigation);
    // next slide
    const nextSlide = () => {
      if (currentSlide.value === getSlideCount.value) {
        currentSlide.value = 1;
        return;
      }
      currentSlide.value += 1;
    };
    // prev slide
    const prevSlide = () => {
      if (currentSlide.value === 1) {
        currentSlide.value = 1;
        return;
      }
      currentSlide.value -= 1;
    };
    const goToSlide = (index: number) => {
      currentSlide.value = index + 1;
    };
    // autoplay
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
      prevSlide,
      getSlideCount,
      goToSlide,
      pagintationEnabled,
      navEnabled,
    }
  }
})
</script>
<style scoped></style>