import styled from "styled-components";
import {
    PDFViewer,
    Document,
    Page,
    View,
    Text,
    StyleSheet,
} from "@react-pdf/renderer";
import DeviceID from "../../Topbar/DeviceID/DeviceID";

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
`;

const styles = StyleSheet.create({
    page: {
        backgroundColor: "#FFF",
        padding: 20,
    },
    title: {
        textAlign: "center",
    },
    header: {
        fontSize: "30px",
        fontWeight: "extrabold",
    },
    subheader: {
        color: '#666',
        fontSize: '25px',
        fontWeight: 'normal',
    },
    invoiced: {
        color: '#666',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
    },
    invoicedName: {
        color: '#666',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 5,
        marginBottom: 15,
    },
    invoicedLeft: {
        textAlign: 'left',
        width: '80px',
    },
    invoicedRight: {
        textAlign: 'right',
        width: 80,
    },
    recipient: {
        color: '#000',
        fontSize: '20px',
        width: 110,
    },
    address: {
        color: '#666',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    addressRues: {
        width: 180,
    },
    addressArea: {
        width: 120,
    },
    addressCity: {
        width: 80,
    },
    addressRuesRight: {
        textAlign: 'right',
        width: 180,
    },
    addressAreaRight: {
        textAlign: 'right',
        width: 120,
    },
    addressCityRight: {
        textAlign: 'right',
        width: 80,
    },
    invoiceTitle: {
        color: '#666',        
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 40,
    },
    right: {
        textAlign: 'right',
    },
    small: {
        width: 80,
    },
    medium: {
        width: 120,
    },
    large: {
        width: 180,
    },
    flex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    blackColor: {
        color: '#000',
    },
    greyColor: {
        color: '#666',
    },
    padding: {
        padding: 20,
    },
    lightGreyBackground: {
        backgroundColor: '#eee',
    },
    borderBottom: {
        borderBottom: '1px solid #ccc',
    },
});

const PDFContainer = styled.div`
    width: 500px;
    height: 500px;
`;

function Billing() {
    return (
        <Container>
            <DeviceID isOnBilling={true} />
            <PDFContainer>
                <PDFViewer width='100%' height='100%'>
                    <Document>
                        <Page size="A4" style={styles.page}>
                            <View style={styles.title}>
                                <Text style={styles.header}>
                                    Invoice from REDAL
                                </Text>
                                <Text style={styles.subheader}>Invoice #14020</Text>
                            </View>
                            <View style={styles.invoiced}>
                                <Text style={styles.invoicedLeft}>Invoiced from</Text>
                                <Text style={styles.invoicedRight}>Invoiced to</Text>
                                <Text></Text>
                            </View>
                            <View style={styles.invoicedName}>
                                <Text style={styles.recipient}>REDAL</Text>
                                <Text style={styles.recipient}>Sami Lantry</Text>
                            </View>
                            <View style={styles.address}>
                                <Text style={styles.addressRues}>6 Rue Al Hoceima,</Text>
                                <Text style={styles.addressRuesRight}>15 Rue des Copilotes</Text>
                            </View>
                            <View style={styles.address}>
                                <Text style={styles.addressArea}>Centre Ville</Text>
                                <Text style={styles.addressAreaRight}>Agdal</Text>
                            </View>
                            <View style={styles.address}>
                                <Text style={styles.addressCity}>Rabat</Text>
                                <Text style={styles.addressCityRight}>Rabat</Text>
                            </View>
                            <View style={{...styles.greyColor, ...styles.flex, marginTop: 40,}}>
                                <Text>INVOICE ID</Text>
                                <Text style={{ ...styles.right, ...styles.small}}>DUE DATE</Text>
                                <Text></Text>
                            </View>
                            <View style={{...styles.blackColor, ...styles.flex,}}>
                                <Text>Invoice #14020</Text>
                                <Text></Text>
                                <Text style={{ ...styles.right, ...styles.large}}>June 10, 2020</Text>
                            </View>
                            <View style={{...styles.flex, ...styles.lightGreyBackground, ...styles.padding, ...styles.greyColor, marginTop: 40}}>
                                <Text>DESCRIPTION</Text>
                                <Text>VOLUME</Text>
                                <Text>COST</Text>
                            </View>
                            <View style={{...styles.flex, ...styles.padding, ...styles.blackColor, ...styles.borderBottom}}>
                                <Text style={styles.large}>Electricity</Text>
                                <Text>465 KWh</Text>
                                <Text>DHS 745.00</Text>
                            </View>
                            <View style={{...styles.flex, ...styles.padding, ...styles.blackColor, ...styles.borderBottom}}>
                                <Text style={styles.large}>Water</Text>
                                <Text>33 m3</Text>
                                <Text>DHS 140.00</Text>
                            </View>
                            <View style={{...styles.flex, ...styles.padding, ...styles.blackColor}}>
                                <Text>Total amount</Text>
                                <Text></Text>
                                <Text>DHS 885</Text>
                            </View>
                        </Page>
                    </Document>
                </PDFViewer>
            </PDFContainer>
        </Container>
    );
}

export default Billing;
