import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-dialog-overview-dialog',
  templateUrl: './dialog-overview-dialog.component.html',
  styleUrls: ['./dialog-overview-dialog.component.css']
})
export class DialogOverviewDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogOverviewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
