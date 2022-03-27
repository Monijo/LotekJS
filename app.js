const createTag = ({tagName="div", tagAttrs, tagText, tagId, tagEvt, tagClass}={})=>{
    const node = document.createElement(tagName);
    if(tagAttrs !== undefined){
        tagAttrs.forEach(({name, value})=>{
            node.setAttribute(name, value)
        })
    }
    if(tagText !== undefined){
        const nodeText = document.createTextNode(tagText)
        node.appendChild(nodeText)
    }
    if(tagId !== undefined){
        node.id = tagId
    }
    if(tagEvt !== undefined){
        tagEvt.forEach(({type, callback})=>{
            node.addEventListener(type, callback)
        })
    }
    if(tagClass !== undefined){
        tagClass.forEach((name)=>{
            node.classList.add(name)
        })
    }
    return node
}

const h1Ref = createTag({
    tagName: "h1",
    tagText: "Witaj graczu!"
    }
)
const h3Ref =createTag({
    tagName: "h3",
    tagText: "Podaj 5(Mały lotek) lub 6(duży lotek) liczb oddzielonych przecinkiem i kliknij 'Dalej'. Rozpocznie się losowanie"
})

const inputRef = createTag({
    tagName: "input",
    tagAttrs: [{name: 'type', value: 'text'}],

    tagId: "inputNumbers"

})

const buttonRef = createTag({
    tagName: "button",
    tagText: "Dalej",

})

const resultRef = createTag({
    tagName: "p",
    tagText: "Ilość trafień: "
})

const resultValue = createTag({
    tagName: "span",
})

const winRef = createTag({
    tagName: "p",
    tagText: "Wygrałeś:"
})

const winValue = createTag({
    tagName: "span"
})

document.body.appendChild(h1Ref)
document.body.appendChild(h3Ref)
document.body.appendChild(inputRef)
document.body.appendChild(buttonRef)
document.body.appendChild(resultRef)
resultRef.appendChild(resultValue)
document.body.appendChild(winRef)
winRef.appendChild(winValue)