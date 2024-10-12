#გააკეთეთ 3 მაგალითი format() - ზე

name = "nikolozi"
age = 11
sentence = "my name is {} and i am {} years old".format(name, age)
print(sentence)

item = "banana"
price = 1.5
message = "this is a item {} and it costs {:.2f} lari".format(item, price)
print(message)

x = 5
y = 10
result = "result: {} + {} = {}".format(x, y, x + y)
print(result)
