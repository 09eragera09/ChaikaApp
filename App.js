/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

//TODO: PUSH NOTIFICATION [ Attending : Don't Remind Me Anymore, Im Home ]

import React from 'react';
import moment from 'moment';
import {Platform, StyleSheet, Text, TouchableHighlight, TouchableNativeFeedback, View} from 'react-native';
import Slider from "@react-native-community/slider"
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';


export default class app extends React.Component {

    constructor(props) {
        super(props);

        let momentDate = moment();
        this.state = {
            momentDate,
            isClassOn: false,
            slotData: {},
            nextSlotData: {}
        }
    }

    static setAttending() {
        // send post request to server for setting attendance
        alert("Hi")
    }

    componentDidMount() {
        setInterval(() => this.setCurrentTime(), 1000);

        let isClassOn = true;
        let slotData = {
            "userID": 1,
            "slotID": 3,
            "weekdayID": 1,
            "subjectID": 2,
            "subjectName": "Maths",
            "startTime": "10:00",
            "endTime": "11:00",
            "isAttending": false
        };

        let nextSlotData = {
            "userID": 1,
            "slotID": 4,
            "weekdayID": 1,
            "subjectID": 3,
            "subjectName": "Physics",
            "startTime": "11:00",
            "endTime": "12:00",
            "isAttending": false
        };
        this.setState({
            isClassOn,
            slotData,
            nextSlotData
        })
    }

    setCurrentTime() {
        let momentDate = moment();
        this.setState({
            momentDate
        })
    }

    render() {

        let time = this.state.momentDate.format("HH : mm : ss");
        let date = this.state.momentDate.format("dddd, Do of MMMM");
        let accent1 = "#222144";
        let accent2 = "#151733";
        let accent3 = "#2b2e61";
        let textColor = "#D0FCFF";
        let sliderValue = Number(this.state.momentDate.format("ss"));
        return (
            <View flex={1} style={{backgroundColor: accent1}}>
                <View flex={2} style={[styles.padding,]}>
                    <View flex={5} flexDirection={"row"}>
                        <View flex={1}>
                            <TouchableNativeFeedback flex={1} onPress={() => {
                                alert("Hi")
                            }}>
                                <View flex={1} style={styles.centerChildren}>
                                    <AppIcon flex={1} name={"menu"} color={textColor} size={35}/>
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                        <View flex={4} style={styles.centerChildren}>
                            <AppHeaderText style={{fontSize: 40}}>{time}</AppHeaderText>
                        </View>
                        <View flex={1}>
                            <TouchableNativeFeedback flex={1} onPress={() => {
                                alert("Hi")
                            }}>
                                <View flex={1} style={styles.centerChildren}>
                                    <AppIcon flex={1} name={"user"} color={textColor} size={35}/>
                                </View>
                            </TouchableNativeFeedback>
                        </View>
                    </View>
                    <View flex={4} style={[styles.centerChildren]}>
                        <AppHeaderText>{date}</AppHeaderText>
                    </View>
                </View>
                <View flex={4.5} style={styles.padding}>
                    <View flex={1} style={{backgroundColor: accent2, borderRadius: 15}}>
                        <View flex={1}
                              style={[styles.centerChildren, {backgroundColor: accent3, borderRadius: 15, margin: 10}]}>
                            <AppText>Current Class</AppText>
                        </View>
                        <View flex={2.7}>
                            <View flex={2} style={[styles.centerChildren]}>
                                <AppText style={{fontSize: 35}}>{this.state.slotData.subjectName}</AppText>
                                <AppHeaderText
                                    style={{fontSize: 18}}>{this.state.slotData.startTime + " - " + this.state.slotData.endTime}</AppHeaderText>
                            </View>
                            <View flex={0.7} style={[styles.centerChildren]} pointerEvents={"none"}>
                                <Slider
                                    style={{width: 300, height: 40}}
                                    minimumValue={0}
                                    maximumValue={60}
                                    step={1}
                                    value={sliderValue}
                                    minimumTrackTintColor="#D0FCFF"
                                    maximumTrackTintColor="#D0FCFF"
                                    thumbTintColor="#D0FCFF"
                                />
                            </View>
                        </View>
                        <View flex={1.5} style={[styles.centerChildren,]}>
                            <TouchablePlatformSpecific disabled={this.state.slotData.isAttending}
                                                       onPress={app.setAttending}>
                                <View style={[{
                                    borderStyle: "solid",
                                    borderRadius: 10,
                                    borderColor: textColor,
                                    borderWidth: 3,
                                    marginBottom: 15
                                }, styles.padding]}>
                                    <AppText>{this.state.slotData.isAttending ? "Attending" : "Attending?"}</AppText>
                                </View>
                            </TouchablePlatformSpecific>
                        </View>
                    </View>
                </View>
                <View flex={2.5} style={styles.padding}>
                    <View flex={1} style={{backgroundColor: accent2, borderRadius: 15}}>
                        <View flex={1}
                              style={[styles.centerChildren, {backgroundColor: accent3, borderRadius: 15, margin: 10}]}>
                            <AppText style={{fontSize: 17}}>Next Class</AppText>
                        </View>
                        <View flex={2.7} style={[{paddingBottom: 30}, styles.centerChildren]}>
                            <View flex={2} style={[styles.centerChildren]}>
                                <AppText style={{fontSize: 25}}>{this.state.nextSlotData.subjectName}</AppText>
                            </View>
                            <View flex={0.7} style={styles.centerChildren}>
                                <AppHeaderText
                                    style={{fontSize: 15}}>{this.state.nextSlotData.startTime + " - " + this.state.slotData.endTime}</AppHeaderText>
                            </View>
                        </View>
                    </View>
                </View>
                <View flex={1} style={styles.padding}>
                    <View flex={1} flexDirection={"row"}>
                        <View flex={1} style={[styles.centerChildren, styles.margin]}>
                            <AppIcon flex={1} name={"calendar"} color={textColor} size={35}/>
                        </View>
                        <View flex={1} style={[styles.centerChildren, styles.margin]}>
                            <AppIcon flex={1} type={"FA5"} name={"umbrella-beach"} color={textColor} size={35}/>
                        </View>
                        <View flex={1} style={[styles.centerChildren, styles.margin]}>
                            <AppIcon flex={1} type={"FA5"} name={"school"} color={textColor} size={35}/>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    padding: {
        paddingHorizontal: 15,
        paddingVertical: 7.5
    },
    margin: {
        marginLeft: 10,
        marginRight: 10
    },
    centerChildren: {
        alignItems: "center",
        justifyContent: "center"
    }

});


class AppText extends React.Component {

    render() {
        const style = {fontFamily: "OpenSans-Regular", fontSize: 20, textAlign: "center", color: "#D0FCFF"};
        return (
            <Text {...this.props} style={[style, this.props.style]}>
                {this.props.children}
            </Text>
        )
    }
}

class AppHeaderText extends React.Component {

    render() {
        const style = {fontFamily: "Quicksand-Regular", fontSize: 25, textAlign: "center", color: "#D0FCFF"};
        return (
            <AppText {...this.props} style={[style, this.props.style]}>
                {this.props.children}
            </AppText>
        )
    }
}

class AppIcon extends React.Component {

    render() {
        return this.props.type === "FA5" ? (
            <FontAwesome5 {...this.props}/>
        ) : (
            <Feather {...this.props} />
        )
    }
}

class TouchablePlatformSpecific extends React.Component {
    render() {
        return Platform.OS === 'android' ? (
            <TouchableNativeFeedback {...this.props}>
                {this.props.children}
            </TouchableNativeFeedback>
        ) : (
            <TouchableHighlight {...this.props}>
                {this.props.children}
            </TouchableHighlight>
        );
    }
}
