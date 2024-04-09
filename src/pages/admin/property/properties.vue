<script setup>
import { usePropertyStore } from '@/stores/property'

const headers = [
  {
    text: 'Title',
    value: 'title',
  },
  {
    text: 'Agent',
    value: 'agent.name',
    sortable: true,
  },
  {
    text: 'Description',
    value: 'description',
  },
  {
    text: 'Active',
    value: 'is_active',
  },
  {
    text: 'Action',
    value: 'operation',
    width: 300,
  },
]

const { properties, loading, error, success } = storeToRefs(usePropertyStore())
const { fetchProperties, deleteProperty } = usePropertyStore()

fetchProperties()

async function handleDeleteProperty(property) {
  const confirmed = confirm('Are you sure you want to delete this property?')

  if (confirmed) {
    await deleteProperty(property.id)
    fetchProperties()
  }
}

const search = ref('')

onMounted(() => {
  document.title = 'Property'
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
        Properties
      </h2>

      <VBtn to="/admin/property/create" color="primary">
        Add Property
      </VBtn>

      <VCol cols="12">
        <VTextField v-model="search" label="Search Property" placeholder="Search Property" clearable
          :loading="loading" variant="solo" />
      </VCol>

      <VCol cols="12">
        <VCard>
          <EasyDataTable :headers="headers" :items="properties" :loading="loading" :search-value="search"
            buttons-pagination show-index class="data-table">
            <template #item-operation="item">
              <VBtn :to="{ name: 'admin-property-edit', params: { id: item.id } }" color="primary" size="small" class="m-5">
                Edit
              </VBtn>
              <VBtn :to="{ name: 'admin-property-view', params: { id: item.id } }" color="info" size="small">
                Detail
              </VBtn>
              <VBtn color="error" size="small" class="m-5" @click="handleDeleteProperty(item)">
                Delete
              </VBtn>
            </template>
          </EasyDataTable>
        </VCard>
      </VCol>
    </VCol>
  </VRow>
</template>