function make(nums) {
    let arr = [];
    arr.push(nums);
    
    return function checker() { 
                const args = [].slice.call(arguments);    
                if (args[0] instanceof Function) { // final calculation 
                    const func = args[0];
                    const result = arr.reduce(func);
                    return result;
                }
                if (args.length > 1) { //case when multi args          
                    args.forEach((item) => arr.push(parseInt(item, 10)));

                } else arr.push(parseInt(args, 10));             
                
                return checker; // call checker untill args are comming
    }          
}
