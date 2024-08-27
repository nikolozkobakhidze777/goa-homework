#Country
print("You need to make a program to create country cards in which the names of the country and the capital are displayed")

print("country: ")
print("capital: ")

country_cards = [
    {"country": "France", "capital": "Paris"},
    {"country": "Japan", "capital": "Tokyo"},
    {"country": "georgia", "capital": "Tbilisi"},
    {"country": "Germany", "capital": "Berlin"},
]

def display_country_cards(cards):
    for card in cards:
        print(f"Country: {card['country']}")
        print(f"Capital: {card['capital']}")
        print("-" * 20)  

display_country_cards(country_cards)
