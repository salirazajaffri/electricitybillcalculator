import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const UserList = ({users}) => {
    return (
        <View>
            <Text>{JSON.stringify(users)}</Text>
        </View>
    )
}

export default UserList

const styles = StyleSheet.create({})
