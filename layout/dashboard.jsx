import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';


function Dashboard({children}) {
    
  
    return (
//         <ScrollView style={{ minHeight: 280, maxHeight: 260}}>
//     <View style={styles.container}>
//         {left}
//         {right}
//   </View>
//   </ScrollView>
<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
  <View style={styles.container}>
  {children}
  </View>

</ScrollView>
 
  )
}

export default Dashboard




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003153',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
