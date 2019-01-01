function validate() {
    let x = document.getElementById("form:X_text").innerHTML;
    let y = document.getElementById("form:y_input").value;
    let r = parseInt(document.getElementById("form:R_text").innerHTML);
    return (validate_x(x) && validate_r(r) && validate_y(y));
}

function validate_r(r) {
    if (r === "") {
        alrt("R field must be filled out.", "R");
        return false;
    }

    if (r === null) {
        alrt("Wrong R", "R");
        return false;
    }

    if (isNaN(+r)) {
        alrt("R must be a number.", "R");
        return false;
    }


    let correctR = false;
    let arrayR = [1, 2, 3, 4, 5];
    for (let i = 0; i <= 4; i++) {
        if (parseFloat(r) === arrayR[i]) {
            correctR = true;
        }
    }

    if(!correctR) {
        alrt("R must be 1, 2, 3, 4 or 5", "R");
        return false;
    }

    alrt("from 1 to 5", "R");
    return true;
}

function validate_y(y) {

    if (y === "") {
        alrt("Y field must be filled out.", "Y");
        return false;
    }

    if (isNaN(+y)) {

        alrt("Y must be a number.", "Y");
        return false;
    }

    if (y === null) {
        alrt("Wrong Y", "Y");
        return false;
    }

    if (y <= -5 || y >= 5) {
        alrt("Y must be between -5 and 5 and not equal -5 or 5", "Y");
        return false;
    }
    if (y.length > 6) {
        alrt("Y too long", "Y");
        return false;
    }
    alrt("in (-5; 5)", "Y");
    return true;
}

function validate_x(x) {

    if (x === "") {
        alrt("X field must be filled out.", "X");
        return false;
    }

    if (isNaN(+x)) {
        alrt("X must be a number.", "X");
        return false;
    }

    if (x === null) {
        alrt("Wrong X", "X");
        return false;
    }

    let correctX = false;
    let arrayX = [-2, -1, 0, 1, 2];
    for (let i = 0; i <= 4; i++) {
        if (parseFloat(x) === arrayX[i]) {
            correctX = true;
        }
    }

    if(!correctX) {
        alrt("X must be -2, -1, 0, 1 or 2", "X");
        return false;
    }

    alrt("from -2 to 2", "X");
    return true;
}

function alrt(msg, x_or_y_or_r) {
    document.getElementById("alert_block_" + x_or_y_or_r.toUpperCase()).innerHTML = msg; // тут по хитрому считается id alert блока
}