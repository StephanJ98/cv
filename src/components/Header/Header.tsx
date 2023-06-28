import { SiGithub, SiGmail, SiInstagram, SiLinkedin, SiTwitter } from 'react-icons/si'
import { VscClose } from 'react-icons/vsc'
import photoIRL from '../../assets/photoIRL.jpg'

import CV_ES from '../../assets/CV_ES.pdf'
import CV_FR from '../../assets/CV_FR.pdf'

const Header = () => {
    const openModal = () => {
        const modal = document.getElementById('contact') as HTMLDialogElement
        modal.showModal()
    }

    return (
        <header className="p-10 bg-primary text-primary-content rounded-b-2xl w-full flex flex-col justify-center items-center md:flex-row md:justify-between">
            <h1 className="text-primary-content text-4xl font-bold w-auto">
                StephanJ98
            </h1>
            <div className="join join-vertical lg:join-horizontal mt-4 w-full md:mt-0 md:w-auto rounded-xl">
                <a href="#about" className="btn btn-neutral join-item">About</a>
                <a href="#projects" className="btn btn-neutral join-item">Projects</a>
                <a href="#xp" className="btn btn-neutral join-item">Experiences</a>
                <a href="#skills" className="btn btn-neutral join-item">Skills</a>
                <a className="btn btn-neutral join-item" onClick={() => openModal()}>Contact</a>
            </div>
            <dialog id="contact" className="modal">
                <form method="dialog" className="modal-box">
                    <h3 className="font-bold text-lg pb-8 flex justify-center">You can find me on</h3>
                    <div className='flex flex-row justify-center gap-4'>
                        <div className='flex flex-col justify-between gap-4 items-center'>
                            <div className='flex flex-row justify-between gap-4 w-full'>
                                <div className="avatar bg-secondary-content p-4 rounded-md">
                                    <div className="w-24 rounded ">
                                        <img src={photoIRL} />
                                    </div>
                                </div>
                                <div className='flex flex-wrap justify-center bg-secondary-content p-4 gap-6 rounded-md'>
                                    <a href="https://github.com/StephanJ98" target="_blank" className='hover:animate-[spin_2s] tooltip my-auto' data-tip="GitHub">
                                        <SiGithub size={33} />
                                    </a>
                                    <a href="https://www.linkedin.com/in/diegostephanjeandonrodriguez" target="_blank" className='hover:animate-[spin_2s] tooltip my-auto' data-tip="LinkedIn">
                                        <SiLinkedin size={33} />
                                    </a>
                                    <a href="https://twitter.com/DStephanJ" target="_blank" className='hover:animate-[spin_2s] tooltip my-auto' data-tip="Twitter">
                                        <SiTwitter size={33} />
                                    </a>
                                    <a href="https://www.instagram.com/diegostephanjeandon" target="_blank" className='hover:animate-[spin_2s] tooltip my-auto' data-tip="Instagram">
                                        <SiInstagram size={33} />
                                    </a>
                                    <a href="mailto:diego.jeandon@gmail.com" target="_blank" className='hover:animate-[spin_2s] tooltip my-auto' data-tip="Gmail">
                                        <SiGmail size={33} />
                                    </a>
                                </div>
                            </div>
                            <div className='flex flex-row justify-between bg-secondary-content p-4 rounded-md gap-2'>
                                <a className='p-4 bg-neutral-700 rounded-md text-center hover:bg-neutral-900' href={CV_ES} target="_blank">Download CV in Spanish</a>
                                <a className='p-4 bg-neutral-700 rounded-md text-center hover:bg-neutral-900' href={CV_FR} target="_blank">Download CV in French</a>
                            </div>
                        </div>
                    </div>
                    <div className="modal-action">
                        <button className="btn">
                            <VscClose size={33} />
                        </button>
                    </div>
                </form>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>
        </header>
    )
}

export default Header