<template>
  <VRow>
    <VCol cols="12" class="d-flex justify-space-between align-items-center">
      <h2 class="mb-0">
        Testimonial
      </h2>

      <VBtn :to="{ name: 'admin-testimonials' }" color="primary">
        Back
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VCard>
        <VForm>
          <VRow>
            <VCol cols="12" md="12">
              <VImg v-if="avatar" :src="avatar" :alt="name" width="200" height="200" />
            </VCol>

            <VCol cols="12" md="12">
              <VTextField v-model="name" label="Name" placeholder="Name"
                :error-messages="error && error.name ? [error.name] : []" :disabled="loading" :loading="loading"
                readonly />
            </VCol>

            <VCol cols="12">
              <VTextarea v-model="testimonial" label="Testimonial" placeholder="Testimonial"
                :error-messages="error && error.testimonial ? [error.testimonial] : []" :disabled="loading"
                :loading="loading" readonly />
            </VCol>
          </VRow>
        </VForm>
      </VCard>
    </VCol>
  </VRow>
</template>

<script setup>
import { useTestimonialStore } from '@/stores/testimonial'
import { storeToRefs } from 'pinia'
import { onMounted, onUnmounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const { loading, error } = storeToRefs(useTestimonialStore())
const { fetchTestimonial } = useTestimonialStore()

const testimonialId = route.params.id

const name = ref('')
const avatar = ref(null)
const testimonial = ref('')

const fetchTestimonialData = async () => {
  try {

    const data = await fetchTestimonial(testimonialId)

    name.value = data.name
    avatar.value = data.avatar_url
    testimonial.value = data.testimonial
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  fetchTestimonialData()

  document.title = 'Testimonial'
})
</script>

<style lang="scss">
.v-row {
  margin: 0px !important;
}
</style>
