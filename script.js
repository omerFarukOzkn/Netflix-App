const btn = document.querySelectorAll('.acil')
const acilmis = document.querySelectorAll('.acilmis')
const icon = document.querySelectorAll('.fa-plus')

// for(let i = 0; i < btn.length; i++){
//     btn[i].addEventListener('')
// }

for(let i of btn){
    i.addEventListener('click', ac)
}

function ac(){
    const acilacak = this.parentElement.children[1] // this tıkladığımız yer 

    if(acilacak.classList.contains('goster')){
        acilacak.classList.toggle('goster')
        this.children[0].classList.toggle('dondur')
    }else{
        acilmis.forEach(kapanacak => kapanacak.classList.remove('goster'))
        icon.forEach(duzelt => duzelt.classList.remove('dondur'))
        acilacak.classList.toggle('goster')
        this.children[0].classList.toggle('dondur')
    }
}