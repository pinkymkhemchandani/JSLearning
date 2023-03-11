class vehicle  {
   
    constructor(Name,modelNo,color,engineCapasity, capacity){
        this.Name=Name;
        this.modelNo=modelNo;
        this.color=color;
        this.engineCapasity=engineCapasity;
        this.capacity=capacity;
        

    }
}

console.log('*******1********');
const SUV = new vehicle('SUV',76547683,'WHITE',12.91,651);
console.log(SUV);

const renaultKwid = new vehicle('renaultKwid' ,6547683,'grey',11.91,663);
console.log(renaultKwid );

const hyundai = new vehicle('hyundai' ,1047683,'blue',10,563);
console.log(hyundai );

const TATAtiago = new vehicle('TATAtiago' ,09476803,'orange',10.76,563);
console.log(TATAtiago );
   

console.log('*******2********');

class collage {
    constructor(collageName ,location, divisons , rating){
        this.collageName=collageName;
        this.location =location;
        this.divisons = divisons;
        this.rating=rating;
    }
}

const mpShah = new collage ('mpShah','jamnagar', 25, 'A+' )
console.log(mpShah);

const HL = new collage ('HL','ahmedabad', 34, 'B+' )
console.log(HL);

const GTU = new collage ('GTU','RAJKOT', 17, 'A' )
console.log(GTU);

console.log('*******3*******');



function traverseObject(collage) {
    for (const key in collage) {
        console.log(`${key}:${collage[key]}`);
        }
    }

   

    traverseObject(mpShah);
    traverseObject(HL);
    traverseObject(GTU);

    console.log(`*******4******`);

    function primeNumber(n) {
        if (n<=1) {
            return false;
            
        }
            for (let index = 2; index <= n/2; index++) {
                if (n% index===0){
                    return false ;
                }
                
            }   
            
            return true;
    }  

    console.log(`11 is Prime Number: ${primeNumber(11)}`);