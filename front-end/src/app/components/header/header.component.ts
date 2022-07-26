import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd  } from '@angular/router';
import { TokenStorageService } from '../../services/token-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  currentUrl = this.router.url;

  constructor(private router: Router, private tokenStorage: TokenStorageService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
      }
    });
  }

  token = this.tokenStorage.getToken();
  type = this.tokenStorage.getType();

  logged = false;
  isManager = false;
  showOptions = true;

  ngOnInit(): void {
    this.toggleOptions();
  }

  logout() {
    this.tokenStorage.signOut();
    this.toggleOptions();
    window.location.reload();
  }

  toggleOptions() {
    if (this.token == null) {
      this.logged = false;
    } else {
      this.logged = true;
    }

    if (this.type == 'gerente') {
      this.isManager = true;
    }
  }
}
