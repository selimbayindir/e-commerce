import { BrandItem } from "./BrandItem"
import "./Brands.css";
export const Brands = () => {
  return (
    <section className="brands">
    <div className="container">
      <ul className="brand-list">
       <BrandItem/>
       <BrandItem/>
       <BrandItem/>
       <BrandItem/>
       <BrandItem/>
       <BrandItem/>
      
      </ul>
    </div>
  </section>
  )
}
