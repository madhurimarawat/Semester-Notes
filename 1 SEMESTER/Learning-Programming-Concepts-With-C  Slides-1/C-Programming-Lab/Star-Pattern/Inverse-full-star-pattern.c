#include<stdio.h>
void main(){
int r,i,j,s;
printf("enter number of rows");
scanf("%d",&r);
for(i=1;i<=r;i++){
for(s=1;s<=i;s++){
printf(" ");
}
for(j=i;j<=r;j++){
 printf("* ");
}
printf("\n");
}
}
