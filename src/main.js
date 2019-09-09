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
    $(".startGame").hide();
    $(".foodLevel").show();

    $("#hungerCheck").click(function() {
      event.preventDefault();
      console.log(newBear.foodLevel);
      $("#currentLevel").text(newBear.foodLevel);
      // newBear.showEaten();
      if (newBear.didYouGetEaten()) {  // created a if statement to display the img if the paramerts are a true false bc if statements only display if they are true.
        $('#eaten').show();
        $('#eatenBy').text(bearName);
        $(".startGame").show();
        $(".gameButtons").hide();
      };


    $("#feedButton").click(function() {
      event.preventDefault();
      $("#currentLevel").text(newBear.foodLevel);
      if (newBear.didYouGetEaten()) { // created a if statement to display the img if the paramerts are a true false bc if statements only display if they are true.
        $('#eaten').show();
        $('#eatenBy').text(bearName);
        $(".startGame").show();
        $(".gameButtons").hide();
      } else {
        console.log("else");
        newBear.feed();
      }
    });
    });
  });
});
