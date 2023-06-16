class Obstaculo2{
    constructor(){
        this.imagem = obstaculo2;
        this.largura = 100;
        this.altura = 170;
        this.velocidade = 3;
        this.posX = 1600;
        this.posY = 430;
    }  

 aparecee(){
    image(this.imagem, this.posX, this.posY, this.largura, this.altura);
 }
        
 //movimentação dos obstáculos.
 movimentaa(){
    this.posX -= this.velocidade;
    if(this.posX <= -20){
        this.posX = 800
    }
  }
}
