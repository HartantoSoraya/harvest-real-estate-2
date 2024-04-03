const adminPropertyAmenityRoutes = [
  {
    path: 'property-amenities',
    component: () => import('../pages/admin/property-amenity/property-amenities.vue'),
    name: 'admin-property-amenities',
  },
  {
    path: 'property-amenity/create',
    component: () => import('../pages/admin/property-amenity/create-property-amenity.vue'),
    name: 'admin-property-amenity-create',
  },
  {
    path: 'property-amenity/:id',
    component: () => import('../pages/admin/property-amenity/property-amenity.vue'),
    name: 'admin-property-amenity-view',
  },
  {
    path: 'property-amenity/:id/edit',
    component: () => import('../pages/admin/property-amenity/edit-property-amenity.vue'),
    name: 'admin-property-amenity-edit',
  },
]

export default adminPropertyAmenityRoutes