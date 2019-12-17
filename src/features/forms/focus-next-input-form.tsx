import React, {FC, MutableRefObject, useRef} from 'react';
import {Alert, StyleSheet, TextInput, View} from 'react-native';
import useForm from 'react-hook-form';

const styles = StyleSheet.create({
    input: {
        borderColor: 'black',
        borderRadius: 4,
        borderWidth: 2,
        height: 40,
        marginBottom: 20,
    },
});

interface FocusNextInputFormInterface {
    name: string;
    lastName: string;
    gender: string;
    city: string;
}

const FocusNextInputForm: FC = () => {
    const {register, setValue, handleSubmit} = useForm<
        FocusNextInputFormInterface
    >();

    const inputRefs: {
        [key: string]: MutableRefObject<TextInput | undefined>;
    } = {
        name: useRef<TextInput | undefined>(),
        lastName: useRef<TextInput | undefined>(),
        gender: useRef<TextInput | undefined>(),
        city: useRef<TextInput | undefined>(),
    };

    const onSubmit = (data: FocusNextInputFormInterface): void =>
        Alert.alert('Form Data', JSON.stringify(data));

    return (
        <View>
            <TextInput
                ref={e => {
                    register(e, {name: 'firstName'});
                    inputRefs.name.current = (e as unknown) as TextInput;
                }}
                onChangeText={text => setValue('firstName', text)}
                style={styles.input}
                returnKeyType={'next'}
                onSubmitEditing={(): void => {
                    inputRefs.lastName && inputRefs.lastName.current.focus();
                }}
            />
            <TextInput
                ref={e => {
                    register({name: 'lastName'});
                    inputRefs.lastName.current = (e as unknown) as TextInput;
                }}
                onChangeText={text => setValue('lastName', text)}
                style={styles.input}
                returnKeyType={'next'}
                onSubmitEditing={(): void => {
                    inputRefs.gender && inputRefs.gender.current.focus();
                }}
            />
            <TextInput
                ref={e => {
                    register({name: 'gender'});
                    inputRefs.gender.current = (e as unknown) as TextInput;
                }}
                onChangeText={text => setValue('gender', text)}
                style={styles.input}
                returnKeyType={'next'}
                onSubmitEditing={(): void => {
                    inputRefs.city && inputRefs.city.current.focus();
                }}
            />
            <TextInput
                ref={e => {
                    register({name: 'city'});
                    inputRefs.city.current = (e as unknown) as TextInput;
                }}
                onChangeText={text => setValue('city', text)}
                style={styles.input}
                returnKeyType={'done'}
                onSubmitEditing={handleSubmit(onSubmit)}
            />
        </View>
    );
};

export default FocusNextInputForm;
