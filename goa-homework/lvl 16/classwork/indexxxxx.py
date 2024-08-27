#Chess tournament
print("You are making a program that needs to calculate the points earned by a player in a chess tournament.A win is worth 1 point while a tie is worth 0.5 points.The given prgram declares two variables <b>wins</b> and <b>ties</b>")

wins = input()
ties = input()

total_points = wins * 1 + ties * 0.5

wins = 5
ties = 3 

total_points = wins * 1 + ties * 0.5

print("Total points earned:", total_points)
