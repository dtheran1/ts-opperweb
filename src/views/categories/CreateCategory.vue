<template>
  <div class="flex text-white">
    <div class="bg-complement w-1/4 h-screen p-6">
      <div class="flex gap-3">
        <img src="../../assets/login/image 1.png" alt="">
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
        <span> {{ title }} </span>
      </div>

      <div class="mt-10 font-normal text-sm">
        <p class="font-medium">Nombre de categoría</p>
        <div class="mt-1 rounded-lg h-14 border-2 border-white w-80 bg-grayCustom text-white placeholder-white">
          <input type="text" class="h-full pl-4 w-full bg-transparent placeholder-white focus:outline-none">
        </div>
      </div>

      <div class="mt-14">
        <Btn>
          <span> {{ isUpdate ? 'Actualizar' : 'Crear' }} </span>
        </Btn>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Btn from '../../components/Btn.vue'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router';
export default {
  name: 'Home',
  components: {
    Btn
  },
  setup() {
    const route = useRoute();
    const title = ref('')
    const isUpdate = ref(false)

    onMounted(() => {
      if (route.params.id) {
        title.value = 'Actualizar categoría'
        isUpdate.value = true
      } else {
        title.value = 'Crear categoría'
        isUpdate.value = false
      }
    })

    return {
      route,
      title,
      isUpdate
    }
  }

}
</script>
<style scoped></style>