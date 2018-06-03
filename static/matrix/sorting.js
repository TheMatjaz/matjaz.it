//document.getElementById("matrix").addEventListener("input", refresh);

function refresh() {
    refresh_list("matrix", "sorted_list");
}

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

function parse_html_table_into_cells(html_table_id) {
    var cells = [];
    var table = document.getElementById(html_table_id);
    for (var row_index = 1, row; row = table.rows[row_index]; row_index++) {
        for (var col_index = 1, cell; cell = row.cells[col_index]; col_index++) {
            cell_data = parse_cell_input_content(cell.children[0].value);
            cell_data.row_index = row_index;
            cell_data.col_index = col_index;
            cell_data.table = table;
            process_cell_data(cell_data, cells);
        }
    }
    return cells;
}

function parse_cell_input_content(string) {
    var cell_value = clean_string(string);
    var cell_data = {
        table: undefined,
        row_index: undefined,
        col_index: undefined,
        value: cell_value,
        get_cell_in_html_table: function() {
            return this.table.rows[this.row_index].cells[this.col_index];
        },
    };
    return cell_data;
}

function clean_string(string) {
    string = string.replace(/[&]nbsp[;]/gi, "");
    string = string.replace(/[<]br[^>]*[>]/gi, "");
    return string.trim();
}

function process_cell_data(cell_data, cells) {
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

function report_error_in_cell(cell) {
    cell.get_cell_in_html_table().style.color = "red";
    cell.get_cell_in_html_table().style.fontWeight = "bold";
}

function clear_errors_in_cell(cell) {
    cell.get_cell_in_html_table().style.color = "black"; 
    cell.get_cell_in_html_table().style.fontWeight = "lighter"; 
}

function sort_cells_by_value_desc(cells) {
    cells.sort(cell_sorter);
}

function cell_sorter(cell_a, cell_b) {
    var diff = cell_b.value - cell_a.value;
    if (diff != 0) {
        return diff;
    }
    diff = cell_a.col_index - cell_b.col_index;
    if (diff != 0) {
        return diff;
    }
    return cell_a.row_index - cell_b.row_index;
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
    return String.fromCharCode(65 + index - 1);
}

function left_pad_spaces(value, min_chars) {
    return (Array(min_chars).join(" ") + value).slice(-min_chars);
}
