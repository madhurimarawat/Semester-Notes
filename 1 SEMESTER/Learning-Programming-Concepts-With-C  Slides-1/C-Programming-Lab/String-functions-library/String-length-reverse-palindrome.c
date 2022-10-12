#include<stdio.h>
#include<string.h>
void main(){
char str[56];
char *s;
int i,len,temp;
printf("Enter string:");
scanf("%s",str);
printf("The length of string is: %d\n",strlen(str));
printf("The reverse of string is: %s\n",strrev(str));
s=strrev(str);
len=strlen(str);
for(i=0;i<len;i++){
if(str[i]!=s[i]){
temp=1;
}
else{
temp=0;
}
}
if(temp==0){
printf("String %s is palindrome.",str);
}
else{
printf("String %s is not palindrome.",str);
}
}