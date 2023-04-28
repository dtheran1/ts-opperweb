<template>
  <div>
    <div class="text-4xl">
      <span> {{ title }} </span>
    </div>

    <div class="mt-10 font-normal text-sm">
      <p class="font-medium">Nombre de categoría</p>
      <div class="mt-1 rounded-lg h-14 border-2 border-white w-80 bg-grayCustom text-white placeholder-white">
        <input required type="text" v-model.trim="nameCategory" class="h-full pl-4 w-full bg-transparent placeholder-white focus:outline-none">
      </div>
    </div>

    <div class="mt-14">
      <Btn @click="saveCategory">
        <span> {{ isUpdate ? 'Actualizar' : 'Crear' }} </span>
      </Btn>
    </div>
  </div>
</template>
<script lang="ts">
import Btn from '../../components/Btn.vue'
import { defineComponent, ref, computed, watchEffect } from 'vue'
import { useRoute, useRouter } from 'vue-router';
import { useStore } from 'vuex';
import Swal from 'sweetalert2/dist/sweetalert2.js'

export default defineComponent({
  name: 'Home',
  components: {
    Btn
  },
  setup() {
    const store = useStore()
    const route = useRoute();
    const router = useRouter();
    const title = ref('')
    const isUpdate = ref(false)
    const nameCategory = ref('')

    const categories = computed(() => store.state.categories)

    watchEffect(() => {
      if (route.params.id) {
        title.value = 'Actualizar categoría'
        isUpdate.value = true
      } else {
        title.value = 'Crear categoría'
        isUpdate.value = false
      }
    })

    const saveCategory = () => {
      if (!nameCategory.value) {
        Swal.fire({
          position: 'top-end',
          icon: 'error',
          title: 'No se puede guardar una categoría sin nombre',
          showConfirmButton: false,
          timer: 1500
        })
        return
      }

      if (isUpdate.value && nameCategory.value) {
        store.dispatch('updateCategory', {
          id: Number(route.params.id),
          name: nameCategory.value.toUpperCase()
        })
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Categoría actualizada',
          showConfirmButton: false,
          timer: 1500
        })
        router.push({ name: 'Categories' })
      } else {
        store.dispatch('createCategory', {
          name: nameCategory.value.toUpperCase(),
          id: categories.value.length + 1
        })
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Categoría creada',
          showConfirmButton: false,
          timer: 1500
        })
        router.push({ name: 'Categories' })
      }
    }

    return {
      route,
      nameCategory,
      title,
      isUpdate,
      saveCategory,
    }
  }

})
</script>
<style scoped></style>