
 interface Animal {
 name?: string;
  }
   
 interface Dog extends Animal {
  breed: string;
   }
   
 interface Cat extends Animal {
     color: string;
     }
    
 interface Fish extends Animal {
        type: string;
        }
    
    
     const dog: Dog = { breed: "huski" };
     const cat: Cat = { name: "cat", color: "Grey" };
     const fish: Fish = { name: "fish", type: "GoldenFish" };
     console.log(dog);
     console.log(cat); 
     console.log(fish);