#include<stdio.h>
void main(){
char c;
int r,i,j,s;
printf("enter uppercase letter:");
scanf("%c",&c);
for(i='A';i<=c;i++){
for(s=1;s>=i;s++){
printf(" ");
}
for(j=i;j<=c;j++){
 printf("%c",i);
}
printf("\n");
}
}
