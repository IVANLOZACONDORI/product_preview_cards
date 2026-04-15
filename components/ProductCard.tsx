import Image from "next/image";
import ProductDetails from "./ProductDetails";
import PriceSection from "./PriceSection";
import "./ProductCard.css";

function ProductCard() {
  return (
    <div className="productcontainer">
      <Image
        src="/image-product-mobile.jpg"
        alt="Gabrielle Essence Eau De Parfum"
        width={343}
        height={240}
        className="productimage"
        priority
      />

      <div className="productcontent">
        <ProductDetails />
        <PriceSection />

        <button className="addtocart" type="button">
          <svg
            className="carticon"
            width="15"
            height="16"
            viewBox="0 0 15 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M14.383 2.227H3.75L3.405.562A.563.563 0 0 0 2.852 0H.563A.563.563 0 0 0 0 .563v.375c0 .31.252.562.563.562h1.63l1.903 9.136a1.688 1.688 0 1 0 2.756 1.908h3.855a1.688 1.688 0 1 0 1.604-2.25H5.555a.188.188 0 0 1-.183-.15l-.164-.788h8.235a.563.563 0 0 0 .549-.438l.938-4.5a.563.563 0 0 0-.547-.691Zm-8.82 12.648a.563.563 0 1 1 0-1.126.563.563 0 0 1 0 1.126Zm7.5 0a.563.563 0 1 1 0-1.126.563.563 0 0 1 0 1.126Zm.038-6.75H4.973L4.21 4.5h9.647l-.756 3.625Z"
              fill="currentColor"
            />
          </svg>

          <span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
}

export default ProductCard;