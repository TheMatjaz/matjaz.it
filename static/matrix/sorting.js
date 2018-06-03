var g_output_list_element = document.getElementById("sorted_list");
var g_input_fields = document.getElementsByClassName("cell");
var g_reset_button = document.getElementById("reset_button");
var g_cells = {};

initialize();

function initialize() {
    load_state_from_query_string();
    prepare_event_listeners();
}

function refresh_cells_dict_from_input_fields() {
    Object.values(g_input_fields).forEach(function(input_field) {
        var cell = input_field_to_cell(input_field);
        g_cells[cell.id] = cell;
    });
}

function reset_state() {
    rewrite_query_string_in_url("");
    load_state_from_query_string();
}

function load_state_from_query_string() {
    load_input_field_contents_from_query_string();
    refresh_cells_dict_from_input_fields();
    refresh_output_list_from_cells_dict();
}

function prepare_event_listeners() {
    g_reset_button.addEventListener("click", reset_state);
    Object.values(g_input_fields).forEach(function(input_field) {
        input_field.addEventListener(
            "keyup", function() {input_field_event(input_field);});
    });
}

function input_field_event(input_field) {
    var cell = input_field_to_cell(input_field);
    g_cells[cell.id] = cell;
    refresh_output_list_from_cells_dict();
    refresh_query_string_from_cells_dict();
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

function refresh_output_list_from_cells_dict() {
    g_output_list_element.innerHTML = cells_to_sorted_html_list(g_cells);
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

function refresh_query_string_from_cells_dict() {
    Object.values(g_cells).forEach(function(cell) {
        save_cell_to_query_string(cell);
    });
}

function save_cell_to_query_string(cell) {
    var new_query_string;
    if (cell != null && cell.is_valid()) {
        new_query_string = update_query_string_field(
                window.location.search, cell.id, cell.value);
    } else {
        new_query_string = update_query_string_field(
                window.location.search, cell.id, null);
    }
    rewrite_query_string_in_url(new_query_string);
}

function update_query_string_field(uri, key, value) {
    // https://stackoverflow.com/a/6021027/5292928
    var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
    var separator = uri.indexOf('?') !== -1 ? "&" : "?";
    var new_uri;
    if (uri.match(re)) {
        if (value == null) {
            new_uri = uri.replace(re, ''); // Remove key and value
        } else {
            new_uri = uri.replace(re, '$1' + key + "=" + value + '$2');
        }
    } else {
        if (value != null) {
            new_uri = uri + separator + key + "=" + value;
        } else {
            new_uri = uri;
        }
    }
    return new_uri;
}

function rewrite_query_string_in_url(new_query_string) {
    // https://stackoverflow.com/a/19279428/5292928 in the comments
    const new_url = new URL(window.location.href);
    new_url.search = new_query_string;
    window.history.replaceState(null, document.title, new_url.href);
}

function load_input_field_contents_from_query_string() {
    Object.values(g_input_fields).forEach(function(input_field) {
        var cell_value = read_query_string_field(
            window.location.search, input_field.name);
        if (cell_value != null) {
            input_field.value = cell_value;
        } else {
            input_field.value = "";
        }
    });
}

function read_query_string_field(uri, key) {
    // https://stackoverflow.com/a/6021027/5292928
    var re = new RegExp("[?&]" + key + "=(.*?)(&|$)", "i");
    var matched_values = uri.match(re);
    if (matched_values == null) {
        return null;
    } else {
        return matched_values[1];
    }
}
