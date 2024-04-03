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

  <VerticalNavLink
    :item="{
      title: 'Banners',
      icon: 'bx-chat',
      to: '/admin/banners',
    }"
  />

  <VerticalNavLink
    :item="{
      title: 'Property Amenities',
      icon: 'bx-chat',
      to: '/admin/property-amenities',
    }"
  />

  <VerticalNavLink
    :item="{
      title: 'Property Categories',
      icon: 'bx-chat',
      to: '/admin/property-categories',
    }"
  />

  <VerticalNavLink
    :item="{
      title: 'Property Types',
      icon: 'bx-chat',
      to: '/admin/property-types',
    }"
  />

  <VerticalNavLink
    :item="{
      title: 'Floor Plans',
      icon: 'bx-chat',
      to: '/admin/floor-plans',
    }"
  />

  <VerticalNavLink
    :item="{
      title: 'Property Images',
      icon: 'bx-chat',
      to: '/admin/property-images',
    }"
  />

  <VerticalNavLink
    :item="{
      title: 'Agents',
      icon: 'bx-chat',
      to: '/admin/agents',
    }"
  />

  <VerticalNavLink
    :item="{
      title: 'Properties',
      icon: 'bx-chat',
      to: '/admin/properties',
    }"
  />
</template>
