const headerEl = document.getElementById("header")

window.addEventListener("scroll", function() {
    const scrollPos = window.scrollY
    
    if(scrollPos > 100) {
        headerEl.classList.add("header-scroll")
    } else {
        headerEl.classList.remove("header-scroll")
    }
    
    const strelka_hidden = document.querySelector(".strelka-hidden")
    const strelka = document.querySelector(".strelka")
    
    if(scrollPos > 300 && !strelka) {
        strelka_hidden.classList.replace("strelka-hidden", "strelka")
    }
    
    if(scrollPos < 300 && !strelka_hidden) {
        strelka.classList.replace("strelka", "strelka-hidden")
        strelka.setAttribute("id", "fadeOut")
        strelka.addEventListener("animationend", function() {
            strelka.removeAttribute("id", "fadeOut")
        })
    } 
})



const strelka = document.querySelector(".strelka-hidden")
strelka.addEventListener("click", function() {
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
})


const when = document.querySelector("#what-is-graph")
when.addEventListener("click", function() {
    document.querySelector("#what-is-graph-h2").scrollIntoView({
        behavior: "smooth"})
})

const who = document.querySelector("#vidi-graphs")
who.addEventListener("click", function() {
    document.querySelector("#vidi-graphs-h2").scrollIntoView({
        behavior: "smooth"})
})

const first_russia = document.querySelector("#algotithms")
first_russia.addEventListener("click", function() {
    document.querySelector("#algotithms-h2").scrollIntoView({
        behavior: "smooth"})
})

const first_pc = document.querySelector("#problems")
first_pc.addEventListener("click", function() {
    document.querySelector("#problems-h2").scrollIntoView({
        behavior: "smooth"})
})