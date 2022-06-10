import { StyleSheet, Text, View ,TouchableOpacity,ScrollView} from 'react-native'
import React from 'react'

const Accordian = ({ fee }) => {
  const [show, setshow] = React.useState(false);

  const RanderBody = ({ item }) => {
    return (
      <View style={styles.accordianWraper}>
        <View style={styles.accordianInner}>
          <Text
            style={{
              color: "#eee",
              fontSize: 20,
              textTransform: "capitalize",
            }}
          >
            Tution Fee
          </Text>
          <Text
            style={{
              color: "#fff",
              fontSize: 20,
              textTransform: "capitalize",
              fontWeight: "bold",
            }}
          >
            {item.tutionFee}
          </Text>
        </View>
        <View style={styles.accordianInner}>
          <Text
            style={{
              color: "#eee",
              fontSize: 20,
              textTransform: "capitalize",
            }}
          >
            Texam fee
          </Text>
          <Text
            style={{
              color: "#fff",
              fontSize: 20,
              textTransform: "capitalize",
              fontWeight: "bold",
            }}
          >
            {item.examFee}
          </Text>
        </View>
        <View style={styles.accordianInner}>
          <Text
            style={{
              color: "#eee",
              fontSize: 20,
              textTransform: "capitalize",
            }}
          >
            registration fee
          </Text>
          <Text
            style={{
              color: "#fff",
              fontSize: 20,
              textTransform: "capitalize",
              fontWeight: "bold",
            }}
          >
            {item.registrationFee}
          </Text>
        </View>
        <View style={styles.accordianInner}>
          <Text
            style={{
              color: "#eee",
              fontSize: 20,
              textTransform: "uppercase",
            }}
          >
            PDP
          </Text>
          <Text
            style={{
              color: "#fff",
              fontSize: 20,
              textTransform: "capitalize",
              fontWeight: "bold",
            }}
          >
            {item.pdpFee}
          </Text>
        </View>
        <View style={styles.accordianInner}>
          <Text
            style={{
              color: "#eee",
              fontSize: 20,
              textTransform: "uppercase",
            }}
          >
            PTC fee
          </Text>
          <Text
            style={{
              color: "#fff",
              fontSize: 20,
              textTransform: "capitalize",
              fontWeight: "bold",
            }}
          >
            {item.ptcFee}
          </Text>
        </View>
        <View style={styles.accordianInner}>
          <Text
            style={{
              color: "#eee",
              fontSize: 22,
              textTransform: "capitalize",
              fontWeight: "bold",
            }}
          >
            Total fee
          </Text>
          <Text
            style={{
              color: "#fff",
              fontSize: 20,
              textTransform: "capitalize",
              fontWeight: "bold",
            }}
          >
            {item.totalFee}
          </Text>
        </View>
      </View>
    );
  };

  return (
   
      <View style={styles.accordianContainer}>
        <TouchableOpacity
          style={styles.AccordianItem}
          onPress={() => setshow(!show)}
        >
          <Text style={styles.heading}>{fee.title}</Text>
        </TouchableOpacity>
        {show && (
          <View style={styles.accordianBody}>
            {fee &&
              fee.body.map((elem, i) => <RanderBody item={elem} key={i} />)}
          </View>
        )}
      </View>
  
  );
};

export default Accordian

const styles = StyleSheet.create({
  accordianContainer: {
    marginTop: 10,
  },
  AccordianItem: {
    backgroundColor: "#00037d",
    paddingVertical: 10,
    paddingLeft: 10,
  },
  heading: {
    color: "#fff",
    fontSize: 19,
    fontWeight: "bold",
    letterSpacing: 1.5,
    textTransform: "capitalize",
  },
  accordianBody: {
  
    
    backgroundColor: "#00037d",

    paddingVertical: 10,
  },
  accordianInner: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical:5,
    borderBottomWidth:2,
    borderColor:'#fff',
    paddingVertical:3,
      paddingHorizontal: 10,
  },
});