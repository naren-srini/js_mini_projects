const panels = document.querySelectorAll('.panel')

panels.forEach(function(panel) {
    panel.addEventListener('mouseover', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
});

function removeActiveClasses() {
    panels.forEach(function(panel) {
        panel.classList.remove('active')
    })
}