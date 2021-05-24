import React,{useState} from 'react'
import { View,StyleSheet,Dimensions } from 'react-native';
import Tab from './Tab';

const { width } = Dimensions.get('screen');

const TabBar = ({state,navigation}) => {
    const { routes } = state;

    const [selected,setSelected] = useState('Home');

    renderColor = currentTab => currentTab === selected ? 'red' : 'black';

    handlePress = (activeTab,index) =>{
        if(state.index !== index){
            setSelected(activeTab);
            navigation.navigate(activeTab);
        }
        
    }
    return (
        <View style={styles.wrapper}>
           <View style={styles.container}>
                {
                    routes.map((route,index)=>
                        <Tab 
                            tab={route}
                            icon={route.params.icon}
                            onPress={()=>handlePress(route.name,index)}
                            color={renderColor(route.name)}
                            key={route.key}
                        />    
                    )
                }
           </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapper:{
        position:'absolute',
        bottom: 20,
        width,
        height:50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container:{
        flexDirection: 'row',
        backgroundColor: '#fff',
        width: 250,
        justifyContent:'space-around',
        borderRadius: 100
    }
})

export default TabBar;
