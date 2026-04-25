import LandingPage from "./components/LandingPage";

export default function App() {
  return <LandingPage onPurchase={() => alert("Compra")} />;
}
