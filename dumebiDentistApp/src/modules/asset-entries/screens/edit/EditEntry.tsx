import React, { useContext, useState } from 'react';
import { View, StyleSheet, Platform, ScrollView } from 'react-native';
import { Button, Input, Text, CheckBox } from '@rneui/base';
import DateTimePicker from '@react-native-community/datetimepicker'; //installation required
import { AssetEntryContext } from '../../contexts/Contexts';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { AssetEntry } from '../../entities/asset-entry.entity';
import moment from 'moment';

/**
 * Type for state variable for the form
 */
type IState = {
        clinicDay: number | null;
        clinicMonth: number | null;
        clinicYear: number | null;
        date: Date;
        natureofailment: string;
        medicineprescribed: string;
        procedureundertaken: string;
        nextappdate: string;
}


const EditEntry: React.FC = () => {

    const { updateEntry } = useContext(AssetEntryContext)!;

    //const route = useRoute();
    //below is the right declaration for TypeScript but looks complicated.
    const route = useRoute<RouteProp<Record<string, { assetEntryToEdit: AssetEntry }>>>();
    const assetEntryToEdit = route.params.assetEntryToEdit;

    const navigation = useNavigation();

    const date = new Date(); // for initializing all the dates.
    const [state, setState] = useState<IState>({
        id: assetEntryToEdit.id,
        clinicDay: assetEntryToEdit.clinicDay,
        clinicMonth: assetEntryToEdit.clinicMonth,
        clinicYear: assetEntryToEdit.clinicYear,
        date: new Date(assetEntryToEdit.clinicYear, assetEntryToEdit.clinicMonth, assetEntryToEdit.clinicDay),
        natureofailment: assetEntryToEdit.natureofailment,
        medicineprescribed: assetEntryToEdit.medicineprescribed,
        procedureundertaken: assetEntryToEdit.procedureundertaken,
        nextappdate: assetEntryToEdit.nextappdate,
    })

    const [showDatePicker, setShowDatePicker] = useState(Platform.OS === "ios" ? true : false);

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text h3 style={styles.inputContainerStyle}>Edit displayed asset</Text>
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
                                clinicDay: date.getDate(),
                                clinicMonth: date.getMonth(),
                                clinicYear: date.getFullYear()
                            })
                            setShowDatePicker(Platform.OS === "ios" ? true : false);
                        }}
                    />}
                </View>
                <Input
                    label="Nature of ailment: "
                    placeholder="Enter brief ailment description here"
                    multiline
                    inputContainerStyle={styles.inputContainerStyle}
                    leftIcon={{ type: 'font-awesome', name: 'comment' }}
                    onChangeText={natureofailment => setState({ ...state, natureofailment })}
                    style={styles.inputStyle}
                />
                <Input
                    label="Medicine precribed: "
                    placeholder="Enter the medications prescribed here"
                    multiline
                    inputContainerStyle={styles.inputContainerStyle}
                    leftIcon={{ type: 'font-awesome', name: 'comment' }}
                    onChangeText={medicineprescribed => setState({ ...state, medicineprescribed })}
                    style={styles.inputStyle}
                />
                <Input
                    label="Procedure Undertaken: "
                    placeholder="Enter procedues undertaken here"
                    multiline
                    inputContainerStyle={styles.inputContainerStyle}
                    leftIcon={{ type: 'font-awesome', name: 'comment' }}
                    onChangeText={procedureundertaken => setState({ ...state, procedureundertaken })}
                    style={styles.inputStyle}
                />
                <Input
                    label="Next Appointment Date: "
                    placeholder="Enter your next appointment date here"
                    multiline
                    inputContainerStyle={styles.inputContainerStyle}
                    leftIcon={{ type: 'font-awesome', name: 'comment' }}
                    onChangeText={nextappdate => setState({ ...state, nextappdate })}
                    style={styles.inputStyle}
                />

                <View style={{ flexDirection: 'row' }}>
                    <Button style={[styles.inputContainerStyle, { paddingRight: 1 }]}
                        title="Save"
                        onPress={() => {
                            //call create which will also make the form disappear
                            //remove date before sending because it is not in the AssetEntry table. Only the breakdown day, month, year are there
                            const { date, ...updatedAssetEntryData } = state;
                            updateEntry(updatedAssetEntryData, navigation);
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