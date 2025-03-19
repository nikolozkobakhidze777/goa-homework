# Level 43
# 1) შექმენით ფუნქცია რომელიც არგუმენტად იღებს ლისთს და აბრუნებს მის პირველ და ბოლო ელემენტს ლისთში.  
# 2) შექმენით ფუნქცია რომელიც გადაეცემა სამი ინტჯერი და აბურნებს უდიდეს.
# 3) შექმენით ფუნქცია რომელიც იღებს სტრინგს არგუმენტად და აბრუნებს მას შეტრიალებულს.
# BONUS: ეცადეთ გააკეთოთ მესამე დავალება სტრინგ სლაისინგის გარეშე.

def function(lst):
    if lst:
        print(lst[0], lst[-1])
    else:
        print([])

my_list = [1, 2, 3, 4, 5]
function(my_list)

def function(a, b, c):
    print(max(a, b, c))

function(5, 3, 9)

def function(s):
    print(s[::-1])

function("hello")
function("i am nika")
function("i am 12 yr old")