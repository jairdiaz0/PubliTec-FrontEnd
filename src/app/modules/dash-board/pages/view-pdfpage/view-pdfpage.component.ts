import { Component, Input } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-pdfpage',
  templateUrl: './view-pdfpage.component.html',
  styleUrls: ['./view-pdfpage.component.css'],
})
export class ViewPDFPageComponent {
  pdfUrl: any;

  constructor(
    private _sanitizer: DomSanitizer,
    private _activeRoute: ActivatedRoute
  ) {}
  ngOnInit() {
    const { src } = this._activeRoute.snapshot.params;
    if (src) {
      this.pdfUrl = this._sanitizer.bypassSecurityTrustResourceUrl(src);
    }
  }
}
