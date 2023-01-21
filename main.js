let tombol = document.querySelector('.swich')
let popup = document.querySelector('.popup')
let nama = document.querySelector('.nama')


tombol.addEventListener('click', function(){
    popup.classList.toggle('active')
    tombol.classList.toggle('ubah')
    nama.classList.toggle('hilang')
})