import SectionWrapper from "../../SectionWrapper"
import NavLink from "../NavLink"
import directores from "../../../public/directores.jpg"
import socios from "../../../public/socios.jpg"
import car1 from "../../../public/car1.png"
import car2 from "../../../public/car2.png"
import car3 from "../../../public/car3.png"
import car4 from "../../../public/car4.png"
import Image from "next/image"

const Cars = () => {
    return (
        <>
            <SectionWrapper id="cta" className="pb-0">
                <div className="custom-screen">
                    <div className="items-center gap-x-12 lg:flex">
                        <div className="flex-1 sm:hidden lg:block">
                            <Image src={car1} className="rounded-lg md:max-w-lg" alt="Create Successful Business Models with Our IT Solutions" />
                        </div>
                        <div className="max-w-xl mt-6 md:mt-0 lg:max-w-2xl">
                            <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                                {process.env.NEXT_PUBLIC_CTA_TITLE}
                            </h2>
                            <p className="mt-3 text-gray-600">
                                {process.env.NEXT_PUBLIC_CTA_DESCRIPTION}
                            </p>
                            <NavLink
                                href="/get-started"
                                className="inline-block mt-4 font-medium text-sm text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800"
                            >
                                {process.env.NEXT_PUBLIC_CTA_BUTTON_LABEL}
                            </NavLink>
                        </div>
                    </div>
                    <div className="items-center gap-x-12 lg:flex">
                        <div className="max-w-xl mt-6 md:mt-0 lg:max-w-2xl">
                            <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                                {process.env.NEXT_PUBLIC_CTA_TITLE}
                            </h2>
                            <p className="mt-3 text-gray-600">
                                {process.env.NEXT_PUBLIC_CTA_DESCRIPTION}
                            </p>
                            <NavLink
                                href="/get-started"
                                className="inline-block mt-4 font-medium text-sm text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800"
                            >
                                {process.env.NEXT_PUBLIC_CTA_BUTTON_LABEL}
                            </NavLink>
                        </div>
                        <div className="flex-1 sm:hidden lg:block">
                            <Image src={car2} className="rounded-lg md:max-w-lg" alt="Create Successful Business Models with Our IT Solutions" />
                        </div>
                    </div>
                </div>
            </SectionWrapper>
            <SectionWrapper id="cta" className="pb-0">
                <div className="custom-screen">
                    <div className="items-center gap-x-12 lg:flex">
                        <div className="flex-1 sm:hidden lg:block">
                            <Image src={car3} className="rounded-lg md:max-w-lg" alt="Create Successful Business Models with Our IT Solutions" />
                        </div>
                        <div className="max-w-xl mt-6 md:mt-0 lg:max-w-2xl">
                            <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                                {process.env.NEXT_PUBLIC_CTA_TITLE}
                            </h2>
                            <p className="mt-3 text-gray-600">
                                {process.env.NEXT_PUBLIC_CTA_DESCRIPTION}
                            </p>
                            <NavLink
                                href="/get-started"
                                className="inline-block mt-4 font-medium text-sm text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800"
                            >
                                {process.env.NEXT_PUBLIC_CTA_BUTTON_LABEL}
                            </NavLink>
                        </div>
                    </div>
                    <div className="items-center gap-x-12 lg:flex">
                        <div className="max-w-xl mt-6 md:mt-0 lg:max-w-2xl">
                            <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                                {process.env.NEXT_PUBLIC_CTA_TITLE}
                            </h2>
                            <p className="mt-3 text-gray-600">
                                {process.env.NEXT_PUBLIC_CTA_DESCRIPTION}
                            </p>
                            <NavLink
                                href="/get-started"
                                className="inline-block mt-4 font-medium text-sm text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800"
                            >
                                {process.env.NEXT_PUBLIC_CTA_BUTTON_LABEL}
                            </NavLink>
                        </div>
                        <div className="flex-1 sm:hidden lg:block">
                            <Image src={car4} className="rounded-lg md:max-w-lg" alt="Create Successful Business Models with Our IT Solutions" />
                        </div>
                    </div>
                </div>
            </SectionWrapper>
        </>
    )
}

export default Cars