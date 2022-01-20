var btn = document.getElementById('btn')
var btn2 = document.getElementById('btn2')

function Naleatorios(minimo,maximo){
    return Math.floor(Math.random()*(maximo - minimo)+minimo);
}

btn.addEventListener('mouseenter',(e) =>{
    
    if(true)
    {
        let a = Naleatorios(1,1000)
        document.documentElement.style.setProperty('--posiciont',a+"pt")
    }
})
btn.addEventListener('mouseenter',(e) =>{
    
    if(true)
    {
        let a = Naleatorios(1,450)
        document.documentElement.style.setProperty('--posicionl',a+"pt")
    }
})

btn2.addEventListener('click',(e) => {
    alert('Sabia que eligirias sabiamente')
})