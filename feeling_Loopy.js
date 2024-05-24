const str ="ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
//console.log(str);
let cells="";
let cell1,cell2="";
for (let i = 0; i < str.length; i++) {
    
    
	if (str[i] != "\n") {
        cells=cells+str[i];
        //console.log(cells);
	}
    else
    {
        cell1= cells;
        //console.log(cell1);
        for(let j=0;j<cell1.length;j++)
            {
                
                if(cell1[j]!=",")
                    {
                        cell2=cell2+cell1[j];
                        //console.log(cell2);
                    }
                if(cell1[j]==",")
                    {
                        cell2= cell2+"  ";
                    }
                if(j==cell1.length-1){
                        console.log(cell2);
                        cell2="";
                    }
            }
            
        //console.log(cell1);
       
        cells="";
    }
    if(i==str.length-1)
        {
            cell1=cells;
            //console.log(cell1);
            for(let j=0;j<cell1.length;j++)
                {
                    
                    if(cell1[j]!=",")
                        {
                            cell2=cell2+cell1[j];
                            //console.log(cell2);
                        }
                    if(cell1[j]==",")
                        {
                            cell2= cell2+"  ";
                        }
                    if(j==cell1.length-1){
                            console.log(cell2);
                            cell2="";
                        }
                }
        }
    
    //console.log(cells);
    //cells="";
	
}

//console.log(cells);
