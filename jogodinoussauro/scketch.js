let personagem;
let obstaculo;
let obstaculo2;
let fundo_parado;
let fundo_movimenta;
let pontos = 0;
let chao = 370;
let base = 370;
function preload(){
    //* Carregar as imagens nas variaveis

    personagem = loadImage("img_jogo/personagem.gif");
    obstaculo = loadImage("img_jogo/objeto.png");
    obstaculo2 = loadImage("img_jogo/objeto2.png");
    fundo_parado = loadImage("img_jogo/fundomovel.png");
    //*fundo_movimenta = loadImage ("img_jogo/fundomovel.png");

}

function setup() {
  //Configurações inciais
  // criar canvas com o tamanho certo
    createCanvas(800, 600).parent("jogo");
    fundo_parado = new Fundo_parado();
    personagem = new Personagem();
    obstaculo = new Obstaculo();
    obstaculo2 = new Obstaculo2();
  }
  
  function keyPressed(){
    if(keyCode == 32){
      personagem.pulo();
    }
  }
  function draw() {
    //*coloca a imagem no background
    fundo_parado.apareca();
fundo_parado.movimenta();
personagem.aparece();
obstaculo.aparecer();
obstaculo.movimentar();
obstaculo2.aparecee();
obstaculo2.movimentaa();
  
   print(pontos)
         
   text("Pontuação:" + pontos,350,15) 
   text
   
 
  }