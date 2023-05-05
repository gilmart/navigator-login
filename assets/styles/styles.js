import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    titulos:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        borderBottomWidth: 0.5,
        borderBottomColor: '#ccc',
        marginBottom: 20,
    },
    containerProfile: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'flex-start',
        marginTop: 20,
        marginVertical: 20
      },

    titulosProfile:{
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        borderBottomWidth: 0.5,
        borderBottomColor: '#ccc',
        marginBottom: 20,
        alignItems:'baseline'
    },

    theme: {
        colors: {primary: '#0D56FF'},
    },
    button:{
        /*marginTop:15,
        backgroundColor: '#1957E7',*/
        backgroundColor: '#1957E7',
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 20,
        alignSelf: 'center',
        marginVertical: 5,
       
    },
     buttonText: {
        color: '#fff',
        fontWeight: 'light',
        fontSize: 16,
        textAlign: 'center',
        
    },
    mensajesErrores:{
        color:'red',
        color: '#f44336',
        marginLeft: 8,
        fontSize: 16,
        marginBottom: 10
    },
    buttonIcon: {
        color: 'white',
    },

    parrafo:{
        color:'black',
        marginLeft: 8,
        fontSize: 16,
        marginBottom: 10
    },
    buttonRentados:{
        /*marginTop:15,
        backgroundColor: '#1957E7',*/
        backgroundColor: '#ED8107',
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 20,
        alignSelf: 'center',
        marginVertical: 5,
       
    },
    buttonGuardados:{
        /*marginTop:15,
        backgroundColor: '#1957E7',*/
        backgroundColor: '#058E11',
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 20,
        alignSelf: 'center',
        marginVertical: 5,
        marginBottom:10
       
    },

    itemContainer: {
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 5,
      },
      itemText: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      itemSubText: {
        fontSize: 14,
      },



  });

export {styles}
