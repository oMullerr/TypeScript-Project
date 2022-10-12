import { View } from "./view.js";

export class MensagemView extends View<string>{

    template(model: string): string{
        return `
            <P class="alert alert-success">${model}</p>
        
        `
    }
}