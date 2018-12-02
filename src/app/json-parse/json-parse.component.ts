import { Component, OnInit, ViewChild, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-json-parse',
  templateUrl: './json-parse.component.html',
  styleUrls: ['./json-parse.component.scss']
})
export class JsonParseComponent implements OnInit {

  @ViewChild('treeTrunk')
  treeTrunk: ElementRef;

  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }

  onEnter(value: string): void {
    let jsonObject = JSON.parse(value);
    this.parseObject(jsonObject, this.treeTrunk.nativeElement);
  }

  private parseObject(jsonObject: {}, parentNode: any) {
    let jsonObjectKeys = Object.keys(jsonObject);
    jsonObjectKeys.forEach(key => {
      console.log(key);
      if (jsonObject[key] instanceof Object) {
        const childNode = this.renderer.createElement('ul');
        this.renderer.appendChild(childNode, this.renderer.createText(key));
        this.renderer.appendChild(parentNode, childNode);
        this.parseObject(jsonObject[key], childNode);
      } else if (jsonObject[key] instanceof Function) {
        console.warn('do not parse functions');
      } else {
        const childNode = this.renderer.createElement('li');
        this.renderer.appendChild(childNode, this.renderer.createText(key + ' : ' + jsonObject[key]));
        this.renderer.listen(childNode, 'click', event => this.nodeHandling(event));
        this.renderer.appendChild(parentNode, childNode);
      }
    })
  }

  private nodeHandling(event: Event) {
    console.log(event.target);
  }

}
