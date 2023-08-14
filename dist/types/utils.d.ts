import { IRelatedApp } from './types/types';
export default class Utils {
    static isAppleMobile(): boolean;
    static isAppleNotificable(): boolean;
    static isStandalone(): boolean;
    static getInstalledRelatedApps(): Promise<IRelatedApp[]>;
    static isRelatedAppsInstalled(): Promise<boolean>;
    static eventInstalledSuccess(_element: Element): void;
    static eventInstalledFail(_element: Element): void;
    static eventUserChoiceResult(_element: Element, message: string): void;
    static eventInstallAvailable(_element: Element): void;
    static eventPermissionsNotification(_element: Element): void;
}
