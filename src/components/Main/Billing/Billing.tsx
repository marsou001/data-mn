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
                        </Page>
                    </Document>
                </PDFViewer>
            </PDFContainer>
        </Container>
    );
}

export default Billing;
