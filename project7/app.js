function far(fahrenheit){
    
    let value = (fahrenheit - 32) * 5 / 9
    return value.toFixed(2) + "°C";
}
function display(elementId, value)
{
    document.getElementById(elementId).innerHTML = "<b>"+value+"</b>"
}
function jun( _celsius )

{
    let value = (_celsius * 9) / 5 +32
    return value.toFixed(2) + "°F";

}

function toCelsiusProgram(value)
{
    alert(jun(value))
}
function toFahrenheitProgram(value)
{
    alert(far(value))
}











