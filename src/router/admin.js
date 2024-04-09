import adminTestimonialRoutes from "./admin-testimonial"
import adminBannerRoutes from "./admin-banner"
import adminPropertyAmenityRoutes from "./admin-property-amenity"
import adminPropertyCategoryRoutes from "./admin-property-category"
import adminPropertyTypeRoutes from "./admin-property-type"
import adminPropertyRoutes from "./admin-property"
import adminAgentRoutes from "./admin-agent"
import adminPropertyRoutes from "./admin-property"

const adminRoutes = [
  ...adminTestimonialRoutes,
  ...adminBannerRoutes,
  ...adminPropertyAmenityRoutes,
  ...adminPropertyCategoryRoutes,
  ...adminPropertyTypeRoutes,
  ...adminPropertyRoutes,
  ...adminAgentRoutes,
  ...adminPropertyRoutes,
]

export default adminRoutes
