import Carousel from '../components/Carousel'
import FAQs from '../components/FAQs'
import Map from '../components/Map'
import Contact from '../components/Contact'
import Team from '../components/Team'
import Incentives from '../components/Incentives'
import dynamic from 'next/dynamic'

//fix error of swiper js
const Testimonials = dynamic(() => import("../components/CustomerReview"), { ssr: false })

export default function AboutUs() {
    return (
        <div className="bg-white">
            <div className="relative overflow-hidden">
                <main>
                    <Carousel />
                    <Incentives />
                    <Team />
                    <Testimonials />
                    <FAQs />
                    <Contact />
                    <Map />
                </main>

            </div>
        </div>
    )
}

