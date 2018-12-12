# -*- coding: utf-8 -*-
"""
Created on Mon Aug 13 22:35:58 2018


"""

import datetime
import socket

# creando cursor
import pymysql.cursors

# conectar con la base de datos
dato = {
    'user': 'syrusric',
    'password': 'syrus000',
    'database': 'syrusdatabase',
    'host': 'syrusdb.crsx4zicev1a.us-east-1.rds.amazonaws.com'
}

connection = pymysql.connect(**dato)

IPv4 = socket.gethostbyname(socket.gethostname())  # IPv4 local
Port = 53002  # puerto udp
ServerSock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)  # creacion del socketServerSock.close((IPv4,Port))

ServerSock.bind((IPv4, Port))

while True:
    data, addr = ServerSock.recvfrom(2048)
    print(data)             #muestra el vector de datos(info. recibida)
    data = str(data)
    # print(data[3:6])
    if data[3:6] == "REV":
        semanas = str(data[8:12])
        semana = float(semanas)
        dia = str(data[12])
        dian = float(dia)
        hora = str(data[13:18])
        horan = float(hora)
        semanan = semana * 604800 + horan + 315964800 + dian * 86400
        string = str(datetime.datetime.fromtimestamp(int(semanan)))
        fecha = string[0:10]
        hora = string[11:19]
        # print(hora)
        semL = str(datetime.datetime.fromtimestamp(int(semanan)))
        print(semL)
        latitud = str((data[19:21]) + "." + str(data[22:26]))
        print("latitud, ")
        print(latitud)
        longitud = str(data[26:27] + str(data[28:30]) + "." + str(data[30:35]))
        print("longitud, ")
        print(longitud)

        with connection.cursor() as cursor:
            # Create a new record
            datos = "INSERT INTO syrustable (fecha,latitud,longitud) VALUES (%s, %s, %s)"
            cursor.execute(datos, (semL, latitud, longitud))

        # connection is not autocommit by default. So you must commit to save
        # your changes.
        connection.commit()

    if data[3:4] == "2":
        gps = data.split("#")
        semL = gps[1]
        latitud = gps[2]
        longitud = gps[3]
        print("fecha, ")
        print(semL)
        print("latitud, ")
        print(latitud)
        print("longitud, ")
        print(longitud)
        with connection.cursor() as cursor:
        # Create a new record
            datos = "INSERT INTO syrustable (fecha,latitud,longitud) VALUES (%s, %s, %s)"
            cursor.execute(datos, (semL, latitud, longitud))
        # connection is not autocommit by default. So you must commit to save
        # your changes.
        connection.commit()
