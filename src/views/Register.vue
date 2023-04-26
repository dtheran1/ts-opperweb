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
        <div class="-mt-5 text-white flex gap-5">
          <img src="../assets/login/avartar-register.png" alt="avatar-login">
          <div class="flex flex-col justify-center text-center">
            <span class="font-bold text-4xl">ようこそ!</span>
            <p class="italic text-base tracking-wider">Bienvenidos(a)!</p>
          </div>
        </div>
      </div>
      <div class="w-[343px] mx-auto text-sm px-4 mt-4 text-white natural">
        <div class="flex justify-between mb-3">
          <p>Tipo de persona</p>
          <div class="flex items-center gap-3">
            <input id="helper-radio" aria-describedby="helper-radio-text" type="radio" value=""
              class="w-4 h-4 text-gray-500 bg-gray-100 border-gray-300 focus:ring-gray-500 ">
            <label for="helper-radio" class="font-medium">Natural</label>
          </div>
          <div class="flex items-center gap-3">
            <input id="helper-radio" aria-describedby="helper-radio-text" type="radio" value=""
              class="w-4 h-4 text-gray-500 bg-gray-100 border-gray-300 focus:ring-gray-500 ">
            <label for="helper-radio" class="font-medium">Jurídica</label>
          </div>
        </div>

        <form v-if="isPerson" class="mt-1">
          <div class="mb-3">
            <p>Nombre</p>
            <div class="mt-1 rounded-lg h-14 border-2 border-white bg-grayCustom text-white placeholder-white">
              <input type="text" class="h-full pl-4 w-full bg-transparent placeholder-white focus:outline-none">
            </div>
          </div>
          <div class="mb-3">
            <p>Apellido</p>
            <div class="mt-1 rounded-lg h-14 border-2 border-white bg-grayCustom text-white placeholder-white">
              <input type="text" class="h-full pl-4 w-full bg-transparent placeholder-white focus:outline-none">
            </div>
          </div>
          <div class="mb-3">
            <p>Teléfono</p>
            <div class="mt-1 rounded-lg h-14 border-2 border-white bg-grayCustom text-white placeholder-white">
              <input type="number" class="h-full pl-4 w-full bg-transparent placeholder-white focus:outline-none">
            </div>
          </div>
          <div class="mb-3">
            <p>Número de identificación</p>
            <div class="mt-1 rounded-lg h-14 border-2 border-white bg-grayCustom text-white placeholder-white">
              <input type="number" class="h-full pl-4 w-full bg-transparent placeholder-white focus:outline-none">
            </div>
          </div>
          <div class="mb-3">
            <p>Email</p>
            <div class="mt-1 rounded-lg h-14 border-2 border-white bg-grayCustom text-white placeholder-white">
              <input type="email" class="h-full pl-4 w-full bg-transparent placeholder-white focus:outline-none"
                placeholder="Email">
            </div>
            <!-- <div class="flex justify-end mt-1">
              <span class="text-redCustom text-sm">Email Inválido</span>
            </div> -->
          </div>
          <div class="mb-3">
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
          <div class="mb-4">
            <p>Confirmar contraseña</p>
            <div
              class="mt-1 rounded-lg h-14 border-2 border-white bg-grayCustom text-white px-4 placeholder-white flex justify-between">
              <input type="password" class="h-full bg-transparent placeholder-white focus:outline-none"
                placeholder="Contraseña">
              <button>
                <img src="../assets/login/ojito.svg" alt="">
              </button>
            </div>
          </div>
          <div
            class="bg-pinkCustom hover:bg-primary text-secondary hover:text-white h-[60px] rounded-md grid place-items-center mt-8">
            <button type="submit" class="w-full h-full hover:scale-110">Registrar</button>
          </div>
        </form>

        <form v-if="isLegal" class="mt-1">
          <div class="mb-3">
            <p>Razón social</p>
            <div class="mt-1 rounded-lg h-14 border-2 border-white bg-grayCustom text-white placeholder-white">
              <input type="text" class="h-full pl-4 w-full bg-transparent placeholder-white focus:outline-none">
            </div>
          </div>
          <div class="mb-3">
            <p>NIT</p>
            <div class="mt-1 rounded-lg h-14 border-2 border-white bg-grayCustom text-white placeholder-white">
              <input type="number" class="h-full pl-4 w-full bg-transparent placeholder-white focus:outline-none">
            </div>
          </div>
          <div class="mb-3">
            <p>Teléfono</p>
            <div class="mt-1 rounded-lg h-14 border-2 border-white bg-grayCustom text-white placeholder-white">
              <input type="number" class="h-full pl-4 w-full bg-transparent placeholder-white focus:outline-none">
            </div>
          </div>
          <div class="mb-3">
            <p>Email</p>
            <div class="mt-1 rounded-lg h-14 border-2 border-white bg-grayCustom text-white placeholder-white">
              <input type="email" class="h-full pl-4 w-full bg-transparent placeholder-white focus:outline-none"
                placeholder="Email">
            </div>
            <!-- <div class="flex justify-end mt-1">
              <span class="text-redCustom text-sm">Email Inválido</span>
            </div> -->
          </div>
          <div class="mb-3">
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
          <div class="mb-4">
            <p>Confirmar contraseña</p>
            <div
              class="mt-1 rounded-lg h-14 border-2 border-white bg-grayCustom text-white px-4 placeholder-white flex justify-between">
              <input type="password" class="h-full bg-transparent placeholder-white focus:outline-none"
                placeholder="Contraseña">
              <button>
                <img src="../assets/login/ojito.svg" alt="">
              </button>
            </div>
          </div>
          <div
            class="bg-pinkCustom hover:bg-primary text-secondary hover:text-white h-[60px] rounded-md grid place-items-center mt-8">
            <button type="submit" class="w-full h-full hover:scale-110">Registrar</button>
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
          <router-link :to="{ name: 'Home' }">
            <span class="text-sm text-white">Ya estás registrado? <span class="text-pinkCustom">Acceder</span></span>
          </router-link>
        </div>
      </div>
    </div>
    <div class="hidden md:block relative bg-complement">
      <div class="w-[450px] mt-48 h-[450px] mx-auto z-10 bg-pinkCustom rounded-full">
        <Carousel class="carousel" v-slot="{ currentSlide }">
          <Slide v-for="(slide, index) in carouselSlides" :key="index">
            <div v-show="currentSlide === index + 1" class="slide-info  top-14 left- z-50">
              <div>
                <img :src="slide.slide" alt="slider" class="mx-auto h-[550px]" :class="currentSlide === 1 && 'h-[600px]'">
              </div>
              <div class="w-[400px] mx-auto">
                <p class="text-white font-bold text-[60px]"> anime<span class="text-primary">{{
                  slide.title.split('anime').join('') }}.</span>
                </p>
                <p class="text-white text-center mx-auto"> {{ slide.description }} </p>
              </div>
            </div>
          </Slide>
        </Carousel>
      </div>
    </div>
  </div>
</template>
<script lang="ts">

import { defineComponent, ref } from 'vue'
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
    const isPerson = ref(true)
    const isLegal = ref(false)

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
      carouselSlides,
      isPerson,
      isLegal
    }
  }

})
</script>
<style scoped></style>