import Layout from "../Components/global/Layout"

function DiscoveryChild() {
    return (
        <Layout>
            <div>
                <div className="relative px-6 py-24 overflow-hidden text-white bg-main-bg isolate sm:py-32 lg:overflow-visible lg:px-0">
                    <div className="absolute inset-0 overflow-hidden -z-10">
                    </div>
                    <div className="grid max-w-2xl grid-cols-1 mx-auto gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
                        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                            <div className="lg:pr-4">
                                <div className="lg:max-w-lg">
                                    {/* <p className="text-base font-semibold leading-7 text-primary">Discover with us together we build a better ecosystem</p> */}
                                    <h1 className="mt-2 text-3xl font-bold tracking-tight text-primary sm:text-4xl">Discover with us together we build a better ecosystem</h1>
                                    <p className="mt-6 text-xl leading-8 text-gray-500">
                                        A substantial discovery often brings a sense of joy and wonder to our lives. It could be stumbling upon a hidden gem in your local neighborhood, finding an unexpected act of kindness from a stranger, or uncovering a new passion or talent you never knew you had. These discoveries remind us of the beauty and surprises that life has to offer, adding a touch of excitement and gratitude to our everyday experiences. They are the small but meaningful moments that make life more enjoyable and fulfilling. Embracing the spirit of curiosity and exploration can lead to many nice discoveries that brighten our days.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="p-12 -mt-12 -ml-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
                            <img
                                className="w-[48rem] max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem]"
                                src={"/images/eco.jpg"}
                                alt=""
                            />
                        </div>
                        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
                            <div className="lg:pr-4">
                                <div className="max-w-xl text-base leading-7 text-gray-500 lg:max-w-lg">
                                    <p>
                                        Nice discoveries can also occur in the realm of science and technology. Consider the breakthroughs in medical research that lead to new treatments and cures, or the innovative technologies that enhance our daily lives. These discoveries often have a profound impact, improving our well-being and making the world a better place.

                                        On a personal level, a nice discovery might involve rekindling a friendship with someone from your past, stumbling upon a book that resonates deeply with you, or finding the perfect spot to watch a breathtaking sunset. These moments of serendipity can fill our hearts with happiness and remind us to appreciate the beauty and goodness that exists in the world.

                                        Nice discoveries are like little gifts from life, often unexpected but always welcome. They serve as a reminder to stay open to new experiences, embrace the unknown, and cherish the simple pleasures that make life so sweet.
                                    </p>
                                    <ul role="list" className="mt-8 space-y-8 text-gray-500">
                                        <li className="flex gap-x-3">
                                            {/* <CloudArrowUpIcon className="flex-none w-5 h-5 mt-1 text-indigo-600" aria-hidden="true" /> */}
                                            <span>Nice discoveries are like little gifts from life, often unexpected but always welcome. They serve as a reminder to stay open to new experiences, embrace the unknown, and cherish the simple pleasures that make life so sweet
                                            </span>
                                        </li>
                                    </ul>
                                    <p className="mt-6">
                                        On a personal level, a nice discovery might involve rekindling a friendship with someone from your past, stumbling upon a book that resonates deeply with you, or finding the perfect spot to watch a breathtaking sunset. These moments of serendipity can fill our hearts with happiness and remind us to appreciate the beauty and goodness that exists in the world.
                                    </p>

                                    <button className="mt-6 btn bg-[#4baf47] text-white">Post a  discovery</button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </Layout>
    )
}

export default DiscoveryChild