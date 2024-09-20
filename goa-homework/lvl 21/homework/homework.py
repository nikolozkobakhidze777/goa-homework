#1) დღეს ნასწავლი მეთოდები ყველა ჩამოწერეთ მიუწერეთ მათი ფუნქციები და დაუწერეთ 2-2 მაგალითი

#პირველი ფუნქცია არის append
#მეთოდი, რომელიც სიის ბოლოს ამატებს ახალ ელემენტს

my_list = [1, 2, 3]
my_list.append(4)
print(my_list)

fruits = ['apple', 'banana']
fruits.append('orange')
print(fruits)

#მეორე ფუნქცია არის insert
#მეთოდი, რომელიც სიის კონკრეტულ პოზიციაზე ამატებს ახალ ელემენტს

my_list = [1, 2, 3]
my_list.insert(1, 1.5)
print(my_list)

fruits = ['apple', 'banana']
fruits.insert(1, 'cherry')
print(fruits)

#მესამე ფუნქცია არის Len
#ფუნქცია, რომელიც აბრუნებს სიის (ან სხვა ობიექტის) სიგრძეს

my_list = [1, 2, 3, 4]
print(len(my_list))

fruits = ['apple', 'banana', 'orange']
print(len(fruits))

#2) მომხმარებელს შემოატანინეთ მისი სახელი და სახელიდან 2 ინდექსზე მდგომი ასო ამოშალეთ(ისევე როგორც ლისტებზე ვაკეთებდით)

name = input("შეიყვანეთ თქვენი სახელი: ")

new_name = name[:2] + name[3:]

print("სახელი მე-2 ინდექსის ამოშლის შემდეგ:", new_name)

# ქვეყნების სია
countries = ['საქართველო', 'საფრანგეთი', 'გერმანია', 'იტალია', 'ესპანეთი']

# ვშლით მეორე ქვეყანას
second_country = countries.pop(1)

# ვშლით კიდევ ერთ ქვეყანას (დავუშვათ ბოლო ქვეყანას)
last_country = countries.pop()

#3)შექმენით სია ქვეყნების. გამოიყენეთ pop() და წაშალეთ მეორე ქვეყანა შემდეგ გამოიტანეთ ორივე წაშლილი ქვეყანაც და ახალი სიაც

countries = ['საქართველო', 'საფრანგეთი', 'გერმანია', 'იტალია', 'ესპანეთი']

second_country = countries.pop(1)

last_country = countries.pop()

print("წაშლილი ქვეყნები:", second_country, "და", last_country)
print("განახლებული სია:", countries)

#4) numbers = [10, 20, 30] ლისტში insert მეთოდით 10 და 20 შუაში ჩაამატეთ 15

numbers = [10, 20, 30]

numbers.insert(1, 15)

print(numbers)

#5) შექმენით ცარიელი სია. სიას სათითაოდ დაუმატეთ "Dog" "cat" და "bird" და დაბეჭდეთ საბოლოო სია.

animals = []

animals.append("Dog")
animals.append("Cat")
animals.append("Bird")

print(animals)
