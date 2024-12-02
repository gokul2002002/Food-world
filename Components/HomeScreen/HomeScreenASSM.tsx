import { Dimensions, FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import MaterialIconCom from 'react-native-vector-icons/MaterialCommunityIcons'
import IonicIcons from 'react-native-vector-icons/Ionicons'
import SVG_5 from '../SVGs/SVG_5'
import { Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
const HomeScreenASSM = () => {
  const navigation = useNavigation()
  return (
    <View style={{width:Dimensions.get('screen').width ,  height:Dimensions.get('screen').height , backgroundColor:'black'}}>
      <View style={styles.SearchContainerView}>
        <View style={[styles.SearchContainerViewInnerView , {flexDirection:'row' , justifyContent:"space-between" , alignItems:'center' , top:20 , paddingHorizontal:20}]}>
            <View style={{width:'70%'   , justifyContent:'center' , paddingHorizontal:15}}>
              <Text style={{color:'white' , opacity:0.7}}>Delivery Location</Text>
              <Text style={{color:'white', fontWeight:'700'}}><IonicIcons name='location' color={"#e9b226"}/>  Tambram</Text>
            </View>
            <View style={{width:'20%' ,justifyContent:'center' , flexDirection:"row" , gap:10 , marginBottom:6}}>
<Pressable style={{justifyContent:'center' , alignItems:'center' , backgroundColor:'#2a2a2a' , width:40 , height:40 , borderRadius:50 }}> <MaterialIconCom name='cart-minus' color={'white'} size={20}/></Pressable>
<Pressable style={{justifyContent:'center' , alignItems:'center' , backgroundColor:'#2a2a2a' , width:40 , height:40 , borderRadius:50 }}> <MaterialIconCom name='bell' color={'white'} size={20}/></Pressable>
            </View>
        </View>
        <View style={[styles.SearchContainerViewInnerView , {alignItems:'center' }]}>
    <View style={{flexDirection:'row' , width:'90%' ,  height:'45%' , backgroundColor:'#2a2a2a' , borderRadius:10}}>
<TextInput placeholder='Search food' placeholderTextColor={'white'} style={{width:'90%' , height:'100%' , paddingHorizontal:10 , opacity:0.6}}  />
<Pressable style={{justifyContent:'center' , alignItems:'center' , width:'10%' , height:'100%'}}>
<MaterialIconCom name='sort' color={'white'} size={16}/>
</Pressable>
    </View>
        </View>
      </View>
      <View style={{width:'100%' , height:'80%' ,  backgroundColor:'white' , borderTopLeftRadius:30 , borderTopRightRadius:30 , position: 'absolute', bottom:1}}>
            <View style={{width:'100%' , height:'30%' , alignItems:'center' , justifyContent:'center' , top:10}}>
              <Pressable style={{width:'90%' , height:'90%' , backgroundColor:'#e9b226' ,borderRadius:20 , flexDirection:'row'}}>
                        <View style={{width:'50%' , height:'100%' ,  alignItems:'center' ,justifyContent:'center'}}>
                          <Text style={{color:'white' ,  fontWeight:'500' , fontFamily:"AveriaLibre-Bold"}}>limited time deal</Text>
                          <Text style={{color:'white' ,  fontWeight:'700' , fontFamily:"Monoton-Regular" , fontSize:25 , }}>Ramadan </Text>
                          <Text style={{color:'white' ,  fontWeight:'700' , fontFamily:"Monoton-Regular" , fontSize:25 , }}>Special  </Text>
                          <Text style={{color:'white' ,  fontWeight:'700' , fontFamily:"Monoton-Regular" , fontSize:25 , }}>Deal </Text>
                        </View>
                        <View style={{width:'50%' , height:'100%'}}>
                                  <Image source={require('../SVGs/Burger.png')} style={{height:'70%' , width:'80%' , left:30 , top:10 }}/>
                                  <Pressable style={{width:90 , height:30 ,  borderRadius:20 , backgroundColor:'black' , justifyContent:'center' , alignItems:'center' , left:60 ,  bottom:'-7%'}}>
                                    <Text style={{color:'white' , fontWeight:'600' ,}}>Order now</Text>
                                  </Pressable>
                        </View>
                        <Text style={{position: 'absolute', fontWeight:'900' , top:'19%' ,  right:'30%' , transform:[
                          {
                            rotate:'300deg'
                          }
                        ] , fontFamily:"Monoton-Regular" , fontSize:25 ,color:'white'}}>$5.99</Text>
              </Pressable>
            </View>
            <View style={{width:'100%' , height:'10%' , alignItems:'center' , flexDirection:'row' , justifyContent:'space-between' , paddingHorizontal:20}}>
              <Text style={{fontWeight:'700' , fontSize:18}}>Catagories</Text>
              <Text style={{color:'#e9b226' ,  fontWeight:'600'}}>See all</Text>
            </View>
            <View>
            <FlatList 
            style={{height:100}}
            horizontal
            data={[{type:'Drinks' , image :require(`../SVGs/CDrink.png`)} ,
               {type:'Cakes' ,image:require(`../SVGs/CCake.png`)} , 
               {type:'Chips' , image:require(`../SVGs/Chips.jpg`)} , 
               {type:'Ice creams' , image:require(`../SVGs/IC1.jpg`)} , 
               {type:'Biriyanis' , image:require(`../SVGs/BN.png`)} ]}
            renderItem={({item})=>{
              return(
                <View style={{width:80 , height:80 , backgroundColor:'white' , marginHorizontal:10 , alignItems:'center' , justifyContent:'center' , gap:10 , top:7}}>
<Image source={item.image} style={{width:50 , height:50}}/>
<Text style={{opacity: 1, fontWeight:'600' , letterSpacing:0.4 , color:'grey'}}>{item.type}</Text>
                </View>
              )
            }}
            />
            </View>
           
            <View style={{width:'100%' , height:'10%' , alignItems:'center' , flexDirection:'row' , justifyContent:'space-between' , paddingHorizontal:20}}>
            <Text style={{fontWeight:'700' , fontSize:18}}>Popular Foods</Text>
            <Text style={{color:'#e9b226' , fontWeight:'600'}}>See all</Text>
            </View>
            <View>
            <FlatList 
            data={[{name:"Chicken Biriyani" , image:require(`../SVGs/CB.jpg`) , category:'Food', type:"Non-veg meal"} 
              , {image:require(`../SVGs/V.jpg`) , name:'Veg  Bririyani',category:'Food', type:"Non-veg meal"} 
              , {image:require(`../SVGs/M.jpg`) , name:"Milkshake",category:'Drink' , type:"Frozen Drink"}  ]}
            renderItem={({item , index})=>{
              return(
                <Pressable onPress={()=>navigation.navigate("OrderPage")} style={{width:'95%' , height:130 , backgroundColor:'white' ,
                 marginVertical:10 , alignItems:'center' , 
                 justifyContent:'center' , alignSelf:'center' , flexDirection:'row' , 
                  marginBottom:item.name === 'Milkshake'?500 :10 ,
                  
                  }}>
                   <View style={{width:'50%' , height:'100%' , backgroundColor:"white" , alignItems:'center' , justifyContent: 'center',}}>
                   <Image source={item.image} style={{width:150 , height:110 , borderRadius:10}}/>
                   </View>
                   <View style={{width:'50%' , height:'100%' , backgroundColor:"white"}}>
                    <View style={{width:'100%' , height:'20%' ,  flexDirection:'row' ,  justifyContent:'space-between'}}>
                      <View style={{backgroundColor:'#f2ecdb' , width:70 , height:30 , alignItems:'center' , justifyContent:'center' , borderRadius:10}}>
                        <Text style={{opacity: 0.5, fontWeight:'600'}}>{item.category}</Text>
                      </View>
                      <Text><MaterialIconCom name='star' color={'#e9b226'}/>4.5</Text>
                    </View>
                    <View style={{width:'100%' , height:'60%' , justifyContent:'center' , paddingHorizontal:10}}>
                      <Text style={{fontSize:22 , fontWeight:'700' , fontFamily:"AveriaLibre-Bold"}}>{item.name}</Text>
                      <Text style={{fontSize:18 , fontWeight:'700' , opacity:0.5}}>{item.type}</Text>
                    </View>
                    <View style={{width:'100%' , height:'20%' ,  flexDirection:'row' , alignItems:'center' , paddingHorizontal:10 , justifyContent:'space-between'}}>
<Text style={{opacity:0.8}}>$3.22</Text>
<Pressable style={{alignItems:'center' ,  justifyContent: 'center', width:20 , height:20 , borderRadius:50 ,  borderWidth:2 , top:-5}}>
  <Text style={{fontWeight:'700'}}>+</Text>
</Pressable>
                    </View>
                   </View>
                </Pressable>
              )
            }}
            />
            </View>
      </View>
    </View>
  )
}

export default HomeScreenASSM

const styles = StyleSheet.create({
  SearchContainerView:{
    width:'100%' , height:'25%' 
  },
  SearchContainerViewInnerView:{
    width:'100%' , height:'50%'
  }
})