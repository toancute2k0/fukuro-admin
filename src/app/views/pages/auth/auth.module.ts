import { NgModule } from '@angular/core';
import { CKEditorModule } from 'ng2-ckeditor';

import { ThemeModule } from '../../layouts/theme.module';

import { AuthRoutingModule, routedComponents } from './auth-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule, NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbUserModule,
} from '@nebular/theme';

import { TagInputModule } from 'ngx-chips';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  imports: [
    ReactiveFormsModule,
    FormsModule,
    TagInputModule,
    ThemeModule,
    AuthRoutingModule,
    CKEditorModule,
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbCheckboxModule,
    NbDatepickerModule, NbIconModule,
    NbInputModule,
    NbRadioModule,
    NbSelectModule,
    NbUserModule,
    Ng2SmartTableModule,
  ],
  declarations: [

    ...routedComponents,
  ],
})
export class AuthModule { }
