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
        flexDirection: "row",
        backgroundColor: "#FFF",
    },
    title: {
        textAlign: "center",
    },
    header: {
        fontWeight: "bold",
    },
    section: {
        margin: 10,
        padding: 10,
        flexGrow: 1,
    },
});

function Billing() {
    return (
        <Container>
            <DeviceID isOnBilling={true} />
            <PDFViewer>
                <Document>
                    <Page size="A4" style={styles.page}>
                        <View style={styles.title}>
                            <Text style={styles.header}>Section #1</Text>
                        </View>
                        <View style={styles.section}>
                            <Text>Section #2</Text>
                        </View>
                    </Page>
                </Document>
            </PDFViewer>
        </Container>
    );
}

export default Billing;
