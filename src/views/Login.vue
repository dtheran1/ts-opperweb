<template >
  <div
    class="xs:w-[375px] md:w-full  xs:border-gray-100 xs:border-2  lg:border-none rounded-xl lg:rounded-none grid grid-cols-1 md:grid-cols-2 bg-gradient-to-b from-primary to-secondary min-h-screen">
    <div class="md:bg-black pt-6">
      <div class="pl-[34px] pt-5 pb-6 hidden lg:flex">
        <img src="../assets/login/image 1.png" alt="logo-page">
        <span class="font-extrabold text-white self-center pl-3">anime<span class="text-primary">yabu.</span></span>

      </div>
      <img src="../assets/login/arrowLeft.svg" class="pl-[34px]" alt="arrow-left">
      <div class="flex justify-center w-full">
        <div class="-mt-5 text-white">
          <img src="../assets/login/avatar-login.png" alt="avatar-login">
          <div class="flex flex-col justify-center text-center">
            <span class="font-bold text-4xl">ひさしぶり!</span>
            <p class="italic text-base tracking-wider">¡Hola, te extrañamos!</p>
          </div>
        </div>
      </div>
      <div class="w-[343px] mx-auto px-4 mt-4 text-white">
        <form class="mt-1">
          <div>
            <p>Email</p>
            <div class="mt-1 rounded-lg h-14 border-2 border-white bg-grayCustom text-white placeholder-white">
              <input type="email" class="h-full pl-4 w-full bg-transparent placeholder-white focus:outline-none"
                placeholder="Email">
            </div>
            <div class="flex justify-end mt-1">
              <span class="text-redCustom text-sm">Email Inválido</span>
            </div>
          </div>
          <div class="mt-4">
            <p>Contraseña</p>
            <div
              class="mt-1 rounded-lg h-14 border-2 border-white bg-grayCustom text-white px-4 placeholder-white flex justify-between">
              <input type="password" class="h-full bg-transparent placeholder-white focus:outline-none"
                placeholder="Contraseña">
              <button>
                <img src="../assets/login/ojito.svg" alt="">
              </button>
            </div>
          </div>
        </form>
        <div class="flex justify-end mt-2">
          <span class="text-pinkCustom text-sm">¿Olvido la contraseña?</span>
        </div>

        <div class="bg-pinkCustom h-[60px] rounded-md grid place-items-center mt-4">
          <button class="w-full h-full">Acceder</button>
        </div>

        <div class="grid grid-cols-3 gap-6 mt-10">
          <span class="h-1 bg-white rounded-full" />
          <span class="text-sm">Regístrate también con</span>
          <div class="h-1 bg-white"></div>
        </div>

        <div class="flex justify-evenly mt-5">
          <img src="../assets/login/logoInstagram.svg" alt="logoInstagram">
          <img src="../assets/login/logoTwitter.svg" alt="logoTwitter">
          <img src="../assets/login/logoFacebook.svg" alt="logoFacebook">
        </div>

        <div class="mt-[41px] mb-10">
          <span class="text-sm text-white">Quieres registrarte? <span class="text-pinkCustom">Registrate</span></span>
        </div>
      </div>
    </div>
    <div class="hidden md:block relative bg-complement">
      <div class="w-[538px] mt-10 h-[538px] mx-auto z-10 bg-pinkCustom rounded-full absolute left-1/4 top-8" />
      <Carousel class="carousel" v-slot="{ currentSlide }">
        <Slide v-for="(slide, index) in carouselSlides" :key="index">
          <div v-show="currentSlide === index + 1" class="slide-info absolute top-14 left-48 z-50">
            <img :src="slide.slide" alt="slider" class="mx-auto" :class="currentSlide === 1 && 'h-[600px]'">
            <p class="text-white font-bold text-center text-[80px]"> anime<span class="text-primary">{{
              slide.title.split('anime').join('') }}.</span>
            </p>
            <div class="">
              <p class="text-white text-center w-[463px] mx-auto"> {{ slide.description }} </p>
            </div>
          </div>
        </Slide>
      </Carousel>
    </div>
  </div>
</template>
<script>

import { defineComponent } from 'vue'
import Carousel from '../components/Carousel.vue'
import Slide from '../components/SliderComponent.vue'

import slade1 from '../assets/login/slider1.png'
import slade2 from '../assets/login/slider2.png'
import slade3 from '../assets/login/slider3.png'

export default defineComponent({
  name: 'login',
  components: {
    Carousel,
    Slide
  },
  setup() {
    const carouselSlides = [
      {
        title: 'Yabu',
        slide: slade1,
        description: 'Ver anime en línea en HD, subtitulado o doblado, en tu celular o computadora.¡Animeyabu, tu portal de anime en línea!'
      },
      {
        title: 'Kyojuro',
        slide: slade2,
        description: 'Ver anime en línea en HD, subtitulado o doblado, en tu celular o computadora.¡Animeyabu, tu portal de anime en línea!'
      },
      {
        title: 'Inosuke',
        slide: slade3,
        description: 'Ver anime en línea en HD, subtitulado o doblado, en tu celular o computadora.¡Animeyabu, tu portal de anime en línea!'
      },
    ]
    return {
      carouselSlides
    }
  }

})
</script>
<style scoped></style>