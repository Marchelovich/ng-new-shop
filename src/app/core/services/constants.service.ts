import { InjectionToken } from "@angular/core";
import {InfoModel} from "../models/info.model";

export const info = {
  App: 'TaskManager',
  Ver: '1.0',
  API_URL: 'http://...',
}
export const INFORMATION = new InjectionToken<InfoModel>('info')
