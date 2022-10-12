#include<stdio.h>
void main(){
int m=5,n=5,i,j;
for(i=0;i<m;i++){
for(j=0;j<n;j++){
  switch(i){
 case 0:
printf("A"); break;
case 1:
printf("B");
break;
case 2:
printf("C");
break;
case 3:
printf("D");
break;
case 4:
printf("E");
break;
default:
break;
}
}
printf("\n");
}
}
