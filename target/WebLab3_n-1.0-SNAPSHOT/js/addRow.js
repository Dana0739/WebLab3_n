

//тут реализовано добавление точки в таблицу,
//а точка берется из response, а туда массив
//точек и максимальный id попадает из
//ServletContext на сервере (чтобы как по тз)

function addRow(point) {
    let table = document.getElementById("results_table");
    let row = document.createElement('tr');
    row.innerHTML =
        "<td>"+point.id+"</td>"+
        "<td>"+point.x+"</td>"+
        "<td>"+point.y+"</td>"+
        "<td>"+point.r+"</td>"+
        "<td>"+point.success+"</td>";
    row.rowId = point.id;
    table.appendChild(row);
}
