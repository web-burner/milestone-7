const products = [
    {name:"redmi",brand:"xiaomi",price:3000,color:"black"},
    {name:"s10",brand:"samsung",price:5000,color:"white"},
    {name:"iphone",brand:"apple",price:7000,color:"gold"},
    {name:"x50",brand:"vivo",price:4000,color:"red"}
]

const result = products.map(product => product.price);
console.log(result)


const val = 1;
if(val){
    console.log("truthy")
}else{
    console.log("falsy")
}