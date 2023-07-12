interface Information {
    firstName: string;
    lastName: string;
    age: number;
    email: string;
  }
  //oimt 
  type InformationWithoutEmail = Omit<Information, 'email'>;
  
  var pOne: InformationWithoutEmail = {
    firstName: 'yousef',
    lastName: 'ahmed',
    age: 20,
  };
  
  var pTwo: InformationWithoutEmail = {
    firstName: 'ahmed',
    lastName: 'mohammed',
    age:undefined,
  };
  
  console.log(pOne); 
  console.log(pTwo); 