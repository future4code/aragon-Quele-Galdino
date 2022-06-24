import { GlobalState } from "./global/GlobalState.jsx"
import Router from "./routes/Router.jsx"

export default function App(){
  return(<GlobalState>
    <Router />
  </GlobalState>)
}    