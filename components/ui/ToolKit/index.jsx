import SectionWrapper from "../../SectionWrapper"
import Image from "next/image"

const ToolKit = () => {

    const features = [
        {
            title: process.env.NEXT_PUBLIC_GRID_TITLE_ROW01_COL01,
            desc: process.env.NEXT_PUBLIC_GRID_DESCRIPTION_ROW01_COL01
        },
        {
            title: process.env.NEXT_PUBLIC_GRID_TITLE_ROW01_COL02,
            desc: process.env.NEXT_PUBLIC_GRID_DESCRIPTION_ROW01_COL02
        },
        {
            title: process.env.NEXT_PUBLIC_GRID_TITLE_ROW01_COL03,
            desc: process.env.NEXT_PUBLIC_GRID_DESCRIPTION_ROW01_COL03
        },
        {
            title: process.env.NEXT_PUBLIC_GRID_TITLE_ROW02_COL01,
            desc: process.env.NEXT_PUBLIC_GRID_DESCRIPTION_ROW02_COL01
        },
        {
            title: process.env.NEXT_PUBLIC_GRID_TITLE_ROW02_COL02,
            desc: process.env.NEXT_PUBLIC_GRID_DESCRIPTION_ROW02_COL02
        },
        {
            title: process.env.NEXT_PUBLIC_GRID_TITLE_ROW02_COL03,
            desc: process.env.NEXT_PUBLIC_GRID_DESCRIPTION_ROW02_COL03
        },
    ]

    return (
        <SectionWrapper>
            <div id="toolkit" className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="max-w-2xl mx-auto space-y-3 sm:text-center">
                    <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        {process.env.NEXT_PUBLIC_FEATURE_GRID_TITLE}
                    </h2>
                    <p>
                        {process.env.NEXT_PUBLIC_FEATURE_GRID_DESCRIPTION}
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