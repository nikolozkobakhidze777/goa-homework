sentence = "Hello world from Python"
words = sentence.split()
print(words)

data = "apple,banana,cherry"
fruits = data.split(',')
print(fruits)

path = "folder1-folder2-folder3"
folders = path.split('-')
print(folders)

text = "Python is great for programming"
words = text.split()
print(words)

csv_line = "John;Doe;30;Engineer"
fields = csv_line.split(';')
print(fields)

multiline_text = "Line 1\nLine 2\nLine 3"
lines = multiline_text.split('\n')
print(lines)

quoted_text = "'apple' 'banana' 'cherry'"
fruits = quoted_text.split("'")
print(fruits)

mixed_text = "one, two; three.four"
words = mixed_text.split(',|;|\.')
print(words)

sentence = "one two three four five"
words = sentence.split(' ', 2)
print(words)

numbers = "1 2 3 4 5"
num_list = numbers.split()
print(num_list)
