import Image from 'next/image'
import unitel from '../../../public/logos/unitel.png'
import sonangol from '../../../public/logos/sonangol.png'
import paratus from '../../../public/logos/paratus.png'
import endiama from '../../../public/logos/endiama.png'
import omatapalo from '../../../public/logos/omatapalo.jpg'

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
        src: omatapalo,
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