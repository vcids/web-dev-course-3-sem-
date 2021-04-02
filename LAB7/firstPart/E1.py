arr = []

a = int(input())

for i in range(a):
    b = int(input())
    arr.append(b)

it = 0

for i in arr:
    if it % 2 ==0:
        print(i, end=' ')
    it += 1