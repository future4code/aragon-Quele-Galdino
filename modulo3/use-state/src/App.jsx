// import React from "react"

import { useState } from "react"

export default function App() {
  const [result, setResult] = useState("")
  const handleValue=(event)=>{setResult(result.concat(event.target.name))}
  const clear=()=> {setResult("")}
  const erase=()=>{setResult(result.slice(0,result.length-1))}
  const calculate=()=>{
    try {
      setResult(eval(result).toString())
    } catch (error) {
      setResult("erro")
    }
  }
  return (
    <main>
      <section>
        <button name="0" onClick={handleValue}>0</button>
        <button name="1" onClick={handleValue}>1</button>
        <button name="2" onClick={handleValue}>2</button>
        <button name="3" onClick={handleValue}>3</button>
        <button name="4" onClick={handleValue}>4</button>
        <button name="5" onClick={handleValue}>5</button>
        <button name="6" onClick={handleValue}>6</button>
        <button name="7" onClick={handleValue}>7</button>
        <button name="8" onClick={handleValue}>8</button>
        <button name="9" onClick={handleValue}>9</button>
        <button name="." onClick={handleValue}>.</button>
        <button name="/" onClick={handleValue}>&divide</button>
        <button name="*" onClick={handleValue}>&times</button>
        <button name="-" onClick={handleValue}>&ndash</button>
        <button name="+" onClick={handleValue}>+</button>
        <button onClick={calculate}>=</button>
        <button onClick={clear}>CE</button>
        <button onClick={erase}>C</button>
      </section>
      <section>
        <form>
          <input type="text" value={result}></input>
        </form>
      </section>
    </main>
  )
}
