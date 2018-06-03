var g_output_list_element = document.getElementById("sorted_list");
var g_input_fields = document.getElementsByClassName("cell");
var g_cells = {};

prepare_event_listeners();

function prepare_event_listeners() {
    Object.values(g_input_fields).forEach(function(input_field) {
        input_field.addEventListener(
            "keyup", function() {input_field_event(input_field);});
    });
}

function input_field_event(input_field) {
    var cell = input_field_to_cell(input_field);
    g_cells[cell.id] = cell;
    update_output_list(g_output_list_element, g_cells);
}

function input_field_to_cell(input_field) {
    var cell = {
        id: input_field.name,
        value: parseInt(clean_string(input_field.value)),
        is_valid: function() {return !isNaN(this.value);},
    };
    return cell;
}

function clean_string(string) {
    string = string.replace(/[&]nbsp[;]/gi, "");
    string = string.replace(/[<]br[^>]*[>]/gi, "");
    return string.trim();
}

function update_output_list(output_list_element, cells) {
    output_list_element.innerHTML = cells_to_sorted_html_list(cells);
}

function cells_to_sorted_html_list(cells) {
    var sorted_list_html = "";
    var sorted_cells = cells_dictionary_to_sorted_array(cells);
    Object.values(sorted_cells).forEach(function(cell) {
        sorted_list_html += cell_to_html_list_element(cell);
    });
    return sorted_list_html;
}

function cells_dictionary_to_sorted_array(cells) {
    var sorted = [];
    Object.values(cells).forEach(function(cell) {
        if (cell.is_valid()) {
            sorted.push(cell);
        }
    });
    sorted.sort(cell_sorter);
    return sorted;
}

function cell_sorter(cell_a, cell_b) {
    var diff = cell_b.value - cell_a.value;
    if (diff === 0) { // On same value, sort by ID
        diff = cell_a.id.localeCompare(cell_b.id);
    }
    return diff;
}

function cell_to_html_list_element(cell) {
    return "<li>"
           + cell.id
           + ": "
           + cell.value
           + "</li>";
}

function save_cell_to_query_string(cell) {
    if (cell.is_valid()) {
        window.location.search = update_query_string_field(
                window.location.search, cell.id, cell.value);
    } else {
        window.location.search = update_query_string_field(
                window.location.search, cell.id, null);
    }
}

function update_query_string_field(uri, key, value) {
    // https://stackoverflow.com/a/6021027/5292928
    var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
    var separator = uri.indexOf('?') !== -1 ? "&" : "?";
    var new_uri;
    if (uri.match(re)) {
        if (value === null) {
            new_uri = uri.replace(re, '$1' + '$2'); // Remove key and value
        } else {
            new_uri = uri.replace(re, '$1' + key + "=" + value + '$2');
        }
    } else {
        new_uri = uri + separator + key + "=" + value;
    }
    return new_uri;
}

function load_cells_from_query_string() {
    Object.values(g_input_fields).forEach(function(input_field) {
        var cell_value = read_query_string_field(window.location.search, input_field.name);
        if (cell_value !== null) {
            input_field.value = cell_value;
            var cell = input_field_to_cell(input_field);
            g_cells[cell.id] = cell;
        }
    });
    update_output_list(g_output_list_element, g_cells);
}

function read_query_string_field(uri, key) {
    // https://stackoverflow.com/a/6021027/5292928
    var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
    var matched_values = uri.match(re);
    if (matched_values === null) {
        return null;
    } else {
        return matched_values[1];
    }
}
