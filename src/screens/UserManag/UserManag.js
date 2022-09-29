import { View, Text , StyleSheet} from 'react-native'
import React from 'react'

const UserManag = () => {
  return (
    <View style={styles.root}>
      <Text style={styles.title}>UserManag</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    root: {
      alignItems: 'center',
      flex: 1,
    },
    title: {
      fontSize: 30,
      fontWeight: 'bold',
    },
  });
export default UserManag