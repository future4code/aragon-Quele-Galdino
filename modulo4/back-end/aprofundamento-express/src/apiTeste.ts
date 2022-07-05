import axios from "axios"

axios.get("http://localhost:3003/tarefa/um")
.then ((res) => {
    console.log(res.data)
})      
                