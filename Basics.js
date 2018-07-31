// var John = {
//     fullName: 'John Deere',
//     mass: 60,
//     height: 1.8,
//     JohnBMI: function() {
//             this.bmi = this.mass / (this.height * this.height);
//             return this.bmi;
//     }
// }

// var Mark = {
//     fullName: "Mark Deere",
//     mass: 60,
//     height: 1.7,
//     MarkBMI: function(){
//         this.bmi = this.mass / (this.height * this.height);
//         return this.bmi;
// }
// };



// if(John.JohnBMI() > Mark.MarkBMI()){
//     console.log(John.fullName + ' has higher bmi of ' + John.bmi);
// }else if(Mark.MarkBMI() > John.JohnBMI()){
//     console.log(Mark.fullName + ' has higher bmi of ' + Mark.bmi);

// }else{
//     console.log('They are the same');
// }

// for(var i = 6; i > 0; i--)
// console.log(i);



var John = {
    
    bill : [124, 48, 268, 180],
    
    tipCalc : function(){
         
        this.tip = [];
        this.final = [];

        for(var i = 0; i < this.bill.length; i++)
        {
            if(this.bill[i] < 50)       
            {                 
            this.tip[i] = 0.2*(this.bill[i]);
            this.final[i] = this.bill[i] + 0.2*(this.bill[i]);
            }
            else if(this.bill[i] >= 50 && this.bill[i] <= 200)  
            {          
            this.tip[i] = 0.15*(this.bill[i]);
            this.final[i] = this.bill[i] + 0.15*(this.bill[i]);
            }
            else      
            {    
            this.tip[i]= 0.1*(this.bill[i]);
            this.final[i] = this.bill[i] + 0.1*(this.bill[i]);
            }
        }
        

    } 
}

John.tipCalc();
console.log(John);