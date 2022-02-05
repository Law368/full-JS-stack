function createElement(
    tag: string,
    className: string,
    id?: any,
    value?: any,
    attribute?: string,
    attrValue?: any,
    parent?: any
) {
    const element = document.createElement(tag);
    element.classList.add(className);
    if (value !== undefined) {
        element.innerHTML = value;
    }
    if (id !== undefined) {
        element.id = id;
    }
    if (attribute !== undefined) {
        element.setAttribute(attribute, attrValue);
    }
    parent.appendChild(element);
    return element;
}

export default createElement;
