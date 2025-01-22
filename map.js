        // apply condition in all the INDIVISUAL value present in array by using MAP()

        // const myNumber =[1,2,3,4,5,6,7,8,9]
        // const newNum=myNumber.map((num)=> num+100)  // map() is just like a join ,,,,which apply in all value
        // console.log(newNum);
        
        // chaning:- in which we use 2 or more methods

        const myNumber =[1,2,3,4,5,6,7,8,9]
        const newNum=myNumber.map((num)=> num+100) 
                            .map((num)=> num+1)
                            .filter((num)=> num>=105)
        console.log(newNum);
        