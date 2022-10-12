#include<stdio.h>
void main(){
int n,p = 0,i;
printf("enter");
scanf("%d",&n);
if(n==0||n==1){
p=1;
}
if(n==2){
p=0;
}
for(i=2;i<=n/2;i++){
if(n %i==0){
  p=1;
break;
}
}
if(p==0){
  printf("%d is prime and the square is %d",n,n*n);
}
else{
printf("%d is not a prime number",n);
}
}
