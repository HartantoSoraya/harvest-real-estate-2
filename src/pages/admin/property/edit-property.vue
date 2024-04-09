<template>
  <VRow>
    <VCol cols="12" class="d-flex justify-space-between align-items-center">
      <h2 class="mb-0">
        Edit Property
      </h2>

      <VBtn :to="{ name: 'admin-properties' }" color="primary">
        Back
      </VBtn>
    </VCol>

    <VCol cols="12">
      <VCard>
        <VForm @submit.prevent="handleSubmit">
          <VRow>
            <VCol cols="12" md="6">
              <VTextField v-model="title" label="Title" placeholder="Title"
                :error-messages="error && error.title ? [error.title] : []" />
            </VCol>

            <VCol cols="12">
              <VTextarea v-model="description" label="Description" placeholder="Description"
                :error-messages="error && error.description ? [error.description] : []" />
            </VCol>

            <VCol cols="12" md="6">
              <VTextField v-model="loc_city" label="City" placeholder="City"
                :error-messages="error && error.loc_city ? [error.loc_city] : []" />
            </VCol>

            <VCol cols="12" md="6">
              <VTextField v-model="loc_latitude" label="Latitude" placeholder="Latitude"
                :error-messages="error && error.loc_latitude ? [error.loc_latitude] : []" />
            </VCol>

            <VCol cols="12" md="6">
              <VTextField v-model="loc_longitude" label="Longitude" placeholder="Longitude"
                :error-messages="error && error.loc_longitude ? [error.loc_longitude] : []" />
            </VCol>
              
            <VCol cols="12" md="6">
              <VTextField v-model="loc_address" label="Address" placeholder="Address"
                :error-messages="error && error.loc_address ? [error.loc_address] : []" />
            </VCol>

            <VCol cols="12" md="6">
              <VTextField v-model="loc_state" label="State" placeholder="State"
                :error-messages="error && error.loc_state ? [error.loc_state] : []" />
            </VCol>

            <VCol cols="12" md="6">
              <VTextField v-model="loc_zip" label="Zip" placeholder="Zip"
                :error-messages="error && error.loc_zip ? [error.loc_zip] : []" />
            </VCol>

            <VCol cols="12" md="6">
              <VTextField v-model="loc_country" label="Country" placeholder="Country"
                :error-messages="error && error.loc_country ? [error.loc_country] : []" />
            </VCol>

            <VCol cols="12" md="6">
              <VTextField v-model="price" label="Price" placeholder="Price"
                :error-messages="error && error.price ? [error.price] : []" />
            </VCol>

            <VCol cols="12" md="6">
              <VSelect v-model="agent_id" :items="agents" label="Agent" placeholder="Choose Agent"
                :error-messages="error && error.agent_id ? [error.agent_id] : []"
                item-title="name" item-value="id" />
            </VCol>

            <VCol cols="12" md="6">
              <VTextarea v-model="offer_type" label="Offer Type" placeholder="Offer Type"
                :error-messages="error && error.offer_type ? [error.offer_type] : []" />
            </VCol>

            <VCol cols="12" md="6">
              <VTextField v-model="slug" label="Slug" placeholder="Slug"
                :error-messages="error && error.slug ? [error.slug] : []" />
            </VCol>
            
            <VCol cols="12" class="d-flex gap-4">
              <VBtn type="submit" :loading="loading" color="primary">
                Save
              </VBtn>

              <VBtn type="reset" color="secondary" variant="tonal" @click="handleReset">
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
import { usePropertyStore } from '@/stores/property'
import { useAgentStore } from '@/stores/agent';
import { storeToRefs } from 'pinia'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const { loading, error } = storeToRefs(usePropertyStore())
const { fetchProperty, updateProperty } = usePropertyStore()
const propertyId = route.params.id

const { agents } = storeToRefs(useAgentStore())

const { fetchAgents } = useAgentStore()

fetchAgents()

const title = ref('')
const description = ref('')
const loc_city = ref('')
const loc_latitude = ref('')
const loc_longitude = ref('')
const loc_address = ref('')
const loc_state = ref('')
const loc_zip = ref('')
const loc_country = ref('')
const price = ref('')
const agent_id = ref('')
const is_featured = ref(0)
const is_active = ref(1)
const is_sold = ref(0)
const is_rented = ref(0)
const offer_type = ref('')
const slug = ref('')


const fetchPropertyData = async () => {
  try {
    const data = await fetchProperty(propertyId)

    title.value = data.title
    description.value = data.description
    loc_city.value = data.loc_city
    loc_latitude.value = data.loc_latitude
    loc_longitude.value = data.loc_longitude
    loc_address.value = data.loc_address
    loc_state.value = data.loc_state
    loc_zip.value = data.loc_zip
    loc_country.value = data.loc_country
    price.value = data.price
    agent_id.value = data.agent_id
    is_featured.value = data.is_featured
    is_active.value = data.is_active
    is_sold.value = data.is_sold
    is_rented.value = data.is_rented
    offer_type.value = data.offer_type
    slug.value = data.slug
  } catch (error) {
    console.log(error)
  }
}

onMounted(() => {
  fetchPropertyData()

  document.title = 'Edit Property'
})

const handleSubmit = () => {
  updateProperty({
    id: propertyId,
    title: title.value,
    description: description.value,
    loc_city: loc_city.value,
    loc_latitude: loc_latitude.value,
    loc_longitude: loc_longitude.value,
    loc_address: loc_address.value,
    loc_state: loc_state.value,
    loc_zip: loc_zip.value,
    loc_country: loc_country.value,
    price: price.value,
    agent_id: agent_id.value,
    is_featured: is_featured.value,
    is_active: is_active.value,
    is_sold: is_sold.value,
    is_rented: is_rented.value,
    offer_type: offer_type.value,
    slug: slug.value
  })
}

const handleReset = () => {
  fetchPropertyData
}
</script>

<style lang="scss">
.v-row {
  margin: 0px !important;
}
</style>