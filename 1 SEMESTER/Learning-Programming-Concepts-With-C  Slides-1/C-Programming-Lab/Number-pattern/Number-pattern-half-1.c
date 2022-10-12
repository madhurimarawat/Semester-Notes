#include<stdio.h>
void main(){
int r,i,j;
printf("Enter number of rows:");
scanf("%d",&r);
for(i=r;i>=1;i--){
for(j=1;j<=i;j++){
 printf("%d ",i);
}
printf("\n");
}
}
