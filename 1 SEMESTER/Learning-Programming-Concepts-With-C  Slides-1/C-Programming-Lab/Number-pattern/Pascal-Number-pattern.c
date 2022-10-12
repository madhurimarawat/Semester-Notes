#include<stdio.h>
void main(){
int r,i,j,s,coef;
printf("Enter number of rows:");
scanf("%d",&r);
for(i=0;i<r;i++){
  for(s=1 ;s <= r -i;s++){
  printf(" ");
 }
for(j=0;j<=i;j++){
  if(j==0||i==0){
  coef =1;
}
else
{
 coef =coef*(i-j+1)/j;
}
printf("%4d", coef);
}
printf("\n");
}
}