import { Component, inject } from '@angular/core';
import { Header } from './header/header';
import { Hero } from './hero/hero';
import { Akashic } from './treatments/akashic/akashic';
import { Usui } from './treatments/usui/usui';
import { Lahochi } from './treatments/lahochi/lahochi';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { SeoService } from './services/SEO';
import { Notification } from './notification/notification.component';
import { Footer } from './footer/footer';
import { LegalNoticeComponent } from './legal-mentions/legal-notice.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
  imports: [Header, Hero, Akashic, Usui, Lahochi, About, Contact, Footer,  Notification, LegalNoticeComponent]
})
export class AppComponent {
  private seoService = inject(SeoService);
  
  constructor() {
    this.seoService.updateSEO({
      title: 'Jocelyne DUBA - Reiki Usui, LaHoChi & Annales Akashiques',
      description: 'Praticienne certifiée en soins énergétiques : Reiki Usui (60€), LaHoChi (60€), Annales Akashiques (90€). Séances pour bien-être, équilibre et guidance spirituelle.',
      keywords: 'reiki usui, lahochi, annales akashiques, Jocelyne Duba, soins énergétiques, bien-être, guérison, guidance spirituelle, chakras, vies antérieures',
      ogTitle: 'Jocelyne DUBA - Praticienne Reiki & Guérison Énergétique',
      ogDescription: 'Découvrez les soins énergétiques Reiki Usui, LaHoChi et les lectures d\'Annales Akashiques avec Jocelyne Duba, praticienne certifiée.',
      structuredData: {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Jocelyne DUBA Reiki",
        "description": "Praticienne certifiée en Reiki Usui, LaHoChi et lecture des Annales Akashiques",
        "url": "https://votre-site.com",
        "priceRange": "60€-90€",
        "serviceType": "Soins énergétiques",
        "provider": {
          "@type": "Person",
          "name": "Jocelyne Duba"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Services de soins énergétiques",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Reiki Usui",
                "description": "Technique de guérison énergétique japonaise par imposition des mains"
              },
              "price": "60",
              "priceCurrency": "EUR"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "LaHoChi",
                "description": "Technique de guérison énergétique de haute fréquence"
              },
              "price": "60",
              "priceCurrency": "EUR"
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Annales Akashiques",
                "description": "Lecture certifiée pour explorer vos vies antérieures et mission d'âme"
              },
              "price": "90",
              "priceCurrency": "EUR"
            }
          ]
        }
      }
    });
  }
}