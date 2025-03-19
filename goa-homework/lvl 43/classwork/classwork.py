#1) შექმენით ფუნქცია სახელად print_arr() რომელიც არგუმენტად იღებს ლისთს და გამოპრინტავს მის ყველა ელემენტს

def print_arr(list):
    for i in list:
        print(i)

my_list = [1, 2, 3, 4, 5]
print_arr(my_list)


#2) შექმენით ფუნქცია სახელად check() რომელიც აბრუნებს True თუ არგუმენტად გადაცემული სტრინგის სიგრძე მეტია 4-ზე და ნაკლები -8-ზე თ არადა აბრუნებს False

def check(i):
    return 5 <= len(i) <= 7

print(check("hello"))
print(check("my"))
print(check("name"))
print(check("is"))
print(check("nika"))

#3) შექმენით ფუნქცია სახელად nospaces() რომელსაც გადაეცემა სტრინგი და აბრუნებს ამ სტრინგს სადაც " " ( სფეისები ) მაგივრად იქნება ""



#4) შექმენით ფუნქცია სახელად Is_best_academy() რომელიც პრინტავს 'Goal-Oriented-Academy"-ს

def Is_best_academy():
    print("Goal-Oriented-Academy")

Is_best_academy()

#5) შექმენით ფუნქცია სახლეად complex_calc() რომელიც დააბრუნებს ორი არგუმენტის ჯამს თუ პირველი არგუმენტი ლუწია ხოლო დააბრუნებს ნამრავლს თუ პირველი არგუმენტი კენტია

def complex_calc(f,a):
    if a % 2 == 0:
        print(f + a)
    else:
        print(f * a)

complex_calc(4, 5)
complex_calc(3, 5)

#BONUS) შექმენით ფუნქცია BONUS() რომელიც იღებს ლისთს არგუმენტად და ამოიღებს მისგან კენტ რიცხვებს შემდეგ შეატრიალებს და შემდეგ დაამატებს თავში ამოღებულ კენტ რიცხვებს

