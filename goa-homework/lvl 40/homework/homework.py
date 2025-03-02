#2) Function Basics: Write a function that takes no arguments and simply prints "Hello, World!"
#3) Arguments and Parameters: Write a function that takes two numbers as arguments and prints their sum.
#4) Return Statement: Create a function that takes a number as input, multiplies it by 10, and returns the result.
#5) Default Arguments: Define a function that takes a name as input and prints a greeting. If no name is provided, it should use "Guest" as the default.
#6) Boss level: Nested Functions: Define a function that contains another function inside it and calls the inner function.
#7) Write a function that takes a list of numbers and checks whether each number is even or odd using a loop and conditional statements. Print "Even" for even numbers and "Odd" for odd numbers.
#8) Find the Maximum: Create a function that takes a list of numbers and uses a loop to find and return the maximum number.
#9) Define a function that takes a list of integers and returns a new list containing only the positive numbers. Use a loop and a conditional statement.
#10) Write a function that iterates through a range of numbers (e.g., 1 to 100) and sums up all the numbers divisible by 3. Return the total sum.


def greet():
    print("Hello, World!")

greet()

#_____________________________

def add(a, b):
    print(a + b)

add(2, 3)

#_____________________________

def number(a):
    print(a * 10)

result = number(5)

print(result)

#_____________________________

def greet(name="Guest"):
    print("Hello, " + name + "!")

greet("Nikolozi")
greet()

#_____________________________

def innerfucntion():
    def function(a, b):
        return 1 + 2
    
#_____________________________

def function(a, b, c):
    list = [a, b, c]
    for i in list:
        if i % 2 == 0:
            return "even"
        elif i % 2 == 1:
            return "odd"
        
#_____________________________

def function(numbers):
    if not numbers:
        return None
    max_num = numbers[0]
    for num in numbers:
        if num > max_num:
            max_num = num
            return max_num
        
#_____________________________

def get_positives(numbers):
    positve_nums = []
    for num in numbers:
        if num > 0:
            positve_nums.append(num)
            return positve_nums
        
#_____________________________

def sum_divisible_sum_three():
    total = 0 
    for num in range(1, 101):
        if num % 3 == 0:
            total += num
            return total