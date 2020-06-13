import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from '../../material';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { DialogOverviewDialogComponent } from './dialog-overview-dialog/dialog-overview-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SearchPipe } from '../../pipes/search/search.pipe';
import { SearchVPipe } from '../../pipes/searchValue/search-v.pipe';
import { SearchPPipe } from '../../pipes/searchPoints/search-p.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [ HomeComponent, NavbarComponent, DialogOverviewDialogComponent, SearchPipe, SearchVPipe, SearchPPipe ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  exports: [ HomeComponent, DialogOverviewDialogComponent, SearchPipe, SearchVPipe , SearchPPipe, BrowserAnimationsModule ],
  entryComponents: [DialogOverviewDialogComponent],
})
export class PagesModule { }
