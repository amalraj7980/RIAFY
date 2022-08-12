import { Text, View,StatusBar,} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import React, { Component } from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/components/Home';
import SplashScreen from './src/components/SplashScreen';
const HomeStack = createStackNavigator();
const HomeScreen=()=>(
  <HomeStack.Navigator
   screenOptions={({navigation,route})=>({
    headerTitle:(props)=>(<>
    <View style={{flex:1,alignItems:"center",justifyContent:"center"}}>
       <Text style={{fontSize:20,color:"#30384d",fontWeight:"bold", fontFamily:'Montserrat-Regular'}}>Search</Text>
    </View>
    </>
     ),})}>
      <HomeStack.Screen name="Home" component={Home} options={{
        headerShown:true,
        headerStyle:{
          backgroundColor:"#fff",
          shadowColor:"#3B4151"
        }
      }}/>
   </HomeStack.Navigator>
)
export default class App extends Component {
  constructor(props){
    super(props);
    this.state={
      isLoading:true,
      loading:true,
    }

  }
  componentDidMount(){
    setTimeout(()=>{this.setState({loading:false})},3000)
  }
  render() {
    if(this.state.loading){
      return <SplashScreen/>
    }
    return (
      <>   
      <StatusBar barStyle="light-content" backgroundColor="gray"/>
       <NavigationContainer>
          <HomeScreen/>
       </NavigationContainer>
      </>
    )
  }
}