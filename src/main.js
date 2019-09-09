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
    console.log(newBear.foodLevel);
    $("#currentLevel").text(newBear.foodLevel);
    $(".foodLevel").show();














  });
});
