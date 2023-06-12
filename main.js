function convert() {
    let a = document.getElementById('num').value;
    a = parseInt(a);

    let c = document.getElementById('unit').value;
    let b = document.getElementById('unit1').value;


    // converted from celsius
    if (c === "cel" && b === "kel") {
        let c = 273.15;
        let z = Math.round((a + c));
        console.log(z)
        console.log(b);
        ans.innerHTML = "The Value in Kelvin is : " + z;
    }
    else if (c === "cel" && b === "far") {
        let z = Math.round(((a * 9 / 5) + 32));
        console.log(z)
        console.log(b)
        ans.innerHTML = "The Value in far is : " + z;
    }
    else if (c === "cel" && b === "cel") {
        let z = Math.round((a * 1));
        console.log(z)
        console.log(b)
        ans.innerHTML = "The Value in cel is : " + z;
    }

    // converterd from kelvin
    else if (c === "kel" && b === "cel") {
        let z = Math.round(a - 273.15);
        console.log(z)
        console.log(b)
        ans.innerHTML = "The Value in cel is : " + z;
    }
    else if (c === "kel" && b === "far") {
        let z = Math.round((a-273.15)*9/5+32);
        console.log(z)
        console.log(b)
        ans.innerHTML = "The Value in far is : " + z;
    }
    else if (c === "kel" && b === "kel") {
        let z = Math.round((a*1));
        console.log(z)
        console.log(b)
        ans.innerHTML = "The Value in kel is : " + z;
    }

    // converted form fehernheit
    else if (c === "far" && b === "cel") {
        let z = Math.round((a - 32) * 5/9);
        console.log(z)
        console.log(b)
        ans.innerHTML = "The Value in cel is : " + z;
    }
    else if (c === "far" && b === "kel") {
        let z = Math.round((a - 32) * 5/9 + 273.15);
        console.log(z)
        console.log(b)
        ans.innerHTML = "The Value in kel is : " + z;
    }
    else if (c === "far" && b === "far") {
        let z = Math.round((a * 1));
        console.log(z)
        console.log(b)
        ans.innerHTML = "The Value in far is : " + z;
    }

}
