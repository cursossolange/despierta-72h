import { useState } from "react";
import LandingPage from "./components/LandingPage";
import ProductArea from "./components/ProductArea";

export default function App() {
  const [isPurchased, setIsPurchased] = useState(false);

  return (
    <div className="min-h-screen">
      {isPurchased ? (
        <ProductArea />
      ) : (
        <LandingPage onPurchase={() => setIsPurchased(true)} />
      )}
    </div>
  );
}
