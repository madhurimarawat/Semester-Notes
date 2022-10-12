#include<stdio.h>
void main(){
 char s1[100], s2[100],i,j;
 printf("Enter string s1:");
gets(s1);
 printf("Enter string s2:");
scanf("%s",s2);
int str_compare(char s1[],char s2[]){
 while(s1[i] == s2[i]){
if (s1[i] =='\0'|| s2[i] == '\0')
i++;
}
if(s1[i] == s2[i])
printf("str1 equal to str2");
else if (s1[i] <s2[i])
printf("str1 is greater than str2");
else 
printf("str2 is greater than str1");
}
}