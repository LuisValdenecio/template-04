import SectionWrapper from "../../SectionWrapper"
import NavLink from "../NavLink"

const FooterCTA = () => (
    <SectionWrapper>
        <div className="custom-screen">
            <div className="max-w-2xl mx-auto text-center">
                <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                    {`Fale conosco`}
                </h2>
                <p className="mt-3 text-gray-600">
                    {`Entre em contato conosco para saber mais sobre nossos produtos e serviços. Estamos aqui para ajudar você a encontrar a solução ideal para suas necessidades automotivas. Não hesite em nos enviar uma mensagem ou visitar nosso site para mais informações.`}
                </p>
                <NavLink
                    href="/get-started"
                    className="mt-4 inline-block font-medium text-sm text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900"
                >
                    {`Contate-nos`}
                </NavLink>
            </div>
        </div>
    </SectionWrapper>
)

export default FooterCTA