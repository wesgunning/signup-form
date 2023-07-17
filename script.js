const pwd = document.getElementById('pwd');
pwd.addEventListener('input', compare);
const confirm = document.getElementById('confirm');
confirm.addEventListener('input', compare)

function compare() {
    if (pwd.value.length > 0 && confirm.value.length === pwd.value.length) {
        for (let i=0; i<confirm.value.length; i++) {
            if (confirm.value[i] !== pwd.value[i]) {
                console.log('false');
                pwd.setCustomValidity('Invalid');
                confirm.setCustomValidity('Invalid');
                return false;
            }
        }
        console.log('true')
        pwd.setCustomValidity('');
        confirm.setCustomValidity('');
        return true;
    }
    else {
        pwd.setCustomValidity('Invalid');
        confirm.setCustomValidity('Invalid');
        return false;
    }
}