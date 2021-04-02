a= int(input())

i = 0

while True:
    if 2**i == a:
        print('YES')
        break
    elif i > a:
        print('NO')
        break
    i += 1