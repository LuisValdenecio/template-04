import SectionWrapper from "../../SectionWrapper"

const Features = () => {

    const features = [
        {
            title: "Envie-nos o seu pedido",
            desc: "Envie-nos o seu pedido e nós iremos encontrar o carro ideal para si."
        },
        {
            title: "Pagamento on-line seguro",
            desc: "Realize o pagamento do seu carro de forma rápida e segura através da nossa plataforma online."
        },
        {
            title: "Levantamento do carro",
            desc: "Após a compra, você pode retirar o seu carro na nossa loja ou solicitar a entrega no local desejado."
        }
    ]

    return (
        <SectionWrapper>
            <div id="features" className="custom-screen text-gray-600">
                <ul className="grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        features.map((item, idx) => (
                            <li key={idx} className="space-y-3">
                                <div className="w-12 h-12 border text-indigo-600 rounded-full flex items-center justify-center">
                                    {idx + 1}
                                </div>
                                <h4 className="text-lg text-gray-800 font-semibold">
                                    {item.title}
                                </h4>
                                <p>
                                    {item.desc}
                                </p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </SectionWrapper>
    )
}

export default Features