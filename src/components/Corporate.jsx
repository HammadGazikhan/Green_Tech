import React from 'react';
import img from '../images/web.svg';
import img2 from '../images/app.svg';
import img3 from '../images/hosting.svg';
import img4 from '../images/consultation.svg';
import Card from './Elements/Card';
import CardWithIcon from './Elements/CardWithIcon';

const Services = () => {

    return (
        <div id="services" className="bg-gray-100 py-12" >
            <section data-aos="zoom-in-down">
                <div className="my-4 py-4">
                    <h2 className="my-2 text-center text-3xl text-lime-600 uppercase font-bold">Our Corporate</h2>

                    <div className='flex justify-center'>
                        <div className='w-24 border-b-4 border-lime-600'></div>
                    </div>
                    <h2 className="mt-4 mx-12 text-center text-lg lg:text-xl font-semibold  ">IMA-PG India Private Limited has been able to carve a niche in the Indian Pharma Machinery industry by focusing on engineering excellence and being customer centric in its approach. Collaboration of PG with IMA SpA, was very strategic and brought about a new wave of diverse activities in its product offerings to the pharma machinery and packaging industry. This paved path for the new era of machines with emphasis on automation complimenting the existing range. Our core competencies includes Blister packing machines, automatic cartoning machines, Tube filling machines, Tablet counting lines,case packers , end of line solutions etc.. with a capability of providing complete turnkey solutions by leveraging its wide offerings from India as well as IMA spa, Italy

                        With population in excess of 2300 machines all around the world, a global presence in over 70 countries, workforce of 400+ highly skilled people, 3 manufacturing locations in India, IMA PG India Private Limited , is surely poised to spread its wings strong and high in the Packaging world.</h2>
                </div>


            </section>

            <section>

                <div className="m-auto  p-2 md:p-12 h-fit">
                    <div className=" grid grid-cols-1 lg:grid-cols-2 lg:text-left w-full" data-aos="zoom-out">
                        <CardWithIcon icon={<svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" className='fill-current'><path d="M2 12h2a7.986 7.986 0 0 1 2.337-5.663 7.91 7.91 0 0 1 2.542-1.71 8.12 8.12 0 0 1 6.13-.041A2.488 2.488 0 0 0 17.5 7C18.886 7 20 5.886 20 4.5S18.886 2 17.5 2c-.689 0-1.312.276-1.763.725-2.431-.973-5.223-.958-7.635.059a9.928 9.928 0 0 0-3.18 2.139 9.92 9.92 0 0 0-2.14 3.179A10.005 10.005 0 0 0 2 12zm17.373 3.122c-.401.952-.977 1.808-1.71 2.541s-1.589 1.309-2.542 1.71a8.12 8.12 0 0 1-6.13.041A2.488 2.488 0 0 0 6.5 17C5.114 17 4 18.114 4 19.5S5.114 22 6.5 22c.689 0 1.312-.276 1.763-.725A9.965 9.965 0 0 0 12 22a9.983 9.983 0 0 0 9.217-6.102A9.992 9.992 0 0 0 22 12h-2a7.993 7.993 0 0 1-.627 3.122z"></path><path d="M12 7.462c-2.502 0-4.538 2.036-4.538 4.538S9.498 16.538 12 16.538s4.538-2.036 4.538-4.538S14.502 7.462 12 7.462zm0 7.076c-1.399 0-2.538-1.139-2.538-2.538S10.601 9.462 12 9.462s2.538 1.139 2.538 2.538-1.139 2.538-2.538 2.538z"></path></svg>} title="VISION" desc='"To remain most preferred end to end solution provider of automated and continuously innovative packaging solutions."

MISSION' />
                        <CardWithIcon icon={<svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 24 24" className='fill-current'><path d="m7.375 16.781 1.25-1.562L4.601 12l4.024-3.219-1.25-1.562-5 4a1 1 0 0 0 0 1.562l5 4zm9.25-9.562-1.25 1.562L19.399 12l-4.024 3.219 1.25 1.562 5-4a1 1 0 0 0 0-1.562l-5-4zm-1.649-4.003-4 18-1.953-.434 4-18z"></path></svg>} title="MISSION" desc='"We stand committed to develop and deliver innovative, cost effective products & solutions with the help of a professional team that proactively and consistently meets our customer needs and creates a mutually beneficial engagement. Operational excellence, customer delight & building a great place to work are our goals."' />

                    </div>
                </div>
            </section>

            <section data-aos="zoom-in-down">
                <div className="my-4 py-4">
                    <h2 className="my-2 text-center text-3xl text-lime-600 uppercase font-bold mb-8">VALUES</h2>

                    <div className="px-12" data-aos="fade-down" data-aos-delay="600">
                        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

                            <Card img={img} title="INTEGRITY" desc="We practice the highest ethical standards by doing the right thing & demonstrating sincerity and honesty in our behaviours & actions." />
                            <Card img={img2} title="COMMITMENT" desc="We accept personal accountability for our actions & results and work smartly to consistently deliver on all agreed objectives." />
                            <Card img={img3} title="TRANSPARENCY" desc="We communicate openly & honestly to establish clear accountability for identifying issues & solutions, making decisions & maximizing business opportunities." />
                            <Card img={img4} title="PASSION FOR EXCELLENCE" desc="We realize the our best might not be good enough. We will thus do what is required to be the ‘best-in-class’." />
                            <Card img={img} title="INNOVATION" desc="We anticipate market trends and proactively explore newer approaches & applications in the development of new ideas, products & services. We are committed to creating value for all our customers." />
                            <Card img={img2} title="Collaborative" desc="Our approach is to engage & co-operatively work together to be a solution provider." />
                            <Card img={img3} title="Reliability" desc="We ensure measurement of Sustainability for our products, process and services." />
                            <Card img={img4} title="Empowerment" desc="We give freedom & power to our subordinates to enhance their efficiencies and effectiveness." />
                            <Card img={img4} title="Respect" desc="We accept all, for who they are, even when they are different, to inculcate trust, safety & well being." />

                        </div>
                    </div>
                </div></section>
        </div>
    )
}

export default Services;