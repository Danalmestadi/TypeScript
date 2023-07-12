
interface information {
    firstName: string;
    LastName: string;
    age: number;
  }
  // Partial<Type> creates a type with all properties of Type set to optional
  type Partialinfo = Partial<information>;
  function PersonInfo(greeting:string="wellcome"):void{

    const info1: Partialinfo = { firstName: "mohammed",age:20 }; // email is optional
    const info2: Partialinfo = { firstName: "ahmed", LastName: "yousef" }; // age is optional
    console.log(`${greeting}`,info1)
    console.log(`${greeting}`,info2) 
}

PersonInfo();

  
