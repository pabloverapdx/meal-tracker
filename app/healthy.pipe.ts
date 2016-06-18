import { Pipe, PipeTransform } from 'angular2/core';
import { Meal } from './meal.model';

@Pipe ({
  name: "healthy",
  pure: false
})

export class HealthyPipe implements PipeTransform {
  transform(input: Meal[], args){
    var healthy = args[0];
    if( healthy === "healthy"){
      return input.filter(function(meal){
        return meal.calories < 451;
      });
    } else if (healthy === "unhealthy") {
      return input.filter(function(meal){
        return meal.calories > 450;
      });
    } else {
      return input;
    }
  }
}
