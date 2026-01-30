import HeroSection from '@/components/home/HeroSection'
import QuickLinks from '@/components/home/QuickLinks'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import WhyChooseUs from '@/components/home/WhyChooseUs'
import Testimonials from '@/components/home/Testimonials'
import Newsletter from '@/components/home/Newsletter'

export default function Home() {
  return (
    <>
      <HeroSection />
      <QuickLinks />
      <FeaturedProducts />
      <WhyChooseUs />
      <Testimonials />
      <Newsletter />
    </>
  )
}
