def stepen(a, n):
    for i in range(1, n):
        a = a*a
    
    return a


a = int(input())
b = int(input())

print(stepen(a, b))