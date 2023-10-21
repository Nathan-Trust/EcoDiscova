import Layout from "../Components/global/Layout"

function Partnership() {
 

    return (
        <Layout>
            <div className="px-4 max-w-[900px] mx-auto">
                <h1 className="text-3xl font-bold text-center">Partner with Us</h1>
                <div>
                    <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-12 lg:px-8">


                        <div className="mt-10 sm:mx-auto sm:w-full ">
                            <form method="POST" action="https://formsubmit.co/0b11bd3ad3beb5c062559cb8969b84bb" encType="multipart/form-data" >
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                                        Name of Organisation
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="name_of_oganisation"
                                            name="name_of_oganisation"
                                            type="text"
                                            // onChange={(e)=>setFormData()}
                                            // value={formData.name_of_oganisation}
                                            required
                                            className="block w-full py-3 text-gray-900 border-0 rounded-md shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                        />
                                        <input type="hidden" name="_next" value="https://project-eco-discover.vercel.app"></input>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                                        Location
                                    </label>
                                    <div className="mt-2">
                                        <input
                                            id="location"
                                            name="location"
                                            type="text"
                                            required
                                            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <div className="flex items-center justify-between">
                                        <label htmlFor="password" className="block text-sm font-medium leading-6 text-white">
                                            Reason for Partnership
                                        </label>

                                    </div>
                                    <div className="mt-2">
                                        <textarea name="reason" id="reason" cols="30" rows="10" className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"></textarea>
                                    </div>
                                </div>

                                <div>
                                    <button
                                        type="submit"
                                        className="flex justify-center w-full px-3 py-4 text-lg font-semibold leading-6 text-white rounded-md shadow-sm bg-primary hover:bg-primary hover:opacity-75 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </form>


                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Partnership