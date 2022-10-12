#include<stdio.h>
void main(){
 int n1,n2,q,r;
 printf("Enter two integer:");
 scanf("%d %d",&n1,&n2);
 q = n1/n2;
r= n1 % n2 ;
printf("The quotient and remainder of %d and %d is %d and %d ",n1,n2,q,r);
}