#include<stdio.h>
void main(){
 int a[2][2],b[2][2],i,j,p=1,sum=0,q=1,mul[2][2];
  printf("Enter Matrix elements:-\n");
  for(i=0;i<2;i++){
for(j=0;j<2;j++){
  printf("Enter element %d:",p);
 scanf("%d",&a[i][j]);
p++;
} }
for(i=0;i<2;i++){
for(j=0;j<2;j++){
  printf("Enter element %d:",q);
 scanf("%d",&b[i][j]);
q++;
}
}
 for(i=0;i<2;i++){
mul[i][j]=0;
for(j=0;j<2;j++){
 for(int k=0;k<2;k++){
mul[i][j]+=a[i][k]*b[k][j];
}
}
for(i=0;i<2;i++){
for(j=0;j<2;j++){
printf("%d\n",mul[i][j]);
}
}
}
}