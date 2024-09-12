user_age = int(input("enter your age: "))
user_experince = input("enter ur job or student status: ")

user_age_confirm = user_age >= 18 and user_age < 60
user_experince_confirm = user_experince == "employed" or user_experince == "student"

print("user is ", user_experince, " and user is ", user_experince_confirm)
