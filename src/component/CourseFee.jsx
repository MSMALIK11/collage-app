import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import Accordian from './Accordian'
import FirstSemFee from './FirstSemFee'

const CourseFee = () => {
    const feeData=[
       {
           title:"first year fee",
           body:[
               {
                   tutionFee:'33000',
                   examFee:'5000',
                   registrationFee:'5000',
                   pdpFee:'na',
                   ptcFee:'na',
                   totalFee:'43000'
               }
            ]

       },
       {
           title:"second year fee",
           body:[
               {
                   tutionFee:'33000',
                   examFee:'5000',
                   registrationFee:'3000',
                   pdpFee:'na',
                   ptcFee:'na',
                   totalFee:'41000'
               }
            ]

       },
       {
           title:"third year fee",
           body:[
               {
                   tutionFee:'33000',
                   examFee:'5000',
                   registrationFee:'3000',
                   pdpFee:'7500',
                   ptcFee:'7500',
                   totalFee:'56000'
               }
            ]

       },
       

    ]

    const ontimeFee=[
      {
        title:'onetime fee at time of admission ',
        applicationFee:'1500',
        totalOneTimeFee:'1500'
      }
    ];
     
    



  return (
    
    <View>
      <Text style={styles.courseFeeheading}>
        Course Fee Structure for BCA 2019-22 Batch{" "}
      </Text>
      <View>
        <Text style={{marginVertical:10}}>Course Fee (Year Wise) in Rs.</Text>
        {feeData &&
          feeData.map((item, i) => (
            <Accordian fee={item} key={i} ontimeFee={ontimeFee} />
          ))}
        
      </View>
    </View>
  );
}

export default CourseFee

const styles = StyleSheet.create({
  courseFeeheading: {
    fontSize: 20,
    fontWeight: "bold",
   marginTop:20,
   marginBottom:5,
    borderBottomWidth:2,
    borderBottomColor: "#00073d",
    paddingVertical:2
  },
});