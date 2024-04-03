<script setup>
import { usePropertyTypeStore } from '@/stores/property-type'

const headers = [
  {
    text: 'Name',
    value: 'name',
  },
  {
    text: 'Slug',
    value: 'slug',
  },
  {
    text: 'Action',
    value: 'operation',
    width: 300,
  }
]

const { propertyTypes, loading, error, success } = storeToRefs(usePropertyTypeStore())
const { fetchPropertyTypes, deletePropertyType } = usePropertyTypeStore()

fetchPropertyTypes()

async function handleDeletePropertyType(propertyType) {
  const confirm = confirm('Are you sure you want to delete this property type?')

  if (confirm) {
    await deletePropertyType(propertyType.id)
    fetchPropertyTypes()
  }
}

const search = ref('')

onMounted(() => {
  document.title = 'Property Type'
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
      <h2 class="mb-0">Property Types</h2>

      <VBtn to="/admin/property-type/create" color="primary">
        Add Property Type
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VTextField v-model="search" label="Search Property Type" placeholder="Search Property Type" clearable
        :loading="loading" variant="solo" />
    </VCol>

    <VCol cols="12">
      <VCard>
        <EasyDataTable :headers="headers" :items="propertyTypes" :loading="loading" :search-value="search"
          buttons-pagination show-index class="data-table">
          <template #item-operation="item">
            <VBtn :to="{ name: 'admin-property-type-edit', params: { id: item.id } }" color="primary" size="small" class="m-5">
              Edit
            </VBtn>
            <VBtn :to="{ name: 'admin-property-type-view', params: { id: item.id } }" color="info" size="small">
              Detail
            </VBtn>
            <VBtn color="error" size="small" class="m-5" @click="handleDeletePropertyType(item)">
              Delete
            </VBtn>
          </template>
        </EasyDataTable>
      </VCard>
    </VCol>
  </VRow>
</template>