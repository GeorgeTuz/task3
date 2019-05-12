
var curentColor=window.getComputedStyle(document.getElementById('current')).getPropertyValue('background-color');
var cursor;

if (localStorage.getItem("curColor") != null) {
    curentColor=localStorage.getItem("curColor");
    document.getElementById('current').style.backgroundColor = curentColor;
}

if (localStorage.getItem("prevColor") != null) {
    document.getElementById('prev').style.backgroundColor = localStorage.getItem("prevColor");
}

function bucketCursor() {
    document.body.style.cssText='cursor: url(palette/assets/img/Bucket.png), pointer;';
    cursor="bucket";
}

function chooseColorCursor() {
    document.body.style.cssText='cursor: url(palette/assets/img/ChooseColor.png), pointer;';
    cursor="chooseColor";
}

function moveCursor() {
    document.body.style.cssText='cursor: url(palette/assets/img/Move.png), pointer;';
    cursor="move";
}

function transformCursor() {
    document.body.style.cssText='cursor: url(palette/assets/img/Transform.png), pointer;';
    cursor="transform";
}

function moveRect(e){        
    switch(e.keyCode){     
        case 49: 
            bucketCursor();
            break;
        case 50: 
            chooseColorCursor();
            break;
        case 51:  
            moveCursor();
            break;
        case 52: 
            transformCursor();
            break;
    }
}
addEventListener("keydown", moveRect);

var colors = document.getElementsByClassName("color");
for (var i = 0; i < colors.length; i++) {
    colors[i].onclick = function(e) {
        color = document.getElementById(this.id);
        if (cursor=="chooseColor") {
            document.getElementById('prev').style.backgroundColor = curentColor;
            localStorage.setItem("prevColor", curentColor);
            document.getElementById('current').style.backgroundColor = window.getComputedStyle(color).getPropertyValue('background-color');
            curentColor = window.getComputedStyle(document.getElementById('current')).getPropertyValue('background-color');
            localStorage.setItem("curColor", curentColor);
        }    
    }
}

var el = document.getElementById('canvas');
var posCanvasLeft = findPosX(el);
var posCanvasTop = findPosY(el);
 
function findPosX(obj) {
    var curleft = 0;
    if (obj.offsetParent) {
        while (1) {
            curleft+=obj.offsetLeft;
            if (!obj.offsetParent) {
                break;
            }
            obj=obj.offsetParent;
        }
    } else if (obj.x) {
        curleft+=obj.x;
    }
    return curleft;
}
 
function findPosY(obj) {
    var curtop = 0;
    if (obj.offsetParent) {
        while (1) {
            curtop+=obj.offsetTop;
            if (!obj.offsetParent) {
                break;
            }
            obj=obj.offsetParent;
        }
    } else if (obj.y) {
        curtop+=obj.y;
    }
    return curtop;
}

var elements = document.getElementsByClassName("block");
for (var i = 0; i < elements.length; i++) {
    if (localStorage.getItem(elements[i].id+'Color') != null) {
        document.getElementById(elements[i].id).style.backgroundColor = localStorage.getItem(elements[i].id+'Color');
    }
    if (localStorage.getItem(elements[i].id+'Radius') != null) {
        document.getElementById(elements[i].id).style.borderRadius = localStorage.getItem(elements[i].id+'Radius');
    }
    if (localStorage.getItem(elements[i].id+'Top') != null) {
        document.getElementById(elements[i].id).style.top = localStorage.getItem(elements[i].id+'Top');
        document.getElementById(elements[i].id).style.left = localStorage.getItem(elements[i].id+'Left');
    }
    elements[i].onmousedown = function(e) {
        block = document.getElementById(this.id);
        if (cursor=="bucket") {
            block.style.backgroundColor = curentColor;
            localStorage.setItem(this.id+'Color', curentColor);
        }
        if (cursor=="transform") {
            if (block.style.borderRadius == '85px'){
                block.style.borderRadius = '0px';
                localStorage.setItem(this.id+'Radius', '0px');
                
            } else {
                block.style.borderRadius = '85px';
                localStorage.setItem(this.id+'Radius', '85px');
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
                var leftKey = window.getComputedStyle(block).getPropertyValue('left');
                leftKey = leftKey.slice(0, -2);
                leftKey = Math.round((+leftKey - posCanvasLeft + 1) * 10) / 10 + 'px';
                localStorage.setItem(this.id+'Left', leftKey);
                var topKey = window.getComputedStyle(block).getPropertyValue('top');
                topKey = topKey.slice(0, -2);
                topKey = Math.round((+topKey - posCanvasTop) * 10) / 10 + 'px';
                localStorage.setItem(this.id+'Top', topKey);

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