<template>
  <div>
    <div class="text-4xl">
      <span>Lista de Categorías</span>
    </div>

    <div class="mt-20 grid gricol1 md:grid-cols-3 gap-10">
      <p v-if="!categories.length"> Lo siento no tienes categorias, puedes empezar a crearlas </p>
      <div v-for="category in categories" :key="category.id"
        class="w-60 h-32 relative flex flex-col bg-complement rounded-lg text-white items-center justify-center font-semibold text-2xl">
        <p class="truncate w-full px-2 text-center">{{ category.name }}</p>
        <button @click="updateCategory(category)"
          class="hover:underline cursor-pointer justify-end absolute bottom-1 right-3 text-sm font-normal">
          Editar
        </button>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import Btn from '../../components/Btn.vue'
import router from '../../router/index'
import { useStore } from 'vuex';

interface Category {
  id: number
  name: string
}
export default defineComponent({
  name: 'Home',
  components: {
    Btn,
  },
  setup() {
    const store = useStore()
    const logout = () => {
      store.commit('logout')
    }

    const categories = computed(() => store.state.categories)

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
      updateCategory,
      logout
    }
  }

})
</script>
<style scoped></style>