import { Dimensions, KeyboardTypeOptions, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react';
interface TextInputProps {
    showPassword?: boolean
	placeholder: string;
	color: string
    keyboradType?: KeyboardTypeOptions;
    name: string;
    isReadOnly?: boolean
    title?:string
    value?: string
    children?:React.ReactNode,
    onChangeText: (key:string,text: string) => void;
    autoCapitalize?: 'none'|'sentences'|'words'|'characters'
}
const { width } = Dimensions.get('window');

export default function CustomTextInput({placeholder,name,showPassword,value,keyboradType,title,isReadOnly,onChangeText,children,color,autoCapitalize}:TextInputProps) {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <View style={[styles.container,isFocused && styles.inputFocused]}>
            <Text style={{color,textTransform:'uppercase',fontFamily:'MontserratSemiBold',}}>{title?title:name}</Text>
            <View style={{ paddingRight:9,flexDirection:'row',borderWidth:1,marginTop:10,borderColor:'#ccc',borderRadius:10,alignItems:'center',justifyContent:'space-between'}}>
                <TextInput 
                    readOnly={isReadOnly}
                    placeholderTextColor={'#919191'} 
                    value={value}
                    placeholder={placeholder}
                    style={[styles.textInputStyle,{color}]}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    keyboardType={keyboradType?keyboradType:'default'}
                    onChangeText={(txt)=>onChangeText(name,txt)}
                    secureTextEntry={showPassword}
			        autoCapitalize={autoCapitalize?autoCapitalize:'none'}
                />
                {children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    inputFocused: {
        borderColor: '#499dff', // Change border color when active
    },
    container:{
        width: width * .9,
        marginVertical: 15,
        alignSelf:'center',
    },
    textInputStyle:{
        fontFamily:'MontserratRegular',
        paddingVertical:10,
        paddingHorizontal:20,
		fontSize:20,
		color: 'black',
	},
})