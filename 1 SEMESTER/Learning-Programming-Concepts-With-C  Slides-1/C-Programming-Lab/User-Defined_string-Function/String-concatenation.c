#include<stdio.h>
void main(){
 char s1[100], s2[100],i,j;
 printf("Enter string s1:");
scanf("%s",s1);
 printf("Enter string s2:");
scanf("%s",s2);
for(i=0; s1[i]!='\0'; ++i);
for(j=0;s2[j]!='\0'; ++j, ++i){
s1[i] = s2[j];
}
s1[i] = '\0';
printf("\noutput:%s",s1);
}
