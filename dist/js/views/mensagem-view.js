import { View } from "./view.js";
export class MensagemView extends View {
    template(model) {
        return `
            <P class="alert alert-info">${model}</p>
        
        `;
    }
}
