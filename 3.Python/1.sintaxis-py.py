# Prueba

#
# _nombreVariable = "platano-😸"
#
# print(_nombreVariable) #Comentario de 1 Linea
#
# """
# Patos
# Todos
#
# queso
# ...
# """

"""Prueba 01"""
# cars = ["Ford","Volvo","BMW"]
#
# for x in cars:
#    print(x)
#
"""Prueba 02"""
# cars = ["Ford","Volvo","BMW"]
# cars.append("Puros😨")
# for x in cars:
#    print(x)V
#

# cars = ["Ford","Volvo","BMW"]
# cars.append("Vamos")
# print(cars)
# cars.pop()
# print(cars)
# cars.remove("Ford")
# print(cars)
# print(len(cars))

fruits = ["apple", "banana", "cherry", "kiwi", "mango"]
# newlist = [x for x in fruits if "a" in x]
# print(newlist)

"""Funciones"""
# x = "Awesome"
#
# def myfunc():
#    global x
#    x = "fantastic"
#    print("python is " + x)
#    pass
# myfunc()
#
# print("Python is "+x)


"""Funciones If"""
#
# x=41
#
# if x > 10:
#    print("Mayor a 10")
#    if x > 20:
#        print("mayor a 20")
#    else :
#        print("Nada")
# else:
#    print("Menor a 41")

"""TryExcept"""
# try:
#    print("Hola Mundo")
# except NameError:
#    print("Hubo un error")
# else:
#    print("Finalizado😈")

"""Switch"""
# variable = "😲"
# if variable == "Flauta":
#    print("Resultado esperado")
# elif variable == "":
#    print("Putos")
# elif variable == "😲":
#    print("Tonto ese es un emogi")
# else:
#    print("NADA")


"""Bucles"""
# i=1
# while i<=6:
#    print(i)
#    i +=1
# else:
#    print("CUMPLIDO")

# i = 0
#
# while i < 10:
#
#    i+=1
#    if i == 5:
#        break
#    print(i)

# print(fruits)
# for x in fruits:
#    print(x)
#    if x == "banana":
#        break
#

"""ESPECIALES"""

"""E - Interpolacion"""
# name = input("Introduce nombre")
# print(f'God asss {name}')

"""E - Operador Ternario"""
# a = 100
# b = 200
# print(a)if a > b else print(b) if a < b else print("Putos")

# _user = False
# _msg = 'Usuario Logado' if _user else 'Usuario Estupido'
# print(_msg)

"""E - Recursiva"""


def factorial(n):
    if n == 1:
        return 1
    else:
        return n * factorial(n - 1)


z = factorial(5)
#
#
# print(z)

"""E - Spread"""


"""FUNCIONES PYTHON"""

x = min(1, 2, 34, 5)
print(x)
