// function sum(a,b){
//     return a+b;
// }

// export default sum;

async function getData(){
    const res=await fetch('https://fakestoreapi.com/products/');
    const resData=await res.json();
    return resData;
}
export default getData;