import styled from "styled-components";
import { PDFViewer, Document, Page, View, Text, StyleSheet } from "@react-pdf/renderer";

const Container = styled.div``;

const styles = StyleSheet.create({
    page: {
        flexDirection: "row",
        backgroundColor: "#FFF",
    },
    title: {
        textAlign: "center"
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
            <PDFViewer>
            <Document>
                <Page size="A4" style={styles.page}>
                    <View style={styles.title}>
                        <Text>Section #1</Text>
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
