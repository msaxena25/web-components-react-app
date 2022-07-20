import React from 'react'
import 'web-components-custom-elements';

const styles = {
    marginTop10: {
        marginTop: 10
    },
    container: {
        padding: 10,
        width: '60%',
        margin: 'auto'
    },
    formDiv: {
        display: 'flex',
        margin: 5
    },
    marginLeft: {
        marginLeft: 10
    },
    border: {
        border: '1px solid gray',
        padding: 5
    }
}

export default function Home() {
    return (
        <div style={styles.container}>
            <div>
                <wc-green-btn></wc-green-btn>
            </div>
            <div style={styles.marginTop10}>
                <wc-red-btn></wc-red-btn>
            </div>
            <div style={styles.marginTop10}>
                <wc-dynamic-btn color="orange"></wc-dynamic-btn>
            </div>
            <div style={styles.marginTop10}>
                <wc-dynamic-btn color="#8c5eab"></wc-dynamic-btn>
            </div>
            <div style={styles.formDiv}>
                <div style={styles.border}>
                    <wc-form fname="JSMount" lname="Technical"></wc-form>
                </div>
                <div style={{ ...styles.marginLeft, ...styles.border }}>
                    <wc-form fname="web" lname="component"></wc-form>
                </div>
            </div>
        </div>

    )
}