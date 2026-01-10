async function example(){
    let p1 = await Promise.resolve(10);
    let p2 = await Promise.resolve(20);
    console.log(p1 + p2);

}
example();