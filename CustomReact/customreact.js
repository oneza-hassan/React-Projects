const reactElement={
    type: 'a', // HTML tag type (e.g., 'a', 'div')
    props: {  // Attributes/properties of the tag
        href: "http://google.com",
        target: "_blank"
    },
    children: "click me to visit google!" 
}

function customRendor(reactElement, container){
    // Step 1: Create the DOM element
    const domElement=document.createElement(reactElement.type)

    // Step 2: Set content (children)
    domElement.innerHTML= reactElement.children // 'innerHTML' is case-sensitive!

    // Step 3: Set attributes (props)
    for (const prop in reactElement.props) {
        if (prop == 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }

    // another way to write it is below
    // domElement.setAttribute("href", reactelement.props.href)
    // domElement.setAttribute("target", reactelement.props.target)

    // Step 4: Append to the container
    container.appendChild(domElement);
}

const mainContainer=document.querySelector("#root")

customRendor(reactElement, mainContainer)

