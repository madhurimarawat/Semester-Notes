#include<stdio.h>
int fact(int n){
if(n==0)
return 1;
else
return n*fact(n-1);
  }
void main(){
  int n;
printf("enter number");
scanf("%d",&n);
printf("Factorial is %d",fact(n));
}