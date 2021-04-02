arr = []

a = int(input())

for i in range(a):
    b = int(input())
    arr.append(b)

cnt = 0

for i in range(len(arr)):
    if arr[i] < 0:
        cnt += 1

if cnt >= 2:
    print('YES')
else:
    print('NO')