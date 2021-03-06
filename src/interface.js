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

  $('#powersaving-on').click(function(){
    thermostat.powerModeOn();
    $('#power-saving-status').text('on')
    updateTemperature();
  })

  $('#powersaving-off').click(function(){
    thermostat.powerModeOff();
    $('#power-saving-status').text('off')
    updateTemperature();
  })

  function updateTemperature(){
    $('#temperature').text(thermostat.currentTemperature);
    if(thermostat.energyUsage() === 'low-usage'){
      $('#temperature').css('color', 'green')
    } else if(thermostat.energyUsage() === 'medium-usage'){
      $('#temperature').css('color', 'black')
    } else {
      $('#temperature').css('color', 'red')
    }
  }

  $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp);
  })

});