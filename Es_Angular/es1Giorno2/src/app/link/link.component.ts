import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.sass'],
})
export class LinkComponent implements OnInit {
  listType: number = 0;
  linkList: any[] = [];

  linkprivati = [
    { titolo: 'Privato 1', link: 'http://privato1.com' },
    { titolo: 'Privato 2', link: 'http://privato2.com' },
  ];

  linkprotetti = [
    { titolo: 'Protetto 1', link: 'http://protetto1.com' },
    { titolo: 'Protetto 2', link: 'http://protetto2.com' },
  ];

  linkpubblici = [
    { titolo: 'Pubblico 1', link: 'http://pubblico1.com' },
    { titolo: 'Pubblico 2', link: 'http://pubblico2.com' },
  ];

  listTitle: string = '';
  showList: boolean = false;
  showWarning: boolean = false;

  checkNumber() {
    this.showList = false;
    this.showWarning = false;

    switch (this.listType) {
      case 1:
        this.listTitle = 'Link Privati';
        this.linkList = this.linkprivati;
        this.showList = true;
        break;
      case 2:
        this.listTitle = 'Link Protetti';
        this.linkList = this.linkprotetti;
        this.showList = true;
        break;
      case 3:
        this.listTitle = 'Link Pubblici';
        this.linkList = this.linkpubblici;
        this.showList = true;
        break;
      default:
        this.showWarning = true;
        break;
    }
  }

  constructor() {}

  ngOnInit(): void {}
}
