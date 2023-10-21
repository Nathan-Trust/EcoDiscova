import { Link } from "react-router-dom"
import Layout from "../Components/global/Layout"
import { useState } from "react"
// import image from '../assets/noah-buscher-x8ZStukS2PM-unsplash.jpg'

function DiscoveryPage() {

    const [discoveries, setDiscoveries] = useState([
        {
            id: 1,
            title: "Discover with us together we build a better ecosystem",
            content: " A substantial discovery often brings a sense of joy and wonder to our lives. It could be stumbling upon a hidden gem in your local neighborhood, finding an unexpected act of kindness from a stranger, or uncovering a new passion or talent you never knew you had. These discoveries remind us of the beauty and surprises that life has to offer, adding a touch of excitement and gratitude to our everyday experiences. They are the small but meaningful moments that make life more enjoyable and fulfilling. Embracing the spirit of curiosity and exploration can lead to many nice discoveries that brighten our days.",
            image: "/images/eco.jpg"
        },
        {
            id: 13,
            title: "Saving Eccosytem",
            content: " A substantial discovery often brings a sense of joy and wonder to our lives. It could be stumbling upon a hidden gem in your local neighborhood, finding an unexpected act of kindness from a stranger, or uncovering a new passion or talent you never knew you had. These discoveries remind us of the beauty and surprises that life has to offer, adding a touch of excitement and gratitude to our everyday experiences. They are the small but meaningful moments that make life more enjoyable and fulfilling. Embracing the spirit of curiosity and exploration can lead to many nice discoveries that brighten our days.",
            image: "/images/eco2.jpeg"
        },
        {
            id: 31,
            title: "Saving Eccosytem Part 2",
            content: " A substantial discovery often brings a sense of joy and wonder to our lives. It could be stumbling upon a hidden gem in your local neighborhood, finding an unexpected act of kindness from a stranger, or uncovering a new passion or talent you never knew you had. These discoveries remind us of the beauty and surprises that life has to offer, adding a touch of excitement and gratitude to our everyday experiences. They are the small but meaningful moments that make life more enjoyable and fulfilling. Embracing the spirit of curiosity and exploration can lead to many nice discoveries that brighten our days.",
            image: "/images/eco3.jpeg"
        }

    ])
    return (
        <Layout>
            <div className="space-y-10">
                <h3 className="text-4xl">Discover</h3>
                <DiscoveryForm setDiscoveries={setDiscoveries} />
                <Discoveries discoveries={discoveries} />
            </div>
        </Layout>
    )
}

const DiscoveryForm = ({setDiscoveries}) => {
    // const onSubmit = ()=>{
    //     setDiscoveries((prev)=>)
    // }
    return (<div>

        <form action="#" >
            <div>
                <label htmlFor="discovery" className="block my-3 text-2xl font-medium leading-6 text-white">
                    Post a discovery
                </label>
                <textarea name="discovery" id="discovery" cols="60" rows="6" className="text-lg text-black rounded-lg" placeholder="What's Your Discovery?" />
                <button className="block w-1/6 px-3 py-3 text-xl text-white rounded-lg bg-primary hover:opacity-75">Post</button>
            </div>
        </form>
    </div>)
}

const Discoveries = ({ discoveries }) => {

    return <div className="grid grid-cols-2 gap-5 my-6">
        {
            discoveries.map(({ content, id, image, title }) => {
                return (
                    <div key={id} className="overflow-hidden border rounded-md border-primary">
                        <div className="max-h-[300px] overflow-hidden">
                            <img src={image} alt={id} className="w-[600px] " />
                        </div>
                        <div className="px-2 py-3">
                            <h4 className="my-3 text-3xl fontbold'">{title}</h4>
                            <span>{content.slice(0, 330) + "..."}</span>
                            <Link className="block w-40 px-3 py-2 my-2 text-xl text-center text-white rounded-md bg-primary hover:opacity-75" to="/dashboard/discoveries/1">Read More</Link>
                        </div>
                    </div>)
            })
        }
    </div>
}

export default DiscoveryPage;