## Programacion Orientada a Objetos
#
#class Persona:
#  def __init__(self, nombre, edad, genero):
#    self.nombre = nombre
#    self.edad = edad
#    self.genero = genero
#  def __str__(self):
#    return f"Nombre: {self.nombre}. \nEdad: {self.edad}. \nGenero: {self.genero}."
#
#
#
#
#p = Persona("Juan", 30, "Hombre")
#print("Nombre: ---", p.nombre)
#print("Edad: ---", p.edad)
#print("Género: ---", p.genero)
#
#print(p)
#

""" HERENCIA """
#class Person:
#    """docstring for Person."""
#    def __init__(self, name,apellido):
#        self.name = name
#        self.apellido = apellido
#
#    def printname(self):
#        print(self.name,self.apellido)  
#
#class Student(Person):
#    
#    
#x = Student("MARRIA","mariua")
#
#x.printname()


#class Person:
#    """docstring for Person."""
#    def __init__(self, fname , lname):
#
#        self.fname = fname
#        self.lname = lname
#    def printname(self):
#        print(self.fname,self.lname)
#
#class Student(Person):
#    """docstring for Student."""
#    def __init__(self, fname,lname):
#        super().__init__(fname,lname)
#        self.graduationyear = 2019
#
#x = Student("Mike", "Mauricio")
#x.printname()
#print(x.graduationyear)
        



#class Person:
#    """docstring for Person."""
#    def __init__(self, fname , lname):
#
#        self.fname = fname
#        self.lname = lname
#    def printname(self):
#        print(self.fname,self.lname)
#
#class Student(Person):
#    """docstring for Student."""
#    def __init__(self, fname,lname,year):
#        super().__init__(fname,lname)
#        self.graduationyear = year
#
#
#x = Student("Mike", "Mauricio",40000)
#x.printname()
#print(x.graduationyear)
#        


#class Person:
#  """docstring for Person."""
#  def __init__(self, fname , lname):
#
#      self.fname = fname
#      self.lname = lname
#  def printname(self):
#      print(self.fname,self.lname)
#
#class Student(Person):
#  """docstring for Student."""
#  def __init__(self, fname,lname,year):
#      super().__init__(fname,lname)
#      self.graduationyear = year
#  def welcome(self):
#    print("Welcome",self.fname,self.lname,"to the class of",self.graduationyear)
#
#
#x = Student("Mike", "Mauricio",40000)
#x.printname()
#
#x.welcome()
#
#print(x.graduationyear)
#

"""HERENCIA Y UN POCO DE POLIMORFISMO"""
#class Persona():
#    """docstring for Persona."""
#    def __init__(self, nombre ,edad,lugar_residencia):
#        self.nombre = nombre
#        self.edad = edad
#        self.lugar_residencia=lugar_residencia
#
#    def descripcion(self):
#        print("Nombre: ",self.nombre," Edad:",self.edad," Residencia: ",self.lugar_residencia)
#
#class Empleado(Persona):
#    """docstring for Empleado."""
#    def __init__(self, salario,antiguedad,nombre_empleada,edad_empleada,residencia_Empleada):
#        super().__init__(nombre_empleada,edad_empleada,residencia_Empleada)
#        self.salario = salario
#        self.antiguedad= antiguedad
#
#    """Empleando Polimorfismo"""
#
#    def descripcion(self):
#        super().descripcion()
#        print("Salario:",self.salario,"Antiguedad: ",self.antiguedad)
#
#Manuel=Empleado(1500,15,"Manuel",55,"Colombia")
#Manuel.descripcion()

"""ENCAPSULAMIENTO"""
class Clase():
    #atributo_clase ="Hola-Publico"
    #__atributo_clase="Hola-Privado"

    def __funcion_privada(self):
        print("Hola Mundo - Privado ")
        #self.__variable =0

    def metodo_publico(self):
        self.__funcion_privada()

mi_clase=Clase()
#print(mi_clase.atributo_clase)
#print(mi_clase.metodo_publico)
#print(mi_clase.__atributo_clase) - No se mostrara por que genera error

mi_clase.metodo_publico()

