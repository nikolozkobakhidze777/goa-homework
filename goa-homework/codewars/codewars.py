# Rules of codewars!!
# 1. print ფუნქციას არ ვიყენებთ
# 2. როდესაც საბოლოო შედეგს გამოვითვლით, ის ფუნქციამ უნდა დააბრუნოს return keyword-ით
# 3. ჩვენ ფუნქჩიას ჩვენით არასდროს არ ვიძახებთ codewars-ში. codewars-ს თითოეული ამოცანისთვის უკვე შედგენილი აქვს test case-ები. ამ test case-ებს გამოიძახებს ჩვენ ფუნქციაზე და ყველგან სწორი თუ იქნება შედეგი, ამოცანა შესრულებულია
# 4. როდესაც გვინდა უკვე კოდის სისწორის შემოწმება, უნდა ჩამოვსქროლოთ ქვემოთ და მარჯვენა კუთხეში და ავირჩიოთ test ან attempt

# test - გაიტესტოს ცოტა test case-ზე
# attempt - გაიტესტოს ყველა test case-ზე. თუ ყველაზე სწორად იმუშავებს,ამოცანა შესრულებულია და ქულები ანუ honor მოგვემატებათ.

#Multiply

def multiply(a, b):
    return a * b

#Even or Odd

def even_or_odd(number):
    if number % 2 == 0:
        return "Even"
    else:
        return "Odd"
    
#Convert a Number to a String!

def number_to_string(number):
    return str(number)

result1 = number_to_string(123)
result2 = number_to_string(999)
result3 = number_to_string(-100)

results = (result1, result2, result3)
results

#Reversed Strings

def solution(string):
    return string[::-1]

#Return Negative

def make_negative( number ):
    if number > 0:
        return number * -1
    else:
        return number

#Opposite number

def opposite(number):
    return -number

#Convert boolean values to strings 'Yes' or 'No'.

def bool_to_word(boolean):
    if boolean == True:
        return "Yes"
    else:
        return "No"
    
#Sum of positive
def positive_sum(arr):
    result = 0
    
    for i in arr:
        if i > 0:
            result = result + i
    
    return result

#Function 1 - hello world

def greet():
    return "hello world!"

#Grasshopper - If/else syntax debug

def check_alive(health):
    return health > 0

#Fundamentals: Return

def add(a, b):
    return a + b

def subt(a, b):
    return a - b

def mod(a, b):
    return a % b

def multiply(a, b):
    return a * b

def divide(a, b):
    if b != 0:
        return a / b
    else:
        return

def exponent(a, b):
    return a ** b

#Grasshopper - Debug sayHello

def say_hello(name):
    return f"Hello, {name}"

#Array plus array

def array_plus_array(arr1, arr2):
    return sum(arr1) + sum(arr2)

#Grasshopper - Grade book

def get_grade(score1, score2, score3):
    average = (score1 + score2 + score3) / 3

    if 90 <= average <= 100:
        return 'A'
    elif 80 <= average < 90:
        return 'B'
    elif 70 <= average < 80:
        return 'C'
    elif 60 <= average < 70:
        return 'D'
    elif 0 <= average < 60:
        return 'F'
    
#Count the Monkeys!

def monkey_count(n):
    return list(range(1, n + 1))

#Simple multiplication

def simple_multiplication(number):
    return number * 8 if number % 2 == 0 else number * 9

#Switch it Up!

def switch_it_up(number):
    if number==0 :
        return"Zero"
    elif number==1 :
        return"One"
    elif number==2 :
        return"Two"
    elif number==3 :
        return"Three"
    elif number==4 :
        return"Four"
    elif number==5 :
        return"Five"
    elif number==6 :
        return"Six"
    elif number==7 :
        return"Seven"
    elif number==8 :
        return"Eight"
    elif number==9 :
        return"Nine"