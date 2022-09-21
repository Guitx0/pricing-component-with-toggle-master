let check = document.getElementById('price')
let planAnually = document.querySelectorAll('.annual')
let planMonthly = document.querySelectorAll('.month')


for(let i=0; i < planAnually.length; i++) {
    planMonthly[i].style.display = 'none'   
}

check.addEventListener('change', function() {
    if(check.checked) {
        for(i = 0; i < planMonthly.length; i++) {
            planAnually[i].style.display = 'none'
            planMonthly[i].style.display = 'inline-block'
        }
    } else {
        for( i = 0; i < planAnually.length; i++) {
            planMonthly[i].style.display = 'none'
            planAnually[i].style.display = 'inline-block'
        }
    }
})