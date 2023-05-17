import React from 'react';
import { Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import { useState } from 'react';

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#ffffff',
        padding: 20,
        paddingBottom: 50
    },
    tittle: {
        textAlign: 'center',
        marginBottom: 5
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
    table: {
        display: "table",
        width: "auto",
    },
    tableRowHead: {
        margin: "auto",
        flexDirection: "row",
        backgroundColor:'#738FA7'
    },
    tableRowBody: {
        margin: "auto",
        flexDirection: "row"
    },
    tableCol: {
        width: "20%",
        borderStyle: "solid",
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopWidth: 0
    },
    tableColID: {
        width: "5%",
        borderStyle: "solid",
        borderWidth: 1,
        borderTopWidth: 0
    },
    tableCell: {
        margin: "auto",
        marginTop: 5,
        fontSize: 10
    }
});

const PDFDocument = () => {
    const [data, setData] = useState([
        {

            "dia": "12/05/2022",
            "id": "1",
            "nombre": "Jeimi Alejandra",
            "apellido": "Barral Valverde",
            "UserName": "@JeimiBV"
        },

        {
            "dia": "14/05/2022",
            "id": "2",
            "nombre": "Edwin Ramiro",
            "apellido": "Garcia Chambilla",
            "UserName": "ramiro777"
        },

        {
            "dia": "12/05/2022",
            "id": "3",
            "nombre": "Ale",
            "apellido": "Alañes",
            "UserName": "@homie"
        },

        {
            "dia": "12/05/2022",
            "id": "4",
            "nombre": "Xaver",
            "apellido": "Montaño",
            "UserName": "@xavi"
        },

        {
            "dia": "12/05/2022",
            "id": "5",
            "nombre": "Jeimi ",
            "apellido": "Barral Valverde",
            "UserName": "@JeimiBV"
        },
        {
            "dia": "12/05/2022",
            "id": "3",
            "nombre": "Ale",
            "apellido": "Alañes",
            "UserName": "@homie"
        },

        {
            "dia": "12/05/2022",
            "id": "4",
            "nombre": "Xaver",
            "apellido": "Montaño",
            "UserName": "@xavi"
        },

        {
            "dia": "12/05/2022",
            "id": "5",
            "nombre": "Jeimi ",
            "apellido": "Barral Valverde",
            "UserName": "@JeimiBV"
        },
        {

            "dia": "12/05/2022",
            "id": "1",
            "nombre": "Jeimi Alejandra",
            "apellido": "Barral Valverde",
            "UserName": "@JeimiBV"
        },

        {
            "dia": "14/05/2022",
            "id": "2",
            "nombre": "Edwin Ramiro",
            "apellido": "Garcia Chambilla",
            "UserName": "ramiro777"
        },

        {
            "dia": "12/05/2022",
            "id": "3",
            "nombre": "Ale",
            "apellido": "Alañes",
            "UserName": "@homie"
        },

        {
            "dia": "12/05/2022",
            "id": "4",
            "nombre": "Xaver",
            "apellido": "Montaño",
            "UserName": "@xavi"
        },

        {
            "dia": "12/05/2022",
            "id": "5",
            "nombre": "Jeimi ",
            "apellido": "Barral Valverde",
            "UserName": "@JeimiBV"
        },
        {
            "dia": "12/05/2022",
            "id": "3",
            "nombre": "Ale",
            "apellido": "Alañes",
            "UserName": "@homie"
        },

        {
            "dia": "12/05/2022",
            "id": "4",
            "nombre": "Xaver",
            "apellido": "Montaño",
            "UserName": "@xavi"
        },

        {
            "dia": "12/05/2022",
            "id": "5",
            "nombre": "Jeimi ",
            "apellido": "Barral Valverde",
            "UserName": "@JeimiBV"
        },
        {

            "dia": "12/05/2022",
            "id": "1",
            "nombre": "Jeimi Alejandra",
            "apellido": "Barral Valverde",
            "UserName": "@JeimiBV"
        },

        {
            "dia": "14/05/2022",
            "id": "2",
            "nombre": "Edwin Ramiro",
            "apellido": "Garcia Chambilla",
            "UserName": "ramiro777"
        },

        {
            "dia": "12/05/2022",
            "id": "3",
            "nombre": "Ale",
            "apellido": "Alañes",
            "UserName": "@homie"
        },
        {

            "dia": "12/05/2022",
            "id": "1",
            "nombre": "Jeimi Alejandra",
            "apellido": "Barral Valverde",
            "UserName": "@JeimiBV"
        },

        {
            "dia": "14/05/2022",
            "id": "2",
            "nombre": "Edwin Ramiro",
            "apellido": "Garcia Chambilla",
            "UserName": "ramiro777"
        },

        {
            "dia": "12/05/2022",
            "id": "3",
            "nombre": "Ale",
            "apellido": "Alañes",
            "UserName": "@homie"
        },

        {
            "dia": "12/05/2022",
            "id": "4",
            "nombre": "Xaver",
            "apellido": "Montaño",
            "UserName": "@xavi"
        },

        {
            "dia": "12/05/2022",
            "id": "5",
            "nombre": "Jeimi ",
            "apellido": "Barral Valverde",
            "UserName": "@JeimiBV"
        },
        {
            "dia": "12/05/2022",
            "id": "3",
            "nombre": "Ale",
            "apellido": "Alañes",
            "UserName": "@homie"
        },

        {
            "dia": "12/05/2022",
            "id": "4",
            "nombre": "Xaver",
            "apellido": "Montaño",
            "UserName": "@xavi"
        },

        {
            "dia": "12/05/2022",
            "id": "5",
            "nombre": "Jeimi ",
            "apellido": "Barral Valverde",
            "UserName": "@JeimiBV"
        },
        {

            "dia": "12/05/2022",
            "id": "1",
            "nombre": "Jeimi Alejandra",
            "apellido": "Barral Valverde",
            "UserName": "@JeimiBV"
        },

        {
            "dia": "14/05/2022",
            "id": "2",
            "nombre": "Edwin Ramiro",
            "apellido": "Garcia Chambilla",
            "UserName": "ramiro777"
        },

        {
            "dia": "12/05/2022",
            "id": "3",
            "nombre": "Ale",
            "apellido": "Alañes",
            "UserName": "@homie"
        },

        {
            "dia": "12/05/2022",
            "id": "4",
            "nombre": "Xaver",
            "apellido": "Montaño",
            "UserName": "@xavi"
        },

        {
            "dia": "12/05/2022",
            "id": "5",
            "nombre": "Jeimi ",
            "apellido": "Barral Valverde",
            "UserName": "@JeimiBV"
        },
        {
            "dia": "12/05/2022",
            "id": "3",
            "nombre": "Ale",
            "apellido": "Alañes",
            "UserName": "@homie"
        },

        {
            "dia": "12/05/2022",
            "id": "4",
            "nombre": "Xaver",
            "apellido": "Montaño",
            "UserName": "@xavi"
        },

        {
            "dia": "12/05/2022",
            "id": "5",
            "nombre": "Jeimi ",
            "apellido": "Barral Valverde",
            "UserName": "@JeimiBV"
        },
        {

            "dia": "12/05/2022",
            "id": "1",
            "nombre": "Jeimi Alejandra",
            "apellido": "Barral Valverde",
            "UserName": "@JeimiBV"
        },

        {
            "dia": "14/05/2022",
            "id": "2",
            "nombre": "Edwin Ramiro",
            "apellido": "Garcia Chambilla",
            "UserName": "ramiro777"
        },

        {
            "dia": "12/05/2022",
            "id": "3",
            "nombre": "Ale",
            "apellido": "Alañes",
            "UserName": "@homie"
        },
        {

            "dia": "12/05/2022",
            "id": "1",
            "nombre": "Jeimi Alejandra",
            "apellido": "Barral Valverde",
            "UserName": "@JeimiBV"
        },

        {
            "dia": "14/05/2022",
            "id": "2",
            "nombre": "Edwin Ramiro",
            "apellido": "Garcia Chambilla",
            "UserName": "ramiro777"
        },

        {
            "dia": "12/05/2022",
            "id": "3",
            "nombre": "Ale",
            "apellido": "Alañes",
            "UserName": "@homie"
        },

        {
            "dia": "12/05/2022",
            "id": "4",
            "nombre": "Xaver",
            "apellido": "Montaño",
            "UserName": "@xavi"
        },

        {
            "dia": "12/05/2022",
            "id": "5",
            "nombre": "Jeimi ",
            "apellido": "Barral Valverde",
            "UserName": "@JeimiBV"
        },
        {
            "dia": "12/05/2022",
            "id": "3",
            "nombre": "Ale",
            "apellido": "Alañes",
            "UserName": "@homie"
        },

        {
            "dia": "12/05/2022",
            "id": "4",
            "nombre": "Xaver",
            "apellido": "Montaño",
            "UserName": "@xavi"
        },

        {
            "dia": "12/05/2022",
            "id": "5",
            "nombre": "Jeimi ",
            "apellido": "Barral Valverde",
            "UserName": "@JeimiBV"
        },
        {

            "dia": "12/05/2022",
            "id": "1",
            "nombre": "Jeimi Alejandra",
            "apellido": "Barral Valverde",
            "UserName": "@JeimiBV"
        },

        {
            "dia": "14/05/2022",
            "id": "2",
            "nombre": "Edwin Ramiro",
            "apellido": "Garcia Chambilla",
            "UserName": "ramiro777"
        },

        {
            "dia": "12/05/2022",
            "id": "3",
            "nombre": "Ale",
            "apellido": "Alañes",
            "UserName": "@homie"
        },

        {
            "dia": "12/05/2022",
            "id": "4",
            "nombre": "Xaver",
            "apellido": "Montaño",
            "UserName": "@xavi"
        },

        {
            "dia": "12/05/2022",
            "id": "5",
            "nombre": "Jeimi ",
            "apellido": "Barral Valverde",
            "UserName": "@JeimiBV"
        },
        {
            "dia": "12/05/2022",
            "id": "3",
            "nombre": "Ale",
            "apellido": "Alañes",
            "UserName": "@homie"
        },

        {
            "dia": "12/05/2022",
            "id": "4",
            "nombre": "Xaver",
            "apellido": "Montaño",
            "UserName": "@xavi"
        },

        {
            "dia": "12/05/2022",
            "id": "5",
            "nombre": "Jeimi ",
            "apellido": "Barral Valverde",
            "UserName": "@JeimiBV"
        },
        {

            "dia": "12/05/2022",
            "id": "1",
            "nombre": "Jeimi Alejandra",
            "apellido": "Barral Valverde",
            "UserName": "@JeimiBV"
        },

        {
            "dia": "14/05/2022",
            "id": "2",
            "nombre": "Edwin Ramiro",
            "apellido": "Garcia Chambilla",
            "UserName": "ramiro777"
        },



    ]);
    return (
        <Document>
            <Page size="LETTER" style={styles.page}>
                <View style={styles.section}>
                    <Text style={styles.tittle}>Reporte de ingresos</Text>
                    <View style={styles.table}>
                        <View style={styles.tableRowHead}>
                            <View style={styles.tableColID}>
                                <Text style={styles.tableCell}>ID</Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>Nombre</Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>Apellido</Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>UserName</Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>Fecha de reserva</Text>
                            </View>
                        </View>
                        <View style={styles.container}>
                            {
                                data.map((dato) => (
                                    <View style={styles.tableRowBody}>
                                        <View style={styles.tableColID}>
                                            <Text style={styles.tableCell}>{dato.id}</Text>
                                        </View>
                                        <View style={styles.tableCol}>
                                            <Text style={styles.tableCell}>{dato.dia}</Text>
                                        </View>
                                        <View style={styles.tableCol}>
                                            <Text style={styles.tableCell}>{dato.nombre}</Text>
                                        </View>
                                        <View style={styles.tableCol}>
                                            <Text style={styles.tableCell}>{dato.apellido}</Text>
                                        </View>
                                        <View style={styles.tableCol}>
                                            <Text style={styles.tableCell}>{dato.UserName}</Text>
                                        </View>
                                    </View>

                                ))
                            }
                        </View>
                    </View>
                </View>
            </Page>
        </Document>
    );
};

export default PDFDocument;
