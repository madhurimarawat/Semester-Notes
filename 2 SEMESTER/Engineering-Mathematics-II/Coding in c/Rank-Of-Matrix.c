#include<stdio.h>
void main(){
 int arr[2][2],i,j,p=1;
  printf("Enter Matrix elements:-\n");
  for(i=0;i<2;i++){
for(j=0;j<2;j++){
  printf("Enter element %d:",p);
 scanf("%d",&arr[i][j]);
p++;
}
}
int det=arr[0][0]*arr[1][1]-arr[0][1]*arr[1][0];
if((arr[0][0]==0)&&(arr[1][1]==0)){
   printf("Rank of matrix is:0");
}
else if(det==0){
printf("Determinant is: %d",det);
  printf("\nRank of matrix is:1");
}
else{
printf("Determinant is: %d",det);
  printf("\nRank of matrix is:2");
}
}