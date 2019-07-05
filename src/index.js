/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(p = []) {
	var i, n, a1, a2, a3;
	var c=0;
	var d= new Array();
	var x=0;
	var cd=0;
	for (i=0; i<p.length; i++)
	{
    	a1=p[i];
        a2=p[a1-1];
        a3=p[a2-1];                
        if ((a1>0) && (a2>0) && (a3>0) && (i == (a3-1)))
        {        
            if ((a1 != a2) && (a2 != a3) && (a3 != a1) && checkd(a1,a2,a3))
        	{	            	
            	addd(a1,a2,a3);
        		c=c+1;
        	};
        };
    }; 
	function addd(a1,a2,a3)
	{	
		d[x]= a1;
		d[x+1]= a2;
		d[x+2]= a3;
		x+=3;
	};
	function checkd(a1,a2,a3)
	{
		cd=0;
		for (n=0; n<d.length; n++)
		{
			if ((a1 == d[n]) || (a2 == d[n]) || (a3 == d[n]))
			{
				cd++;
			};
		};
		if (cd == 0)
		{
			return true;
		} else
		{
			return false;
		};    
	}
		return c;
  // your implementation
};

