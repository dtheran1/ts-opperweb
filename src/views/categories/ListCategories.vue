<template>
  <div class="flex text-white min-h-screen">
    <div class="bg-complement w-1/4 p-6">
      <div class="flex gap-3">
        <img src="../../assets/login/image 1.png" alt="">
        <h1 class="text-xl font-extrabold self-center">anime<span class="text-primary">yabu.</span> </h1>
      </div>

      <div class="pl-5 grow">
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
          <button @click="$router.push('/login')">Cerrar sesión</button>
        </div>
      </div>
    </div>

    <div class="bg-secondary w-full text-white pl-28 pt-20 pb-10">
      <div class="text-4xl">
        <span>Lista de Categorías</span>
      </div>

      <div class="mt-20 grid gricol1 md:grid-cols-3 gap-10">
        <div v-for="category in categories" :key="category.id"
          class="w-60 h-32 relative flex flex-col bg-complement rounded-lg text-white items-center justify-center font-semibold text-2xl">
          <p>{{ category.name }}</p>
          <button @click="updateCategory(category)"
            class="hover:underline cursor-pointer justify-end absolute bottom-1 right-3 text-sm font-normal">
            Editar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { ref } from 'vue'
import Btn from '../../components/Btn.vue'
import router from '../../router/index'


interface Category {
  id: number
  name: string
}
export default {
  name: 'Home',
  components: {
    Btn
  },
  setup() {
    const categories = ref<Category[]>([
      {
        id: 1,
        name: 'ACCIÓN'
      },
      {
        id: 2,
        name: 'AVENTURA'
      },
      {
        id: 3,
        name: 'COMEDIA'
      },
      {
        id: 4,
        name: 'TERROR'
      },
      {
        id: 5,
        name: 'ROMANCE'
      },
      {
        id: 6,
        name: 'MISTERIO'
      },
      {
        id: 6,
        name: 'MISTERIO'
      },
      {
        id: 6,
        name: 'MISTERIO'
      },
    ])

    const updateCategory = (category: Category) => {
      router.push({
        name: 'UpdateCategory',
        params: {
          id: category.id
        }
      })
    }

    return {
      categories,
      updateCategory
    }
  }

}
</script>
<style scoped></style>