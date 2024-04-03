const adminBannerRoutes = [
    {
      path: 'banners',
      component: () => import('../pages/admin/banner/banners.vue'),
      name: 'admin-banners',
    },
    {
      path: 'banner/create',
      component: () => import('../pages/admin/banner/create-banner.vue'),
      name: 'admin-banner-create',
    },
    {
      path: 'banner/:id',
      component: () => import('../pages/admin/banner/banner.vue'),
      name: 'admin-banner-view',
    },
    {
      path: 'banner/:id/edit',
      component: () => import('../pages/admin/banner/edit-banner.vue'),
      name: 'admin-banner-edit',
    },
  ]
  
  export default adminBannerRoutes
  