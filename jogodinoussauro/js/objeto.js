class Obstaculo{
    constructor(){
        this.imagem = obstaculo;
        this.largura = 100;
        this.altura = 170;
        this.velocidade = 2;
        this.posX = 20;
        this.posY = 400;
        this.yInicial = this.posicaoy;
    this.yFinal = this.posY + this.altura;
    this.xInicial = this.posX;
    this.xFinal = this.posX + this.largura;
}

    surge(){
        image(this.imagem, this.posX, this.posY, this.largura, this.altura);
} 


}
