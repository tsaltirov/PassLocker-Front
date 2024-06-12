import { Component, OnInit } from '@angular/core';
import { ModdifyserviceService } from './services/moddifyservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modify-password',
  templateUrl: './modify-password.component.html',
  styleUrl: './modify-password.component.css'
})
export class ModifyPasswordComponent implements OnInit {
  id: string = '';
  nombreDelServicio: string = '';
  nombreDelUsuario: string = '';
  nueva: string = '';

  constructor(private route: ActivatedRoute, private modifyService: ModdifyserviceService, private router:Router) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') || '';
    });
  }

  async modifyPassword() { 
    try {
      await this.modifyService.modifyPassword(this.id, this.nombreDelServicio, this.nombreDelUsuario, this.nueva);
      console.log('Password updated successfully');
      this.router.navigate(['/home'])

    } catch (error) {
      console.error('Error updating password:', error);
    }
  }
}
