import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-confirmation-modal',
  template: `
    <h1 mat-dialog-title>Confirmar eliminación</h1>
    <div mat-dialog-content>
      <p>¿Estás seguro de que deseas eliminar esta contraseña?</p>
    </div>
    <div mat-dialog-actions>
      <button mat-button mat-dialog-close>Cerrar</button>
      <button mat-button color="warn" [mat-dialog-close]="true">Eliminar</button>
    </div>
  `,
})
export class DeleteConfirmationModalComponent {
  constructor(
    public dialogRef: MatDialogRef<DeleteConfirmationModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}
}
