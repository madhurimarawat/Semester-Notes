#include<stdio.h>
void main(){
int year;
printf("enter year:");
scanf("%d", &year);
year % 4 ==0? printf("%d is leap",year):printf("%d is not leap",year);
}