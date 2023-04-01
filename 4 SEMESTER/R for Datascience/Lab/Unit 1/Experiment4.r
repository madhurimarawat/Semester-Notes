#Experiment4
#Overwrite the existing object using the same sequence with the order reversed.
x=10
y=15.9
v1=seq(x,y,by=0.3)
print(v1)
#Method 1
v1=sort(v1,decreasing=TRUE)
print(v1)
#Method 2
v1=seq(x,y,by=0.3)
v1=rev(v1)
print(v1)
#Method 3
x=10
y=15.7
v1=seq(y,x,by=-0.3)
print(v1)
