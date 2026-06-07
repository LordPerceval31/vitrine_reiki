import { Component, inject } from '@angular/core';
import { Header } from './header/header';
import { Hero } from './hero/hero';
import { Akashic } from './treatments/akashic/akashic';
import { Usui } from './treatments/usui/usui';
import { Communication } from './treatments/animal_com/communication';
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
  imports: [
    Header,
    Hero,
    Akashic,
    Usui,
    Lahochi,
    About,
    Contact,
    Footer,
    Notification,
    LegalNoticeComponent,
    Communication,
  ],
})
export class AppComponent {
  private seoService = inject(SeoService);

  constructor() {
    this.seoService.updateSEO({
      title: 'Jocelyne DUBA | Reiki Usui, LaHoChi, Annales Akashiques & Communication Animale',
      description:
        "Praticienne certifiée en Reiki Usui, LaHoChi, Annales Akashiques (archives akashiques) et Communication Animale. Séances de soins énergétiques pour votre bien-être, équilibre intérieur et guidance spirituelle.",
      keywords:
        "reiki usui, lahochi, annales akashiques, archives akashiques, archive akashique, communication animale, soin énergétique, soin reiki, bien-être, chakras, vies antérieures, guérison énergétique, Jocelyne Duba, praticienne certifiée, médecine douce, thérapie alternative, équilibre énergétique, stress, anxiété, mission d'âme, télépathie animale, soin animal, schémas karmiques, lâcher prise, énergie vitale, soin holistique",
      ogTitle: 'Jocelyne DUBA | Praticienne Reiki, LaHoChi, Annales Akashiques & Communication Animale',
      ogDescription:
        "Découvrez les soins énergétiques Reiki Usui, LaHoChi, les lectures d'Annales Akashiques et la Communication Animale avec Jocelyne Duba, praticienne certifiée.",
      structuredData: {
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Mon Soin Énergétique - Jocelyne DUBA',
        description:
          'Praticienne certifiée en Reiki Usui, LaHoChi, Annales Akashiques et Communication Animale',
        url: 'https://mon-soin-energetique.fr',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Gagnac-sur-Garonne',
          addressRegion: 'Haute-Garonne',
          addressCountry: 'FR',
        },
        areaServed: ['Gagnac-sur-Garonne', 'Toulouse', 'France'],
        priceRange: '60€-90€',
        serviceType: 'Soins énergétiques',
        provider: {
          '@type': 'Person',
          name: 'Jocelyne Duba',
          jobTitle: 'Praticienne certifiée en soins énergétiques',
          knowsAbout: ['Reiki Usui', 'LaHoChi', 'Annales Akashiques', 'Communication Animale'],
        },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Services de soins énergétiques',
          itemListElement: [
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Reiki Usui',
                description:
                  "Technique de guérison énergétique japonaise par imposition des mains, reconnue par l'OMS",
              },
              price: '60',
              priceCurrency: 'EUR',
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'LaHoChi',
                description:
                  'Technique de guérison énergétique de haute fréquence aux racines chinoises',
              },
              price: '60',
              priceCurrency: 'EUR',
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Annales Akashiques',
                description:
                  "Lecture certifiée des archives akashiques pour explorer vos vies antérieures, mission d'âme et schémas karmiques",
              },
              price: '90',
              priceCurrency: 'EUR',
            },
            {
              '@type': 'Offer',
              itemOffered: {
                '@type': 'Service',
                name: 'Communication Animale',
                description:
                  'Communication télépathique avec votre animal pour comprendre ses ressentis, besoins et émotions',
              },
              price: '60',
              priceCurrency: 'EUR',
            },
          ],
        },
      },
    });
  }
}
