function pre_init() {
    let r = parseInt(document.getElementById("form:R_text").innerHTML);
    if (!(r === 2 || r === 3 || r === 4 || r === 5)) {
        document.getElementById("form:R_text").innerHTML= 1;
    }
    r_changed(parseInt(document.getElementById("form:R_text").innerHTML));
}

function r_changed(r2) {
    if (r2 && validate_r(r2)) {
        let plot = document.getElementById("svg_plot");
        let toRemove = [];
        plot.childNodes.forEach(function (childNode) {
            if (childNode.nodeName === "circle")
                toRemove.push(childNode);
            if (childNode.nodeName === "text") {
                let temp_r = r2;
                if ([].includes.call(document.getElementsByClassName("divis"), childNode)) {
                    temp_r = r2 / 2;
                }
                childNode.childNodes.forEach(function (child) {
                    if (child.nodeName === "tspan") {
                        let tspan = document.createElementNS("http://www.w3.org/2000/svg", 'tspan');
                        tspan.innerHTML = temp_r;
                        childNode.replaceChild(tspan, child);
                    }
                });
            }
        });
        toRemove.forEach(function (childNode) {
            childNode.setAttribute('cx', convertXr(childNode.getAttribute('cx'), parseInt(document.getElementById("form:R_text").innerHTML), r2));
            childNode.setAttribute('cy', convertYr(childNode.getAttribute('cy'), parseInt(document.getElementById("form:R_text").innerHTML), r2));
            if (+childNode.ownR === +r2) {
                childNode.setAttribute('fill-opacity', "1");
                childNode.setAttribute('stroke-opacity', "1");
            } else {
                childNode.setAttribute('fill-opacity', "0.2");
                childNode.setAttribute('stroke-opacity', "0.5");
            }
        });
    }

    return true;
}

/*
let plotX = '';
let plotY = '';
*/

function plotClicked(event){
    if (document.elementFromPoint(event.clientX, event.clientY).tagName !== "circle") {
        let r = parseInt(document.getElementById("form:R_text").innerHTML);
        let oX = convertXReverse(event.offsetX, r); //=== undefined ? event.layerX : event.offsetX;
        oX = Math.round(oX);
        oX = oX.toString();
        if (oX === "-0") oX = "0"; //
        let oY = convertYReverse(event.offsetY, r); //=== undefined ? event.layerY : event.offsetY;
        if(validate_x(oX) && validate_y(oY) && validate_r(r)) {
            document.getElementById("form:x_hidden").setAttribute("value", oX);
            document.getElementById("form:x_hidden").click();
            document.getElementById("form:y_input").setAttribute("value", oY);
            document.getElementById("form:y_input").click();
            //call submit
            document.getElementById("form:form_submit").click();
            /*
            plotX = oX;
            plotY = oY;
            document.getElementById("plot_sub").click();
            */
            //document.getElementById("form:x_plot").setAttribute("value", oX);
            //document.getElementById("form:y_plot").setAttribute("value", oY);
            //document.getElementById("form:plot_submit").click();
        }
    }
}

/*
function clickAdd(obj, evt) {
    mojarra.ab(obj, evt,'action',0,'@form',{'x':plotX,'y':plotY});
}
*/

function convertXr(x, r1, r2) {
    return (((x - 150) * r1)/ r2 + 150).toFixed(3);
}

function convertYr(y, r1, r2) {
    return (150 + ((y - 150) * r1)/ r2).toFixed(3);
}

function convertXReverse(cx) {
    return ((cx - 175) * parseInt(document.getElementById("form:R_text").innerHTML) / 140).toFixed(3);
}

function convertYReverse(cy) {
    return ((cy - 175) * parseInt(document.getElementById("form:R_text").innerHTML) / -140).toFixed(3);
}


