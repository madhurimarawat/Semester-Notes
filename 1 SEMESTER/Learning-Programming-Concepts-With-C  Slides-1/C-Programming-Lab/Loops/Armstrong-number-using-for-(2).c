#include<stdio.h>
void main(){
int m,r,t,s =0;
printf("Enter number to check:");
scanf("%d",&m);
for(t=m;m>0;m=m/10){
r = m % 10;
s=s+(r*r*r);
printf("%d\n",r);
}
if(s==t){
printf("%d is armstrong",t);
}
else{
printf("%d is not armstrong",t);
}
}