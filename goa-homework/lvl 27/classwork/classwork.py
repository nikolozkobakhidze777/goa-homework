#1

def welcome(name):
    print(f"Welcome, {name}!")

#2

def printBill(customer_name):
    print("======")
    print(customer_name)
    print("======")

name = input("Enter the customer's name: ")

printBill(name)

#3

print("12 is the answer for the third code")

#4

print("6 is the answer for the fourth code")

#5

def area(x, y):
    return x * y 

length = float(input("Enter the length of the rectangle: "))
width = float(input("Enter the width of the rectangle: "))

result = area(length, width)

print(result)

#6

def count_letters(text):

    letters = "ა, ბ, გ, დ, ე, ვ, ზ, თ, ი, კ, ლ, მ, ნ, ო, პ, ჟ, რ, ს, ტ, უ, ფ, ქ, ღ, ყ, შ, ჩ, ძ, წ, ხ, ჯ, ჰ"
    count = 0
    
    for char in text:
        if char in letters:
            count += 1
            
    return count
