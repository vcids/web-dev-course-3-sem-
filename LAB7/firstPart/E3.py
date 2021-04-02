arr = []

a = int(input())

for i in range(a):
    b = int(input())
    arr.append(b)

cnt = 0

for i in arr:
    if i >= 0:
        cnt += 1

print(cnt)