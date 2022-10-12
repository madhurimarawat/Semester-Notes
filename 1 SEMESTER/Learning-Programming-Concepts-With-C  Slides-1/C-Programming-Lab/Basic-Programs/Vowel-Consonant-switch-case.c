#include<stdio.h>
#include<string.h>
#include<ctype.h>
#define MAX_SIZE 100
void main(){
char str[MAX_SIZE];
int i,l,v,c;
printf("Enter a string");
gets(str);
v=0;
c=0;
l = strlen(str);
for(i=0;i<l;i++){
if(str[i]>= 'a' && str[i]<= 'z'|| str[i]>'A' && str[i]<'Z' ){
switch(str[i]){
case 'a':
case 'e':
case 'i':
case 'o':
case 'u':
case 'A':
case 'E':
case'I':
case 'O':
case 'U':
 v++;
break;
default:
c++;
}
}
}
printf("%d\n",v);
printf("%d\n",c);
}