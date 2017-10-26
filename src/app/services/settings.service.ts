import { Injectable } from '@angular/core';
import { Settings } from "../models/settings";

@Injectable()
export class SettingsService {

    settings: Settings={
        isRegisterOpen:true,
        disabledSalary:true,
        isSalaryEdiable:true
    }
    constructor() { }

    getSettings(){
        return this.settings;
    }
}