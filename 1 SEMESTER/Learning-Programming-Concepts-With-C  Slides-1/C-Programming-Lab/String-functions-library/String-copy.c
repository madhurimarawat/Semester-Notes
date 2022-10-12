#include<stdio.h>
#include<string.h>
void main(){
 char s1[100], s2[100],i;
 printf("Enter string s1:");
fgets(s1, sizeof(s1), stdin);
strcpy(s2, s1);
printf("s2 : %s",s2);
}