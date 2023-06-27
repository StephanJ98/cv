import { FaReact, FaJava } from 'react-icons/fa'
//import {  } from 'react-icons/io'
import { SiJavascript, SiTypescript, SiNextdotjs, SiExpress, SiMongodb, SiElectron, SiCapacitor, SiHtml5, SiTailwindcss, SiCss3, SiGit, SiGithub, SiYarn, SiPnpm, SiWindows, SiLinux, SiPython, SiSass, SiMarkdown, SiRedis, SiRaspberrypi, SiArduino, SiGraphql, SiApollographql, SiAstro, SiArchlinux, SiManjaro, SiLinuxmint, SiCplusplus, SiCsharp, SiC, SiMysql, SiGitlab, SiDocker, SiPhp, SiAndroid } from 'react-icons/si'
import { TbBrandReactNative } from 'react-icons/tb'

const Skills = () => {
    return (
        <div className="hero min-h-screen bg-transparent" id='skills'>

            <div className="hero-content text-center">
                <div className="flex flex-wrap justify-center gap-2">
                    <div className="join join-vertical w-full border-4 border-black">
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" checked />
                            <div className="collapse-title text-xl font-medium">
                                <p>Strong Skills</p>
                            </div>
                            <div className="collapse-content">
                                <div className='flex flex-wrap justify-center items-center gap-2'>
                                    <div className="card bg-base-100 shadow-xl tooltip" data-tip="ReactJs">
                                        <div className="card-body items-center text-center">
                                            <FaReact size={33} className='rounded-none' />
                                        </div>
                                    </div>
                                    <div className="card bg-base-100 shadow-xl tooltip" data-tip="NextJs">
                                        <div className="card-body items-center text-center">
                                            <SiNextdotjs size={33} className='rounded-none' />
                                        </div>
                                    </div>

                                    <div className="card bg-base-100 shadow-xl tooltip" data-tip="Tailwindcss">
                                        <div className="card-body items-center text-center">
                                            <SiTailwindcss size={33} className='rounded-none' />
                                        </div>
                                    </div>

                                    <div className="card bg-base-100 shadow-xl tooltip" data-tip="JavaScript">
                                        <div className="card-body items-center text-center">
                                            <SiJavascript size={33} className='rounded-none' />
                                        </div>
                                    </div>

                                    <div className="card bg-base-100 shadow-xl tooltip" data-tip="TypeScript">
                                        <div className="card-body items-center text-center">
                                            <SiTypescript size={33} className='rounded-none' />
                                        </div>
                                    </div>

                                    <div className="card bg-base-100 shadow-xl tooltip" data-tip="HTML5">
                                        <div className="card-body items-center text-center">
                                            <SiHtml5 size={33} className='rounded-none' />
                                        </div>
                                    </div>

                                    <div className="card bg-base-100 shadow-xl tooltip" data-tip="CSS3">
                                        <div className="card-body items-center text-center">
                                            <SiCss3 size={33} className='rounded-none' />
                                        </div>
                                    </div>

                                    <div className="card bg-base-100 shadow-xl tooltip" data-tip="Pnpm">
                                        <div className="card-body items-center text-center">
                                            <SiPnpm size={33} className='rounded-none' />
                                        </div>
                                    </div>

                                    <div className="card bg-base-100 shadow-xl tooltip" data-tip="ExpressJs">
                                        <div className="card-body items-center text-center">
                                            <SiExpress size={33} className='rounded-none' />
                                        </div>
                                    </div>

                                    <div className="card bg-base-100 shadow-xl tooltip" data-tip="MongoDB">
                                        <div className="card-body items-center text-center">
                                            <SiMongodb size={33} className='rounded-none' />
                                        </div>
                                    </div>

                                    <div className="card bg-base-100 shadow-xl tooltip" data-tip="Electron">
                                        <div className="card-body items-center text-center">
                                            <SiElectron size={33} className='rounded-none' />
                                        </div>
                                    </div>

                                    <div className="card bg-base-100 shadow-xl tooltip" data-tip="React Native">
                                        <div className="card-body items-center text-center">
                                            <TbBrandReactNative size={33} className='rounded-none' />
                                        </div>
                                    </div>

                                    <div className="card bg-base-100 shadow-xl tooltip" data-tip="Capacitor">
                                        <div className="card-body items-center text-center">
                                            <SiCapacitor size={33} className='rounded-none' />
                                        </div>
                                    </div>

                                    <div className="card bg-base-100 shadow-xl tooltip" data-tip="Git">
                                        <div className="card-body items-center text-center">
                                            <SiGit size={33} className='rounded-none' />
                                        </div>
                                    </div>

                                    <div className="card bg-base-100 shadow-xl  tooltip" data-tip="GitHub">
                                        <div className="card-body items-center text-center">
                                            <SiGithub size={33} className='rounded-none' />
                                        </div>
                                    </div>

                                    <div className="card bg-base-100 shadow-xl tooltip" data-tip="Astro">
                                        <div className="card-body items-center text-center">
                                            <SiAstro size={33} className='rounded-none' />
                                        </div>
                                    </div>

                                    <div className="card bg-base-100 shadow-xl tooltip" data-tip="Markdown">
                                        <div className="card-body items-center text-center">
                                            <SiMarkdown size={33} className='rounded-none' />
                                        </div>
                                    </div>

                                    <div className="card bg-base-100 shadow-xl tooltip" data-tip="Windows">
                                        <div className="card-body items-center text-center">
                                            <SiWindows size={33} className='rounded-none' />
                                        </div>
                                    </div>

                                    <div className="card bg-base-100 shadow-xl tooltip" data-tip="Arch Linux">
                                        <div className="card-body items-center text-center">
                                            <SiArchlinux size={33} className='rounded-none' />
                                        </div>
                                    </div>

                                    <div className="card bg-base-100 shadow-xl tooltip" data-tip="Manjaro">
                                        <div className="card-body items-center text-center">
                                            <SiManjaro size={33} className='rounded-none' />
                                        </div>
                                    </div>

                                    <div className="card bg-base-100 shadow-xl tooltip" data-tip="Linux">
                                        <div className="card-body items-center text-center">
                                            <SiLinux size={33} className='rounded-none' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">
                                Mid Skills
                            </div>
                            <div className="collapse-content">
                                <div className='flex flex-wrap justify-center items-center gap-2'>
                                    <div className="card bg-base-100 shadow-xl tooltip" data-tip="Python">
                                        <div className="card-body items-center text-center">
                                            <SiPython size={33} className='rounded-none' />
                                        </div>
                                    </div>

                                    <div className="card bg-base-100 shadow-xl tooltip" data-tip="Sass">
                                        <div className="card-body items-center text-center">
                                            <SiSass size={33} className='rounded-none' />
                                        </div>
                                    </div>

                                    <div className="card bg-base-100 shadow-xl tooltip" data-tip="Redis">
                                        <div className="card-body items-center text-center">
                                            <SiRedis size={33} className='rounded-none' />
                                        </div>
                                    </div>

                                    <div className="card bg-base-100 shadow-xl tooltip" data-tip="Raspberry Pi">
                                        <div className="card-body items-center text-center">
                                            <SiRaspberrypi size={33} className='rounded-none' />
                                        </div>
                                    </div>

                                    <div className="card bg-base-100 shadow-xl tooltip" data-tip="Arduino">
                                        <div className="card-body items-center text-center">
                                            <SiArduino size={33} className='rounded-none' />
                                        </div>
                                    </div>

                                    <div className="card bg-base-100 shadow-xl tooltip" data-tip="GraphQL">
                                        <div className="card-body items-center text-center">
                                            <SiGraphql size={33} className='rounded-none' />
                                        </div>
                                    </div>

                                    <div className="card bg-base-100 shadow-xl tooltip" data-tip="Apollo GraphQL">
                                        <div className="card-body items-center text-center">
                                            <SiApollographql size={33} className='rounded-none' />
                                        </div>
                                    </div>

                                    <div className="card bg-base-100 shadow-xl tooltip" data-tip="Yarn">
                                        <div className="card-body items-center text-center">
                                            <SiYarn size={33} className='rounded-none' />
                                        </div>
                                    </div>

                                    <div className="card bg-base-100 shadow-xl tooltip" data-tip="Linux Mint">
                                        <div className="card-body items-center text-center">
                                            <SiLinuxmint size={33} className='rounded-none' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="collapse collapse-arrow join-item border border-base-300">
                            <input type="radio" name="my-accordion-4" />
                            <div className="collapse-title text-xl font-medium">
                                Soft Skills
                            </div>
                            <div className="collapse-content">
                                <div className='flex flex-wrap justify-center items-center gap-2'>
                                    <div className="card bg-base-100 shadow-xl tooltip" data-tip="C">
                                        <div className="card-body items-center text-center">
                                            <SiC size={33} className='rounded-none' />
                                        </div>
                                    </div>

                                    <div className="card bg-base-100 shadow-xl tooltip" data-tip="C++">
                                        <div className="card-body items-center text-center">
                                            <SiCplusplus size={33} className='rounded-none' />
                                        </div>
                                    </div>

                                    <div className="card bg-base-100 shadow-xl tooltip" data-tip="C#">
                                        <div className="card-body items-center text-center">
                                            <SiCsharp size={33} className='rounded-none' />
                                        </div>
                                    </div>

                                    <div className="card bg-base-100 shadow-xl tooltip" data-tip="MySQL">
                                        <div className="card-body items-center text-center">
                                            <SiMysql size={33} className='rounded-none' />
                                        </div>
                                    </div>

                                    <div className="card bg-base-100 shadow-xl tooltip" data-tip="GitLab">
                                        <div className="card-body items-center text-center">
                                            <SiGitlab size={33} className='rounded-none' />
                                        </div>
                                    </div>

                                    <div className="card bg-base-100 shadow-xl tooltip" data-tip="Docker">
                                        <div className="card-body items-center text-center">
                                            <SiDocker size={33} className='rounded-none' />
                                        </div>
                                    </div>

                                    <div className="card bg-base-100 shadow-xl tooltip" data-tip="Android">
                                        <div className="card-body items-center text-center">
                                            <SiAndroid size={33} className='rounded-none' />
                                        </div>
                                    </div>

                                    <div className="card bg-base-100 shadow-xl tooltip" data-tip="PHP">
                                        <div className="card-body items-center text-center">
                                            <SiPhp size={33} className='rounded-none' />
                                        </div>
                                    </div>

                                    <div className="card bg-base-100 shadow-xl tooltip" data-tip="Java">
                                        <div className="card-body items-center text-center">
                                            <FaJava size={33} className='rounded-none' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills