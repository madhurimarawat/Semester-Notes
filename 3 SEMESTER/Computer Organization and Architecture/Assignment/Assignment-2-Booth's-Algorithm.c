#include<stdio.h>
#include<math.h>
void convertBinary(int _decimal, int _binary[]) {  
int i;    
for(i=0;_decimal>0;i++)    {  
_binary[i]=_decimal%2;    
_decimal=_decimal/2;    }    
printf("\nBinary of Given Number is=");    
for(i=i-1;i>=0;i--)    {    
printf("%d", _binary[i]);    	}      } 
void reverse( int *arr , int n )  {  
  int i , tmp ;  
  for( i = 0 ; i < n / 2 ; i++)   {  
    tmp = arr [ i ] ;  
    arr [ i ] = arr [ n - 1 - i ] ;  
    arr [ n - 1 - i ] = tmp ;  
  }  }  
void rightShift(int ac[], int qr[], int qn, int qrn){
    int temp, i;
    temp = ac[0];
    qn = qr[0]; 
    printf( "\t\trightShift\t");     
    for (i = 0; i < qrn - 1; i++) {
        ac[i] = ac[i + 1];
        qr[i] = qr[i + 1];    }
    qr[qrn - 1] = temp;}
void add(int ac[], int x[], int qrn){
    int i, c = 0;
    for (i = 0; i < qrn; i++) {
        // updating accumulator with A = A + BR
        ac[i] = ac[i] + x[i] + c;
        if (ac[i] > 1) {
            ac[i] = ac[i] % 2;
            c = 1;
        }
        else
            c = 0;
    } } 
// function to find the number's complement
void complement(int a[], int n){
    int i;
    int x[8] = {0};
    x[0] = 1;
    for (i = 0; i < n; i++) {
        a[i] = (a[i] + 1) % 2;}
    add(a, x, n);}
// function to perform adding in the accumulator
// function to perform right shift
// function to display operations
void display(int ac[], int qr[], int qrn){
    int i;   
    // accumulator content
    for (i = qrn - 1; i >= 0; i--)
        printf("%d",ac[i]);
    printf("\t");
    // multiplier content
    for (i = qrn - 1; i >= 0; i--)
       printf("%d", qr[i]);}
// Function to implement booth's algo
void boothAlgorithm(int br[], int qr[], int mt[], int qrn, int sc){
    int qn = 0, ac[10] = { 0 };
    int temp = 0;
    printf("qn\tq[n+1]\t\tBR\t\tAC\tQR\t\tsc\n");
    printf("\t\t\tinitial\t\t");
    display(ac, qr, qrn);
    printf("\t\t");printf("%d",sc); printf("\n");     
    while (sc != 0) {
        printf("%d",qr[0]); printf("\t%d",qn);
        // SECOND CONDITION
        if ((qn + qr[0]) == 1)        {
            if (temp == 0) {                 
                // subtract BR from accumulator
                add(ac, mt, qrn);
                printf("\t\tA = A - BR\t");
                for (int i = qrn - 1; i >= 0; i--)
                    printf("%d",ac[i]);
                temp = 1;            }            
            // THIRD CONDITION
            else if (temp == 1)            {
                // add BR to accumulator
                add(ac, br, qrn);
                printf("\t\tA = A + BR\t");              
                for (int i = qrn - 1; i >= 0; i--)
                    printf("%d",ac[i]);
                temp = 0;          }
            printf("\n\t");
            rightShift(ac, qr, qn, qrn);       }        
        // FIRST CONDITION
        else if (qn - qr[0] == 0)
            rightShift(ac, qr, qn, qrn);
        display(ac, qr, qrn);
        printf("\t"); 
        // decrement counter
        sc--;
        printf("\t%d\n",sc);   }} 
  int main() {
// Write C code here
int a,b,br[20],qr[20];int mt[10], sc;
    int brn, qrn;
printf("Enter multiplicand:");scanf("%d",&a);
printf("Enter multiplier:");scanf("%d",&b);
convertBinary(a, br);convertBinary(b, qr);printf("\n");  
    // Number of multiplicand bit
    brn = 4;
  /*  // multiplicand
    int br[] = { 0, 1, 1, 0 };*/
   // copy multiplier to temp array mt[]
    for (int i = brn - 1; i >= 0; i--)
        mt[i] = br[i];
    reverse(br, 4);
    complement(mt, brn);
    // No. of multiplier bit
    qrn = 4;
    // sequence counter
    sc = qrn;
     
/*    // multiplier
    int qr[] = { 1, 0, 1, 0 };*/
    reverse(qr, 4);
    boothAlgorithm(br, qr, mt, qrn, sc);
printf("Result is :\t");
for (int i = qrn - 1; i >= 0; i--)
printf("%d", qr[i]);
printf("\nAnswer is:\t %d",a*b);}
