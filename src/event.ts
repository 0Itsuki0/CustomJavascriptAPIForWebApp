

export class MyEvents {
    private _eventCallbacks: {
        [key: string]: Function[];
    };
    private _pageData: { [key: string]: any } = {};

    public constructor(pageData: { [key: string]: any }) {
        this._eventCallbacks = {};
        this._pageData = pageData
        this.injectEvents()
    }

    // set the callback for a event
    public on(eventName: string, callback: Function): void {
        if (!this._eventCallbacks.hasOwnProperty(eventName)) {
            this._eventCallbacks[eventName] = [];
        }

        this._eventCallbacks[eventName].push(callback);
        return;
    }

    private injectEvents(): void {

        window.addEventListener('load', (_event: Event) => {

            // inject event on page load
            this.injectOnLoadEvent();

            // inject event on button click
            this.injectConfirmEvent();

        });
    }

    private injectOnLoadEvent() {
        const showEventName = `itsuki.show`;
        if (!this.has(showEventName)) {
            return;
        }
        this.fire(showEventName, {
            "created_at": new Date(),
            "message": "Welcome to Itsuki's world!",
            "data": this._pageData
        });
    }

    private injectConfirmEvent() {
        const functionName = 'formConfirm';
        if (!window.hasOwnProperty(functionName)) {
            console.log("not defined")
            return;
        }

        const self: MyEvents = this as MyEvents;
        const confirmFunction: Function = (<any>window)[functionName];

        (<any>window)[functionName] = async function (): Promise<any> {
            const arguments_org = arguments;
            const eventName = `itsuki.confirm`;
            if (!self.has(eventName)) {
                return confirmFunction.apply(this, arguments_org);
            }
            const canProgress = await self.fire(eventName, {
                "created_at": new Date(),
                "message": "Return false to terminate the process!",
                "data": { ...self._pageData, ...self.buildInputData() }
            })

            if (canProgress) {
                // proceeed on to the original process
                return confirmFunction.apply(this, arguments_org);
            }

        };
    }

    private buildInputData(): { [key: string]: any } {
        let inputData: { [key: string]: any } = {}
        const inputs = document.getElementsByTagName("input");
        [...inputs].forEach(element => {
            inputData[element.id] = element.value
        });

        return inputData
    }


    private has(eventName: string): boolean {
        return this._eventCallbacks.hasOwnProperty(eventName);
    }

    private async fire(eventName: string, eventData: { [key: string]: any }): Promise<boolean> {
        const callbacks: Function[] = this._eventCallbacks[eventName];
        if (!callbacks) {
            return true;
        }
        const callbackResults: any[] = await Promise.all(
            callbacks.map(async (callback: Function) => {
                try {
                    return await callback(eventData);
                } catch (error) {
                    console.error(error);
                    return false;
                }
            })
        );

        for (const result of callbackResults) {
            if (typeof result === 'boolean' && !result) {
                return false;
            }
        }

        return true;
    }

}