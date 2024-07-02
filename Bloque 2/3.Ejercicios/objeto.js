const data = {
    "universidad": {
      "nombre": "Universidad Tecnológica de Ejemplo",
      "ubicacion": {
        "ciudad": "Ciudad Ejemplo",
        "direccion": "Calle Falsa 123",
        "codigo_postal": 12345
      },
      "facultades": [
        {
          "nombre": "Facultad de Ciencias",
          "decano": {
            "nombre": "Dr. Alejandro Castro",
            "edad": 58,
            "años_en_el_puesto": 10
          },
          "departamentos": [
            {
              "nombre": "Matemáticas",
              "jefe_departamento": {
                "nombre": "Dr. Juan Pérez",
                "edad": 45
              },
              "profesores": [
                {
                  "nombre": "Dr. Juan Pérez",
                  "edad": 45,
                  "cursos": [
                    {
                      "nombre": "Teoría de Números",
                      "codigo": "MATH101",
                      "creditos": 3
                    },
                    {
                      "nombre": "Álgebra Abstracta",
                      "codigo": "MATH201",
                      "creditos": 4
                    }
                  ],
                  "publicaciones": [
                    {
                      "titulo": "Teoría de Números",
                      "año": 2015,
                      "revista": "Revista Matemática",
                      "coautores": [
                        "Dra. María González",
                        "Dr. Carlos Herrera"
                      ]
                    },
                    {
                      "titulo": "Álgebra Abstracta",
                      "año": 2018,
                      "revista": "Boletín de Álgebra",
                      "coautores": []
                    }
                  ]
                },
                {
                  "nombre": "Dra. María González",
                  "edad": 38,
                  "cursos": [
                    {
                      "nombre": "Geometría Diferencial",
                      "codigo": "MATH301",
                      "creditos": 4
                    }
                  ],
                  "publicaciones": [
                    {
                      "titulo": "Geometría Diferencial",
                      "año": 2017,
                      "revista": "Geometría y Topología",
                      "coautores": [
                        "Dr. Juan Pérez"
                      ]
                    }
                  ]
                }
              ],
              "cursos": [
                {
                  "nombre": "Cálculo I",
                  "codigo": "MATH101",
                  "semestre": "Otoño",
                  "creditos": 5,
                  "alumnos": [
                    {
                      "nombre": "Ana López",
                      "edad": 20,
                      "contacto": {
                        "email": "ana.lopez@ejemplo.com",
                        "telefono": "555-1234"
                      },
                      "calificaciones": {
                        "primer_parcial": 85,
                        "segundo_parcial": 90,
                        "final": 88
                      }
                    },
                    {
                      "nombre": "Luis Martínez",
                      "edad": 22,
                      "contacto": {
                        "email": "luis.martinez@ejemplo.com",
                        "telefono": "555-5678"
                      },
                      "calificaciones": {
                        "primer_parcial": 78,
                        "segundo_parcial": 83,
                        "final": 80
                      }
                    }
                  ]
                },
                {
                  "nombre": "Álgebra Lineal",
                  "codigo": "MATH201",
                  "semestre": "Primavera",
                  "creditos": 4,
                  "alumnos": [
                    {
                      "nombre": "Carla Díaz",
                      "edad": 19,
                      "contacto": {
                        "email": "carla.diaz@ejemplo.com",
                        "telefono": "555-8765"
                      },
                      "calificaciones": {
                        "primer_parcial": 92,
                        "segundo_parcial": 89,
                        "final": 91
                      }
                    }
                  ]
                }
              ]
            },
            {
              "nombre": "Física",
              "jefe_departamento": {
                "nombre": "Dr. Carlos Herrera",
                "edad": 50
              },
              "profesores": [
                {
                  "nombre": "Dr. Carlos Herrera",
                  "edad": 50,
                  "cursos": [
                    {
                      "nombre": "Mecánica Cuántica",
                      "codigo": "PHYS301",
                      "creditos": 4
                    }
                  ],
                  "publicaciones": [
                    {
                      "titulo": "Mecánica Cuántica",
                      "año": 2012,
                      "revista": "Física Moderna",
                      "coautores": []
                    }
                  ]
                }
              ],
              "cursos": [
                {
                  "nombre": "Física I",
                  "codigo": "PHYS101",
                  "semestre": "Otoño",
                  "creditos": 5,
                  "alumnos": [
                    {
                      "nombre": "Miguel Torres",
                      "edad": 21,
                      "contacto": {
                        "email": "miguel.torres@ejemplo.com",
                        "telefono": "555-4321"
                      },
                      "calificaciones": {
                        "primer_parcial": 88,
                        "segundo_parcial": 90,
                        "final": 89
                      }
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "nombre": "Facultad de Ingeniería",
          "decano": {
            "nombre": "Dra. Elena Ramírez",
            "edad": 60,
            "años_en_el_puesto": 15
          },
          "departamentos": [
            {
              "nombre": "Ingeniería de Software",
              "jefe_departamento": {
                "nombre": "Dr. Roberto Mendoza",
                "edad": 47
              },
              "profesores": [
                {
                  "nombre": "Dra. Laura Sánchez",
                  "edad": 40,
                  "cursos": [
                    {
                      "nombre": "Desarrollo Ágil",
                      "codigo": "SWENG301",
                      "creditos": 4
                    }
                  ],
                  "publicaciones": [
                    {
                      "titulo": "Desarrollo Ágil",
                      "año": 2016,
                      "revista": "Ingeniería de Software",
                      "coautores": [
                        "Dr. Roberto Mendoza"
                      ]
                    }
                  ]
                }
              ],
              "cursos": [
                {
                  "nombre": "Programación I",
                  "codigo": "SWENG101",
                  "semestre": "Primavera",
                  "creditos": 3,
                  "alumnos": [
                    {
                      "nombre": "Pedro Jiménez",
                      "edad": 18,
                      "contacto": {
                        "email": "pedro.jimenez@ejemplo.com",
                        "telefono": "555-9876"
                      },
                      "calificaciones": {
                        "primer_parcial": 95,
                        "segundo_parcial": 93,
                        "final": 94
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ],
      "biblioteca": {
        "nombre": "Biblioteca Central",
        "libros": [
          {
            "titulo": "Introducción a la Programación",
            "autor": "Autor Desconocido",
            "año_publicacion": 2010,
            "categorias": ["Programación", "Informática"],
            "disponibilidad": true
          },
          {
            "titulo": "Fundamentos de Matemáticas",
            "autor": "Dr. Juan Pérez",
            "año_publicacion": 2015,
            "categorias": ["Matemáticas", "Álgebra"],
            "disponibilidad": false
          }
        ],
        "personal": [
          {
            "nombre": "Sara Gómez",
            "edad": 30,
            "puesto": "Bibliotecaria"
          },
          {
            "nombre": "Andrés Ruiz",
            "edad": 25,
            "puesto": "Asistente de Biblioteca"
          }
        ]
      },
      "cafeteria": {
        "nombre": "Cafetería Universitaria",
        "menu": [
          {
            "dia": "Lunes",
            "platos": [
              "Ensalada César",
              "Spaghetti Bolognese",
              "Pollo Asado"
            ],
            "bebidas": [
              "Agua",
              "Refresco",
              "Jugo de Naranja"
            ]
          },
          {
            "dia": "Martes",
            "platos": [
              "Sopa de Tomate",
              "Hamburguesa",
              "Pizza"
            ],
            "bebidas": [
              "Agua",
              "Refresco",
              "Cerveza sin Alcohol"
            ]
          }
        ],
        "personal": [
          {
            "nombre": "Laura Márquez",
            "edad": 35,
            "puesto": "Encargada"
          },
          {
            "nombre": "Carlos Reyes",
            "edad": 28,
            "puesto": "Cocinero"
          }
        ]
      }
    }
}
  

module.exports = data;