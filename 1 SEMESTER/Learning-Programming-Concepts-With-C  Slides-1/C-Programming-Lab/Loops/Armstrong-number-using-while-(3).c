#include<stdio.h>
void main(){
int m,r,t,j,s =0;
printf("Enter number to check:");
scanf("%d",&m);
t =m;
while(t>0){
j = t % 10;
r = j*j*j;
s=s+r;
printf("%d\n",j);
t= t/10;
}
if(s==m){
printf("%d is armstrong",m);
}
else{
printf("%d is not armstrong",m);
}
}