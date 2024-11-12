#1

def search(text, word):
    if word in text:
        return "Word found"
    else:
        return "Word not found"

#2

def word_count(text):
    words = text.split()
    return len(words)

#3

def check_number_sign(number):
    if number > 0:
        return "number is valid"
    elif number < 0:
        return "number is invalid"
    else:
        return "number is 0"

#4

def categorize_age(age):
    if age < 13:
        return "child"
    elif age < 18:
        return "teenager"
    elif age < 65:
        return "adult"
    else:
        return "elderly"