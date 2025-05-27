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
                                {`Perfeito para Off-road`}
                            </h2>
                            <p className="mt-3 text-gray-600">
                                {`O carro ideal para quem busca aventura e conforto, seja em trilhas desafiadoras ou nas ruas da cidade. Com tecnologia avançada e design robusto, ele garante uma experiência de condução excepcional em qualquer terreno.`}
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
                                {`Perfeito para a Cidade`}
                            </h2>
                            <p className="mt-3 text-gray-600">
                                {`Um carro compacto e ágil, ideal para o dia a dia urbano. Com design moderno e eficiente, ele oferece conforto e praticidade, tornando cada trajeto uma experiência agradável. Perfeito para quem valoriza mobilidade e estilo.`}
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
                                {`Perfeito para família`}
                            </h2>
                            <p className="mt-3 text-gray-600">
                                {`Um carro espaçoso e confortável, ideal para viagens em família. Com tecnologia de ponta e segurança aprimorada, ele proporciona tranquilidade e diversão em cada jornada. Perfeito para quem valoriza momentos especiais com os entes queridos.`}
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
                                {`Perfeito para Negócios`}
                            </h2>
                            <p className="mt-3 text-gray-600">
                                {`Um carro robusto e eficiente, ideal para atender às demandas do seu negócio. Com capacidade de carga e tecnologia avançada, ele garante produtividade e confiabilidade em cada entrega. Perfeito para quem busca soluções práticas e eficazes no dia a dia empresarial.`}
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