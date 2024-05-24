//CSV file manipulation
const str ="ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
let cells="";
let cell1,cell2="";
for (let i = 0; i < str.length; i++) {
    
    //Getting the row till the delimiter \n in the variable cells
	if (str[i] != "\n") {
        cells=cells+str[i];
        
	}
    //Looping again in the row to separate the cells when reaching ','
    else
    {
        cell1= cells;
        
        for(let j=0;j<cell1.length;j++)
            {
                
                if(cell1[j]!=",")
                    {
                        cell2=cell2+cell1[j];
                        
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
            
       
        cells="";
    }
    //Doing the iteration again for the last row
    if(i==str.length-1)
        {
            cell1=cells;
            
            for(let j=0;j<cell1.length;j++)
                {
                    
                    if(cell1[j]!=",")
                        {
                            cell2=cell2+cell1[j];
                            
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
    
    
}


