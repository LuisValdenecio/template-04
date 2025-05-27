import SectionWrapper from "../../SectionWrapper"
import Image from "next/image"

const ToolKit = () => {

    const features = [
        {
            title: "Manutenção de Veículos",
            desc: "Oferecemos serviços completos de manutenção para garantir que seu veículo esteja sempre em perfeitas condições, desde trocas de óleo até revisões completas."
        },
        {
            title: "Venda de Peças e Acessórios",
            desc: "Disponibilizamos uma ampla gama de peças e acessórios automotivos, garantindo qualidade e compatibilidade com diversos modelos de veículos."
        },
        {
            title: "Serviços de Pintura e Funilaria",
            desc: "Nossos serviços de pintura e funilaria são realizados por profissionais experientes, garantindo que seu veículo recupere sua aparência original com qualidade e eficiência."
        },
        {
            title:"Revisão Completa de Veículos",
            desc: "Realizamos revisões completas para garantir que todos os sistemas do seu veículo estejam funcionando corretamente, aumentando a segurança e a durabilidade."
        },
        {
            title: "Instalação de Acessórios",
            desc: "Oferecemos instalação profissional de acessórios automotivos, desde sistemas de som até kits de iluminação, para personalizar seu veículo de acordo com suas preferências."
        },
        {
            title: "Serviços de Alinhamento e Balanceamento",
            desc: "Nossos serviços de alinhamento e balanceamento garantem que seu veículo tenha uma condução suave e segura, prolongando a vida útil dos pneus e melhorando a eficiência do combustível."
        },
    ]

    return (
        <SectionWrapper>
            <div id="toolkit" className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="max-w-2xl mx-auto space-y-3 sm:text-center">
                    <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        {`Além de vender carros, oferecemos uma gama completa de serviços automotivos`}
                    </h2>
                    <p>
                        {`Desde a manutenção de veículos até a venda de peças e acessórios, nossa empresa oferece uma ampla gama de produtos e serviços para atender às suas necessidades automotivas. `}
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            features.map((item, idx) => (
                                <li key={idx} className="flex gap-x-4">
                                    <div className="flex-none w-12 h-12 gradient-border rounded-full flex items-center justify-center">
                                        {idx + 1}
                                    </div>
                                    <div>
                                        <h4 className="text-lg text-gray-800 font-semibold">
                                            {item.title}
                                        </h4>
                                        <p className="mt-3">
                                            {item.desc}
                                        </p>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </SectionWrapper>
    )
}

export default ToolKit