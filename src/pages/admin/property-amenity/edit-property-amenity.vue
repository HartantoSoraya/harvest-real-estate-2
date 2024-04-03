<template>
  <VRow>
    <VCol cols="12" class="d-flex justify-space-between align-items-center">
      <h2 class="mb-0">
        Edit Property Amenity
      </h2>

      <VBtn :to="{ name: 'admin-property-amenities' }" color="primary">
        Back
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VCard>
        <VForm @submit.prevent="handleSubmit">
          <VRow>
            <VCol cols="12" md="6">
              <VTextField v-model="name" label="Name" placeholder="Name" 
                :error-messages="error && error.name ? [error.name] : []" :disabled="loading" :loading="loading" />
            </VCol>

            <VCol cols="12" class="d-flex gap-4">
              <VBtn type="submit" :loading="loading" color="primary">
                Save
              </VBtn>

              <VBtn type="reset"s color="secondary" variant="tonal" @click="handleReset">
                Reset
              </VBtn>
            </VCol>
          </VRow>
        </VForm>
      </VCard>
    </VCol>
  </VRow>
</template>

<script setup>
import { usePropertyAmenityStore } from '@/stores/property-amenity'
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const { loading, error } = storeToRefs(usePropertyAmenityStore())
const { fetchPropertyAmenity, updatePropertyAmenity } = usePropertyAmenityStore()

const propertyAmenityId = route.params.id

const name = ref('')

const fetchPropertyAmenityData = async () => {
  try {
    const data = await fetchPropertyAmenity(propertyAmenityId)
    name.value = data.name
  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  fetchPropertyAmenityData()

  document.title = 'Edit Property Amenity'
})

const handleSubmit = () => {
  updatePropertyAmenity({
    id: propertyAmenityId,
    name: name.value })
}

const handleReset = () => {
  fetchPropertyAmenityData()
}
</script>

<style lang="scss" scoped>
.v-row {
  margin: 0px !important;
}
</style>