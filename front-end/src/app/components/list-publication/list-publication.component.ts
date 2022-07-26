import { Component, OnInit } from '@angular/core';
import { PublicationService } from '../../services/publication.service';

@Component({
  selector: 'app-list-publication',
  templateUrl: './list-publication.component.html',
  styleUrls: ['./list-publication.component.css']
})
export class ListPublicationComponent implements OnInit {

  constructor(private publicationService: PublicationService) { }

  ngOnInit(): void {
    this.getPublications();
  }

  allPublications = [];
  publications = [];

  public getPublications() {
    this.publicationService.getPublications().subscribe(
      (data) => {
        this.publications = data;
        this.allPublications = data;
      }
    );
  }

  search = '';

  public searchPublication() {
    if (this.search === '') {
      this.publications = this.allPublications;
      return;
    }

    const publicationsByISBN = this.allPublications.filter(
      (publication: any) => publication['ISBN'].toLowerCase().includes(this.search.toLowerCase())
    );

    const publicationsByTitle = this.allPublications.filter(
      (publication: any) => publication['Titulo'].toLowerCase().includes(this.search.toLowerCase())
    );

    this.publications = [...publicationsByISBN, ...publicationsByTitle];
  }
}
