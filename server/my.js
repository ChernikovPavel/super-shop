let data = 1;

const arr = [1,2,3,4,5]

const func = () => {
    console.log("data: ",data)

}

const arr2 = arr.map((el) => {
    return {
        func: func
    }
})

data = 3;

arr2[0].func()