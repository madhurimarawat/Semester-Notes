#include<stdio.h>
int large(int []);
int N,i,max;
void main(){
  int arr[20];
printf("enter number of elements");
scanf("%d",&N);
 for(i = 0;i<N;i++){
  printf("number %d:",i+1);
scanf("%d",&arr[i]);
}
max = large(arr);
printf("the largest number is %d",max);
}
int large(int arr[]){
 int static i=0;
if(i<N){
if(max < arr[i])
max=arr[i];
i++;
large(arr);
}
return max;
}