import { Component } from '@angular/core';
import { inject } from "@angular/core";
import { Meta, Title } from '@angular/platform-browser';
import { Header } from './header/header';
import { Hero } from './hero/hero';
import { Akashic } from './treatments/akashic/akashic';
import { Usui } from './treatments/usui/usui';
import { Lahochi } from './treatments/lahochi/lahochi';
import { About } from './About/About';
import { Contact } from './contact/contact';

@Component({
  selector: 'app-root', // Nom du composant en HTML
  templateUrl: './app.html', // Son apparence (template)
  styleUrl: './app.scss', // Son style (CSS)
  imports: [Header, Hero, Akashic, Usui, Lahochi, About, Contact]
})

export class AppComponent {
  private title = inject(Title);
  private meta = inject(Meta);
  
  constructor() {
    this.title.setTitle('Jocelyne DUBA Reiki');
    this.meta.addTag({ name: 'keywords', content: 'reiki, annales akashiques, bien-être, guérison, Jocelyne Duba' });
    this.meta.addTag({ name: 'author', content: 'Jocelyne Duba' });
  }
}