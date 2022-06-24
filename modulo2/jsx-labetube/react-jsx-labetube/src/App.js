import React from "react";
export default function App() {
  return (
    <div>
      <header>
        <h1>Labetube</h1>
        <input type="text" placeholder="busque por ..." />
      </header>
      <main>
        <nav>
          <ul>
            <li>início</li>
            <li>em alta</li>
            <li>inscrições</li>
            <hr />
            <li>originais</li>
            <li>histórico</li>
          </ul>
        </nav>

        <section>className="painel-de-videos">section/>
          <figure>className="box-pagina-principal" onClick={reproduzVideo}>/figure>
            <img> src="https://picsum.photos/400/400?a=1 "</img> />
            <h4>{titulo}</h4>
            <figure>className="box-pagina-principal" onClick={reproduzVideo}> </figure>

            <img> src="https://picsum.photos/400/400?a=2 "</img> src="" />
            <h4> "titulo"</h4>
            <figure>className="box-pagina-principal" onClick={reproduzVideo}</figure>

            <img> src="https://picsum.photos/400/400?a=3 "</img>
            <h4>titulo</h4>
          </figure>
          <figure>
            <img src="" />
            <h4></h4>
          </figure>
        </section>
      </main>

      <footer>
        <h4>copyright 2022</h4>
      </footer>
    </main>
    </div >
  )
}