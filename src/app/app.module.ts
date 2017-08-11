// imports of Angular modules
import { NgModule, enableProdMode } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

// imports of PrimeNg
import { MenuItem } from "primeng/primeng";
import {
  InputTextModule, CheckboxModule, RadioButtonModule, DropdownModule,
  InputMaskModule, SliderModule, SpinnerModule, InputTextareaModule,
  RatingModule, FileUploadModule
} from "primeng/primeng";
// Button
import { ButtonModule, SplitButtonModule } from "primeng/primeng";
// Data
import { DataTableModule, FieldsetModule } from "primeng/primeng";
// Panel
import { PanelModule, TabViewModule, ToolbarModule, AccordionModule, SharedModule } from "primeng/primeng";
// Overlay
import { DialogModule, OverlayPanelModule, TooltipModule, ConfirmDialogModule } from "primeng/primeng";
// Menu
import { MenuModule, TabMenuModule, PanelMenuModule, MenubarModule, ContextMenuModule } from "primeng/primeng";
// Messages
import { MessagesModule, GrowlModule } from "primeng/primeng";
// DragDrop
import { DragDropModule } from "primeng/primeng";
// TreeModule
import { TreeModule } from "primeng/primeng";
// Providers
import { ConfirmationService } from "primeng/primeng";


// FireBase
import { AngularFireDatabaseModule } from "angularfire2/database";
import { AngularFireAuthModule } from "angularfire2/auth";
import { firebaseConfig } from "../environments/firebase.config";
import { AngularFireModule } from "angularfire2";

// SPA
import { DemoDataService } from "./services/demo-data.service";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

// Reactive
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";
import "rxjs/add/operator/shareReplay";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/catch";

import "rxjs/add/observable/forkJoin";
import "rxjs/add/observable/of";

import { Observable } from "rxjs/Observable";

const debug = true;

Observable.prototype.debug = function (aMessage: string) {
  return this.do(
    nextValue => {
      if (debug) {
        console.log(aMessage, nextValue);
      }
    },
    error => {
      if (debug) {
        console.error(aMessage, error);
      }
    },
    () => {
      if (debug) {
        console.log("Observable completed - ", aMessage);
      }
    }
  );
};

declare module "rxjs/Observable" {
  interface Observable<T> {
    debug: (...any) => Observable<T>;
  }
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    GrowlModule,
    HttpClientModule,
    MenuModule,
    MenubarModule,
    MessagesModule,
    AppRoutingModule
  ],
  providers: [DemoDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
