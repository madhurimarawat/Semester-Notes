#include<stdio.h>
void swap(int*a, int*b){
int t;
t = *a; *a =*b; *b =t;
}
void main(){
int a=5,b=6;
printf("value before swap a=%d,b=%d\n",a,b);
swap(&a,&b);
printf("value after swap a=%d ,b=%d\n",a,b);
}