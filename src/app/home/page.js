
import Hero from "@/components/Hero";
import PlantRoom from "@/components/PlantRoom";
import Service from "@/components/Service";
import WhyMregg from "@/components/WhyMregg";
import Articles from "@/components/Articles";

export default function Home() {
  return (
    <div>
       <Hero/>
      <PlantRoom />
      <Service />
      <WhyMregg />
      <Articles />
    </div>
  );
}