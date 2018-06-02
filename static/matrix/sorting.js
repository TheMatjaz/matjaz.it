document.getElementById("matrix").addEventListener(
    "input", function() {refresh_list("matrix", "sorted_list");});

function refresh_list(html_table_id, html_list_id) {
    clear_list(html_list_id);
    table_to_sorted_list(html_table_id, html_list_id);
}

function clear_list(html_list_id) {
    document.getElementById(html_list_id).innerHTML = "";
}

function table_to_sorted_list(html_table_id, html_list_id) {
    cells = parse_html_table_into_cells(html_table_id);
    sort_cells_by_value_desc(cells);
    cells_to_html_list(cells, html_list_id);
}

function show_error_message(message) {
    document.getElementById("errors").innerHTML = message;
}

function parse_html_table_into_cells(html_table_id) {
    var cells = [];
    var table = document.getElementById(html_table_id);
    for (var row_index = 1, row; row = table.rows[row_index]; row_index++) {
        for (var col_index = 1, cell; cell = row.cells[col_index]; col_index++) {
            var cell_value = clean_string(cell.innerHTML);
            var cell_data = {
                table:table,
                row_index:row_index,
                col_index:col_index,
                value:cell_value,
                get_cell_in_html_table: function() {
                    return this.table.rows[this.row_index].cells[this.col_index];
                },
            };
            if (cell_data.value.length == 0) {
                clear_errors_in_cell(cell_data);
            } else {
                cell_data.value = parseInt(cell_data.value);
                if (isNaN(cell_data.value)) {
                    report_error_in_cell(cell_data);
                } else {
                    clear_errors_in_cell(cell_data);
                    cells.push(cell_data);
                }
            }
        }
    }
    return cells;
}

function clean_string(string) {
    string = string.replace(/[&]nbsp[;]/gi, "");
    string = string.replace(/[<]br[^>]*[>]/gi, "");
    return string.trim();
}

function report_error_in_cell(cell) {
    cell.get_cell_in_html_table().style.color = "red";
    cell.get_cell_in_html_table().style.fontWeight = "bold";
}

function clear_errors_in_cell(cell) {
    cell.get_cell_in_html_table().style.color = "black"; 
    cell.get_cell_in_html_table().style.fontWeight = "lighter"; 
}

function sort_cells_by_value_desc(cells) {
    cells.sort(function(a, b){return b.value-a.value});
}

function cells_to_html_list(cells, html_list_id) {
    var sorted_list_html = "";
    cells.forEach(function(cell) {
        sorted_list_html += cell_to_html_list_element(cell);
    });
    document.getElementById(html_list_id).innerHTML = sorted_list_html;
}

function cell_to_html_list_element(cell) {
    return "<li>"
           + "<div class=\"value\">"
           + cell.value
           + "</div>" 
           + ": "
           + "<div class=\"coordinates\">"
           + col_index_to_character(cell.col_index)
           + cell.row_index
           + "</div>"
           + "</li>\n";
}

function col_index_to_character(index) {
    return String.fromCharCode(96 + index);
}

function left_pad_spaces(value, min_chars) {
    return (Array(min_chars).join(" ") + value).slice(-min_chars);
}
