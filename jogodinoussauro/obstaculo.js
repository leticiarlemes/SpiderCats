class Obstaculo{
    constructor(){
        this.imagem = obstaculo;
        this.largura = 100;
        this.altura = 170;
        this.velocidade = 3;
        this.posX = 300;
        this.posY = 430;
    }  

 aparecer(){
    image(this.imagem, this.posX, this.posY, this.largura, this.altura);
 }
        
 //movimentação dos obstáculos.
 movimentar(){
    this.posX -= this.velocidade;
    if(this.posX <= -20){
        this.posX = 800
    }
  }
}

    
