<template>
  <div class="flex text-white">
    <div class="bg-complement w-1/4 min-h-screen xs:pt-6 xs:pl-3 md:p-6">
      <div class="flex gap-3">
        <router-link :to="{ name: 'Home' }">
          <img src="../assets/login/image-1.png" alt="logo" class=" min-w-fit w-12">
        </router-link>
        <h1 class="text-xl font-extrabold self-center hidden md:block">anime<span class="text-primary">yabu.</span> </h1>
      </div>

      <div class="md:pl-5">
        <div class="mt-14">
          <h2 class="font-bold text-lg">Categorías</h2>

          <ul class="text-base font-normal mt-3">
            <li class="hover:underline flex gap-2 cursor-pointer">
              <span class="w-2 h-2 rounded-full bg-white self-center" />
              <router-link :to="{ name: 'Categories' }">
                <span>
                  Ver todas
                </span>
              </router-link>
            </li>
            <li class="hover:underline flex gap-2 cursor-pointer">
              <span class="w-2 h-2 rounded-full bg-white self-center" />
              <router-link :to="{ name: 'CreateCategory' }">
                <span>
                  Crear
                </span>
              </router-link>
            </li>
          </ul>
        </div>

        <router-link :to="{ name: 'Login' }" @click="logout">
          <div class="mt-8 font-bold text-lg hover:scale-105">
            Cerrar sesión
          </div>
        </router-link>
      </div>
    </div>

    <div class="bg-secondary w-full text-white xs:pl-5 md:pl-28 pt-20 pb-10">
      <router-view></router-view>
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
      logout,
    }
  }
})
</script>
<style scoped></style>