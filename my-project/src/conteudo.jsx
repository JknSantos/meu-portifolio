export default function App() {
    const openCurriculo = () => {
        const arquivo = "/CV_Jackson_Felipe.pdf";
    
        window.open(arquivo, "_blank");
      };
      return (
        <main>
            <section className="apresentacao">
                <span className="meu-personagem"></span>
                <div className="intro-sobre-mim">
                    <h2>Olá, eu sou Jackson Felipe</h2>
                    <p>Desenvolvedor Front-end que busca se tornar Full-Stack</p>
                    <div className="buttons">
                        <button onClick={openCurriculo}>Download CV</button>
                        <button><a href="https://wa.link/gp3h05">Entre em contato</a></button>
                    </div>
                </div>
            </section>
            <section id="sobre-mim" className="sobre-mim">
                <h3>Sobre mim</h3>
                <p>Praiano de carteirinha, cristão, acredita na lei da semeadura, apaixonado pelo mundo geek.</p>
                <p>Desenvolvedor de software Full Stack em formação na Cubos Academy.</p>
                <p>Trabalhei a mais de 4 anos como Operador de produção em empresa metalúrgica, durante esse tempo fui conhencendo sobre programação e estudei sobre, tive muitos altos e baixos mas minha maior motivação foi meu irmão que já estava atuando nessa área e me ajudou muito nos meus estudos e como inspiração.</p>
                <p>Vejo a programação como uma ferramenta que me da a liberdade de mudar minha vida e ajudar o próximo com as soluções e inovações da tecnologia.</p>
                <p>Na minha carreira de produção desenvolvi habilidades como boa comunicação, trabalho em equipe, controle e organização, entre outras que sei que me ajudarão muito nesta nova etapa.</p>
                <p>Você está convidado para conhecer um pouco mais sobre mim, me envie uma mensagem 😁</p>
            </section>
            <section className="contato">
                <div className="redes">
                    <a href="https://www.linkedin.com/in/jacksonfelipe-ns/" target="_blank">
                        <span className="linkedin"></span>
                        <p>@jacksonfelipe-ns</p>
                    </a>
                </div>
                <div className="redes">
                    <a href="https://github.com/JknSantos" target="_blank">
                        <span className="github"></span>
                        <p>@JknSantos</p>
                    </a>
                </div>
                <div className="redes">
                    <a href="https://wa.link/gp3h05" target="_blank">
                        <span className="whatsapp"></span>
                        <p>11 9 1718-2394</p>
                    </a>
                </div>
                <div className="redes">
                    <a href="mailto:jacksonfelipe.contact@gmail.com">
                        <span className="email"></span>
                        <p>jacksonfelipe.contact@gmail.com</p>
                    </a>
                </div>
            </section>
            <section id="projetos" className="projetos">
                <h3>Projetos</h3>
                <div className="top-3-projetos">
                    <div className="tumb-do-projeto"></div>
                    <h4>Titulo do meu projeto</h4>
                    <p>Tecnologias: HTML, CSS e Javascript</p>
                </div>
                <div className="top-3-projetos">
                    <div className="tumb-do-projeto"></div>
                    <h4>Titulo do meu projeto</h4>
                    <p>Tecnologias: HTML, CSS e Javascript</p>
                </div>
                <div className="top-3-projetos">
                    <div className="tumb-do-projeto"></div>
                    <h4>Titulo do meu projeto</h4>
                    <p>Tecnologias: HTML, CSS e Javascript</p>
                </div>
            </section>
            <section id="servicos" className="servicos">
                <h3>Serviços</h3>
                <div className="servico-a-prestar">
                    <span className="sites"></span>
                    <p>Criação de sites</p>
                </div>
                <div className="servico-a-prestar">
                    <span className="devices">'</span>
                    <p>Sites responsivos</p>
                </div>
            </section>
            <section id="minhas-skills" className="minhas-skills">
                <h3>Minhas skills</h3>
                <div className="skill">
                    <span className="javascript"></span>
                    <p>Javascript</p>
                </div>
                <div className="skill">
                    <span className="react"></span>
                    <p>React</p>
                </div>
                <div className="skill">
                    <span className="html-5"></span>
                    <p>HTML5</p>
                </div>
                <div className="skill">
                    <span className="css-3"></span>
                    <p>CSS3</p>
                </div>
                <div className="skill">
                    <span className="node-js"></span>
                    <p>NodeJs</p>
                </div>
            </section>
        </main>

      )
  }
  