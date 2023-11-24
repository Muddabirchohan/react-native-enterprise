import React,{useRef} from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Card } from 'react-native-elements'
import Dashboard from '../../layout/dashboard'
// import { RichEditor, RichToolbar } from 'react-native-rich-editor';

import {  Platform, KeyboardAvoidingView, SafeAreaView, ScrollView } from "react-native";
import {actions, RichEditor, RichToolbar} from "react-native-pell-rich-editor";

export default function ArticleSingle({route}) {


  const richText = useRef();



  const category = route.params.category

  return (
    <View>
          <RichToolbar
    editor={richText}
	actions={[
    actions.setBold,
    actions.setItalic,
    actions.insertBulletsList,
    actions.insertOrderedList,
    actions.insertImage,
    actions.setParagraph,
    actions.removeFormat,
    actions.undo,
    actions.redo,
    actions.heading1,
    actions.heading2,
    actions.heading3,
    actions.heading4,
    actions.heading5,
    actions.heading6,
    actions.alignLeft,
    actions.alignCenter,
    actions.alignRight,
    actions.alignFull,
    actions.setSubscript,
    actions.setSuperscript,
    actions.setStrikethrough,
    actions.setUnderline,
    actions.indent,
    actions.outdent,
    actions.insertLink,
    actions.insertCheckbox,
    actions.insertHorizontalRule,
    
		'customAction',
	]}
	// iconMap={{
	// 	customAction: customIcon,
	// }}
	customAction={this.handleCustomAction}
/>
        <Dashboard >

           {/* <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}	style={{ flex: 1 }}> */}
          <Text>Description:</Text>
          <RichEditor
          initialHeight={1000}
          editorStyle={styles.editor}
              ref={richText}
              initialContentHTML={category.content}
              onChange={ descriptionText => {
                  console.log("descriptionText:", descriptionText);
              }}
          />
        {/* </KeyboardAvoidingView> */}
    

    



      </Dashboard>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center"
  },

  categories: {
      flex: 1,
      height: "100%",
      padding: 10

  },
  editor: {
  
  flex: 1,
  borderWidth: 1,
  borderColor: '#e0e0e0',
  },
  Text: {
      color: "white",
      fontSize: 22,
      textAlign: "center",
      padding: 20
      // letterSpacing: 6
  },
  noDataText: {
      display: "flex",
      justifyContent: "center",
      alignItems: 'center',
      height: "100%",
  }
});





