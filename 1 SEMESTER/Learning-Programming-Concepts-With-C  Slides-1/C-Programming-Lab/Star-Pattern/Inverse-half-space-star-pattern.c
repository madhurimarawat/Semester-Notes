#include<stdio.h>
void main(){
int r,i,j,s;
printf("Enter number of rows:");
scanf("%d",&r);
for(i=0;i<=r;i++){
for(s=0;s<=i-1;s++){
printf(" ");
}
for(j=i;j<=r;j++){
 printf("*");
}
if(i<r){printf("\n");}
}
}
