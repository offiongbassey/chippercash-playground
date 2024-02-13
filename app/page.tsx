import GetHelp from "@/components/home/get-help/GetHelp";
import Hero from "@/components/home/hero/Hero";
import Hero3D from "@/components/home/hero/Hero3D";
import Investment from "@/components/home/investment/Investment";
import Review from "@/components/home/review/Review";
import SendMoney from "@/components/home/sendMoney/SendMoney";
export default function Home() {
  return (
  <>
    <Hero />
    <Hero3D/>
    <SendMoney/>
    <Review/>
    <GetHelp/>
    <Investment/>
  </>
  );
}
