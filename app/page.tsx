import DifferentCentre from "@/_Components/DifferentCentre";
import Promoteur from "@/_Components/Promoteur";
import Resultats from "@/_Components/Resultats";
import Slider from "@/_Components/Slider";



export default function Home() {

  return (
    <div>
      <Slider/>
      <Promoteur/>
      <Resultats />
      <DifferentCentre />
    </div>
  );
}
