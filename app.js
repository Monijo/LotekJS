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