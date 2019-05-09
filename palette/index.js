
var curent_color=window.getComputedStyle(document.getElementById('current')).getPropertyValue('background-color');
var cursor;

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

var colors = document.getElementsByClassName("color");
for (var i = 0; i < colors.length; i++) {
    colors[i].onclick = function(e) {
        color = document.getElementById(this.id);
        if (cursor=="pipetka") {
            document.getElementById('prev').style.backgroundColor = curent_color;
            document.getElementById('current').style.backgroundColor = window.getComputedStyle(color).getPropertyValue('background-color');
            curent_color = window.getComputedStyle(document.getElementById('current')).getPropertyValue('background-color');
        }    
    }
}

var elements = document.getElementsByClassName("block");
for (var i = 0; i < elements.length; i++) {
    elements[i].onmousedown = function(e) {
        block = document.getElementById(this.id);
        if (cursor=="zalivka") {
            block.style.backgroundColor = curent_color;
        }
        if (cursor=="transform") {
            if (block.style.borderRadius == '85px'){
                block.style.borderRadius = '0px';
            } else {
                block.style.borderRadius = '85px';
            }
        }
        if (cursor=="move") {
            var coords = getCoords(block);
            var shiftX = e.pageX - coords.left;
            var shiftY = e.pageY - coords.top;
        
            block.style.position = 'absolute';
            document.body.appendChild(block);
            moveAt(e);
        
            block.style.zIndex = 1000;
        
            function moveAt(e) {
                block.style.left = e.pageX - shiftX + 'px';
                block.style.top = e.pageY - shiftY + 'px';
            }
            
            document.onmousemove = function(e) {
                moveAt(e);
            };
        
            block.onmouseup = function() {
                document.onmousemove = null;
                block.onmouseup = null;
            };
        
            block.ondragstart = function() {
                return false;
            };
            
            function getCoords(elem) {
                var block = elem.getBoundingClientRect();
                return {
                top: block.top + pageYOffset,
                left: block.left + pageXOffset
                };
            }
        }
    }
}
