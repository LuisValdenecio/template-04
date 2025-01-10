import NavLink from "../NavLink"

const Hero = () => (
    <section>
        <div className="custom-screen py-28 text-gray-600">
            <div className="space-y-5 max-w-4xl mx-auto text-center">
                <h1 className="text-4xl text-gray-800 font-extrabold mx-auto sm:text-6xl">
                    {process.env.NEXT_PUBLIC_MAIN_TITLE}
                </h1>
                <p className="max-w-xl mx-auto">
                    {process.env.NEXT_PUBLIC_MAIN_DESCRIPTION}
                </p>
                <div className="flex items-center justify-center gap-x-3 font-medium text-sm">
                    <NavLink
                        href={process.env.NEXT_PUBLIC_STRIPE_PRODUCT_PAYMENT_LINK}
                        className="text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900 "
                    >
                        {process.env.NEXT_PUBLIC_FIRST_BUTTON_LABEL}
                    </NavLink>
                    <NavLink
                        href="#cta"
                        className="text-gray-700 border hover:bg-gray-50"
                        scroll={false}
                    >
                        {process.env.NEXT_PUBLIC_SECOND_BUTTON_LABEL}
                    </NavLink>
                </div>
            </div>
        </div>
    </section>
)

export default Hero