function draw_point(point) {
    let plot = document.getElementById("svg_plot");
    let circle = document.createElementNS("http://www.w3.org/2000/svg", 'circle');
    let xx = convertX(+point.x);
    circle.setAttribute('cx', (Math.round(xx)).toString());
    circle.setAttribute('cy', convertY(+point.y));
    circle.setAttribute('r', "4");
    circle.setAttribute("fill", point.success ? "#00ff00" : "#ff0000");
    circle.setAttribute("stroke-width", "1");
    circle.setAttribute("stroke", "black");
    circle.ownR = parseInt(point.r);
    plot.appendChild(circle);
    //addRow(point);
    circle.id = point.id;
    if (+circle.ownR !== +parseInt(document.getElementById("form:R_text").innerHTML)) {
        circle.setAttribute('fill-opacity', "0.2");
        circle.setAttribute('stroke-opacity', "0.5");
    }
}

function draw_points(a) {
    a = JSON.parse(a);
    if (a.length !== 0 && a.length !== null) {
        for (let b of a){
            draw_point(b);
        }
    }
}

function convertX(x) {
    return (120 * x / +parseInt(document.getElementById("form:R_text").innerHTML) + 150).toFixed(3);
}

function convertY(y) {
    return ((150 - 120 * y / +parseInt(document.getElementById("form:R_text").innerHTML))).toFixed(3);
}