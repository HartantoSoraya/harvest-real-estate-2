<script setup>
import { useTestimonialStore } from '@/stores/testimonial'

const headers = [
  {
    text: 'Nama',
    value: 'name',
  },
  {
    text: 'Avatar',
    value: 'avatar',
  },
  {
    text: 'Testimonial',
    value: 'testimonial',
  },
  {
    text: 'Action',
    value: 'operation',
    width: 300,
  },
]

const { testimonials, loading, error, success } = storeToRefs(useTestimonialStore())
const { fetchTestimonials, deleteTestimonial } = useTestimonialStore()

fetchTestimonials()

async function handleDeleteTestimonial(testimonial) {
  const confirmed = confirm('Are you sure you want to delete this testimonial?')

  if (confirmed) {
    await deleteTestimonial(testimonial.id)
    fetchTestimonials()
  }
}

const search = ref('')

onMounted(() => {
  document.title = 'Testimonial'
})

onUnmounted(() => {
  error.value = null
})
</script>

<template>
  <VDialog v-if="success" v-model="success" max-width="400">
    <VCard>
      <VCardText>
        {{ success }}
      </VCardText>
      <VCardActions>
        <VBtn color="primary" text @click="() => (success = null)">
          Close
        </VBtn>
      </VCardActions>
    </VCard>
  </VDialog>

  <VRow>
    <VCol cols="12" class="d-flex justify-space-between align-items-center">
      <h2 class="mb-0">
        Testimonial
      </h2>

      <VBtn to="/admin/testimonial/create" color="primary">
        Add Testimonial
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VTextField v-model="search" label="Search Testimonial" placeholder="Search Testimonial" clearable
        :loading="loading" variant="solo" />
    </VCol>

    <VCol cols="12">
      <VCard>
        <EasyDataTable :headers="headers" :items="testimonials" :loading="loading" :search-value="search"
          buttons-pagination show-index class="data-table">
          <template #item-avatar="item">
            <VImg v-if="item.avatar" :src="item.avatar_url" :alt="item.name" width="80" height="80" />
          </template>
          <template #item-operation="item">
            <VBtn :to="{ name: 'admin-testimonial-edit', params: { id: item.id } }" color="primary" size="small" class="m-5">
              Edit
            </VBtn>
            <VBtn :to="{ name: 'admin-testimonial-view', params: { id: item.id } }" color="info" size="small">
              Detail
            </VBtn>
            <VBtn color="error" size="small" class="m-5" @click="() => handleDeleteTestimonial(item)">
              Delete
            </VBtn>
          </template>
        </EasyDataTable>
      </VCard>
    </VCol>
  </VRow>
</template>
