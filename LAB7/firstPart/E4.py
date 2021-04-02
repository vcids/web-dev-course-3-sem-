arr = []

a = int(input())

for i in range(a):
    b = int(input())
    arr.append(b)

cnt = 0

for i in range(len(arr)):
    if arr[i] >= arr[i - 1]:
        cnt += 1

print(cnt)