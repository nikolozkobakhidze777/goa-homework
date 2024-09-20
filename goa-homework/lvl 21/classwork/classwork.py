#1) კომენტარების საშუალებით ახსენით განსხვავება insert და append შორის

#Python-ში, append არის მეთოდი, რომელიც გამოიყენება სიაში ახალი ელემენტის ბოლოში დასამატებლად
#insert საშუალებას გაწვდოს ელემენტს კონკრეტულ პოზიციაზე სიაში.

#2) მომხმარებელს შემოატანინეთ  თავიანთი გვარი და len ფუნქციის გამოყენებით გამოიტანეთ გვარის სიგრძე

last_name = input("შეიყვანეთ თქვენი გვარი: ")

length_of_last_name = len(last_name)

print(f"თქვენი გვარის სიგრძე არის: {length_of_last_name}")

#3) movies = ["Avatar", "Titanic", "Avengers", "GOA" , # Append a new element to the list at the end
movies.append("New Movie")

# Append another new element to the list at the end
movies.append("Another Movie")"Group 30"] ამ სიაში 3 ინდექსად ჩასვით თქვენი სახელი

movies = ["Avatar", "Titanic", "Avengers", "GOA", "Group 30"]


your_name = "ნიკოლოზი"
movies.insert(3, your_name)

print(movies)

#4) cars = ["BMW",  "Audi", "Honda"] list ბოლოში დაამატეთ თქვენი საყვარელი მანქანა

cars = ["BMW", "Audi", "Honda"]

favorite_car = "Nissan"

cars.append(favorite_car)

print(cars)

#5) ჩამოწერეთ დღეს ნასწავლი ყველა list-ის ფუნქცია და გვერდით მიუწერეთ მათი ფუნქციები

print("დღეს ვისწავლეთ append,insert და pop, Python-ში, append არის მეთოდი, რომელიც გამოიყენება სიაში ახალი ელემენტის ბოლოში დასამატებლად,insert საშუალებას გაწვდოს ელემენტს კონკრეტულ პოზიციაზე სიაში, pop მეთოდი სიის ელემენტების მოშორებას და დაბრუნებას აკეთებს")

#6) names = ["dato", "nika", "luka" , "gabrieli" , "akaki" , "gocha"]  ამ სიიდან ამოიღეთ 4 ინდექსზე მყოფი ელემენტი და შემდეგ 1 ინდექსზე დაამატეთ თქავენი სახელი დიდი ასოებით 

names = ["dato", "nika", "luka", "gabrieli", "akaki", "gocha"]

removed_element = names.pop(4)
print(f"ამოღებული ელემენტი: {removed_element}")


my_name = "nikolozi"
names.insert(1, my_name)

print(names)
