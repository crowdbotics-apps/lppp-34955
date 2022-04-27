import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f81/5892/580e9b2ef12edf6b47b1dae7acef4c05"
        }}
        style={styles.ImageBackground_2_4254}
      />
      <View style={styles.View_2_4255}>
        <View style={styles.View_2_4256}>
          <Text style={styles.Text_2_4256}>We’re Live in:</Text>
        </View>
        <View style={styles.View_2_4257}>
          <View style={styles.View_2_4258}>
            <View style={styles.View_2_4259}>
              <View style={styles.View_2_4260}>
                <View style={styles.View_2_4261}>
                  <Text style={styles.Text_2_4261}>day</Text>
                </View>
                <View style={styles.View_2_4262}>
                  <Text style={styles.Text_2_4262}>00</Text>
                </View>
              </View>
            </View>
            <View style={styles.View_2_4263}>
              <View style={styles.View_2_4264}>
                <View style={styles.View_2_4265}>
                  <Text style={styles.Text_2_4265}>hr</Text>
                </View>
                <View style={styles.View_2_4266}>
                  <Text style={styles.Text_2_4266}>12 </Text>
                </View>
              </View>
              <View style={styles.View_2_4267}>
                <View style={styles.View_2_4268}>
                  <Text style={styles.Text_2_4268}>min</Text>
                </View>
                <View style={styles.View_2_4269}>
                  <Text style={styles.Text_2_4269}>05 </Text>
                </View>
              </View>
              <View style={styles.View_2_4270}>
                <View style={styles.View_2_4271}>
                  <Text style={styles.Text_2_4271}>sec</Text>
                </View>
                <View style={styles.View_2_4272}>
                  <Text style={styles.Text_2_4272}>07</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_2_4273}>
            <Text style={styles.Text_2_4273}>:</Text>
          </View>
          <View style={styles.View_2_4274}>
            <Text style={styles.Text_2_4274}>:</Text>
          </View>
          <View style={styles.View_2_4275}>
            <Text style={styles.Text_2_4275}>:</Text>
          </View>
        </View>
        <View style={styles.View_2_4276}>
          <View style={styles.View_I2_4276_33_6173}>
            <View style={styles.View_I2_4276_33_6176}>
              <Text style={styles.Text_I2_4276_33_6176}>
                Enter your Zip Code
              </Text>
            </View>
          </View>
          <View style={styles.View_I2_4276_33_6177}>
            <View style={styles.View_I2_4276_33_6178}>
              <Text style={styles.Text_I2_4276_33_6178}>Get Started</Text>
            </View>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f81/5892/580e9b2ef12edf6b47b1dae7acef4c05"
        }}
        style={styles.ImageBackground_2_4277}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("100%") },
  ImageBackground_2_4254: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_4255: {
    width: wp("99%"),
    minWidth: wp("99%"),
    height: hp("65%"),
    minHeight: hp("65%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    backgroundColor: "rgba(39, 38, 47, 1)"
  },
  View_2_4256: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("18%"),
    justifyContent: "flex-start"
  },
  Text_2_4256: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 17.649999618530273,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.45299999237060545,
    textTransform: "none"
  },
  View_2_4257: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("46%"),
    minHeight: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("9%")
  },
  View_2_4258: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("46%"),
    minHeight: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_4259: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("46%"),
    minHeight: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_4260: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("46%"),
    minHeight: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_4261: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30%"),
    justifyContent: "center"
  },
  Text_2_4261: {
    color: "rgba(155, 146, 171, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_4262: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_2_4262: {
    color: "rgba(255, 170, 251, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_4263: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("46%"),
    minHeight: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%")
  },
  View_2_4264: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("46%"),
    minHeight: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_4265: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30%"),
    justifyContent: "center"
  },
  Text_2_4265: {
    color: "rgba(155, 146, 171, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_4266: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_2_4266: {
    color: "rgba(255, 170, 251, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_4267: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("45%"),
    minHeight: hp("45%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%")
  },
  View_2_4268: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("29%"),
    justifyContent: "center"
  },
  Text_2_4268: {
    color: "rgba(155, 146, 171, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_4269: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_2_4269: {
    color: "rgba(255, 170, 251, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_4270: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%")
  },
  View_2_4271: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27%"),
    justifyContent: "center"
  },
  Text_2_4271: {
    color: "rgba(155, 146, 171, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_4272: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_2_4272: {
    color: "rgba(255, 170, 251, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_4273: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_2_4273: {
    color: "rgba(255, 170, 251, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_4274: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_2_4274: {
    color: "rgba(255, 170, 251, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_4275: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_2_4275: {
    color: "rgba(255, 170, 251, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_4276: {
    width: wp("43%"),
    minWidth: wp("43%"),
    height: hp("44%"),
    minHeight: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_4276_33_6173: {
    flexGrow: 1,
    width: wp("27%"),
    height: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(242, 244, 254, 1)"
  },
  View_I2_4276_33_6176: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_I2_4276_33_6176: {
    color: "rgba(71, 84, 103, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_4276_33_6177: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 170, 251, 1)"
  },
  View_I2_4276_33_6178: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_I2_4276_33_6178: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_4277: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("100%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
