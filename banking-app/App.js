import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet, Image, TouchableHighlight, ImageBackground, Alert, Dimensions } from 'react-native';
import Constants from 'expo-constants';

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

export default class App extends Component {
    state = {
        homePageDisplay: 'block',
        companyPageDisplay: 'none'
    }
    buttonPress = (company) => {
        // conditional logic here
        if (company == '1') {
            this.setState({ 
                homePageDisplay: 'none',
                companyPageDisplay: 'block'
            })
        } else if (company == '2') {
            this.setState({ 
                homePageDisplay: 'block',
                companyPageDisplay: 'none'
            })
        } 
    }
    handleReturnPress = () => {
        this.setState({
            homePageDisplay: 'block',
            companyPageDisplay: 'none'
        })
    }
    render() {
        return (
            <View style={styles.container}>
                
                <View style={{display: this.state.homePageDisplay}}>
                
                    <View style={styles.topBox}>
                        
                        <View style={styles.top}>
                        
                            <Text style={styles.phoneText1}>
                            
                            </Text>
                        </View>
                        
                        <View style={styles.top}>
                        
                            <Text style={styles.phoneText2}>
                                
                            </Text>
                        </View>
                        
                        <View style={styles.top}>
                        
                            <Text style={styles.phoneText3}>
                                
                            </Text>
                        </View>
                    </View>
                    
                    <View style={styles.secondBox}>
                        
                        <Text style={styles.wellsFargo}>
                            WELLS FARGO
                        </Text>
                    </View>
                    
                    <View style={styles.buffer}>
                    
                    </View>
                    
                    <View style={styles.thirdBox}>
                    
                        <Text style={styles.account}>
                                Account Summary
                        </Text>
                    </View>
                    
                        <View style={styles.fourthBox}>
        
                            <Text style={styles.checking}>
                                User's Checking
                            </Text>
                            
                            <Text style={styles.balance}>
                                $1252.30
                            </Text>
                            
                            <Text style={styles.available}>
                                Available Balance
                            </Text>
                        </View>
                        
                        <View style={styles.calculate}>
                            
                            <Text style={styles.debt}>
                                Calculate Debt-to-Income Ratio >  
                            </Text>
                        </View>
                        
                    <View style={styles.lastBox}>
                        
                        <Text style={styles.smallText}>
                            My Wells Fargo Deals
                        </Text>
                        
                        <View style={styles.imageRow}>
                        
                            <TouchableHighlight
                                onPress={() => this.buttonPress('1')}
                            >
                                <View style={styles.imageBox}>
                                
                                    <Image
                                        source={{ uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALcAAAC3CAMAAABnsD+tAAAAY1BMVEX////yDJD/bgz/toX/kkj8wuP1SKv/28LzGpf/7eH/dxr/iTn94fH/yKT0OaT/9vD/pGf/5NH/v5T3Z7n5lM76pNX0Kp34dsD4hcf90er/gCr+8Pj7s9z/m1f/0rP2V7L/rXaZMy6JAAACi0lEQVR4nO2bYVPiMBBA01KQ0hYBQRTBu///K49ztCKyIZuEejv33udO5s1OsskmW+cAAAAAAAAAAAAAAAAAAAAAAADgv6JeVbPyMlU16pbBA20eHovLzCfb9Tiz9UJw7pkdujpgoPVUkO6ZPD1n0+6kUH+l6e7947Tza9ZvPG7bPNpB1m9RX/iC/nw12J9RzzBhwrX/Ipu34do5zJcq7WPMR8JAYZPkxDxttlRK77LcXcwua6V2UUzXCdp3au0jl0IupT9vyF+ivQ8x3uXhW2bZR2gfQx6dFMNS4Deac/GHKO9iuo/T1q5KUVy7Kns2Ud6vsd7n4rHakeKjaO8z8XjvqDme4F0u8ngX04iskuJdrvJ4F5OBvWcnG1CKd/E0rHdZZfIu1Ft+mnfZZfJWz5RE712fU9K8C+3pMNH786SS6K0NeKr3LpO3NuCp3v0MT/X+NbD3R0pJ9VamFMm7uXtntdj5xWu/9/id/fbKyUtXREjeJ5nZvXpLopXf+2Sc1nvWnWf3Ppp7TumHYO8rFxWqU0qYt6sbWVzh7S0vVBVEoLe7lyO+1Hh7xLe38PbUzyuV94tYP6u2nmBvJ14h/lZ5u7H05fQ23rXkXem85Ur0Nt5OWpqN0nsjfarZ6hXe4taq9G4H9hZXptLbSfefN/IWJ7jWeyJ8qqnWFN4O70G9rc4Tq+vSah40uu9Y3eeNnquMnmON1g1G6zSbdbGlewir9z7B/GP3bMEYvde0eo9s9N7e6juJ0Xcpo++AVt9djb5zG+0r+NE+Dqt9M1b7lKz2hcnlrpef78Oz2vdotc/UbF+v1T5qs33rZv8TMPtfhrP6HwwAAAAAAAAAAAAAAAAAAAAAAAAAACTyBxgMQLi1eTDYAAAAAElFTkSuQmCC' }}
                                        style={{ height: 50, width: 50 }}
                                    />
                                    
                                    <Text style={styles.activate}>
                                        Activate
                                    </Text>
                                </View>
                            </TouchableHighlight>
                            
                            <TouchableHighlight
                                onPress={() => this.buttonPress('1')}
                            >
                                <View style={styles.imageBox}>
                                
                                    <Image
                                        source={{ uri: 'data:image/png;base64,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' }}
                                        style={{ height: 50, width: 60 }}
                                    />
                                    
                                    <Text style={styles.activate}>
                                        Activate
                                    </Text>
                                </View>
                            </TouchableHighlight>
                            
                            <TouchableHighlight
                                onPress={() => this.buttonPress('1')}
                            >
                                <View style={styles.imageBox}>
                                
                                    <Image
                                        source={{ uri: 'https://media.glassdoor.com/sqll/715657/zoro-squarelogo-1549910899965.png' }}
                                        style={{ height: 50, width: 50 }}
                                    />
                                    
                                    <Text style={styles.activate}>
                                        Activate
                                    </Text>
                                </View>
                            </TouchableHighlight>
                        </View>
                        
                        <Text style={styles.activate}>
                            Terms and Condtions
                        </Text>
                    </View>
                    
                    <View style={styles.actualLastBox}>
                    
                        <Text style={styles.paragraph1}>
                            * Account Disclosures
                        </Text>
                        
                        <Text style={styles.paragraph2}>
                            Deposit products offered by Wells Fargo Bank, N.A. Member FDIC
                        </Text>
                    </View>
                </View>
                
                <View style={{display: this.state.companyPageDisplay}}>
                    
                    <View style={styles.contentBox}>
                    
                        <View style={styles.topBox}>
                        
                        </View>
                        
                        <View style={styles.secondBox}>
                        
                            <Text style={styles.wellsFargo}>
                                WELLS FARGO
                            </Text>
                        </View>
                        
                        <View style={styles.buffer}>
                        
                        </View>
                        
                        <View style={styles.promoBox}>

                            <Text style={styles.paragraph}>
                                ARE YOU SURE YOU WANT TO ACTIVATE THIS PROMOTION?
                            </Text>
                            
                            <Text style={styles.paragraph3}>
                                ACTIVATE
                            </Text>
                            
                            <TouchableHighlight
                                onPress={() => this.handleReturnPress()}
                            >

                                <Text style={styles.paragraph3}>
                                    RETURN
                                </Text>
                            </TouchableHighlight>
                        </View>
                        
                        <View style={styles.actualLastBox}>
                        
                            <Text style={styles.paragraph1}>
                                * Account Disclosures
                            </Text>
                            
                            <Text style={styles.paragraph2}>
                                Deposit products offered by Wells Fargo Bank, N.A. Member FDIC
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: deviceHeight,
        width: deviceWidth,
        //backgroundColor: 'lightgrey'
    },
    topBox: {
        height: deviceHeight/35,
        width: deviceWidth,
        backgroundColor: 'white',
        flexDirection: 'row',
    },
    top: {
        width: deviceWidth/3,
        justifyContent: 'center'
    },
    phoneText2: {
        textAlign: 'center'
    },
    phoneText3: {
        textAlign: 'right'
    },
    secondBox: {
        height: deviceHeight/13,
        width: deviceWidth,
        backgroundColor: '#CD1409',
        justifyContent: 'center'
    },
    wellsFargo: {
        fontSize: 25,
        fontFamily: 'timesnewroman',
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center'
    },
    buffer: {
        height: deviceHeight/90,
        width: deviceWidth,
        backgroundColor: '#FFFF00',
    },
    thirdBox: {
        height: deviceHeight/15,
        width: deviceWidth,
        justifyContent: 'center',
        backgroundColor: '#F3F3F3',
        marginBottom: 2
    },
    fourthBox: {
        height: deviceHeight/5,
        width: deviceWidth,
        backgroundColor: '#F3F3F3',
    },
    account: {
        fontSize: 18,
        fontFamily: 'timesnewroman',
        textAlign: 'center',
        color: 'grey'
    },
    checking: {
        fontSize: 19,
        color: 'darkred',
        margin: 12
    },
    balance: {
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'right',
        marginRight: 12,
        marginTop: 22,
    },
    available: {
        fontSize: 10,
        textAlign: 'right',
        marginRight: 12,
        margintop: 5
    },
    calculate: {
        height: deviceHeight/11,
        width: deviceWidth,
        backgroundColor: 'grey',
        justifyContent: 'center'
    },
    debt: {
        fontSize: 14,
        color: 'white',
        textAlign: 'center',
        marginTop: 1,
        marginBottom: 1
    },
    lastBox: {
        height: deviceHeight/3,
        width: deviceWidth,
        backgroundColor: '#F3F3F3',
    },
    imageRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    smallText: {
        //fontFamily: 'timesnewroman',
        fontweight: 'bold',
        marginTop: 12,
        marginLeft: 12,
    },
    imageBox: {
        height: deviceHeight/5.8,
        width: deviceWidth/3.8,
        backgroundColor: 'white',
        margin: 9,
        marginTop: 16,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: .5,
        borderColor: 'grey',
        borderRadius: 3
    },
    activate: {
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#4498BF',
        textDecorationLine: 'underline'
    },
    actualLastBox: {
        height: deviceHeight,
        width: deviceWidth,
        backgroundColor: 'lightgrey'
    },
    paragraph1: {
        textAlign: 'left',
        margin: 10,
        fontSize: 14,
    },
    paragraph2: {
        textAlign: 'left',
        fontSize: 13,
        marginLeft: 10,
        marginRight: 10
    },
    promoBox: {
        height: deviceHeight/3,
        width: deviceWidth,
        backgroundColor: '#F3F3F3',
        justifyContent: 'center'
    },
    paragraph: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'Times',
    },
    paragraph3: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontFamily: 'Times',
        color: '#4498BF',
        textDecorationLine: 'underline',
        margin: 10
    }
});