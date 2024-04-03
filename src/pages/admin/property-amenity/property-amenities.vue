<script setup>
import { usePropertyAmenityStore } from '@/stores/property-amenity'

const headers = [
  {
    text: 'Name',
    value: 'name',
  },
  {
    text: 'Action',
    value: 'operation',
    width: 300,
  }
]

const { propertyAmenities, loading, error, success } = storeToRefs(usePropertyAmenityStore())
const { fetchPropertyAmenities, deletePropertyAmenity } = usePropertyAmenityStore()

fetchPropertyAmenities()

async function handleDeletePropertyAmenity(propertyAmenity) {
  const confirmed  = confirm('Are you sure you want to delete this property amenity?')

  if (confirmed) {
    await deletePropertyAmenity(propertyAmenity.id)
    fetchPropertyAmenities()
  }
}

const search = ref('')

onMounted(() => {
  document.title = 'Property Amenity'
})

onUnmounted(() => {
  error.value = null
})
</script>

<template>
  <VDialog v-if="success" v-model="success" max-width="400">
    <VCard>
      <VCardText> {{ success }} </VCardText>
        <VCardActions>
          <VBtn color="primary" text @click="() => (success = null)"> Close </VBtn>
        </VCardActions>
    </VCard>
  </VDialog>

  <VRow>
    <VCol cols="12" class="d-flex justify-space-between align-items-center">
      <h2 class="mb-0">
        Property Amenity
      </h2>

      <VBtn to="/admin/property-amenity/create" color="primary">
        Add Property Amenity
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VTextField v-model="search" label="Search Property Amenity" placeholder="Search Property Amenity" clearable
       :loading="loading" variant="solo" />
    </VCol>

    <VCol cols="12">
      <VCard>
        <EasyDataTable :headers="headers" :items="propertyAmenities" :loading="loading" :search-value="search"
          buttons-pagination show-index class="data-table">
          <template #item-operation="item">
            <VBtn :to="{ name: 'admin-property-amenity-edit', params: { id: item.id } }" color="primary" size="small" class="m-5">
              Edit
            </VBtn>
            <VBtn :to="{ name: 'admin-property-amenity-view', params: { id: item.id } }" color="info" size="small">
              Detail
            </VBtn>
            <VBtn color="error" size="small" class="m-5" @click="handleDeletePropertyAmenity(item)">
              Delete
            </VBtn>
          </template>
        </EasyDataTable>
      </VCard>
    </VCol>
  </VRow>
</template>