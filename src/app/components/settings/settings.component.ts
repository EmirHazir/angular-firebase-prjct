import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from "angular2-flash-messages";
import { Router } from "@angular/router";

import { Settings } from "../../models/settings";

import { SettingsService } from "../../services/settings.service";

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

  settings:Settings

  constructor(private flasMessageService: FlashMessagesService,
    private router: Router,
    private settingsService: SettingsService) { }

  ngOnInit() {
    this.settings = this.settingsService.getSettings();
  }

  submitSettings(){
    this.settingsService.changeSettings(this.settings);
    this.flasMessageService.show("settings updated", {cssClass:'alert alert-success', timeout:4000})
    this.router.navigate(['/settings'])
  }

}
