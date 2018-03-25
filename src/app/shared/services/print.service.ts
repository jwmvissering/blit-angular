import { Injectable } from "@angular/core";

@Injectable()
export class PrintService {
  canvasProducts: { id; name; url }[] = [
    {
      id: "canvas_20x30",
      name: "Canvas 20 x 30 cm",
      url: "https://test.printapi.nl/v2/products/canvas_20x30"
    },
    {
      id: "canvas_30x20",
      name: "Canvas 30 x 20 cm",
      url: "https://test.printapi.nl/v2/products/canvas_30x20"
    },
    {
      id: "canvas_30x40",
      name: "Canvas 30 x 40 cm",
      url: "https://test.printapi.nl/v2/products/canvas_30x40"
    },
    {
      id: "canvas_40x30",
      name: "Canvas 40 x 30 cm",
      url: "https://test.printapi.nl/v2/products/canvas_40x30"
    },
    {
      id: "canvas_40x40",
      name: "Canvas 40 x 40 cm",
      url: "https://test.printapi.nl/v2/products/canvas_40x40"
    },
    {
      id: "canvas_40x60",
      name: "Canvas 40 x 60 cm",
      url: "https://test.printapi.nl/v2/products/canvas_40x60"
    },
    {
      id: "canvas_60x40",
      name: "Canvas 60 x 40 cm",
      url: "https://test.printapi.nl/v2/products/canvas_60x40"
    },
    {
      id: "canvas_60x60",
      name: "Canvas 60 x 60 cm",
      url: "https://test.printapi.nl/v2/products/canvas_60x60"
    },
    {
      id: "canvas_60x90",
      name: "Canvas 60 x 90 cm",
      url: "https://test.printapi.nl/v2/products/canvas_60x90"
    },
    {
      id: "canvas_90x30",
      name: "Canvas 90 x 30 cm",
      url: "https://test.printapi.nl/v2/products/canvas_90x30"
    },
    {
      id: "canvas_90x60",
      name: "Canvas 90 x 60 cm",
      url: "https://test.printapi.nl/v2/products/canvas_90x60"
    }
  ];

  constructor() {}

  getCanvasProducts(){
    return this.canvasProducts;
  }

  getProductPrice(){
    
  }
}
