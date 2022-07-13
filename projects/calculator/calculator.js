let buttons = [...document.getElementsByClassName("btn")]
let calculator = document.getElementById('calculator')
// console.log(buttons);

let screen = document.getElementById('screen')
buttons.forEach((button) => {
    // console.log(button.innerText);
    button.addEventListener('click', () => {
        if (button.innerText == 'c') {
            screen.value = ""
        } else if (button.innerText == '=') {
            try {
                let result = eval(screen.value)
                screen.value = result
            } catch {
                screen.value = "error"
            }

        } else if (button.innerText == 'light') {
            lightMode(button)

        } else if (button.innerText == 'dark') {
            darkMode(button)
        } else
            screen.value = screen.value + button.innerText
    })
})


function lightMode(button) {
    screen.style.background = 'white'
    screen.style.color = 'black'
    button.innerText = 'dark'
    calculator.style.background = 'white'
    document.body.style.background = 'white'

}
function darkMode(button) {
    screen.style.background = 'black'
    screen.style.color = 'white'
    button.innerText = 'light'
    calculator.style.background = 'black'
    document.body.style.background = 'black'
}