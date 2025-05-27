import SectionWrapper from "../../SectionWrapper"
import NavLink from "../NavLink"
import directores from "../../../public/directores.jpg"
import socios from "../../../public/socios.jpg"
import presidente from "../../../public/presidente.jpg"
import Image from "next/image"

const CTA = () => {
    return (
        <>
            <SectionWrapper id="cta" className="pb-0">
                <div className="custom-screen">
                    <div className="items-center gap-x-12 lg:flex">
                        <div className="flex-1 sm:hidden lg:block">
                            <Image src={directores} className="rounded-lg md:max-w-lg" alt="Create Successful Business Models with Our IT Solutions" />
                        </div>
                        <div className="max-w-xl mt-6 md:mt-0 lg:max-w-2xl">
                            <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                                {process.env.NEXT_PUBLIC_CTA_TITLE}
                            </h2>
                            <p className="mt-3 text-gray-600">
                                {process.env.NEXT_PUBLIC_CTA_DESCRIPTION}
                            </p>
                        
                        </div>
                    </div>
                    <div className="items-center gap-x-12 lg:flex">
                        <div className="max-w-xl mt-6 md:mt-0 lg:max-w-2xl">
                            <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                                Os Sócios da Voluvia Motors S.A
                            </h2>
                            <p className="mt-3 text-gray-600">
                                {process.env.NEXT_PUBLIC_CTA_SOCIOS}
                            </p>
                            
                        </div>
                        <div className="flex-1 sm:hidden lg:block">
                            <Image src={socios} className="rounded-lg md:max-w-lg" alt="Create Successful Business Models with Our IT Solutions" />
                        </div>
                    </div>
                </div>
            </SectionWrapper>
            <SectionWrapper id="cta" className="pb-0">
                <div className="custom-screen">
                    <div className="items-center gap-x-12 lg:flex">
                        <div className="flex-1 sm:hidden lg:block">
                            <Image src={presidente} className="rounded-lg md:max-w-lg" alt="Create Successful Business Models with Our IT Solutions" />
                        </div>
                        <div className="max-w-xl mt-6 md:mt-0 lg:max-w-2xl">
                            <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                                {`A Presidente e o Vice-Presidente da Voluvia Motors S.A`}
                            </h2>
                            <p className="mt-3 text-gray-600">
                                {
                                    `
                                    Na liderança da Voluvia Motors, a presidente e o vice-presidente atuam com visão estratégica e compromisso com a excelência. Juntos, impulsionam a empresa rumo ao crescimento sustentável, reforçando a confiança dos clientes e elevando o padrão de qualidade no setor automotivo.
                                    `
                                }
                            </p>
                            
                        </div>
                    </div>
                   
                </div>
            </SectionWrapper>
        </>
    )
}

export default CTA