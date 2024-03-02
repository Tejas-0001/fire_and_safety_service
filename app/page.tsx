import Hero from "../components/hero/hero";
import Contact from "../components/contact/contact";
import Product from "../components/product/product";
import Client from "../components/client/client";
import Review from "../components/review/review";
import Faq from "../components/faq/page";
import Services from "../components/Services";
import Image from "next/image";




export default function Home() {
  return (
    <main>
      <div className="w-auto h-full flex flex-col content-center align-middle">
      <Image
        className="-z-10 relative"
        src="/hero.jpg"
        width={1920}
        height={600}
        alt="image"
      ></Image>
      <Hero />
      <Product />
      <Client />
      <Services />
      <Review />
      <Faq />
      <Contact />
      </div>      
    </main>
  );
}
