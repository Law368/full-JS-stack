interface CreateElementProps {
    tag: string;
    className: string;
    id?: string;
    value?: string;
    attribute?: string;
    attrValue?: any;
}

function createElement(props: CreateElementProps) {
    const element = document.createElement(props.tag);
    element.classList.add(props.className);
    if (props.value) {
        element.innerHTML = props.value;
    }
    if (props.id) {
        element.id = props.id;
    }
    if (props.attribute && props.attrValue) {
        element.setAttribute(props.attribute, props.attrValue);
    }
    return element;
}

export default createElement;
