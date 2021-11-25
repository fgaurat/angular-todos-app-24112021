import { NgModule } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [],
  exports:[
    MatTableModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class MaterialModule { }
