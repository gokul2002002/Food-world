import { Image, Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import MaterialIconCom from 'react-native-vector-icons/MaterialCommunityIcons'
import IonicIcons from 'react-native-vector-icons/Ionicons' 
import { useNavigation } from '@react-navigation/native'
const OrderPage = () => {

    const [selecedSize ,  setSelectedSize ] =  useState("")
    const [Quantity , setQuantity] = useState(1)
    const naviagtion =  useNavigation();
  return (
    <View style={{flex:1 , backgroundColor:'black'}}>
        <View style={{width:'100%' , height:'25%' , backgroundColor:'black'}}>
<View style={{width:'100%' , height:'30%' , backgroundColor:'black' , justifyContent:'space-between'  ,  flexDirection:'row' , alignItems:'center' , position:'relative' , bottom:-40 ,  zIndex: 10,}}>
<Pressable onPress={()=>naviagtion.goBack()} style={{width:50 , height:50 , borderRadius:100 , justifyContent:'center' , alignItems: 'center',backgroundColor:'#282828'}}>
<MaterialIconCom name='chevron-left' color={'white'} size={20}/>
</Pressable>
<Text style={{color:'white' , fontWeight:'500' , fontSize:20}}>Deatils</Text>
<Pressable style={{width:50 , height:50  , borderRadius:100 , justifyContent:'center' , alignItems: 'center',backgroundColor:'#282828'}}>
<MaterialIconCom name='cart-minus' color={'white'} size={20}/>
</Pressable>
</View>
<View style={{width:'100%' , height:'70%' , backgroundColor:'black' , justifyContent:'space-between'  ,  flexDirection:'row' , alignItems:'center' ,  top:-10 ,  gap:20}}>
    <View style={{width:'50%' , height:'50%' , alignItems: 'center',  justifyContent: 'center',}}>
<Text style={{opacity: 0.5,color:'white'}}>your order</Text>
<Text style={{color:'white' ,  fontSize:24 ,fontFamily:"Monoton-Regular" ,  }}>Biriyani</Text>
    </View>
    <View style={{width:'50%' , height:'50%' , alignItems: 'center',  justifyContent: 'center',}}>
    <Text style={{opacity: 0.5,color:'white'}}>Qnt</Text>
    <View style={{width:130 , height:35 , borderRadius:30 , backgroundColor:'#2a2a2a' ,  justifyContent: 'center', flexDirection:'row'}}>
        <Pressable onPress={()=>setQuantity((prev)=>prev+1)} style={{width:'20%' , height:'100%' ,  justifyContent: 'center',}}>
            <Text style={{color:'white' , fontWeight:"800"}}>+</Text>
        </Pressable>
        <Text style={{color:'white' , top:10}}>{Quantity}</Text>
        <Pressable onPress={()=>setQuantity((prev)=>prev-1)} style={{width:'20%' , height:'100%'  , justifyContent: 'center',}}>
        <Text style={{color:'white' , fontWeight:"800" , left:20}}>-</Text>
        </Pressable>
    </View>
    </View>
</View>
        </View>
        <View style={{width:'100%' , height:'80%' ,  backgroundColor:'white' , borderTopLeftRadius:30 , borderTopRightRadius:30 , position: 'absolute', bottom:1}}>
            <View style={{width:'100%' , height:'50%' ,  alignItems: 'center', justifyContent: 'center',}}>
<Image source={require("../SVGs/BN.png")} style={{width:250 , height:250}}/>
<Image source={require("../SVGs/BN.png")} style={{width:230 , height:230 , position:'absolute' , top:100 , left:300  ,  opacity: 0.5,}}/>
<Image source={require("../SVGs/BN.png")} style={{width:230 , height:230 , position:'absolute' , top:100 , right:300 ,  opacity: 0.5,}}/>
<View style={{position: 'absolute', justifyContent:'space-between' , width:20 , height:5 , alignItems:'center' ,  alignSelf: 'center', bottom:40 , flexDirection:'row'}}>
    <View style={{backgroundColor:'grey' , width:5 , height:5 , borderRadius:5 ,opacity:0.6}}></View>
    <View style={{backgroundColor:'#e9b226' , width:5 , height:5 , borderRadius:5}}></View>
    <View style={{backgroundColor:'grey' , width:5 , height:5 , borderRadius:5 , opacity:0.6}}></View>
</View>
            </View>
            <View style={{width:'100%' , height:'20%' ,  padding:20 , gap:15}}>
<Text style={{fontWeight:'800' , fontSize:20 , fontFamily:'AveriaLibre-Bold'}}>About the food</Text>
<Text style={{letterSpacing:1 , color:'grey' , textAlign:'justify' , lineHeight:20}}>Biryani is a highly aromatic and flavorful rice dish that is a beloved culinary masterpiece across South Asia
     and beyond. It combines basmati rice, spices, and a variety of meats or vegetables, layered and cooked to perfection.
      </Text>
            </View>
            <View style={{width:'100%' , height:'10%'  , alignItems:'center' , paddingHorizontal:20 , flexDirection:'row' , justifyContent: 'space-between', top:20}}>
<Text style={{fontWeight:'800'}}>Size</Text>
<Pressable onPress={()=>setSelectedSize("S")} style={{width:'25%' ,  height:'50%' ,
    borderColor: selecedSize === "S" ? '#e9b226' :'#ececec' , borderWidth:1 , justifyContent:'center' , alignItems:'center',  borderRadius:20}}>
    <Text  style={{color: selecedSize === "S" ? '#e9b226' :'Black'}}>Small</Text>
</Pressable>
<Pressable onPress={()=>setSelectedSize("M")} style={{width:'25%' ,  height:'50%' ,
    borderColor: selecedSize === "M" ? '#e9b226' :'#ececec' , borderWidth:1 , justifyContent:'center' , alignItems:'center' , borderRadius:20 , }}>
    <Text style={{color: selecedSize === "M" ? '#e9b226' :'Black'}}>Medium</Text>
</Pressable>
<Pressable onPress={()=>setSelectedSize("L")} style={{width:'25%' ,  height:'50%' ,
    borderColor: selecedSize === "L" ? '#e9b226' :'#ececec', borderWidth:1 , justifyContent:'center' , alignItems:'center',  borderRadius:20 ,}}>
    <Text  style={{color: selecedSize === "L" ? '#e9b226' :'Black'}}>Large</Text>
</Pressable>
            </View>
            <View style={{width:'100%' , height:'20%' , justifyContent:'center' , alignItems:'center' , paddingHorizontal:20 , flexDirection:'row'}}>
                <View style={{width:'30%' , height:'100%' , justifyContent: 'center',alignItems: 'center', gap:10}}>
                    <Text style={{fontSize:17 ,  color:'grey' , fontFamily:'AveriaLibre-Bold'}}>price</Text>
                    <Text style={{fontWeight:'800' , fontSize:20}}>$480.00</Text>
                </View>
                <View style={{width:'70%' , height:'100%' , justifyContent: 'center',alignItems: 'center',}}>
                    <Pressable style={{width:'90%' , height:'40%' , borderRadius:50 ,  alignItems:'center' , justifyContent:'center' ,  backgroundColor:'#e9b226' , flexDirection:'row',  gap:10}}>
                    <MaterialIconCom name='cart-minus' color={'white'} size={20}/>
                    <Text style={{color:'white' ,fontFamily:'AveriaLibre-Bold' , fontSize:20}}>Place order</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    </View>
  )
}

export default OrderPage

const styles = StyleSheet.create({})