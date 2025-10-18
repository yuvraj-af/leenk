import './links.css'


export function createlinks(): HTMLElement { 
    const template = document.createElement("div");
    template.classList.add("wrapper");

    template.append(createLinkComponent("GitHub"));
    template.append(createLinkComponent("Instagram"))
    template.append(createLinkComponent("Twitter"))
    template.append(createLinkComponent("Discord"))

    return template as HTMLElement;
 }


function createLinkComponent(link: string): HTMLElement {
    const container = document.createElement("div");
    container.classList.add("link_wrapper");
    const p = document.createElement("p")
    p.innerHTML = `<p>${link}</p>`;
    container.append(p);
    console.log(container);
    return container as HTMLElement;
}