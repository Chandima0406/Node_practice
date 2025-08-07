const fun = (a,b) => {
    const c = a*a;
    const d = c*a;

    b(c,d);
};

fun(4, (c, d) => {
    console.log("c is:", c);
    console.log("d is:", d);
});