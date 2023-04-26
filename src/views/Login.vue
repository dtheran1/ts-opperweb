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
            <div class="flex justify-end mt-2">
              <span class="text-pinkCustom text-sm">¿Olvido la contraseña?</span>
            </div>
            <div
              class="bg-pinkCustom hover:bg-primary text-secondary hover:text-white h-[60px] rounded-md grid place-items-center mt-4">
              <button class="w-full h-full hover:scale-110">Acceder</button>
            </div>
          </div>
        </form>

        <div class="flex justify-between mt-10">
          <p class="h-1 bg-white rounded-full w-14" />
          <div>
            <p class="block md:hidden -mt-2 flex-1">Logueate con RRSS</p>
            <p class="hidden md:block -mt-2 text-sm">Regístrate también con</p>
          </div>
          <p class="h-1 bg-white w-14 rounded-full"></p>
        </div>

        <div class="flex justify-evenly mt-5">
          <img src="../assets/login/logoInstagram.svg" alt="logoInstagram">
          <img src="../assets/login/logoTwitter.svg" alt="logoTwitter">
          <img src="../assets/login/logoFacebook.svg" alt="logoFacebook">
        </div>

        <div class="mt-[41px] mb-10">
          <router-link :to="{ name: 'Register' }">
            <span class="text-sm text-white">Quieres registrarte? <span class="text-pinkCustom">Registrate</span></span>
          </router-link>
        </div>
      </div>
    </div>


    <div class="hidden md:block bg-complement">
      <Carousel :navEnabled="false" :pagination="true" :startAutoPlay="false" :timeout="5000" class="carousel relative max-h-screen h-screen"
        v-slot="{ currentSlide }">
        <Slide v-for="(slide, index) in carouselSlides" :key="index">
          <div v-show="currentSlide === index + 1" class="absolute top-10 left-1/4">
            <div class="w-[550px] h-[550px] bg-primary rounded-full grow mb-40">
              <img :src="slide.slide" alt="" class="w-[700px] h-[700px]" />
            </div>

            <div class="description w-1/2">
              <span class="font-bold text-6xl text-white"> anime<span class="text-primary">{{ slide.title }}</span></span>
              <p class="text-white text-sm"> {{ slide.description }} </p>
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
<style scoped>
</style>