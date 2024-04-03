const adminTestimonialRoutes = [
  {
    path: 'testimonials',
    component: () => import('../pages/admin/testimonial/testimonials.vue'),
    name: 'admin-testimonials',
  },
  {
    path: 'testimonial/create',
    component: () => import('../pages/admin/testimonial/create-testimonial.vue'),
    name: 'admin-testimonial-create',
  },
  {
    path: 'testimonial/:id',
    component: () => import('../pages/admin/testimonial/testimonial.vue'),
    name: 'admin-testimonial-view',
  },
  {
    path: 'testimonial/:id/edit',
    component: () => import('../pages/admin/testimonial/edit-testimonial.vue'),
    name: 'admin-testimonial-edit',
  },
]

export default adminTestimonialRoutes
