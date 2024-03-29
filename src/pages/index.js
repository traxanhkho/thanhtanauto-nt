import Head from "next/head";
import dynamic from "next/dynamic";
import Banner from "../components/Banner";
import BlogsGroup from "../components/BlogsGroup";
import Carousel from "../components/Carousel";
import Products from "../components/Products";
import Services from "../components/Services";
import Incentives from "../components/Incentives";
import ContainerSection from "../components/common/ContainerSection";

const Testimonials = dynamic(() => import("../components/CustomerReview"), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <Head>
        <title>Thanh Tân auto</title>
        <meta name="description" content="Generated by Thanh Tân auto" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Carousel />
      <Services />
      <Products />
      <Banner />
      <Incentives />
      <Testimonials />
      <ContainerSection>
        <BlogsGroup />
      </ContainerSection>
    </div>
  );
}
