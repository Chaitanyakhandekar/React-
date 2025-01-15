let mainContainer = document.querySelector('#root')

//* --------------------------function for custom Render which creates and adds element to html -----------------------------

//! this is not optimal or correct way because it doesnt work for more attributes than 2 or less than 2
// function customRender(reactElement,container){          
//     let element = document.createElement(reactElement.type)
//     element.setAttribute('href',reactElement.props.href)
//     element.setAttribute('target',reactElement.props.target)
//     element.innerHTML = reactElement.children
//     container.appendChild(element)
// }

//! correct way to do it
function customRender(reactElement,container){
    element = document.createElement(reactElement.type)
    element.innerHTML = reactElement.children

    for(const prop in reactElement.props){
        element.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(element)
}

//*--------------------------------------------------------------------------------------------------------------------------



let reactElement = {        //* creating custom react element
    type:'a',
    props:{
        href:'https://google.com',
        target:'_blank'
    },
    children:'click to visit Google'
}

customRender(reactElement,mainContainer)