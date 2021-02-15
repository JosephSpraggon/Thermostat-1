$(document).ready(function(){
  
  let thermostat = new Thermostat();
  updateTemperature();

  $('#temperature-up').click(function(){
    thermostat.raiseTemp();
    updateTemperature();
  })

  $('#temperature-down').click(function(){
    thermostat.decreaseTemp();
    updateTemperature();
  })

  $('#temperature-reset').click(function(){
    thermostat.resetTemp();
    updateTemperature();
  })

  function updateTemperature(){
    $('#temperature').text(thermostat.currentTemperature);
  };

});