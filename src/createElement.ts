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
