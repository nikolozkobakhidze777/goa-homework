template = "Hello, {name}. Welcome to {place}."
formatted_string = template.format(name="Alice", place="Wonderland")
print(formatted_string)

words = ["apple", "banana", "cherry"]
fruit_string = ", ".join(words)
print(fruit_string)

sentence = "The quick brown fox jumps over the lazy dog."
words_list = sentence.split()
print(words_list)

quote = "To be or not to be, that is the question."
modified_quote = quote.replace("be", "code")
print(modified_quote)

mixed_case = "PyThOn Is AwEsOmE!"
lowercase_string = mixed_case.lower()
print(lowercase_string)

greeting = "good morning"
uppercase_greeting = greeting.upper()
print(uppercase_greeting)
