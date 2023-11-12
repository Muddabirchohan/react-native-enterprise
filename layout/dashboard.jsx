import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';


function Dashboard({children}) {
    
    const [left, right] = children;
  
    return (
//         <ScrollView style={{ minHeight: 280, maxHeight: 260}}>
//     <View style={styles.container}>
//         {left}
//         {right}
//   </View>
//   </ScrollView>
<ScrollView contentContainerStyle={{ flexGrow: 1 }}>
  <View>
  {left}
  </View>
  <View>
   {right}
  </View>
</ScrollView>
 
  )
}

export default Dashboard




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'silver',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
