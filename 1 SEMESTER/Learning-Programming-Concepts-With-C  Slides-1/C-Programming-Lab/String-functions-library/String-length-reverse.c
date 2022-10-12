#include<stdio.h>
#include<string.h>
void main(){
char str[56];
printf("Enter string:");
scanf("%s",str);
printf("The length of string is: %d\n",strlen(str));
printf("The reverse of string is: %s\n",strrev(str));
}