#დავალება: 1-დან 20-მდე ყველა კენტი რიცხვის დაბეჭდვა.

#მეორე:0დან 50-მდე ყველა ლუჭი რიცხვის დაბეჭდვა


for i in range(1, 21, 2):
    print(i)


for i in range(0, 51, 2):
    print(i)


user_input = int(input("enter a number: "))

for i in range(0, user_input + 1, 2):
    print(i)
