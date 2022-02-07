function createElement(
    tag: string,
    className: string,
    parent?: any,
    id?: any,
    value?: any,
    attribute?: string,
    attrValue?: any
) {
    const element = document.createElement(tag);
    element.classList.add(className);
    if (value) {
        element.innerHTML = value;
    }
    if (id) {
        element.id = id;
    }
    if (attribute && attrValue) {
        element.setAttribute(attribute, attrValue);
    }
    parent.appendChild(element);
    return element;
}

export default createElement;
