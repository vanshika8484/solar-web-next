import React from 'react'
import Link from 'next/link';
import Footer from './Footer';
import Image from 'next/image';

const Diesel = () => {
    return (
        <>
            <div className="bg-gray-50 text-gray-800 font-sans py-20">
                <header className="text-center py-10">
                    <h1 className="text-5xl font-bold -mt-20 -mb-6">Genset Solutions</h1>
                </header>

                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 pb-16">
                    <div className="md:col-span-2 space-y-6">
                        <Image
                        width={500}
                        height={1000}
                            src="https://divyby.redspace.in/assets/images/updated-images/genset%201.jpg"
                            alt="Solar Panel Installation"
                            className="w-full h-auto rounded shadow"
                        />

                        <section>
                            <h2 className="text-2xl font-semibold mb-4">Diesel/Petrol Genset</h2>
                            <p className=' text-gray-500'>
                                Our diesel and petrol gensets provide robust and high-performance power solutions for critical situations, ensuring uninterrupted electricity supply when it matters most. Designed to withstand challenging conditions, these gensets are ideal for homes, businesses, and remote locations that require dependable backup power. With advanced engineering and superior fuel efficiency, they deliver reliable energy with minimal operational costs.
                            </p>
                            <p className="mt-4 text-gray-500">
                                Built for long-lasting durability, our gensets feature high-quality components that enhance their lifespan and performance. Their sturdy construction ensures consistent functionality, even in demanding environments where power stability is crucial. Whether facing extreme weather, remote operations, or emergency outages, our generators offer peace of mind by delivering power when needed.
                            </p>
                        </section>

                        <Image
                        width={500}
                        height={700}
                            src="https://divyby.redspace.in/assets/images/updated-images/genset%202.jpg"
                            alt="Solar Panels Field"
                            className="w-full h-auto rounded shadow"
                        />

                        <section>

                            <p className=' text-gray-500'>
                                Built with durable materials and precision engineering, our lightning arrestors are crafted to withstand extreme environmental conditions while maintaining superior functionality. Whether installed on rooftops, power grids, or industrial facilities, they provide a robust safety net against nature’s volatile forces. With proper placement and installation, these devices enhance system reliability and reduce maintenance costs.
                            </p>
                            <p className="mt-4 text-gray-500">
                                At Divy Power, we prioritize safety and efficiency, delivering lightning protection solutions tailored to diverse energy needs. Our LAs not only safeguard infrastructure but also promote uninterrupted power flow, ensuring seamless operation even during storms. With our expertly designed lightning arrestors, you can trust that your electrical systems remain secure against one of nature’s most formidable threats.
                            </p>

                        </section>

                        
                    </div>

                    <aside className="space-y-8">
                        <div className="bg-white p-6 rounded shadow">
                            <input
                                type="text"
                                placeholder="Enter Keyword"
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>

                        <div className="bg-white p-6 rounded-2xl shadow-md space-y-4">
                            <h3 className="text-2xl font-bold text-gray-800 border-b pb-2 mb-2">Our Products</h3>
                            {[
                                "Solar-pannel",
                                "Solar-Pump",
                                "Micro-Inverter",
                                "Earthing",
                                "LA",
                               
                            ].map((product, i) => (
                                <Link
                                    href={product}
                                    key={i}
                                    className="block w-full px-4 py-2 rounded-lg text-green-700 hover:text-white hover:bg-green-600 transition-all duration-200 font-medium"
                                >
                                    {product.replace("-", " ")} &rarr;
                                </Link>
                            ))}
                        </div>

                       

                        
                    </aside>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Diesel

