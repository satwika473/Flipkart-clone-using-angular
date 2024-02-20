import { Component,OnInit,ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import { NgbDropdownModule, NgbSlide } from '@ng-bootstrap/ng-bootstrap';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import { Router } from '@angular/router';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatIconModule,MatFormFieldModule,NgbDropdownModule,MatMenuModule,MatButtonModule,NgbCarouselModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  goToHome(): void {
    this.router.navigate(['home']);
    
  }
 
}
