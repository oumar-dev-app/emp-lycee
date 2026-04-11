import Infratructure from "@/_Components/Infratructure";
import Presentation from "@/_Components/Presentation";
import Slider from "@/_Components/Slider";

const bgImage = [
    {
        id: 1,
        image: "/apropos.jpg"
    }
]
export default function AproposPage() {
    return (
        <div>
            <Slider />
            <div>
                {
                    bgImage.map((item) => (
                        <div
                            style={{ backgroundImage: `url(${item.image})` }}
                            key={item.id}
                            className='w-full h-full bg-cover bg-center'
                        >
                            <div className="bg-white/93  w-full h-full">
                                <Presentation />
                                <Infratructure />
                            </div>


                        </div>
                    ))
                }

            </div>
        </div>
    )
}