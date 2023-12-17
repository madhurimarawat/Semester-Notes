#include<stdio.h>    
int main(){  
int a[10][10],b[10][10],mul[10][10],r,c,i,j,k,p=1,q=1;    
printf("Enter the number of row:");    
scanf("%d",&r);    
printf("Enter the number of column:");    
scanf("%d",&c);    
printf("Enter the first matrix element\n");    
for(i=0;i<r;i++)    
{    
for(j=0;j<c;j++)    
{  
printf("Element %d:",p);  
scanf("%d",&a[i][j]);    p++;  
}    
}    
printf("Enter the second matrix element\n");    
for(i=0;i<r;i++)    
{    
for(j=0;j<c;j++){  
printf("Element %d:",q);   
scanf("%d",&b[i][j]);    q++;
}    
}    
    
printf("Multiplication of the matrix\n");    
for(i=0;i<r;i++)    
{    
for(j=0;j<c;j++)    
{    
mul[i][j]=0;    
for(k=0;k<c;k++)    
{    
mul[i][j]+=a[i][k]*b[k][j];    
}    
}    
}    
//for printing result    
for(i=0;i<r;i++)    
{    
for(j=0;j<c;j++)    
{    
printf("%d\t",mul[i][j]);    
}    
printf("\n");    
}    
return 0;  
}  