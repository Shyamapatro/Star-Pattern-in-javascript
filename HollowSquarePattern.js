// Hollow Square Pattern
// *****
// *   *
// *   *
// *   *
// *****

let n=6;
string=""
for(i=0;i<n;i++)
{
    for(j=0;j<n;j++)
    {
     if(i===0||i===n-1)
     {
        string+="*";

     }
     else{
        if(j===0||j===n-1){
            string+="*";

        }
        else{
            string+=" ";
        }
     }
    }
    string += "\n";
}
console.log(string);

