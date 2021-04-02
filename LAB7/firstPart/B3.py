a = int(input())
b = int(input())

if a == 1 and b == 1:
    print('YES')
elif a == 1 and b != 1 or b == 1 and a != 1:
    print('NO')
else:
    print('YES')
