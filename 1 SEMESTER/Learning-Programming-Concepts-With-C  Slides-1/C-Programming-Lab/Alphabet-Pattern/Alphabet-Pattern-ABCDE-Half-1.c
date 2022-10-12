#include<stdio.h>
void main(){
int i,j,n;
printf("Enter number of rows:"); scanf("%d",&n);
printf("Printing i for loop pattern:--");
for(i=0;i<=n;i++){
for(j =1; j<=i;j++){
  printf("%c",(char)(i+64));
}
printf("\n");
}
printf("Printing j for loop pattern:--");
for(i=0;i<=n;i++){
for(j =1; j<=i;j++){
  printf("%c",(char)(j+64));
}
if(i<n){printf("\n");}
}
}



