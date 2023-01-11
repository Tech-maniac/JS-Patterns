/*Solution for Pattern B
1 2 3 4 5
2 3 4 5
3 4 5
4 5
5*/
let result=""
for(i=1;i<=5;i++)
{
    for(j=i;j<=5;j++)
    {
        result = result + j;
    }
    result = result + "\n"; 
}
console.log(result);

/*Solution for Pattern E
A A A A A
B B B B B
A A A A A
B B B B B
A A A A A*/
let result2=""
for(i=1;i<=5;i++)
{
    for(j=1;j<=5;j++)
    {
        if(i%2==0)
        {
            result2 = result2 + "B"
        }
        else
        {
            result2 = result2 + "A"
        }
       
    }
    result2 = result2 + "\n";
}
console.log(result2);
