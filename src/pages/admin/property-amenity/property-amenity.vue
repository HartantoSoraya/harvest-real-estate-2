<template>
  <VRow>
    <VCol cols="12" class="d-flex justify-space-between align-items-center">
      <h2 class="mb-0">
        Property Amenity
      </h2>

      <VBtn :to="{ name: 'admin-property-amenities' }" color="primary">
        Back
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VCard>
        <VForm>
          <VRow>
            <VCol cols="12" md="6">
              <VTextField v-model="name" label="Name" placeholder="Name"
                :error-messages="error && error.name ? [error.name] : []" :disabled="loading" :loading="loading" readonly />
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
import { onMounted, onUnmounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const { loading, error } = storeToRefs(usePropertyAmenityStore())
const { fetchPropertyAmenity } = usePropertyAmenityStore()

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

    document.title = 'Property Amenity'
})
</script>

<style lang="scss" scoped>
.v-row {
    margin: 0px !important;
}
</style>