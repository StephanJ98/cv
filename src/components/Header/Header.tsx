import { SiGithub, SiGmail, SiInstagram, SiLinkedin, SiTwitter } from 'react-icons/si'
import { VscClose } from 'react-icons/vsc'

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
                        <div className="avatar">
                            <div className="w-24 rounded">
                                <img src="src/assets/photoIRL.jpg" />
                            </div>
                        </div>
                        <div className='flex flex-wrap justify-center gap-6'>
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