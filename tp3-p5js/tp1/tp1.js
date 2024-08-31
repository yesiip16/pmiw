//Yesica Pozo || n°legajo: 119116/4
//https://youtu.be/ZhI5rsOjVJA?si=EKV-MTv-KT0PK7NO
let lado;
let mitad;
let color1, color2;
let imagen;
let click;
let duracion = 50; // duración de los colores random


function setup() {
  createCanvas(800, 400);
  imagen = loadImage("img/imagentp3.jpg");
  lado = 100; // Lados de cada cuadrado --> 100
  mitad = height / 2; // mitad del alto=400 --> 200
  click = false;
}

function draw() {
  image(imagen, 0, 0, width / 2, height);
  if (!click) { // condicional
    dibujarImagen(color(255), color(0));
  } else {
    if (frameCount > duracion) {
      color1 = seleccionarColor();
      color2 = seleccionarColor(); 
      dibujarImagen(color1, color2);
      frameCount = 0; // lo reinicio para que cada color tenga la misma duración
    }
  }
}

function seleccionarColor() {
  let r = random(0, 255), g = random(0, 255), b = random(0, 255); // para cada variable genero un valor flotante random entre 0 y 255
  return color(r, g, b); // Usa los colores RGB 
}

function dibujarImagen(c1, c2) {
  for (let i = 0; i < height; i=i + lado) {   // recorre en filas 
    for (let j = height; j < width; j=j + lado) { // recorre en columnas
      if ((((i == 0) || (i == mitad)) && ((j == height) || (j == (width - mitad)))) || 
          (((i == lado) || (i == mitad + lado)) && ((j == height + lado) || (j == (width - lado))))) {     
        color1 = c1;
        color2 = c2;
      } else {
        color1 = c2;
        color2 = c1;
      }
      hacerCuadrado(color1, color2, j, i, j + lado, i, j + lado, i + lado, j, i + lado); // llama a la función 
    }
  }
}

function hacerCuadrado(c1, c2, x1, y1, x2, y2, x3, y3, x4, y4) {
  fill(c1);
  noStroke();
  quad(x1, y1, x2, y2, x3, y3, x4, y4);
  let centro; // esta variable es para poder armarme el cuadrado interior
  centro = calcularDistancia(x1, y1, x2, y2); // todos los cuadrados miden lo mismo
  fill(c2);
  quad(x1 + centro, y1, x2, y2 + centro, x3 - centro, y3, x4, y4 - centro);
}

// función que retorna con parámetros
function calcularDistancia(x1, y1, x2, y2) {
  let distancia = dist(x1, y1, x2, y2); // distancia entre los dos puntos
  let esq = distancia / 2;
  return (esq);
}

function mouseClicked() {
  if ((mouseX > height) && (mouseX < width) && (mouseY > 0) && (mouseY < height)) {
    if (!click){
      click=true;
    }else{
      //Reseteo valores
      click=false;
      color1 = 0;
      color2 = 0;
    }
  }
}
