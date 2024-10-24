#1

def count_items(item_list, item):
    count = 0
    for i in item_list:
        if i == item:
            count += 1
    return count

#2

def sum_of_list(num_list):
    total_sum = 0
    for num in num_list:
        total_sum += num
    return total_sum

#3

def average_of_list(num_list):
    total_sum = sum_of_list(num_list)
    count = len(num_list)
    if count == 0:
        return 0
    return total_sum / count

#4

def reverse_list(items):
    reversed_list = []
    for i in range(len(items)-1, -1, -1):
        reversed_list.append(items[i])
    return reversed_list
