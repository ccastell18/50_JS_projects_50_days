const panels = document.querySelectorAll('.panel')

panels.forEach((panel) =>{
  panel.addEventListener('click', () =>{
    remvoeActiveClasses()
    panel.classList.add('active')
  })
})

const remvoeActiveClasses = () =>{
  panels.forEach((panel) =>{
    panel.classList.remove('active')
  })
}