// let red , green , blue
// let red2 , green2 , blue2


// red =  Math.ceil( Math.random() * 255 )
// green = Math.random() * 256
// blue =  Math.ceil( Math.random() * 255 )

// let randomBackgroundColor = `rgb(${red} , ${green} , ${blue}) `

// red2 =  Math.ceil( Math.random() * 255 )
// green2 =  Math.ceil( Math.random() * 255 )
// blue2 =  Math.ceil( Math.random() * 255 )

// let randomColor = `rgb(${red2} , ${green2} , ${blue2}) `

// document.body.firstElementChild.children[0].style.backgroundColor = randomBackgroundColor
// document.body.firstElementChild.children[0].style.color = randomColor



// red =  Math.ceil( Math.random() * 255 )
// green =  Math.ceil( Math.random() * 255 )
// blue =  Math.ceil( Math.random() * 255 )

// randomBackgroundColor = `rgb(${red} , ${green} , ${blue}) `

// red2 =  Math.ceil( Math.random() * 255 )
// green2 =  Math.ceil( Math.random() * 255 )
// blue2 =  Math.ceil( Math.random() * 255 )

// randomColor = `rgb(${red2} , ${green2} , ${blue2}) `


// document.body.firstElementChild.children[1].style.backgroundColor = randomBackgroundColor
// document.body.firstElementChild.children[1].style.color = randomColor



// red =  Math.ceil( Math.random() * 255 )
// green =  Math.ceil( Math.random() * 255 )
// blue =  Math.ceil( Math.random() * 255 )

// randomBackgroundColor = `rgb(${red} , ${green} , ${blue}) `

// red2 =  Math.ceil( Math.random() * 255 )
// green2 =  Math.ceil( Math.random() * 255 )
// blue2 =  Math.ceil( Math.random() * 255 )

// randomColor = `rgb(${red2} , ${green2} , ${blue2}) `


// document.body.firstElementChild.children[2].style.backgroundColor = randomBackgroundColor
// document.body.firstElementChild.children[2].style.color = randomColor




// red =  Math.ceil( Math.random() * 255 )
// green =  Math.ceil( Math.random() * 255 )
// blue =  Math.ceil( Math.random() * 255 )

// randomBackgroundColor = `rgb(${red} , ${green} , ${blue}) `

// red2 =  Math.ceil( Math.random() * 255 )
// green2 =  Math.ceil( Math.random() * 255 )
// blue2 =  Math.ceil( Math.random() * 255 )

// randomColor = `rgb(${red2} , ${green2} , ${blue2}) `


// document.body.firstElementChild.children[3].style.backgroundColor = randomBackgroundColor
// document.body.firstElementChild.children[3].style.color = randomColor



// red =  Math.ceil( Math.random() * 255 )
// green =  Math.ceil( Math.random() * 255 )
// blue =  Math.ceil( Math.random() * 255 )

// randomBackgroundColor = `rgb(${red} , ${green} , ${blue}) `

// red2 =  Math.ceil( Math.random() * 255 )
// green2 =  Math.ceil( Math.random() * 255 )
// blue2 =  Math.ceil( Math.random() * 255 )

// randomColor = `rgb(${red2} , ${green2} , ${blue2}) `


// document.body.firstElementChild.children[4].style.backgroundColor = randomBackgroundColor
// document.body.firstElementChild.children[4].style.color = randomColor

function RandomColor() {
    let red =  Math.ceil( Math.random() * 255 )
    let green = Math.ceil( Math.random() * 255 )
    let blue =  Math.ceil( Math.random() * 255 )
    return `rgb(${red} , ${green} , ${blue})`
}
let bt1 = document.querySelector('.b')
bt1.addEventListener("click" ,()=>{
    const nodeList = document.querySelectorAll(".box")
    for (let i = 0; i < nodeList.length; i++) {
     nodeList[i].style.backgroundColor = RandomColor()
     nodeList[i].style.color = RandomColor()
    }
})






