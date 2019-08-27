import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-chess-main',
  templateUrl: './chess-main.component.html',
  styleUrls: ['./chess-main.component.scss']
})

export class ChessMainComponent implements OnInit {

  @ViewChild('canvas', { static: true }) 
  canvas: ElementRef<HTMLCanvasElement>;
  private ctx: CanvasRenderingContext2D;

  private squares = new Array<Square>();


  constructor() { }

  ngOnInit() {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    // this.ctx.fillStyle = 'red';
    // this.ctx.fillRect(0, 0, 5, 5);
  }  
  
  animate(): void {    
    const canvas = this.ctx.canvas;
    const square = new Square(this.ctx);    

    this.squares.push(square);

    setInterval(() => {
      this.ctx.clearRect(0, 0, canvas.width, canvas.height);
      this.squares.forEach((square: Square) => {
        square.moveRight();
      });
    }, 500);
  }
}

export class Square {
  private color = 'green';
  private x = 0;
  private y = 0;
  private z = 30;

  constructor(private ctx: CanvasRenderingContext2D) {}

  private draw() {
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.z * this.x, this.z * this.y, this.z, this.z);    
  }

  moveRight() {
    this.x++;
    this.draw();
  } 
}
