import { MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatCardModule,
        MatListModule, MatToolbarModule, MatDialogModule, MatDatepickerModule, MatNativeDateModule } from '@angular/material';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
      imports: [
        MatDatepickerModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatIconModule,
        MatCardModule,
        MatListModule,
        MatToolbarModule,
        MatDialogModule,
        BrowserAnimationsModule,
        MatNativeDateModule,
      ],
      exports: [
        MatDatepickerModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatIconModule,
        MatCardModule,
        MatListModule,
        MatToolbarModule,
        MatDialogModule,
        MatNativeDateModule,
        BrowserAnimationsModule
      ],
      providers: [ MatDatepickerModule ],
})
export class MaterialModule { }
