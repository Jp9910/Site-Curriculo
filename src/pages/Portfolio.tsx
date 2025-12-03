import imgRelatorioUsabilidade from '../assets/relatorio-usabilidade.png'
import imgToctou from '../assets/toctou.png'
import imgMS from '../assets/microsservicos.png'
import imgMS2 from '../assets/microsservicos2.jpg'
import imgHardhat from '../assets/hardhat.png'

function Portfolio() {
    return (
        <div className="flex flex-col items-center -mt-5">
            <div className='flex flex-row'>
                <h1 className="text-3xl mb-4">Portfolio (Under Construction)</h1>
                <img className="w-12 h-12" src={imgHardhat} alt="hardhat image"></img>
            </div>
            <div className="min-w-150 max-w-2/3">

                <div className="flex flex-col">
                    <h2 className="text-lg font-bold">Data analysis for national health insurance operators -- 10/2025</h2>
                    <p className="ml-8"><b>Type:</b> Project for job selection process</p>
                    <p className="ml-8"><b>Description: </b>Conducted a data narrative and market intelligence analysis using data from health insurance operators. Used PowerBI to create various indicators, metrics and graphs to allow for an in-depth and time-based analysis. Trained a SARIMA forecasting model with the data. Documented findings in a 9-page technical report.</p>
                    <p className="ml-8"><b>Tools Used:</b> PowerBI, Python</p>
                </div>
                <br/>
                <hr/>
                <br/>

                <div className="flex flex-row gap-8">
                    <img className="w-48 h-48" src={imgRelatorioUsabilidade} alt="screenshot relatorio usabilidade"></img>
                    <div className="flex flex-col">
                        <h2 className="text-lg font-bold">Usability Evaluation of the Educational Game “A lenda do quinto sol” -- 04/2025</h2>
                        <p className="ml-8"><b>Type:</b> Academic Project</p>
                        <p className="ml-8"><b>Description: </b>Conducted a usability evaluation of the game A lenda do quinto sol and its associated website using Nielsen’s usability heuristics. All key interactions were thoroughly tested and many issues were identified and classified according to their nature, degree and violated heuristic(s). Provided detailed explanations and redesign recommendations in a 47-page technical report.</p>
                    </div>
                </div>
                <br/>
                <hr/>
                <br/>

                <div className="flex flex-row gap-8">
                    <div className='flex flex-col gap-2 w-max'>
                        <img className="w-max h-48" src={imgMS} alt="diagrama microsservicos"></img>
                        <img className="w-max h-48" src={imgMS2} alt="screenshot app microsservicos"></img>
                    </div>
                    <div className="flex flex-col">
                        <h2 className="text-lg font-bold">Development of applications with microservices architecture -- 10/2024 - 04/2025</h2>
                        <p className="ml-8"><b>Type:</b> Undergraduate Thesis</p>
                        <p className="ml-8"><b>Supervisor:</b> Admilson de Ribamar Lima Ribeiro</p>
                        <p className="ml-8"><b>Description: </b>Explored the microservices architecture, related works, common practices, and tools used in the development of such applications, through extensive literature review. An e-commerce web platform using this architecture was developed.</p>
                        <p className="ml-8"><b>Tools Used:</b> LaTeX, Java, SpringBoot, TypeScript, Node.js, Express, C#, .NET, ReactJS, Angular, Nginx, SQL, PostgreSQL, MongoDB, Memcached, GitHub Actions, RabbitMQ, Docker, Kubernetes, Prometheus, Grafana, Loki.</p>
                        <div>
                            <a className="ml-8 text-blue-400" target="_blank" href="https://github.com/Jp9910/microservices_project/blob/master/TCC-Monografia-Parte-Escrita.pdf">[Link to Thesis]</a>
                            <a className="ml-8 text-blue-400" target="_blank" href="https://github.com/Jp9910/microservices_project">[Link to Project Repository]</a>
                        </div>
                    </div>
                </div>
                <br/>
                <hr/>
                <br/>

                <div className="flex flex-row gap-8">
                    <img className="w-48 h-48" src={imgToctou} alt="screenshot relatorio usabilidade"></img>
                    <div className="flex flex-col">
                        <h2 className="text-lg font-bold">TOCTOU Attack Analysis -- 12/2023</h2>
                        <p className="ml-8"><b>Type:</b> Academic Project</p>
                        <p className="ml-8"><b>Description: </b>Explored the TOCTOU attack and implemented a proof-of-concept system that demonstrates the attack, how it happens and how the vulnerability can be mitigated. A short 3-page report was written on it using a conference-style paper.</p>
                        <p className="ml-8"><b>Tools Used:</b> Python, Shell Scripting</p>
                    </div>
                </div>
                <br/>
                <hr/>
                <br/>

                <div className="flex flex-col">
                    <h2 className="text-lg font-bold">Sketchic - drawing app with AI prediction</h2>
                    <p className="ml-8"><b>Type:</b> Academic Project</p>
                    <p className="ml-8"><b>Description: </b>Developed a progressive web application (PWA) with a custom fine-tuned machine learning model (MobileNetV2) trained to classify drawings and predict which character is being drawn.</p>
                    <p className="ml-8"><b>Tools Used:</b> TensorFlow, Python, JavaScript</p>
                    <div>
                        <a className="ml-8 text-blue-400" target="_blank" href="https://sketchic.netlify.app/">[Link to App]</a>
                        <a className="ml-8 text-blue-400" target="_blank" href="https://github.com/Jp9910/Sketchic">[Link to Repository]</a>
                    </div>
                </div>
                <br/>
                <hr/>
                <br/>

                <div className="flex flex-col">
                    <h2 className="text-lg font-bold">Comparison of machine learning techniques and their outcomes on accuracy</h2>
                    <p className="ml-8"><b>Type:</b> Academic Project</p>
                    <p className="ml-8"><b>Description: </b>Conducted a comparative study of multiple machine learning techniques using a hiring-process dataset to predict candidate approval. Various preprocessing techniques and training configurations were applied. Models were then compared using statistical tests to verify significance of performance differences. The best model was obtained from training after preprocessing the dataset with PCA, achieving a validation accuracy of 90.74%. An 11-page report was written in a conference-style paper, with the intent of attempting a publication.</p>
                    <p className="ml-8"><b>Tools Used:</b> TensorFlow, Python</p>
                </div>
                <br/>
                <hr/>
                <br/>

                <div className="flex flex-col">
                    <h2 className="text-lg font-bold">PRODAP - Program to Support the Development of Professional Learning</h2>
                    <p className="ml-8"><b>Type:</b> University Extension Project (Federal University of Sergipe)</p>
                    <p className="ml-8"><b>Description: </b>Participated in the development of the Application AdminDEP, used to manage academic departments, and provided support for the previously used application AdminDCOMP.</p>
                    <p className="ml-8"><b>Tools Used:</b> Laravel, Vue.js, MariaDB, Docker</p>
                </div>
            </div>
        </div>
    )
}

export default Portfolio