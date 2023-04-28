<template>
  <div class="text-4xl">
    <span>Hola, <span class="font-medium">Daniel Theran</span></span>
  </div>

  <div class="mt-20 w-80">
    <span class="font-medium text-lg">Selecciona una opción:</span>

    <router-link :to="{ name: 'Categories' }">
      <Btn class="">
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
</template>
<script lang="ts">
import Btn from '../components/Btn.vue'
import store from '../store'
import { defineComponent, onMounted } from 'vue'
export default defineComponent({
  name: 'Home',
  components: {
    Btn
  },
  setup() {
    const logout = () => {
      store.commit('logout')
    }

    onMounted(() => {
      //
    })

    return {
      logout,
    }
  }
})
</script>
<style scoped></style>