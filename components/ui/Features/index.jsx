import SectionWrapper from "../../SectionWrapper"

const Features = () => {

    const features = [
        {
            title: process.env.NEXT_PUBLIC_FEATURE_01_TITLE,
            desc: process.env.NEXT_PUBLIC_FEATURE_01_DESCRIPTION
        },
        {
            title: process.env.NEXT_PUBLIC_FEATURE_02_TITLE,
            desc: process.env.NEXT_PUBLIC_FEATURE_02_DESCRIPTION
        },
        {
            title: process.env.NEXT_PUBLIC_FEATURE_03_TITLE,
            desc: process.env.NEXT_PUBLIC_FEATURE_03_DESCRIPTION
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