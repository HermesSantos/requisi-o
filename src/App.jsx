import { useState } from 'react'
import { api } from './api/api'
// import './App.css'
import styles from '../src/styles.module.css'
import { Link } from 'react-router-dom'

function App() {
  const [data, setData] = useState([])
  const [selected, setSelected] = useState([])
  const [input, setInput] = useState()
  const [hamb, setHamb] = useState(false)

  function handleChoice (e) {
    setSelected(e.target.value)
  }
  function handleHamburger (e) {
    setHamb(!hamb)
  }
  function handleInput(e){
    setInput(e.target.value)
    console.log("input",e.target.value)
  }
  const handleConsult = () => {
    api.post("/api/teste", { 
        choice: selected,
        input: input
    }
    ).then((res)=>{
      setData(res.data)
    })
  }
  const handleTeste = () => {
    console.log('teste')
  }
  console.log("data",data);
  return (
    <div className="App">
      <header>
        <nav className={styles.nav_header}>
          <Link className={styles.logo} to={"/"}>Consulta BR</Link>
          <div className={styles.menu_hamburguer} onClick={handleHamburger}>
            <div className={styles.line1}></div>
            <div className={styles.line2}></div>
            <div className={styles.line3}></div>
          </div>
          <ul className={styles.nav_list}>
            <li><Link id={styles.inicio} to={"/"}>Inicio</Link></li>
            <li><Link id={styles.sobre} to={'/sobre'}>Sobre</Link></li>
            <li><Link id={styles.contato} to={'/contato'}>Contato</Link></li>
          </ul>
        </nav>
      </header>
      {hamb &&(
        <div className={styles.hamburger_thing}>
          <div className={styles.hamburger_things}>
            <ul>
              <li><Link to={'/'}><h2>Início</h2></Link></li>
              <li><Link to={'/sobre'}><h2>Sobre</h2></Link></li>
              <li><Link to={'/contato'}><h2>Contato</h2></Link></li>
            </ul>
          </div>
        </div>
      )
      }
      <div className={styles.main}>
        <div className={styles.textos}>
          <h1 className={styles.texto1}>Bem vindo ao site consultas BR.</h1> 
          <h2 className={styles.texto2}>Confira se seus dados foram expostos!</h2>
        </div>
        {!hamb && (
        <div className={styles.search_box}>
          <select name="select" className={styles.select_text} onChange={handleChoice}>
              <option value="Email" defaultValue={"Email"}>Email</option>
              <option value="Nome">Nome</option>
              <option value="CPF">CPF</option>
              <option value="RG">RG</option>
              <option value="Telefone">Telefone</option>
          </select>
          <input type="text" placeholder="Pesquisar" name="search" className={styles.search_text} onChange={handleInput}/>
          <a className={styles.search_botton} onClick={handleConsult}>
            <img src="../public/lupa.svg" className={styles.lupa} alt="lupa"/>
          </a>
        </div>)
        }
      </div>
      <div>
        <form action="consultasbr/node-mysql/node_modules/apps.js" method="get">

          <div className={styles.leak_box} style={{display:"none"}}>
            <div className={styles.leak_top}>
              <img src="images/índice.png" className={styles.img_leak}/>
              <h1 className={styles.title_leak}>leak Lorem</h1>
            </div>
            <p className={styles.text_leak}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </form>
      </div>
      {data[0] && (
        <div>
          <div className={styles.response}>
            <h1>Nome: {data[0].nome}</h1>
            <h1>E-mail: {data[0].email??"Não informado"}</h1>
            <h1>CPF: {data[0].cpf??"Não informado"}</h1>
            <h1>RG: {data[0].rg??"Não informado"}</h1>
            <h1>Telefone: {data[0].telefone??"Não informado"}</h1>
          </div>
        </div>
      )
      }
    </div>
  )
}

export default App
