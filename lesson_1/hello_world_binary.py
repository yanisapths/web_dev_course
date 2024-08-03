def string_to_binary(input_string):
    return ' '.join(format(ord(char), '08b') for char in input_string)

hello_world = "Hello, World!"
binary_representation = string_to_binary(hello_world)


print(f"Hello, World! in binary is: {binary_representation}")


# def string_to_ascii(input_string):
#     return ' '.join(str(ord(char)) for char in input_string)

# ascii_representation = string_to_ascii(hello_world)

# print(f"Hello, World! in ASCII is: {ascii_representation}")