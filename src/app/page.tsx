import InputContainer from "@/components/InputContainer/InputContainer";
import Navigation from "@/components/Navigation/Navigation";
import PriceContainer from "@/components/PriceContainer/PriceContainer";

export default function Home() {
  return (
    <div className="bg-primary">
      <main className="mx-[25px] h-screen flex flex-col justify-start items-center">
        <Navigation />
        <InputContainer listOfCountries={["CAD", "USD"]} />
        <PriceContainer />
      </main>
    </div>
  );
}
