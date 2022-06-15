import express from "express";
import cors from "cors";

let app = express();
app.use(cors());

const holidays = [
    { date: "1/1/2022", name: "Confraternização mundial" },
    { date: "1/3/2022", name: "Carnaval" },
    { date: "17/4/2022", name: "Páscoa" },
    { date: "21/4/2022", name: "Tiradentes" },
    { date: "1/5/2022", name: "Dia do trabalho" },
    { date: "16/6/2022", name: "Corpus Christi" },
    { date: "7/9/2022", name: "Independência do Brasil" },
    { date: "12/10/2022", name: "Nossa Senhora Aparecida" },
    { date: "2/11/2022", name: "Finados" },
    { date: "15/11/2022", name: "Proclamação da República" },
    { date: "25/12/2022", name: "Natal" }
  ];

app.get("/holidays", (req,res) => {
    res.send(holidays).status(200)
})
app.get("/is-today-holiday", (req,res) => {
    const hoje = new Date();
    let feriado = false
    for(let i = 0; i < holidays.length; i++){
        if(holidays[i] === hoje.toLocaleDateString()){
            feriado = true
        }
    }
    if(feriado === true){
        res.send("Hoje é feriado")
    }
    else{
        res.send("Hoje não é feriado")
    }
})
app.listen(5000, ()=>{
    console.log(`Server running on port: 5000`)
})