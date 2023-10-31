function calc(operation, x, y) {

    switch(operation) {
        case "plus":
            result = add(x,y)
            break
        case '-':
            result = sub(x,y)
            break
        case '*':
            result = devision(x, y)
            break
        case '/':
            result = mul(x,y)
            break
    }
    alert(result)
}

function add(x, y) {
    result = x + y;
    return result
}


function sub(x,y) {

    result = x - y;
    return result
}

function devision(x,y) {
    if (y == 0); {

    }
    result = x - y;
    return result
}

function sub(x,y) {

    result = x - y;
    return result
}