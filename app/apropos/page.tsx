import Infratructure from "@/_Components/Infratructure";
import Presentation from "@/_Components/Presentation";
import Slider from "@/_Components/Slider";

export default function AproposPage(){
    return(
        <div>
            <Slider/>
            <div>
                <Presentation/>
                <Infratructure/>
            </div>
        </div>
    )
}