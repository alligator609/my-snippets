import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { IconModule } from '@visurel/iconify-angular';
import { BreadcrumbsModule } from 'src/@vex/components/breadcrumbs/breadcrumbs.module';
import { HighlightModule } from 'src/@vex/components/highlight/highlight.module';
import { PageLayoutModule } from 'src/@vex/components/page-layout/page-layout.module';
import { SecondaryToolbarModule } from 'src/@vex/components/secondary-toolbar/secondary-toolbar.module';
import { ContainerModule } from 'src/@vex/directives/container/container.module';
import { VexRoutes } from 'src/@vex/interfaces/vex-route.interface';
import { ComponentsOverviewAutocompleteModule } from '../ui/components/components-overview/components/components-overview-autocomplete/components-overview-autocomplete.module';
import { AngularAllComponentsComponent } from './angular-all-components/angular-all-components.component';
import { CopyToClipboardComponent } from './angular-all-components/components/copy-to-clipboard/copy-to-clipboard.component';
import { DeepCopyComponent } from './angular-all-components/components/deep-copy/deep-copy.component';
import { TempleteDrivenValidationComponent } from './angular-all-components/components/templete-driven-validation/templete-driven-validation.component';


const routes: VexRoutes = [
  {
    path: '',
    component: AngularAllComponentsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
    CommonModule,
    FormsModule,
    ComponentsOverviewAutocompleteModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatIconModule,
    MatButtonModule,
    FlexLayoutModule,
    MatTabsModule,
    ReactiveFormsModule,
    HighlightModule,
    IconModule,
    PageLayoutModule,
    FlexLayoutModule,
    SecondaryToolbarModule,
    MatRippleModule,
    BreadcrumbsModule,
    ContainerModule],
  exports: [RouterModule],
  declarations:[CopyToClipboardComponent,
    AngularAllComponentsComponent,
    TempleteDrivenValidationComponent,
    DeepCopyComponent
  ]
})
export class AngularComponentsRoutingModule {
}
