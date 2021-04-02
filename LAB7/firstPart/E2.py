arr = []

a = int(input())

for i in range(a):
    b = int(input())
    arr.append(b)


for i in arr:
    if i % 2 ==0:
        print(i, end=' ')