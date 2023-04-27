<template>
  <div>
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
</template>
<script lang="ts">
import Btn from '../../components/Btn.vue'
import { defineComponent, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
export default defineComponent({
  name: 'Home',
  components: {
    Btn
  },
  setup() {
    const store = useStore()
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
      isUpdate,
    }
  }

})
</script>
<style scoped></style>