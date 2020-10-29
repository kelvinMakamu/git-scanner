import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appRepoLanguage]'
})
export class RepoLanguageDirective implements OnInit {

  @Input('appRepoLanguage') appRepoLanguage: string;

  constructor(private element: ElementRef){ 
  }

  ngOnInit(): void {
    this.element.nativeElement.style.backgroundColor = this.appRepoLanguage;
  }

}
