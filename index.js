var formSubmit = document.getElementById('myForm');

var información = {
    nombre:"",
    colorFavorito:""
}

formSubmit.addEventListener('submit', function(event){
    event.preventDefault();
    var name = document.getElementById('nombre').value;
    var favoriteColor = document.getElementById('colorFavorito').value;
    información.nombre=name;
    información.colorFavorito=favoriteColor;
    console.log(información);
})