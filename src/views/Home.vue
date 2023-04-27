<template>
  <div class="flex text-white">
    <div class="bg-complement w-1/4 h-screen p-6">
      <div class="flex gap-3">
        <img src="../assets/login/image 1.png" alt="">
        <h1 class="text-xl font-extrabold self-center">anime<span class="text-primary">yabu.</span> </h1>
      </div>

      <div class="pl-5">
        <div class="mt-14">
          <h2 class="font-bold text-lg">Categorías</h2>

          <ul class="text-base font-normal mt-3">
            <li class="hover:underline flex gap-2 cursor-pointer">
              <span class="w-2 h-2 rounded-full bg-white self-center" />
              <span>
                Ver todas
              </span>
            </li>
            <li class="hover:underline flex gap-2 cursor-pointer">
              <span class="w-2 h-2 rounded-full bg-white self-center" />
              <span>
                Crear
              </span>
            </li>
          </ul>
        </div>

        <div class="mt-8 font-bold text-lg">
          <button>Cerrar sesión</button>
        </div>
      </div>
    </div>

    <div class="bg-secondary w-full text-white pl-28 pt-20">
      <div class="text-4xl">
        <span>Hola, <span class="font-medium">Daniel Theran</span></span>
      </div>

      <div class="mt-20">
        <span class="font-medium text-lg">Selecciona una opción:</span>

        <router-link :to="{ name: 'Categories' }">
          <Btn>
            Ver todas las categorías
          </Btn>
        </router-link>
        <router-link :to="{ name: 'CreateCategory' }">
          <Btn>
            Crear categorías
          </Btn>
        </router-link>
        <router-link :to="{ name: 'Login' }" @click="logout">
          <Btn>
            Cerrar sesión
          </Btn>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Btn from '../components/Btn.vue'
import store from '../store'
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'Home',
  components: {
    Btn
  },
  setup() {
    const logout = () => {
      store.commit('logout')
    }
    return {
      logout
    }
  }
})
</script>
<style scoped></style>