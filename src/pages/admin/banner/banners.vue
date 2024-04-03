<script setup>
import { useBannerStore } from '@/stores/banner';

const headers = [
  {
    text: 'Image',
    value: 'image',
  },
  {
    text: 'Title',
    value: 'title',
  },
  {
    text: 'Description',
    value: 'description',
  },
  {
    text: 'Action',
    value: 'operation',
    width: 300,
  },
]

const { banners, loading, error, success } = storeToRefs(useBannerStore())
const { fetchBanners, deleteBanner } = useBannerStore()

fetchBanners()

async function handleDeleteBanner(banner) {
  const confirmed = confirm('Are you sure you want to delete this banner?')

  if (confirmed) {
    await deleteBanner(banner.id)
    fetchBanners()
  }
}

const search = ref('')

onMounted(() => {
  document.title = 'Banner'
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
        Banner
      </h2>

      <VBtn to="/admin/banner/create" color="primary">
        Add Banner
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VTextField v-model="search" label="Search" placeholder="Search" clearable :loading="loading" variant="solo" />
    </VCol>

    <VCol cols="12">
      <VCard>
        <EasyDataTable :headers="headers" :items="banners" :loading="loading" :search-value="search" buttons-pagination show-index class="data-table">
          <template #item-image="item">
            <VImg v-if="item.image" :src="item.image_url" :alt="item.title" width="200" height="200" />
          </template>
          <template #item-operation="item">
            <VBtn :to="{ name: 'admin-banner-edit', params: { id: item.id } }" color="primary" size="small" class="m-5">
              Edit
            </VBtn>
            <VBtn :to="{ name: 'admin-banner-view', params: { id: item.id } }" color="info" size="small">
              Detail
            </VBtn>
            <VBtn color="error" size="small" class="m-5" @click="handleDeleteBanner(item)">
              Delete
            </VBtn>
          </template>
        </EasyDataTable>
      </VCard>
    </VCol>
  </VRow>
</template>