<script setup>
import { useAuthStore } from '@/stores/auth'

import VerticalNavLink from '@layouts/components/VerticalNavLink.vue'

const { user, checkAuth } = useAuthStore()

checkAuth()
</script>

<template>
  <VerticalNavLink
    :item="{
      title: 'Dashboard',
      icon: 'bx-home',
      to: '/admin/dashboard',
    }"
  />

  <VerticalNavLink
    :item="{
      title: 'Testimonials',
      icon: 'bx-chat',
      to: '/admin/testimonials',
    }"
  />
</template>
