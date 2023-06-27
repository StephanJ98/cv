import { SiTwitter, SiLinkedin, SiInstagram, SiGithub } from 'react-icons/si'

const Footer = () => {
    return (
        <footer className="footer footer-center p-10 bg-primary text-primary-content rounded-t-2xl">
            <div className="avatar">
                <div className="w-24 rounded-xl">
                    <img src="src\assets\photoIRL.jpg" />
                </div>
            </div>
            <div>
                <div className="grid grid-flow-col gap-4">
                    <a target='blank' href="https://twitter.com/DStephanJ">
                        <SiTwitter size='33' />
                    </a>
                    <a target='blank' href="https://github.com/StephanJ98">
                        <SiGithub size='33' />
                    </a>
                    <a href="https://www.instagram.com/diegostephanjeandon/">
                        <SiInstagram size='33' />
                    </a>
                    <a href="https://www.linkedin.com/in/diegostephanjeandonrodriguez/">
                        <SiLinkedin size='33' />
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer