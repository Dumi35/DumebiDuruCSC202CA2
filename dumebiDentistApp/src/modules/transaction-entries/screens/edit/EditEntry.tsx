import React, { useContext, useState } from 'react';
import { View, StyleSheet, Platform, ScrollView } from 'react-native';
import { Button, Input, Text, CheckBox } from '@rneui/base';
import DateTimePicker from '@react-native-community/datetimepicker'; //installation required
import { TransactionEntryContext } from '../../contexts/Contexts';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { TransactionEntry } from '../../entities/transaction-entry.entity';
import moment from 'moment';

/**
 * Type for state variable for the form
 */
type IState = {
    firstname: string;
    middlename: string;
    surname: string;
    birthDay: number | null;
    birthMonth: number | null;
    birthYear: number | null;
    date: Date
    address: string;
    regdate: string;
    matricno: boolean
}

const EditEntry: React.FC = () => {

    const { updateEntry } = useContext(TransactionEntryContext)!;

    //const route = useRoute();
    //below is the right declaration for TypeScript but looks complicated.
    const route = useRoute<RouteProp<Record<string, { transactionEntryToEdit: TransactionEntry }>>>();
    const transactionEntryToEdit = route.params.transactionEntryToEdit;

    const navigation = useNavigation();

    const date = new Date(); // for initializing all the dates.
    const [state, setState] = useState<IState>({
        birthDay: transactionEntryToEdit.birthDay,
        birthMonth: transactionEntryToEdit.birthMonth,
        birthYear: transactionEntryToEdit.birthYear,
        date: new Date(transactionEntryToEdit.birthYear, transactionEntryToEdit.birthMonth, transactionEntryToEdit.birthDay),
        firstname: transactionEntryToEdit.firstname,
        middlename: transactionEntryToEdit.middlename,
        surname: transactionEntryToEdit.surname,
        address: transactionEntryToEdit.address,
        regdate: transactionEntryToEdit.regdate,
        matricno: transactionEntryToEdit.matricno ? true : false
    })

    const [showDatePicker, setShowDatePicker] = useState(Platform.OS === "ios" ? true : false);

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text h3 style={styles.inputContainerStyle}>Edit displayed transaction</Text>
                {/* Only show button below if the OS is not ios. IOS DateTimePicker is visible by default */}
                <View style={[styles.inputContainerStyle, { flexDirection: 'row', alignSelf: 'flex-start' }]}>
                    {Platform.OS !== "ios" && <Button
                        radius={6}
                        title={moment(state.date).format("LL")}
                        onPress={() => {
                            setShowDatePicker(true);
                        }}
                    />}
                    {showDatePicker && <DateTimePicker
                        style={styles.inputContainerStyle}
                        value={state.date}
                        mode={'date'}
                        //is24Hour={true}
                        display="default"
                        onChange={(_event: any, selectedDate: any) => {
                            const date: Date = selectedDate as Date;
                            setState({
                                ...state,
                                date: selectedDate,
                                birthDay: date.getDate(),
                                birthMonth: date.getMonth(),
                                birthYear: date.getFullYear()
                            })
                            setShowDatePicker(Platform.OS === "ios" ? true : false);
                        }}
                    />}
                </View>
                <CheckBox
                    title='20120612141?'
                    containerStyle={[styles.inputContainerStyle, { marginTop: 10 }]}
                    checked={!state.matricno}
                    onPress={() => { setState({ ...state, matricno: !state.matricno }) }}
                    style={styles.inputStyle}
                />
                <Input
                    label="First Name"
                    placeholder="Enter first name here"
                    multiline
                    inputContainerStyle={styles.inputContainerStyle}
                    leftIcon={{ type: 'font-awesome', name: 'comment' }}
                    onChangeText={firstname => setState({ ...state, firstname })}
                    style={styles.inputStyle}
                />
                
                <Input
                    label="Middle Name"
                    placeholder="Enter middle name here"
                    multiline
                    inputContainerStyle={styles.inputContainerStyle}
                    leftIcon={{ type: 'font-awesome', name: 'comment' }}
                    onChangeText={middlename => setState({ ...state, middlename })}
                    style={styles.inputStyle}
                />
                <Input
                    label="Surname"
                    placeholder="Enter surname here"
                    multiline
                    inputContainerStyle={styles.inputContainerStyle}
                    leftIcon={{ type: 'font-awesome', name: 'comment' }}
                    onChangeText={surname=> setState({ ...state, surname })}
                    style={styles.inputStyle}
                />
                <Input
                    label="Home Address"
                    placeholder="Enter home address here"
                    multiline
                    inputContainerStyle={styles.inputContainerStyle}
                    leftIcon={{ type: 'font-awesome', name: 'comment' }}
                    onChangeText={address => setState({ ...state, address })}
                    style={styles.inputStyle}
                />
                <Input
                    label="Date of Registration"
                    placeholder="Enter registration date here"
                    multiline
                    inputContainerStyle={styles.inputContainerStyle}
                    leftIcon={{ type: 'font-awesome', name: 'comment' }}
                    onChangeText={regdate => setState({ ...state, regdate })}
                    style={styles.inputStyle}
                />

                <View style={{ flexDirection: 'row' }}>
                    <Button style={[styles.inputContainerStyle, { paddingRight: 1 }]}
                        title="Save"
                        onPress={() => {
                            //call create which will also make the form disappear
                            //remove date before sending because it is not in the TransactionEntry table. Only the breakdown day, month, year are there
                            const { date, ...updatedTransactionEntryData } = state;
                            updateEntry(updatedTransactionEntryData, navigation);
                        }}
                    /><Button style={[styles.inputContainerStyle, { paddingLeft: 1 }]}
                        title="Cancel"
                        onPress={() => {
                            //call create which will also make the form disappear
                            navigation.goBack();
                        }}
                        buttonStyle={{ backgroundColor: 'orange' }}
                    />
                </View>
            </View>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fffff2',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: 18
    },
    inputContainerStyle: {
        width: '100%',
        padding: 10,
        backgroundColor: '#fffff2'
    },
    inputStyle: {
        backgroundColor: '#F2F3F5',
        borderRadius: 6,
        height: '100%',
        padding: 6
    }
});

export default EditEntry;