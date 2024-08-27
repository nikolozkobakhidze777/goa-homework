#Variables

#int variable

age = 20
height = 175
score = 100
year = 2024

print("Age:", age)
print("Height:", height)
print("Score:", score)
print("Year:", year)

#str variable
name = "Nikolozi"
last_name = "Kobakhidze"
moms_name = "irina"
dads_name = "elguja"

print("Name:", name)
print("last name:", last_name)
print("moms name:", moms_name)
print("dads name:", dads_name)

#Float variables
temperature = 98.6
humidity = 65.4

print("Temperature:", temperature)
print("Humidity:", humidity)

#Input comparison operator

user_input = input("Enter your name: ") 
if user_input == "Nikolozi":
    print("Hello Nikolozi")
else:
    print("You are not Nikolozi.")

user_input = input("Enter your name: ") 

#Logical operator loops

age = int(input("Enter your age: ")) 
has_ticket = input("Do you have a ticket (yes/no)? ")

if age > 18 and has_ticket == "yes":
    print("You can enter the event.")
else:
    print("You cannot enter the event.")

#Conditional statement

grade = int(input("Enter your grade: "))

if grade >= 90:
    print("Excellent")
elif grade >= 70:
    print("Good")
elif grade >= 50:
    print("Pass")
else:
    print("Fail")

#Listing and indexing

my_list = ["apple", "banana", "cherry"]

first_item = my_list[0]  
second_item = my_list[1] 
third_item = my_list[2]  

print("First item:", first_item)
print("Second item:", second_item)
print("Third item:", third_item)


