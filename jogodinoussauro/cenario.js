class Fundo_parado{
    constructor(){
        this.imagem = fundo_parado;
        this.largura = 1600;
        this.altura = 600;
        this.velocidade = 1;
        this.posX = 0;
        this.posY = 0;
        this.yInicial = this.posicaoy;
    this.yFinal = this.posY + this.altura;
    this.xInicial = this.posX;
    this.xFinal = this.posX + this.largura;
}

    apareca(){
        image(this.imagem, this.posX, this.posY, this.largura, this.altura);
} 

    movimenta(){
this.posX -= this.velocidade;
image(this.imagem, this.posX, this.posY, this.largura, this.altura);
this.xInicial = this.posX;
this.XFinal = this.posX + this.largura;
if(this.posX <= -800){
    this.posX = 0;
}
}   
} 