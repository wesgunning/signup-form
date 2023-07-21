const pwd = document.getElementById('pwd');
const confirm = document.getElementById('confirm');
pwd.addEventListener('input', compare);
confirm.addEventListener('input', compare);
pwd.addEventListener('input', length);
pwd.addEventListener('input', upperCheck);
pwd.addEventListener('input', symbolCheck);

function compare() {
    if (pwd.value.length > 0 && confirm.value.length === pwd.value.length) {
        for (let i=0; i<confirm.value.length; i++) {
            if (confirm.value[i] !== pwd.value[i]) {
                pwd.setCustomValidity('Invalid');
                confirm.setCustomValidity('Invalid');
                if (Boolean(confirm.parentElement.lastChild.classList == undefined)) {
                    const p = document.createElement('p');
                    p.textContent = ' PASSWORDS DO NOT MATCH';
                    p.classList.add('error');
                    confirm.parentElement.appendChild(p);
                    return false;
                }
            }
        }
        pwd.setCustomValidity('');
        confirm.setCustomValidity('');
        if (confirm.parentElement.lastChild.classList.contains('error')) {
            confirm.parentElement.removeChild(confirm.parentElement.lastChild);
        }
        return true;
    }
    else {
        pwd.setCustomValidity('Invalid');
        confirm.setCustomValidity('Invalid');
        return false;
    }
}
function length() {
    for (i=0; i<pwd.parentElement.children.length; i++) {
        if (Boolean(pwd.parentElement.children[i].classList.contains('length'))) {
            if (pwd.value.length > 7) {
                pwd.parentElement.removeChild(pwd.parentElement.children[i]);
            }
            return;
        }
        else if (i == pwd.parentElement.children.length -1) {
            const p = document.createElement('p');
            p.textContent = ' MUST BE AT LEAST 8 CHARACTERS';
            p.classList.add('error', 'length');
            pwd.parentElement.appendChild(p);
        }
    }
}
function upperCheck() {
    for (i=0; i<pwd.parentElement.children.length; i++) {
        if(Boolean(pwd.parentElement.children[i].classList.contains('upper'))) {
            for (j=0; j<pwd.value.length; j++) {
                const char = pwd.value[j].toUpperCase();
                const reg = /\w/i;
                if (reg.test(char) && char === pwd.value[j]) {
                    pwd.parentElement.removeChild(pwd.parentElement.children[i]);
                    return;
                }
            }
            return;
        }
        else if (i == pwd.parentElement.children.length -1) {
            const up = document.createElement('p');
            up.textContent = ' MUST CONTAIN AN UPPERCASE LETTER';
            up.classList.add('error', 'upper');
            pwd.parentElement.appendChild(up);
        }
    }
}
function symbolCheck() {
    for (i=0; i<pwd.parentElement.children.length; i++) {
        if(Boolean(pwd.parentElement.children[i].classList.contains('symbol'))) {
            for (j=0; j<pwd.value.length; j++) {
                const reg = /[^a-zA-Z0-9 \s]/;
                if (reg.test(pwd.value[j])) {
                    pwd.parentElement.removeChild(pwd.parentElement.children[i]);
                    return;
                }
            }
            return;
        }
        else if (i == pwd.parentElement.children.length -1) {
            const sym = document.createElement('p');
            sym.textContent = ' MUST CONTAIN A SYMBOL';
            sym.classList.add('error', 'symbol');
            pwd.parentElement.appendChild(sym);
        }
    }
}