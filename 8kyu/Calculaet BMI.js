function bmi(weight, height) {
  
    var bmi     = weight / Math.pow(height, 2),
        message = 'Obese';
    
    if (bmi <= 18.5) {
      message = 'Underweight';
    } else if (bmi <= 25.0) {
      message = 'Normal';
    } else if (bmi <= 30.0) {
      message = 'Overweight';
    }
    
    return message;
  }
  
  bmi(80, 1.80)