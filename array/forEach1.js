const approved = ['Anna', 'Alvaro', 'Casmura', 'Brascuba', 'Stive job', 'Bill Gates']

approved.forEach(function(name, index) {
    console.log(`${index + 1}) ${name}`)

})

approved.forEach(name => console.log(name))

const exibiApproved = approved => console.log(approved)
approved.forEach(exibiApproved)

