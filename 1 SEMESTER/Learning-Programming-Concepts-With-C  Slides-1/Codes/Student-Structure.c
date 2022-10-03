#include<stdio.h>
struct student{
int roll; char name; 
float marks;
};
void main(){
struct student s1;
s1.name = 'H';
s1.roll=12;s1.marks=76.5;
printf(" %d , %c , %f",s1.roll,s1.name,s1.marks);}