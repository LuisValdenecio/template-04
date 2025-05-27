import Image from 'next/image'
import freshbooks from '../../../public/logos/freshbooks.svg'
import sendgrid from '../../../public/logos/sendgrid.svg'
import layers from '../../../public/logos/layers.svg'
import adobe from '../../../public/logos/adobe.svg'

import unitel from '../../../public/logos/unitel.PNG'
import sonangol from '../../../public/logos/sonangol.PNG'
import paratus from '../../../public/logos/paratus.PNG'
import endiama from '../../../public/logos/endiama.PNG'

const logos = [
    {
        src: unitel,
        alt: "freshbooks"
    },
    {
        src: sonangol,
        alt: "sendgrid"
    },
    {
        src: paratus,
        alt: "layers"
    },
    {
        src: endiama,
        alt: "layers"
    }
]


const LogoGrid = () => (
    <div>
        <div className="custom-screen mt-20">
            <h2 className="font-semibold text-sm text-gray-600 text-center">
                {process.env.NEXT_PUBLIC_LOGO_SECTION_TITLE}
            </h2>
            <div className="mt-6">
                <ul className="flex gap-x-10 gap-y-6 flex-wrap items-center justify-center md:gap-x-16">
                    {
                        logos.map((item, idx) => (
                            <li key={idx}>
                                <Image width={"200"} src={item.src} alt={item.alt} />
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </div>
)

export default LogoGrid