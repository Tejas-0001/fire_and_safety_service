import Hero from "./components/hero/hero";
import Contact from "./components/contact/contact"
import Product from "./components/product/product"
import Client from "./components/client/client"
import Review from "./components/review/review"
import Faq from "./components/faq/page";

export default function Home() {
  return (
    <main className="w-full h-full overflow-x-hidden flex flex-col content-center align-middle">
      <img className="-z-10 relative" src="/hero.svg" width={1920} height={600} alt="image"></img>
      <Hero />
      <Product />
      <Client />
      <Review />
      <Faq />
      <Contact />
    </main> 
  );
}
