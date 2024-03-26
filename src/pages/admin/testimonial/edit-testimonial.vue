<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Edit Testimonial
      </h2>

      <VBtn
        :to="{ name: 'admin-testimonials' }"
        color="primary"
      >
        Kembali
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VCard>
        <VForm @submit.prevent="handleSubmit">
          <VRow>
            <VCol
              cols="12"
              md="6"
            >
              <VTextField
                v-model="name"
                label="Nama"
                placeholder="Nama"
                :error-messages="error && error.name ? [error.name] : []"
                :disabled="loading"
                :loading="loading"
              />
            </VCol>

            <VCol
              cols="12"
              md="6"
            >
              <VFileInput
                v-model="avatar_name"
                label="Avatar"
                placeholder="Avatar"
                :error-messages="error && error.avatar ? [error.avatar] : []"
                @change="handleFileChange"
              />
            </VCol>

            <VCol cols="12">
              <VTextarea
                v-model="testimonial"
                label="Testimonial"
                placeholder="Testimonial"
                :error-messages="error && error.testimonial ? [error.testimonial] : []"
                :disabled="loading"
                :loading="loading"
              />
            </VCol>


            <VCol
              cols="12"
              class="d-flex gap-4"
            >
              <VBtn
                type="submit"
                :loading="loading"
                color="primary"
              >
                Simpan
              </VBtn>

              <VBtn
                type="reset"
                color="secondary"
                variant="tonal"
                @click="handleReset"
              >
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
import { useTestimonialStore } from '@/stores/testimonial'
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const { loading, error } = storeToRefs(useTestimonialStore())
const { fetchTestimonial, updateTestimonial } = useTestimonialStore()

const testimonialId = route.params.id

const name = ref('')
const avatar = ref(null)
const avatar_name = ref('')
const testimonial = ref('')

const fetchTestimonialData = async () => {
  try {

    const data = await fetchTestimonial(testimonialId)

    name.value = data.name
    testimonial.value = data.testimonial
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  fetchTestimonialData()

  document.title = 'Edit Testimonial'
})

const handleSubmit = () => {
  updateTestimonial({
    id: testimonialId,
    name: name.value, 
    avatar: avatar.value,
    testimonial: testimonial.value,
  })
}

const handleReset = () => {
  fetchTestimonialData()
}

const handleFileChange = e => {
  const file = e.target.files[0]

  if (file) {
    avatar.value = file
    avatar_name.value = file.name
  }
}
</script>

<style lang="scss">
.v-row {
  margin: 0px !important;
}
</style>
