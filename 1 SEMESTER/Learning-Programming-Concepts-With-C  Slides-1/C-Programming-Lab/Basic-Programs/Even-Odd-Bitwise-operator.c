#include<stdio.h> 
int fibo(int);
void main(){
int m;
printf("Enter number to check:");
scanf("%d",&m);
(m & 1)==1 ? printf("%d is odd",m):printf("%d is even",m);
}
