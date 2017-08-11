import { Component, OnInit } from "@angular/core";
import { Message, MenuItem } from "primeng/primeng";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})

export class AppComponent implements OnInit {
  title = "Beta";
  msgs: Message[] = [];
  sticky: boolean = false;
  cItems: MenuItem[];

  ngOnInit(): void { }

  showInfo() {
    this.sticky = !this.sticky;
    this.msgs = [];
    this.msgs.push({ severity: "info", summary: "Info Message", detail: "Info Demo" });
  }

  showWarn() {
    this.sticky = !this.sticky;
    this.msgs = [];
    this.msgs.push({ severity: "warn", summary: "Warn Message", detail: "There are unsaved changes" });
  }

  showError() {
    this.sticky = !this.sticky;
    this.msgs = [];
    this.msgs.push({ severity: "error", summary: "Error Message", detail: "Validation failed" });
  }

  showSuccess() {
    this.sticky = !this.sticky;
    this.msgs = [];
    this.msgs.push({ severity: "succes", summary: "Succes Message", detail: "Succesful" });
  }

  showMultiple() {
    this.sticky = !this.sticky;
    this.msgs = [];
    this.msgs.push({ severity: "info", summary: "Message 1", detail: "Info Demo 1" });
    this.msgs.push({ severity: "info", summary: "Message 2", detail: "Info Demo 2" });
    this.msgs.push({ severity: "info", summary: "Message 3", detail: "Info Demo 3" });
  }

  clear() {
    this.sticky = !this.sticky;
    this.msgs = [];
  }
}

