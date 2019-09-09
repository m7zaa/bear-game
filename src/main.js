//front-end
import $ from 'jquery';
import {
  HungryBear
} from './bear-game';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'

$(document).ready(function(){
  $("#startButton").click(function() {
    event.preventDefault();
    let bearName = $("#bearNameInput").val();
    let newBear = new HungryBear(bearName);
    newBear.setHunger();
    console.log(newBear.foodLevel);
    $("#currentLevel").text(newBear.foodLevel);
    $(".foodLevel").show();

    $("#hungerCheck").click(function() {
      event.preventDefault();
      console.log(newBear.foodLevel);
      $("#currentLevel").text(newBear.foodLevel);
      // newBear.showEaten();
      if (newBear.didYouGetEaten()) {  // created a if statement to display the img if the paramerts are a true false bc if statements only display if they are true.
        $('#eaten').show();
      };


    $("#feedButton").click(function() {
      event.preventDefault();
      newBear.showEaten();
      if(!newBear.feed()){ // created a if statement to display the img if the paramerts are a true false bc if statements only display if they are true.
        $('#eaten').show();
      }
    });
    });
  });
});
