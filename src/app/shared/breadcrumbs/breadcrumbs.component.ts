import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { map, filter } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.css']
})
export class BreadcrumbsComponent implements OnInit {

  title: string;

  constructor(
    private router: Router,
    private pageTitle: Title,
    private meta: Meta) {

    this.getDataRoute().subscribe(data => {
      this.title = data.title;
      this.pageTitle.setTitle(data.title);
      const metaTag: MetaDefinition = {
        name: 'description',
        property: data.description
      };
      this.meta.addTag(metaTag);
    });
   }

  ngOnInit() {
  }

  getDataRoute(): Observable<any> {
    return this.router.events.pipe(
      filter( event => event instanceof ActivationEnd),
      filter((event: ActivationEnd) => event.snapshot.firstChild === null),
      map((event: ActivationEnd) => {
        return event.snapshot.data;
      })
    );
  }

}
