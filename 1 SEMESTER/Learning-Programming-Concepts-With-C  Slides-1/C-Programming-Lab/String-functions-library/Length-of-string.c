#include<stdio.h>
#include<string.h>
void main(){
char str[100],i;
printf("Enter a string:\n");
scanf("%s",str);
i = strlen(str);
printf("Length of string is %d",i);
}