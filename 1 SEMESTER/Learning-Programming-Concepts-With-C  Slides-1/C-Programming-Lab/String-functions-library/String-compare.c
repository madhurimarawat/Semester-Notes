#include<stdio.h>
#include<string.h>
void main(){
 char s1[100], s2[100],i,j;
 printf("Enter string s1:");
gets(s1);
 printf("Enter string s2:");
scanf("%s",s2);
i = strcmp(s1,s2);
if(i ==0){
printf("str1 equal to str2");
}
else if (i > 0){
printf("str2 is less than str1");
}
else
{ 
printf("str1 is less than str2");
}
}