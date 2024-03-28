<script setup>
import { useTestimonialStore } from '@/stores/testimonial'
import { storeToRefs } from 'pinia'
import { onMounted, onUnmounted, ref } from 'vue'

const { loading, error } = storeToRefs(useTestimonialStore())
const { createTestimonial } = useTestimonialStore()

const name = ref('')
const avatar = ref(null)
const avatar_name = ref('')
const testimonial = ref('')

const handleReset = () => {
  name.value = ''
  avatar.value = null
  avatar_name.value = ''
  testimonial.value = ''
}

const handleSubmit = () => {
  createTestimonial({
    name: name.value,
    avatar: avatar.value,
    testimonial: testimonial.value,
  })
}

onMounted(() => {
  document.title = 'Tambah Testimonial'
})

onUnmounted(() => {
  handleReset()

  error.value = null
})

const handleFileChange = e => {
  const file = e.target.files[0]

  if (file) {
    avatar.value = file
  }
}
</script>


<template>
  <VRow>
    <VCol
      cols="12"
      class="d-flex justify-space-between align-items-center"
    >
      <h2 class="mb-0">
        Tambah Testimonial
      </h2>

      <VBtn
        to="/admin/testimonials"
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

<style lang="scss">
.v-row {
  margin: 0px !important;
}
</style>
