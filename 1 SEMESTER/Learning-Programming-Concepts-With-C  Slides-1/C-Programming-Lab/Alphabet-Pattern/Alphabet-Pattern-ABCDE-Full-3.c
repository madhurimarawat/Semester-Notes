#include<stdio.h>
#include<ctype.h>
void main(){
int i,j;
char c='A';
printf("Enter ending character:");
scanf("%s",&c);
c = toupper(c);
for(i='A';i<=c;i++){
for(j='A';j<=c;j++){
printf(" ");
printf("%c",i);
}
printf("\n");
}
}