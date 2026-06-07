import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  structuredData?: Record<string, unknown>;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private title = inject(Title);
  private meta = inject(Meta);
  private document = inject(DOCUMENT);

  updateSEO(data: SEOData): void {
    this.title.setTitle(data.title);
    this.meta.updateTag({ name: 'description', content: data.description });

    if (data.keywords) {
      this.meta.updateTag({ name: 'keywords', content: data.keywords });
    }

    this.meta.updateTag({ property: 'og:title', content: data.ogTitle || data.title });
    this.meta.updateTag({ property: 'og:description', content: data.ogDescription || data.description });

    if (data.structuredData) {
      this.addStructuredData(data.structuredData);
    }
  }

  private addStructuredData(data: Record<string, unknown>): void {
    const existingScript = this.document.getElementById('structured-data');
    if (existingScript) {
      existingScript.remove();
    }

    const script = this.document.createElement('script');
    script.type = 'application/ld+json';
    script.id = 'structured-data';
    script.textContent = JSON.stringify(data);
    this.document.head.appendChild(script);
  }
}
