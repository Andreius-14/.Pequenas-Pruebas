using System;
using System.IO;
using System.Runtime.CompilerServices;

namespace Proyecto_01{


class Program
{
    static void Main(string[] args)
    {
        string mensaje ="";
        // Crea un nuevo archivo
        TextWriter archivo = new StreamWriter("archivo.txt");

        // Inserta texto en el archivo
        mensaje = Console.ReadLine().ToString();

        archivo.WriteLine(mensaje);

        archivo.Close();
        Console.Clear();

        System.Console.WriteLine("Se ha guardado el Archivo");
        Console.ReadKey();
        
    }
}}