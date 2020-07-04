class Person {
    constructor(firstName,lastName,age,gender)
    {
      this.firstName = firstName || "John";
      this.lastName = lastName || "Doe";
      this.age = age || 0;
      this.gender = gender || "Male";
    }
    
    
    sayFullName(){
    return `${this.firstName} ${this.lastName}`
    }
    
    
   static greetExtraTerrestrials(raceName){
      return `Welcome to Planet Earth ${raceName}`
    }
  }
  