#include<stdio.h>
void main(){
  int N,i,m1 =0 ,m2=0;
  int arr[20];
printf("Enter number of elements:");
scanf("%d",&N);
 for(i = 0;i<N;i++){
  printf("Number %d:",i+1);
scanf("%d",&arr[i]);
}
for(i = 0;i<N;i++){
if(arr[i]>m1){
m2=m1;
m1= arr[i];
}
else if(arr[i]>m2 && arr[i]<m1){
m2 = arr[i];
}
}
printf("the 2nd largest number is %d",m2);
}