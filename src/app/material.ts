import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { NgModule } from '@angular/core';

@NgModule({
    imports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatToolbarModule, MatListModule],
    exports: [MatButtonModule, MatCheckboxModule, MatInputModule, MatToolbarModule, MatListModule],
})
export class MaterialModule { }