import { MyEvents } from "./event";

const global_window: any = <any>window;
if (!global_window.hasOwnProperty('itsuki')) {
    global_window.itsuki = {};
}
const pageData: { [key: string]: any } = global_window.itsuki.hasOwnProperty('pageData') ? global_window.itsuki.pageData : {};
console.log(pageData)

global_window.itsuki['events'] = new MyEvents(pageData);
