const publicRouter = [
  {
    path: '',
    name: 'home',
    component: () => import('@/pages/home.vue'),
  },
]

export default publicRouter
