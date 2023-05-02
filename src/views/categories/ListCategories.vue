<template>
  <div class="">
    <div class="text-4xl w-[90%] flex flex-col md:flex-row gap-5 pr-5">
      <span class="flex-1">Lista de Categorías</span>
      <input type="text" class="text-sm h-10 w-60 focus:outline-primary border-none px-3 text-primary rounded-md bg-slate-200 placeholder-primary" v-model="search" @input="searchByCategory" placeholder="Busca tu catergoria">
    </div>

    <div class="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10">
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
import { defineComponent, computed, ref } from 'vue'
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

    const search = ref('')

    const categories = computed(() => store.getters.filteredCategories)

    const searchByCategory = () => {
      store.dispatch('setSearch', search.value)
    }

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
      logout,
      search,
      searchByCategory
    }
  }

})
</script>
<style scoped></style>