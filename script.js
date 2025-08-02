let button = document.querySelector('button#switch-theme')
let icon = document.querySelector('i#ico')
let body = document.querySelector('body')
const savedtheme = localStorage.getItem('theme')
if(savedtheme === 'light'){
    body.classList.add('light')
    icon.textContent = 'dark_mode'
}else if(savedtheme === 'dark'){
    body.classList.add('dark')
    icon.textContent = 'light_mode'
}else{
    body.classList.add('dark')
    icon.textContent = 'light_mode'
}

button.addEventListener('click', switchTheme)

function switchTheme(){
    
        if(body.classList.contains('dark')){
            icon.textContent = 'light_mode'
            body.classList.replace('dark', 'light')
            localStorage.setItem('theme', 'light')
        }else if(body.classList.contains('light')){
            body.classList.replace('light', 'dark')
            icon.textContent = 'dark_mode'
            localStorage.setItem('theme', 'dark')
        }
    

}
    
