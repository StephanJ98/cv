const Projects = () => {
    return (
        <div className="flex flex-wrap flex-row justify-center p-4 gap-4 min-h-screen" id="projects">

            <div className="btn flex-auto rounded-md min-w-[90vw]">
                <h2>Some Projects</h2>
            </div>

            <div className="card w-96 bg-neutral text-neutral-content flex-auto">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Ticketer</h2>
                    <p>Ticketer is a app created for a simple summer project, to store simple text notes. The data is stored locally, which means that the use of a database is not necessary. It is a very simple HTML/CSS application that Electron uses to export to Windows x64 and Linux x64 applications.</p>
                    <div className="card-actions justify-end w-full">
                        <a href="https://github.com/StephanJ98/Ticketer" className="btn btn-primary rounded-md flex-auto">Repository URL</a>
                        <a href="https://github.com/StephanJ98/Ticketer/releases" className="btn btn-secondary-content rounded-md flex-auto">Latest Release</a>
                    </div>
                </div>
            </div>

            <div className="card w-96 bg-neutral text-neutral-content flex-auto">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Shinobi</h2>
                    <p>Shinobi is a simple script created for a summer project, providing basic information about the system it runs on. It can be used on any system that has Node installed, but it is intended to work on Windows and Linux.</p>
                    <div className="card-actions justify-end w-full">
                        <a href="https://github.com/StephanJ98/Shinobi" className="btn btn-primary rounded-md flex-auto">Repository URL</a>
                        <a href="https://github.com/StephanJ98/Shinobi/releases" className="btn btn-secondary-content rounded-md flex-auto">Latest Release</a>
                    </div>
                </div>
            </div>

            <div className="card w-96 bg-neutral text-neutral-content flex-auto">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">SCTenis</h2>
                    <p>SCTenis is a app created for a simple summer project, which shows a scoreboard to play tennis. It does not follow the classic rules of tennis, it uses some variants that I use with some friends. The app does not need an internet connection nor will it require additional storage. Does not contain advertising.</p>
                    <div className="card-actions justify-end w-full">
                        <a href="https://github.com/StephanJ98/SCTenis" className="btn btn-primary rounded-md flex-auto">Repository URL</a>
                        <a href="https://github.com/StephanJ98/SCTenis/releases" className="btn btn-secondary-content rounded-md flex-auto">Latest Release</a>
                    </div>
                </div>
            </div>

            <div className="card w-96 bg-neutral text-neutral-content flex-auto">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Strava LTHR Data & LTHRModule</h2>
                    <p>Small website that is capable of calculating heart zones thanks to Strava's .fit files. Your data is not stored. And a Node.js module used to calculate certain cardiac parameters and FTP zones, among others. Created to decentralize the data processing of the website of the previous project.</p>
                    <div className="card-actions justify-end w-full">
                        <a href="https://strava-lthr.netlify.app/" className="btn btn-secondary rounded-md flex-auto">Website</a>
                        <a href="https://github.com/StephanJ98/Strava_LTHR_Data" className="btn btn-primary rounded-md flex-auto">Repository URL</a>
                        <a href="https://github.com/StephanJ98/LTHRModule" className="btn btn-primary rounded-md flex-auto">Repository URL 2</a>
                        <a href="https://github.com/StephanJ98/Strava_LTHR_Data/releases" className="btn btn-secondary-content rounded-md flex-auto">Latest Release</a>
                        <a href="https://github.com/StephanJ98/LTHRModule/releases" className="btn btn-secondary-content rounded-md flex-auto">Latest Release 2</a>
                    </div>
                </div>
            </div>

            <div className="card w-96 bg-neutral text-neutral-content flex-auto">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">CPU Temp GUI</h2>
                    <p>CPU Temp GUI is a program created for a simple summer project, showing CPU temperature. It uses the Python language and works on Linux systems with aarch64 CPU architecture.</p>
                    <div className="card-actions justify-end w-full">
                        <a href="https://github.com/StephanJ98/CPU_Temp_GUI" className="btn btn-primary rounded-md flex-auto">Repository URL</a>
                        <a href="https://github.com/StephanJ98/SCTenis/releases" className="btn btn-secondary-content rounded-md flex-auto">Latest Release</a>
                    </div>
                </div>
            </div>

            <div className="card w-96 bg-neutral text-neutral-content flex-auto">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">MeteoWeb</h2>
                    <p>Simple web page that geolocates the user in a rudimentary way and shows him some meteorological data. Page in French.</p>
                    <div className="card-actions justify-end w-full">
                        <a href="https://meteo-web.vercel.app/" className="btn btn-secondary rounded-md flex-auto">Website</a>
                        <a href="https://github.com/StephanJ98/MeteoWeb" className="btn btn-primary rounded-md flex-auto">Repository URL</a>
                        <a href="https://github.com/StephanJ98/MeteoWeb/releases" className="btn btn-secondary-content rounded-md flex-auto">Latest Release</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects