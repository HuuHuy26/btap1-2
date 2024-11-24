function calculateRectangleArea(){
    var D=parseFloat(document.getElementById("inputD")).value;
    var R=parseFloat(document.getElementById("inputR")).value;
    const S = D * R ;
    document.getElementById(outputS).value=S;
}
function calculateTriangleArea(){
    var CD = parseFloat(document.getElementById('inputCD').value);
    var CC = parseFloat(document.getElementById('inputCC').value);
    const TG = (CD * CC) / 2;
    document.getElementById(outputTG).value=TG;
}
function calculateSquareArea(){
    var CHV = parseFloat(document.getElementById('inputCHV').value);
    const HV = CHV * CHV;
    document.getElementById('outputHV').value = HV;
}
