class Personagem{
    constructor(){
        this.imagem = personagem;
        this.largura = 0;
        this.altura = 190;
        this.velocidade = 5;
        this.posX = 30;
        this.posY = 350;
        this.pulando =0;
        this.alturaPulo= base-200;
}

    aparece(){
        image(this.imagem, this.posX, this.posY, this.largura, this.altura);

        pontos ++
        
if(this.pulando ==1){
  this.posY -= this.velocidade;
  if (this.posY<= this.alturaPulo){
    this.velocidade = this.velocidade * -1;

  }
  if(this.posY== chao){
    this.pulando=0;
this.velocidade = this.velocidade *-1;

  }
}
    }
    pulo(){
        this.pulando = 1;
    }
}
