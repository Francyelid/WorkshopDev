const express = require("express")
const server = express()

const ideas = [
    {
        img:  "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title: "Cursos de Programação",
        category: "Estudo",
        description:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cumque ullam animi incidunt",
        url: "www.google.com"
    },
    {
        img:  "https://image.flaticon.com/icons/svg/2729/2729005.svg",
        title: "Exercícios",
        category: "Saúde",
        description:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cumque ullam animi incidunt",
        url: "www.google.com"
    },
    {
        img:  "https://image.flaticon.com/icons/svg/2729/2729032.svg",
        title: "Karaokê",
        category: "Diversão em família",
        description:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cumque ullam animi incidunt",
        url: "www.google.com"
    },
    {
        img:  "https://image.flaticon.com/icons/svg/2729/2729027.svg",
        title: "Meditação",
        category: "Metalidade",
        description:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cumque ullam animi incidunt",
        url: "www.google.com"
    }
]

server.use(express.static("public"))

const nunjucks = require("nunjucks")
nunjucks.configure("views", {
    express: server,
    noCache: true
})

server.get("/", function(req, res){

    const reverseIdeas = [...ideas].reverse()

    let lastIdeas = []
    for(let idea of reverseIdeas){
        if(lastIdeas.length < 2){
            lastIdeas.push(idea)
        }
    }

    return res.render("index.html", { ideas: lastIdeas })
})

server.get("/ideas", function(req, res){

    const reverseIdeas = [...ideas].reverse()

    return res.render("ideas.html", { ideas: reverseIdeas })
})

server.listen(3000)