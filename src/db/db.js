const firebase = require("firebase");
require("firebase/firestore");
firebase.initializeApp({
    apiKey: "AIzaSyDhIAfOO8ItuWi1EBHEhbE-gWms1QTbbiw",
    authDomain: "react-7130.firebaseapp.com",
    projectId: "react-7130"
});
var db = firebase.firestore();
var productos =[
    {
        "id": 1,
        "titulo": "Mantel antimanchas",
        "imagenProducto": "mantel.jpg",
        "alt": "Mantel antimanchas",
        "precio": 800 ,
        "categoria": "manteles" ,
        "descripcion": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aut tempora similique est, pariatur odit ut inventore cupiditate ipsa ipsam, rerum dolorum placeat quae at nam facilis, provident quisquam laboriosam",
        "stock": 5,
        "destacados": true
    },
    {
        "id": 2,
        "titulo": "Mantel antimanchas 2",
        "imagenProducto": "mantel.jpg",
        "alt": "Mantel antimanchas",
        "precio": 700 ,
        "categoria": "manteles" ,
        "descripcion": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aut tempora similique est, pariatur odit ut inventore cupiditate ipsa ipsam, rerum dolorum placeat quae at nam facilis, provident quisquam laboriosam",
        "stock": 5,
        "destacados": false
    },
    {
        "id": 3,
        "titulo": "Mantel antimanchas 3",
        "imagenProducto": "mantel.jpg",
        "alt": "Mantel antimanchas",
        "precio": 750 ,
        "categoria": "manteles" ,
        "descripcion": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aut tempora similique est, pariatur odit ut inventore cupiditate ipsa ipsam, rerum dolorum placeat quae at nam facilis, provident quisquam laboriosam",
        "stock": 5,
        "destacados": false
    },
    {
        "id": 4,
        "titulo": "Mantel antimanchas 4",
        "imagenProducto": "mantel.jpg",
        "alt": "Mantel antimanchas",
        "precio": 650 ,
        "categoria": "manteles" ,
        "descripcion": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aut tempora similique est, pariatur odit ut inventore cupiditate ipsa ipsam, rerum dolorum placeat quae at nam facilis, provident quisquam laboriosam",
        "stock": 5,
        "destacados": false
    },
    {
        "id": 5,
        "titulo": "Atrapa sueños" ,
        "imagenProducto": "atrapa-suenos.jpg",
        "alt": "Atrapa sueños",
        "precio": 400,
        "categoria": "atrapa-suenos",
        "descripcion": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aut tempora similique est, pariatur odit ut inventore cupiditate ipsa ipsam, rerum dolorum placeat quae at nam facilis, provident quisquam laboriosam",
        "stock": 5,
        "destacados": true
    },
    {
        "id": 6,
        "titulo": "Atrapa sueños 2" ,
        "imagenProducto": "atrapa-suenos.jpg",
        "alt": "Atrapa sueños",
        "precio": 450,
        "categoria": "atrapa-suenos",
        "descripcion": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aut tempora similique est, pariatur odit ut inventore cupiditate ipsa ipsam, rerum dolorum placeat quae at nam facilis, provident quisquam laboriosam",
        "stock": 5,
        "destacados": false
    },
    {
        "id": 7,
        "titulo": "Atrapa sueños 3" ,
        "imagenProducto": "atrapa-suenos.jpg",
        "alt": "Atrapa sueños",
        "precio": 500,
        "categoria": "atrapa-suenos",
        "descripcion": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aut tempora similique est, pariatur odit ut inventore cupiditate ipsa ipsam, rerum dolorum placeat quae at nam facilis, provident quisquam laboriosam",
        "stock": 5,
        "destacados": false
    },
    {
        "id": 8,
        "titulo": "Atrapa sueños 4" ,
        "imagenProducto": "atrapa-suenos.jpg",
        "alt": "Atrapa sueños",
        "precio": 350,
        "categoria": "atrapa-suenos",
        "descripcion": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aut tempora similique est, pariatur odit ut inventore cupiditate ipsa ipsam, rerum dolorum placeat quae at nam facilis, provident quisquam laboriosam",
        "stock": 5,
        "destacados": false
    },
    {
        "id": 9,
        "titulo": "Almohadones" ,
        "imagenProducto": "almohadones.jpg",
        "alt": "Almohadones",
        "precio": 500,
        "categoria": "almohadones",
        "descripcion": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aut tempora similique est, pariatur odit ut inventore cupiditate ipsa ipsam, rerum dolorum placeat quae at nam facilis, provident quisquam laboriosam",
        "stock": 5,
        "destacados": true
    },
    {
        "id": 10,
        "titulo": "Almohadones 2",
        "imagenProducto": "almohadones.jpg",
        "alt": "Almohadones",
        "precio": 550,
        "categoria": "almohadones",
        "descripcion": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aut tempora similique est, pariatur odit ut inventore cupiditate ipsa ipsam, rerum dolorum placeat quae at nam facilis, provident quisquam laboriosam",
        "stock": 5,
        "destacados": false
    },
    {
        "id": 11,
        "titulo": "Almohadones 3",
        "imagenProducto": "almohadones.jpg",
        "alt": "Almohadones",
        "precio": 650,
        "categoria": "almohadones",
        "descripcion": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aut tempora similique est, pariatur odit ut inventore cupiditate ipsa ipsam, rerum dolorum placeat quae at nam facilis, provident quisquam laboriosam",
        "stock": 5,
        "destacados": false
    },
    {
        "id": 12,
        "titulo": "Almohadones 4",
        "imagenProducto": "almohadones.jpg",
        "alt": "Almohadones",
        "precio": 550,
        categoria: "almohadones",
        "descripcion": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque aut tempora similique est, pariatur odit ut inventore cupiditate ipsa ipsam, rerum dolorum placeat quae at nam facilis, provident quisquam laboriosam",
        "stock": 5,
        "destacados": false
    }


]
productos.forEach((obj) => {
    db.collection("productos").add({
        id: obj.id,
        titulo: obj.titulo,
        imagenProducto: obj.imagenProducto,
        alt: obj.alt,
        precio: obj.precio,
        categoria: obj.categoria,
        descripcion: obj.descripcion,
        stock: obj.stock,
        destacados: obj.destacados
    }).then((docRef) => {
        console.log("Producto registrado con ID: ", docRef.id);
    })
    .catch((error) => {
        console.error("Error al agregar un documento: ", error);
    });
});