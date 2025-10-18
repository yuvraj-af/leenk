

export function createTemplate(rawHtml: string): HTMLElement {
    const template = document.createElement("template");
    template.innerHTML = rawHtml;
    return template.content.firstElementChild as HTMLElement;
}