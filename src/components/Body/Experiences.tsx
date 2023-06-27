const Experiences = () => {
    return (
        <div className="flex flex-col my-12 min-h-screen" id="xp">
            <h2 className="btn flex w-auto m-4 rounded-md">Working Experiences</h2>
            <div className="flex flex-1 flex-col justify-center">
                <div className="flex flex-row justify-center">
                    <ul className="steps steps-vertical px-1 justify-center">
                        <li className="step step-primary">
                            <div className="flex flex-col w-full lg:flex-row">
                                <div className="join w-72" >
                                    <button className="btn join-item flex-auto">July 2019</button>
                                    <button className="btn join-item flex-auto">August 2019</button>
                                </div >
                                <div className="divider lg:divider-horizontal"></div>
                                <div className="grid text-left">
                                    <p className="flex w-full">Stockman in a supermarket & Student</p>
                                    <div className="flex w-full">
                                        <p className="mr-4 font-bold">Enterprise:</p>
                                        <p>DIANA PROMOCION SA</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="step step-primary">
                            <div className="flex flex-col w-full lg:flex-row">
                                <div className="join w-72" >
                                    <button className="btn join-item flex-auto">June 2020</button>
                                    <button className="btn join-item flex-auto">August 2021</button>
                                </div >
                                <div className="divider lg:divider-horizontal"></div>
                                <div className="grid text-left">
                                    <p className="flex w-full">Freelance Web Developer & Student</p>
                                </div>
                            </div>
                        </li>
                        <li className="step step-primary">
                            <div className="flex flex-col w-full lg:flex-row">
                                <div className="join w-72" >
                                    <button className="btn join-item flex-auto">August 2021</button>
                                    <button className="btn join-item flex-auto">September 2021</button>
                                </div >
                                <div className="divider lg:divider-horizontal"></div>
                                <div className="grid text-left">
                                    <p className="flex w-full">Freelance FrontEnd Web Developer & Student</p>
                                    <div className="flex w-full">
                                        <p className="mr-4 font-bold">Site:</p>
                                        <a href="https://rural5g.es/">rural5g.es</a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="step">
                            <div className="flex flex-col w-full lg:flex-row">
                                <div className="join w-72" >
                                    <button className="btn join-item flex-auto">September 2021</button>
                                    <button className="btn join-item flex-auto">Now</button>
                                </div >
                                <div className="divider lg:divider-horizontal"></div>
                                <div className="grid text-left">
                                    <p className="flex w-full">Freelance Web Developer & Student</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Experiences