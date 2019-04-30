
var curent_color=window.getComputedStyle(document.getElementById('current')).getPropertyValue('background-color');
var cursor;
var shape_div_one = "square";
var shape_div_two = "square";
var shape_div_tree = "square";
var shape_div_four = "square";
var shape_div_five = "square";
var shape_div_six = "square";
var shape_div_seven = "square";
var shape_div_eight = "square";
var shape_div_nine  = "square";

function moveRect(e){
              
    switch(e.keyCode){
         
        case 49: 
            zalivka_cursor();
            break;
        case 50: 
            pipetka_cursor();
            break;
        case 51:  
            move_cursor();
            break;
        case 52: 
            transform_cursor();
            break;
    }
}
 
addEventListener("keydown", moveRect);

function zalivka_cursor() {
    document.body.style.cssText='cursor: url(palette/assets/img/i1.png), pointer;';
    cursor="zalivka";
}

function pipetka_cursor() {
    document.body.style.cssText='cursor: url(palette/assets/img/i2.png), pointer;';
    cursor="pipetka";
}

function move_cursor() {
    document.body.style.cssText='cursor: url(palette/assets/img/i3.png), pointer;';
    cursor="move";
}

function transform_cursor() {
    document.body.style.cssText='cursor: url(palette/assets/img/i4.png), pointer;';
    cursor="transform";
}

function click_grey() {
    if (cursor=="pipetka") {
        document.getElementById('prev').style.backgroundColor = curent_color;
        document.getElementById('current').style.backgroundColor = 'grey';
        curent_color = window.getComputedStyle(document.getElementById('current')).getPropertyValue('background-color');
    }
}

function click_red() {
    if (cursor=="pipetka") {
        document.getElementById('prev').style.backgroundColor = curent_color;
        document.getElementById('current').style.backgroundColor = 'red';
        curent_color = window.getComputedStyle(document.getElementById('current')).getPropertyValue('background-color');
    }
}

function click_green() {
    if (cursor=="pipetka") {
        document.getElementById('prev').style.backgroundColor = curent_color;
        document.getElementById('current').style.backgroundColor = 'green';
        curent_color = window.getComputedStyle(document.getElementById('current')).getPropertyValue('background-color');
    }
}

function click_blue() {
    if (cursor=="pipetka") {
        document.getElementById('prev').style.backgroundColor = curent_color;
        document.getElementById('current').style.backgroundColor = 'blue';
        curent_color = window.getComputedStyle(document.getElementById('current')).getPropertyValue('background-color');
    }
}

function click_one() {
    if (cursor=="zalivka") {
        document.getElementById('one').style.backgroundColor = curent_color;
    }
    if (cursor=="transform") {
        if (shape_div_one == "square"){
            document.getElementById('one').style.borderRadius = '85px';
            shape_div_one = "circle";
        } else if (shape_div_one == "circle"){
            document.getElementById('one').style.borderRadius = '0px';
            shape_div_one = "square";
        }
    }
}

function click_two() {
    if (cursor=="zalivka") {
        document.getElementById('two').style.backgroundColor = curent_color;
    }
    if (cursor=="transform") {
        if (shape_div_two == "square"){
            document.getElementById('two').style.borderRadius = '85px';
            shape_div_two = "circle";
        } else if (shape_div_two == "circle"){
            document.getElementById('two').style.borderRadius = '0px';
            shape_div_two = "square";
        }
    }
}

function click_tree() {
    if (cursor=="zalivka") {
        document.getElementById('tree').style.backgroundColor = curent_color;
    }
    if (cursor=="transform") {
        if (shape_div_tree == "square"){
            document.getElementById('tree').style.borderRadius = '85px';
            shape_div_tree = "circle";
        } else if (shape_div_tree == "circle"){
            document.getElementById('tree').style.borderRadius = '0px';
            shape_div_tree = "square";
        }
    }
}

function click_four() {
    if (cursor=="zalivka") {
        document.getElementById('four').style.backgroundColor = curent_color;
    }
    if (cursor=="transform") {
        if (shape_div_four == "square"){
            document.getElementById('four').style.borderRadius = '85px';
            shape_div_four = "circle";
        } else if (shape_div_four == "circle"){
            document.getElementById('four').style.borderRadius = '0px';
            shape_div_four = "square";
        }
    }
}

function click_five() {
    if (cursor=="zalivka") {
        document.getElementById('five').style.backgroundColor = curent_color;
    }
    if (cursor=="transform") {
        if (shape_div_five == "square"){
            document.getElementById('five').style.borderRadius = '85px';
            shape_div_five = "circle";
        } else if (shape_div_five == "circle"){
            document.getElementById('five').style.borderRadius = '0px';
            shape_div_five = "square";
        }
    }
}

function click_six() {
    if (cursor=="zalivka") {
        document.getElementById('six').style.backgroundColor = curent_color;
    }
    if (cursor=="transform") {
        if (shape_div_six == "square"){
            document.getElementById('six').style.borderRadius = '85px';
            shape_div_six = "circle";
        } else if (shape_div_six == "circle"){
            document.getElementById('six').style.borderRadius = '0px';
            shape_div_six = "square";
        }
    }
}

function click_seven() {
    if (cursor=="zalivka") {
        document.getElementById('seven').style.backgroundColor = curent_color;
    }
    if (cursor=="transform") {
        if (shape_div_seven == "square"){
            document.getElementById('seven').style.borderRadius = '85px';
            shape_div_seven = "circle";
        } else if (shape_div_seven == "circle"){
            document.getElementById('seven').style.borderRadius = '0px';
            shape_div_seven = "square";
        }
    }
}

function click_eight() {
    if (cursor=="zalivka") {
        document.getElementById('eight').style.backgroundColor = curent_color;
    }
    if (cursor=="transform") {
        if (shape_div_eight == "square"){
            document.getElementById('eight').style.borderRadius = '85px';
            shape_div_eight = "circle";
        } else if (shape_div_eight == "circle"){
            document.getElementById('eight').style.borderRadius = '0px';
            shape_div_eight = "square";
        }
    }
}

function click_nine() {
    if (cursor=="zalivka") {
        document.getElementById('nine').style.backgroundColor = curent_color;
    }
    if (cursor=="transform") {
        if (shape_div_nine == "square"){
            document.getElementById('nine').style.borderRadius = '85px';
            shape_div_nine = "circle";
        } else if (shape_div_nine == "circle"){
            document.getElementById('nine').style.borderRadius = '0px';
            shape_div_nine = "square";
        }
    }
}