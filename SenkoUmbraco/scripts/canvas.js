
var getHexagonCoords = function (width, height) {
    var arr = [];
    width = Number(width);
    height = Number(height);
    var p1 = { x: width / 4, y: 0 };
    var p2 = { x: 3 * width / 4, y: 0 };
    var p3 = { x: width, y: height / 2 };
    var p4 = { x: 3 * width / 4, y: height };
    var p5 = { x: width / 4, y: height };
    var p6 = { x: 0, y: height / 2 };
    arr.push.apply(arr, [p1, p2, p3, p4, p5, p6]);
    return arr;
}
var getHexagonCoords2 = function (width, height) {
    var arr = [];
    width = Number(width);
    height = Number(height);
    var p1 = { x: width / 2, y: 0 };
    var p2 = { x: width, y: height / 4 };
    var p3 = { x: width, y: (height / 4) * 3 };
    var p4 = { x: width / 2, y: height };
    var p5 = { x: 0, y: (height / 4) * 3 };
    var p6 = { x: 0, y: height / 4 };
    arr.push.apply(arr, [p1, p2, p3, p4, p5, p6]);
    return arr;
}
//var imagePath = '/images/tom3.jpg';
function drawHexagon(canvasId, imagePath, scalewidth, width, height, strokecolor, strokewidth, customCoords, shadow, opacity) {
    var canvas = new fabric.Canvas(canvasId);
    canvas.hoverCursor = "pointer";
    fabric.Object.prototype.transparentCorners = false;
    fabric.Object.prototype.selectable = false;


    var padding = 0;
    fabric.Image.fromURL(imagePath, function (img) {
        if (opacity) { 
            img.set({ opacity: opacity });
        }
        img.scaleToWidth(scalewidth);
        var patternSourceCanvas = new fabric.StaticCanvas();
        patternSourceCanvas.set({ backgroundColor: '#000' });
        patternSourceCanvas.add(img);
        patternSourceCanvas.renderAll();
        var pattern = new fabric.Pattern({
            source: function () {
                patternSourceCanvas.setDimensions({
                    width: img.getScaledWidth() + padding,
                    height: img.getScaledHeight() + padding
                });
                if (window.devicePixelRatio > 1) {
                    patternSourceCanvas.setZoom(0.5);
                }
                patternSourceCanvas.renderAll();
                return patternSourceCanvas.getElement();
            },
            repeat: 'no-repeat'
        });
        var polygon = new fabric.Polygon(customCoords ? getHexagonCoords2(width, height) : getHexagonCoords(width, height),
          {
              left: 0,
              top: 0,
              fill: pattern,
              objectCaching: false,
              stroke: strokecolor,
              strokeWidth: strokewidth
          });
        if (shadow) { 
            polygon.setShadow({
                color: 'rgba(0,0,0,0.2)',
                blur: 3,
                offsetX: 4,
                offsetY: 7
            });
        }
        canvas.add(polygon);
    });
}
