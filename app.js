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
    tagText: "Podaj 5(Mały lotek) lub 6(duży lotek) niepowtarzalnych liczb oddzielonych przecinkiem i kliknij 'Dalej'. Rozpocznie się losowanie"
})

const inputRef = createTag({
    tagName: "input",
    tagAttrs: [{name: 'type', value: 'text'}, {name:'name', value: 'userNumbers'}],

    tagId: "inputNumbers"

})

const buttonRef = createTag({
    tagName: "button",
    tagText: "Dalej",
    tagEvt: [
        {
            type: "click",
            callback: checkUserNumbers
        }
    ]

})

const resultRef = createTag({
    tagName: "p",
    tagText: "Ilość trafień: "
})

const resultValue = createTag({
    tagName: "span",
    tagId: "resultValue",
    tagText: ""
})

const winRef = createTag({
    tagName: "p",
    tagText: "Wygrałeś:"
})

const winValue = createTag({
    tagName: "span",
    tagId: "winValue",
    tagText: ""
})


const resultRefTag = document.getElementById("resultValue");
const winRefTag = document.getElementById("winValue");

function checkUserNumbers(){
    const numbersInput = document.getElementById("inputNumbers")
    const userNumbers = numbersInput.value.split(",");
    if(userNumbers.every(el=> !isNaN(el))) {


        if (userNumbers.length === 6 || userNumbers.length === 5) {
            console.log("jestm tu 1")
            const range = userNumbers.length === 6 ? 50 : 36;
            const arr = [];
            while (arr !== userNumbers.length) {
                let num = Math.floor(Math.random() * range)
                if (arr.indexOf(num) === -1) {
                    arr.push(num)
                }
            }
            // resultRef.value = arr.filter((el) => userNumbers.includes(el)).length
            const mainPrize = 1000000
            resultRefTag.innerText = 3;
            winRefTag.innerText = 100;
            // winRef.value = resultRef.value === userNumbers.length ? mainPrize : 0
        }else{
            alert("Podaj poprawna ilość liczb( 5 lub 6)!")
            numbersInput.value = ""
        }
    }

    else {


        alert("Wpisz poprawne liczby!");
        numbersInput.value = "";
    }

}

document.body.appendChild(h1Ref)
document.body.appendChild(h3Ref)
document.body.appendChild(inputRef)
document.body.appendChild(buttonRef)
document.body.appendChild(resultRef)
resultRef.appendChild(resultValue)
document.body.appendChild(winRef)
winRef.appendChild(winValue)