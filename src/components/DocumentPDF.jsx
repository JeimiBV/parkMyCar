import React, { useEffect } from 'react';
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
        backgroundColor: '#738FA7'
    },
    tableRowBody: {
        margin: "auto",
        flexDirection: "row"
    },
    tableCol: {
        width: "13%",
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
    tableColTotal: {
        width: "18%",
        borderStyle: "solid",
        borderWidth: 1,
        borderTopWidth: 0,
        backgroundColor: '#738FA7'
    },
    tableColTotalVal: {
        width: "78%",
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

const PDFDocument = ({ datae }) => {
    const [total, setTotal] = useState (0);
    //console.log(datae, "datos")

    useEffect(() => {
        setTotal(0);
        datae.map((dato) => setTotal(prevTotal => prevTotal+dato.price));  
    }, [datae]);
    
    return (
        <Document>
            <Page size="LETTER" style={styles.page} orientation="landscape">
                <View style={styles.section}>
                    <Text style={styles.tittle}>Reporte de ingresos</Text>
                    <View style={styles.table}>
                        <View style={styles.tableRowHead}>
                            <View style={styles.tableColID}>
                                <Text style={styles.tableCell}>Plaza</Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>Nombre completo</Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>Monto cobrado (Bs.)</Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>Fecha</Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>Hora de ingreso</Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>Hora de salida</Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>Tiempo estacionado</Text>
                            </View>
                            <View style={styles.tableCol}>
                                <Text style={styles.tableCell}>Placa vehicular</Text>
                            </View>
                        </View>
                        <View style={styles.container}>
                            {

                                datae.map((dato) => (
                                    <View style={styles.tableRowBody}>
                                        <View style={styles.tableColID}>
                                            <Text style={styles.tableCell}>{dato.place.num}</Text>
                                        </View>
                                        <View style={styles.tableCol}>
                                            <Text style={styles.tableCell}>{dato.name}</Text>
                                        </View>
                                        <View style={styles.tableCol}>
                                            <Text style={styles.tableCell}>{dato.price} Bs.</Text>
                                        </View>
                                        <View style={styles.tableCol}>
                                            <Text style={styles.tableCell}>{dato.entryDate.slice(0, 10)}</Text>
                                        </View>
                                        <View style={styles.tableCol}>
                                            <Text style={styles.tableCell}>{dato.entryDate.slice(11, 19)}</Text>
                                        </View>
                                        <View style={styles.tableCol}>
                                            <Text style={styles.tableCell}>{dato.retirementDate.slice(11, 19)}</Text>
                                        </View>
                                        <View style={styles.tableCol}>
                                            <Text style={styles.tableCell}>{Math.abs(dato.entryDate.slice(11, 13) - dato.retirementDate.slice(11, 13))} Hrs.</Text>
                                        </View>
                                        <View style={styles.tableCol}>
                                            <Text style={styles.tableCell}>{dato.plate}</Text>
                                        </View>
                                    </View>

                                ))
                            }
                            <View style={styles.tableRowBody}>
                                <View style={styles.tableColTotal}>
                                    <Text style={styles.tableCell}>Total</Text>
                                </View>
                                <View style={styles.tableColTotalVal}>
                                    <Text style={styles.tableCell}>{total} Bs.</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </Page>
        </Document >
    );
};

export default PDFDocument;
