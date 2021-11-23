const companies=[
    {name:"company-one",category:"finance",start:1981,end:2003},
    {name:"company-two",category:"retail",start:1992,end:2008},
    {name:"company-three",category:"auto",start:1999,end:2007},
    {name:"company-four",category:"retail",start:2009,end:2010}
]





const ages=[33,12,20,16,5,54,21,44,61,13,25,43,25,64,32]
//map
// const companyNames=companies.map( company => `${company.name} [${company.start}->${company.end}]`)
// const squareAges=ages.map(age=>age**2)
// console.log(squareAges)

//reduce
const sumAges=ages.reduce(function(total,age){
    return total + age;
})

console.log(sumAges)