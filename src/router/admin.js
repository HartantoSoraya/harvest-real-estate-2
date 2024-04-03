import adminTestimonialRoutes from "./admin-testimonial"
import adminBannerRoutes from "./admin-banner"
import adminPropertyAmenityRoutes from "./admin-property-amenity"
import adminPropertyCategoryRoutes from "./admin-property-category"
import adminPropertyTypeRoutes from "./admin-property-type"
import adminAgentRoutes from "./admin-agent"

const adminRoutes = [
  ...adminTestimonialRoutes,
  ...adminBannerRoutes,
  ...adminPropertyAmenityRoutes,
  ...adminPropertyCategoryRoutes,
  ...adminPropertyTypeRoutes,
  ...adminAgentRoutes,
]

export default adminRoutes
