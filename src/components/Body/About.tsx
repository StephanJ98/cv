import { SVGProps } from "react"
import { MdOutlineSportsRugby } from 'react-icons/md'
import { BiCycling } from 'react-icons/bi'

import flagGAL from '../../assets/flagGAL.png'
import photoAvatar from '../../assets/photoAvatar.jpg'

const France = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36" {...props}><path fill="#ED2939" d="M36 27a4 4 0 0 1-4 4h-8V5h8a4 4 0 0 1 4 4v18z"></path><path fill="#002495" d="M4 5a4 4 0 0 0-4 4v18a4 4 0 0 0 4 4h8V5H4z"></path><path fill="#EEE" d="M12 5h12v26H12z"></path></svg>
    )
}

const Spain = (props: SVGProps<SVGSVGElement>) => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 36 36" {...props}><path fill="#C60A1D" d="M36 27a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V9a4 4 0 0 1 4-4h28a4 4 0 0 1 4 4v18z"></path><path fill="#FFC400" d="M0 12h36v12H0z"></path><path fill="#EA596E" d="M9 17v3a3 3 0 1 0 6 0v-3H9z"></path><path fill="#F4A2B2" d="M12 16h3v3h-3z"></path><path fill="#DD2E44" d="M9 16h3v3H9z"></path><ellipse cx="12" cy="14.5" fill="#EA596E" rx="3" ry="1.5"></ellipse><ellipse cx="12" cy="13.75" fill="#FFAC33" rx="3" ry=".75"></ellipse><path fill="#99AAB5" d="M7 16h1v7H7zm9 0h1v7h-1z"></path><path fill="#66757F" d="M6 22h3v1H6zm9 0h3v1h-3zm-8-7h1v1H7zm9 0h1v1h-1z"></path></svg>
    )
}

const Galicia = ({ className }: { className: string }) => {
    return (
        <img src={flagGAL} alt="Galician flag" width={16} height={16} className={`rounded-sm ${className}`} />
    )
}

const About = () => {
    return (
        <div className="hero min-h-screen bg-transparent" id="about">
            <div className="hero-content flex-col lg:flex-row">
                <img src={photoAvatar} className="max-w-xs md:max-w-sm rounded-lg shadow-2xl" />
                <div className="pl-4">
                    <h1 className="text-5xl font-bold">Hi I'm Stéphan Jeandon</h1>
                    <p className="py-6">
                        I was born on Saint-Louis, Alsace (France), and grew up in Carballo, Galicia (Spain). So I am trilingual French <France className="inline" />, Spanish <Spain className="inline" /> and Galician <Galicia className="inline" />.
                    </p>
                    <p className="py-4">
                        Since I was little I liked everything related to technology, and as I grew older I became increasingly interested in the world of computing. So naturally I would orient myself to a computer science degree.
                    </p>
                    <p className="py-4">
                        Also since I was little I liked sports, specifically cycling <BiCycling size={26} className='inline' /> and Rugby <MdOutlineSportsRugby size={26} className='inline' />. I played with the Club de Rugby Arquitectura Técnica. Due to my studies, I had to move to another city quite far away, which forced me to change to team Club Ourense Rugby and also representing the Ourense Campus and the University of Vigo in Rugby 7 at regional and national level.
                    </p>
                    <p className="py-4">
                        Apart from this passion for technology and sports, I am a great lover of nature, which led me to become interested and cultivate bonsai. And to Asian culture, in this case I am interested in the history and culture of tea.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About