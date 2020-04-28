var app = angular.module("app",["ngRoute"]);
app.config(function($routeProvider){
    $routeProvider
    .when("/", {
        templeateUrl: "cajero.html",
        controller: "controlador"
    })
    .when("/productos", {
        templeateUrl: "productos.html",
        controller: "controlador"
    });
});   

app.controller("controlador", function($scope){
var lista =this;
var n = 2;
var nCarrito =1;
lista.productos =[
    { id: 1, nombre: "matias", precio: 20.0 },
    { id: 2, nombre: "arturo", precio: 10.0 }
];

lista.carrito=[];

lista.addProducto = function(){
var nombre =lista.nombre;
var precio = lista.precio;

if(nombre != "" && precio != "" && !isNaN(precio)){
    n++;
    lista.productos.push({id: n, nombre: nombre, precio: precio});

lista.nombre ='';
lista.precio ='';

}

}

lista.addAlCarrito = function(){

    var n= 1;
    var id= lista.productoSeleccionado;
    var cantidad =lista.cantidad;
    var producto =lista.productos.find(function(obj){
        return obj.id == id;

    });

    if (producto != undefined && cantidad > 0) {
       lista.carrito.push({ id: nCarrito, nombre: producto.nombre, precio: producto.precio, cantidad: cantidad, total: producto.precio*cantidad }) ;
        nCarrito++;
    }
}
lista.getTotalCarrito = function(){
    var total=0;
    lista.carrito.forEach(x => {
        total += x.total;
        
    });
}
});