#include<stdio.h>
void main(){
  int N,i,max=0;
  int arr[20];
printf("Enter number of elements:");
scanf("%d",&N);
 for(i = 0;i<N;i++){
  printf("Number %d:",i+1);
scanf("%d",&arr[i]);
}
for(i = 0;i<N;i++){
 if(max<arr[i])
  max= arr[i];
  }
printf("The largest number is: %d",max);
}