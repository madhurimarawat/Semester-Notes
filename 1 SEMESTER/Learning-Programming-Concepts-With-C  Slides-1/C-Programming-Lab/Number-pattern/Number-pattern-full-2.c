#include<stdio.h>
void main(){
int r,i,j,s;
printf("enter number of rows");
scanf("%d",&r);
for(i=r;i>=1;i--){
for(s=1;s<=r-i;s++){
printf(" ");
}
for(j=1;j<=i;j++){
printf("%d ",i);
//printf("*");
}
printf("\n");
}
}
