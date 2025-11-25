function Portfolio() {
    return (
        <div className="flex flex-col items-center -mt-5">
            <h1 className="text-3xl mb-4">Portfolio (Under Construction)</h1>
            <div className="min-w-150 max-w-2/3">

                <div className="flex flex-col">
                    <h2 className="text-lg font-bold">10/2025 - Data analysis for national health insurance operators</h2>
                    <p className="ml-8"><b>Type:</b> Project for job selection process</p>
                    <p className="ml-8"><b>Description: </b>A data narrative and market intelligence analysis was made by using public data from health insurance operators to generate actionable knowledge and insights for stakeholders. Data was input into PowerBI to create various indicators/metrics so that an in-depth and temporal analysis can be made. Data was also used to train a statistical prediction model using Time Series Modeling (SARIMA). The narrative and analysis were exposed in a 9-page technical report.</p>
                    <p className="ml-8"><b>Tools Used:</b> PowerBI, Python</p>
                </div>
                <br/>
                <br/>
                <div className="flex flex-col">
                    <h2 className="text-lg font-bold">04/2025 - Usability Evaluation of the Educational Game “A lenda do quinto sol”</h2>
                    <p className="ml-8"><b>Type:</b> Academic Project</p>
                    <p className="ml-8"><b>Description: </b>This usability evaluation aimed to identify, through use and observation, usability problems in the human-computer interactions in the game “A lenda do quinto sol” and in the website used to play it, in accord with Nielsen’s heuristics for digital interface design. The website’s and game’s functionalities were thoroughly tested and many problems in the interfaces and interactions were identified and classified according to their nature, degree and heuristic(s) which were broken by it. They were then explained and detailed along with suggestions on how to fix them in a 47-page technical report. Made as final project for the Human-Computer Interaction course.</p>
                </div>
                <br/>
                <br/>
                <div className="flex flex-col">
                    <h2 className="text-lg font-bold">10/2024 - 04/2025 - Título: Development of applications with microservices architecture</h2>
                    <p className="ml-8"><b>Type:</b> Undergraduate Thesis</p>
                    <p className="ml-8"><b>Supervisor:</b> Admilson de Ribamar Lima Ribeiro</p>
                    <a className="ml-8 text-blue-400" target="_blank" href="https://github.com/Jp9910/microservices_project/blob/master/TCC-Monografia-Parte-Escrita.pdf">[Thesis]</a>
                    <a className="ml-8 text-blue-400" target="_blank" href="https://github.com/Jp9910/microservices_project">[Project Repository]</a>
                    <p className="ml-8"><b>Description: </b>The thesis explored the microservices architecture, common practices and tools used in its development and related works, through extensive literature review. An e-commerce web platform using this architecture was developed.</p>
                    <p className="ml-8"><b>Tools Used:</b> LaTeX, Java, SpringBoot, TypeScript, Node.js, Express, C#, .NET, ReactJS, Angular, Nginx, SQL, PostgreSQL, MongoDB, Memcached, GitHub Actions, RabbitMQ, Docker, Kubernetes, Prometheus, Grafana, Loki.</p>
                </div>
            </div>
        </div>
    )
}

export default Portfolio