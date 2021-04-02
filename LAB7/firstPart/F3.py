def xor(a, b):
    if a == True and b == True or a == False and b == False:
        return False
    else:
        return True



a = int(input())
b = int(input())

print(xor(a, b))