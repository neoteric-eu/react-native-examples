/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {FC} from 'react';
import {SafeAreaView, StyleSheet, ScrollView, StatusBar} from 'react-native';
import FocusNextInputForm from './src/features/forms/focus-next-input-form';

const App: FC = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" />
            <SafeAreaView>
                <ScrollView contentInsetAdjustmentBehavior="automatic">
                    <FocusNextInputForm />
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({});

export default App;
