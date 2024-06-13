import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DeleteService } from './services/delete.service';

@Component({
  selector: 'app-delete-password',
  templateUrl: './delete-password.component.html',
  styleUrl: './delete-password.component.css'
})
export class DeletePasswordComponent {
  id: string = '';

  constructor(private router: Router, private route: ActivatedRoute, private deleteService: DeleteService) { 
    
  }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id') || '';
    });
  }
    deletePassword(): void {
   
      try{
        this.deleteService.deletePassword(this.id)
      
        console.log(`Contraseña con id ${this.id} eliminada correctamente.`);
        this.router.navigate(['/home'])
      }
      catch(error){
        console.error('Error al eliminar la contraseña:', error);}
        
     
      ;
  }

}
