#include<stdio.h>
#include<ctype.h>
#include<string.h>
void main(){
char str[100];
char*ptr=str;
int i;
printf("enter string");
scanf("%s",str);
for( i=0;i<strlen(str);i++){
  if(islower(str[i]))
str[i]=toupper(str[i]);
 else if(isupper(str[i]))
str[i]=tolower(str[i]); 
}                                                             
printf("%s",ptr);
}