<script setup>
import { usePropertyCategoryStore } from '@/stores/property-category'

const headers = [
  {
    text: 'Name',
    value: 'name',
  },
  {
    text: 'Icon',
    value: 'icon',
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

const { propertyCategories, loading, error, success } = storeToRefs(usePropertyCategoryStore())
const { fetchPropertyCategories, deletePropertyCategory } = usePropertyCategoryStore()

fetchPropertyCategories()

async function handleDeletePropertyCategory(propertyCategory) {
  const confirm = confirm('Are you sure you want to delete this property category?')

  if (confirm) {
    await deletePropertyCategory(propertyCategory.id)
    fetchPropertyCategories()
  }
}

const search = ref('')

onMounted(() => {
  document.title = 'Property Category'
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
      <h2 class="mb-0">Property Categories</h2>

      <VBtn to="/admin/property-category/create" color="primary">
        Add Property Category
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VTextField v-model="search" label="Search Property Category" placeholder="Search Property Category" clearable
        :loading="loading" variant="solo" />
    </VCol>

    <VCol cols="12">
      <VCard>
        <EasyDataTable :headers="headers" :items="propertyCategories" :loading="loading" :search-value="search"
          buttons-pagination show-index class="data-table">
          <template #item-operation="item">
            <VBtn :to="{ name: 'admin-property-category-edit', params: { id: item.id } }" color="primary" size="small" class="m-5">
              Edit
            </VBtn>
            <VBtn :to="{ name: 'admin-property-category-view', params: { id: item.id } }" color="info" size="small">
              Detail
            </VBtn>
            <VBtn color="error" size="small" class="m-5" @click="handleDeletePropertyCategory(item)">
              Delete
            </VBtn>
          </template>
        </EasyDataTable>
      </VCard>
    </VCol>
  </VRow>
</template>