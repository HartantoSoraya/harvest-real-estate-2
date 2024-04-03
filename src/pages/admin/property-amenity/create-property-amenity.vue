<script setup>
import { usePropertyAmenityStore } from '@/stores/property-amenity'
import { storeToRefs } from 'pinia'
import { onMounted, onUnmounted, ref } from 'vue'

const { loading, error } = storeToRefs(usePropertyAmenityStore())
const { createPropertyAmenity } = usePropertyAmenityStore()

const name = ref('')

const handleReset = () => {
  name.value = ''
}

const handleSubmit = () => {
  createPropertyAmenity({ 
    name: name.value 
  })
}

onMounted(() => {
  document.title = 'Create Property Amenity'
})

onUnmounted(() => {
  handleReset()

  error.value = null
})
</script>

<template>
  <VRow>
    <VCol cols="12" class="d-flex justify-space-between align-items-center">
      <h2 class="mb-0">
        Add Property Amenity
      </h2>

      <VBtn to="/admin/property-amenities" color="primary">
        Back
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VCard>
        <VForm @submit.prevent="handleSubmit">
          <VRow>
            <VCol cols="12" md="6">
              <VTextField v-model="name" label="Name" placeholder="Name" :error-messages="error && error.name ? [error.name] : []" />
            </VCol>

            <VCol cols="12" class="d-flex gap-4">
              <VBtn type="submit" :loading="loading" color="primary">
                Save
              </VBtn>

              <VBtn type="reset" color="secondary" variant="tonal" @click="handleReset">
                Reset
              </VBtn>
            </VCol>
          </VRow>
        </VForm>
      </VCard>
    </VCol>
  </VRow>
</template>

<style lang="scss">
.v-row {
  margin: 0px !important;
}
</style>