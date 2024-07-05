document.getElementById('colorPicker').addEventListener('input',function(event){
    const selectedColor = event.target.value;
    document.getElementById('colorBox').style.backgroundColor = selectedColor;
    document.getElementById('colorValue').value = selectedColor;

});

function resetColor(){
    document.getElementById('colorBox').style.backgroundColor = '#ffffff';
    document.getElementById('colorPicker').value = '#ffffff';
}