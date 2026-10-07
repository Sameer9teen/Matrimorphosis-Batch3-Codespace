import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
 // private route = inject(ActivatedRoute);
  trackRender() {
    console.log('navbar Checked');

    return '';
  }
}
