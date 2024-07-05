document.addEventListener('DOMContentLoaded',function()
{
    var button_gen=document.getElementById("generate");
    button_gen.addEventListener('click',function()
{
    navigator.geolocation.getCurrentPosition(GenerateCoordinates,LocationError);
})
});

function GenerateCoordinates(position)
{
    var latitude=document.getElementById("lat");
    latitude.value=position.coords.latitude;
    var longitude=document.getElementById("long");
    longitude.value=position.coords.longitude;
    console.log("Latitude:"+ latitude.value);
    console.log("Longitude"+ longitude.value);
    
}
function LocationError(error)
{
    console.error("unable to track location"+error);

}