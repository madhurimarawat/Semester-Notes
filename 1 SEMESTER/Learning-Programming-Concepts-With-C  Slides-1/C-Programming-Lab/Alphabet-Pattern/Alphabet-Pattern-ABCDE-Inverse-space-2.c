#include<stdio.h>
#include<ctype.h>
void main(){
char i,j,s,r;
printf("Enter last character of rows:");
scanf("%c",&r);
r=toupper(r);
for(i='A';i<=r;i++){
for(s=r;s>i;s--){
printf(" ");
}
for(j='A';j<=i;j++){
printf("%c",j);
}
printf("\n");
}
}
