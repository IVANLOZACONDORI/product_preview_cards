import "./ProductCard.css";
import Image from "next/image";
import PriceSection from "./PriceSection";
import ProductDetails from "./ProductDetails";

function ProductCard() {
  return (
    <div className="productcontainer">
      <Image
        src="/image-product-mobile.jpg"
        alt="Gabrielle Essence Eau De Parfum"
        width={350}
        height={240}
        className="productimage"
      />

      <div className="productcontent">
        <ProductDetails />
        <PriceSection />
        <button className="addtocart">Add to Cart</button>
      </div>
    </div>
  );
}

export default ProductCard;