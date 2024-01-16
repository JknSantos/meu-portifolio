export default function App() {
  return (
    <header>
      <h1>Portfólio</h1>
      <ul className="barra-de-navegacao">
        <input type="checkbox" name="teste" id="teste" />
        <button className="botao-menu-mobile">
          <span></span>
          <span></span>
          <span></span>
        </button>
        <li><a href="#sobre-mim">Sobre mim</a></li>
        <li><a href="#projetos">Projetos</a></li>
        <li><a href="#servicos">Serviços</a></li>
        <li><a href="#minhas-skills">Minhas skills</a></li>
      </ul>
    </header>
  )
}