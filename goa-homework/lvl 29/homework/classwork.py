#1

def word_count(text):
    words = text.split()
    return len(words)

#2

def check_number(number):
    if number > 0:
        return "number is valid"
    elif number < 0:
        return "number is invalid"
    else:
        return "number is 0"

#3

def categorize_age(age):
    if age < 13:
        return "child"
    elif age < 18:
        return "teenager"
    elif age < 65:
        return "adult"
    else:
        return "elderly"

#4

def even_odd_lists(numbers):
    even_numbers = [num for num in numbers if num % 2 == 0]
    odd_numbers = [num for num in numbers if num % 2 != 0]
    return even_numbers, odd_numbers

#5

def average(numbers):
    if len(numbers) == 0:
        return 0
    return sum(numbers) / len(numbers)