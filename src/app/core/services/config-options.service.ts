import { Injectable } from '@angular/core';
import { ConfigModel } from "../models/configModel";

@Injectable({
  providedIn: 'root'
})
export class ConfigOptionsService {
  private config: ConfigModel = new ConfigModel();

  getConfig(): ConfigModel {
    return this.config;
  }

  setConfig(config: Partial<ConfigModel>): void {
    this.config = {...this.config, ...config};
  }

  setConfigProperty(key: 'id' | 'login' | 'email', value: string): void {
    this.config[key] = value;
  }
}
