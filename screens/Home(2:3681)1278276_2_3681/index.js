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
      <View style={styles.View_2_3682}>
        <Text style={styles.Text_2_3682}>
          It’s super easy to get started and its free!{" "}
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c948/c744/8185540aba3de22e7e3853b96a02d27e"
        }}
        style={styles.ImageBackground_2_3683}
      />
      <View style={styles.View_2_3685}>
        <View style={styles.View_2_3686}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/85fc/04c7/835fd7ca7dfab3c2f181ef389591b195"
            }}
            style={styles.ImageBackground_2_3687}
          />
        </View>
      </View>
      <View style={styles.View_2_3706}>
        <View style={styles.View_2_3707}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/902a/1e65/e287fc75a067c19da96cfefe5fb53115"
            }}
            style={styles.ImageBackground_2_3708}
          />
          <View style={styles.View_2_3711}>
            <View style={styles.View_2_3712}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cf07/3170/4cdb9cb3c15f9ffce4ac88bd13843384"
                }}
                style={styles.ImageBackground_2_3713}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0774/f7aa/10a4e15e2f54fb1dfdc73171cccd70e7"
              }}
              style={styles.ImageBackground_2_3716}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/656f/9371/612a64da3a679d84a277c074dfe04e5a"
              }}
              style={styles.ImageBackground_2_3725}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_2_3739} />
      <View style={styles.View_2_3740}>
        <View style={styles.View_2_3741}>
          <View style={styles.View_I2_3741_2_1721}>
            <View style={styles.View_I2_3741_2_1722}>
              <View style={styles.View_I2_3741_2_1723}>
                <Text style={styles.Text_I2_3741_2_1723}>
                  The Date Before the Date
                </Text>
              </View>
              <View style={styles.View_I2_3741_2_1724}>
                <Text style={styles.Text_I2_3741_2_1724}>
                  Come to date night every Monday at 7. Up to 5 dates in 30
                  mins.
                </Text>
              </View>
            </View>
            <View style={styles.View_I2_3741_2_1725}>
              <Text text="" style={styles.Text_I2_3741_2_1725} />
            </View>
            <View style={styles.View_I2_3741_2_1726}>
              <View style={styles.View_I2_3741_2_1727}>
                <Text style={styles.Text_I2_3741_2_1727}>
                  I want to come to Date Night
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I2_3741_2_1737}>
            <View style={styles.View_I2_3741_2_1738} />
            <View style={styles.View_I2_3741_2_1739}>
              <View style={styles.View_I2_3741_2_1740} />
              <View style={styles.View_I2_3741_2_1748}>
                <View style={styles.View_I2_3741_2_1751} />
                <View style={styles.View_I2_3741_2_1754} />
              </View>
            </View>
            <View style={styles.View_I2_3741_2_1756} />
            <View style={styles.View_I2_3741_2_1814}>
              <Text text="" style={styles.Text_I2_3741_2_1814} />
            </View>
          </View>
        </View>
        <View style={styles.View_2_3742}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9a82/b5b6/a1bc465fdcdd785b903509b5a261a79d"
            }}
            style={styles.ImageBackground_2_3743}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d7e1/6f95/03ecbc6278e562e63904d74d2cb240bb"
        }}
        style={styles.ImageBackground_2_3746}
      />
      <View style={styles.View_2_3747}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4c75/4a7b/083b26ab2e04aa778d131777e878ca58"
          }}
          style={styles.ImageBackground_2_3748}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2488/a764/a33809f9f7d1df1ddbe38d02a4e9f7c9"
          }}
          style={styles.ImageBackground_2_3749}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d459/ffa3/352d49796188ffe5dff3dd094adf65c4"
          }}
          style={styles.ImageBackground_2_3750}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6d0c/b981/5974a866b14c40b1eb385af5e1b3c472"
          }}
          style={styles.ImageBackground_2_3751}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5091/0ff7/d571b2e9d275818cf27e05f829aef048"
          }}
          style={styles.ImageBackground_2_3752}
        />
      </View>
      <View style={styles.View_2_3753}>
        <View style={styles.View_2_3754} />
        <View style={styles.View_2_3755} />
        <View style={styles.View_2_3756}>
          <View style={styles.View_2_3757}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd24/6cce/6e6d1da278e8aeed5b2458d6769401fc"
              }}
              style={styles.ImageBackground_2_3758}
            />
            <View style={styles.View_2_3759}>
              <Text style={styles.Text_2_3759}>Sign me up! </Text>
            </View>
          </View>
        </View>
        <View style={styles.View_2_3760}>
          <Text style={styles.Text_2_3760}>Come To Date Night!</Text>
        </View>
      </View>
      <View style={styles.View_2_3761}>
        <View style={styles.View_2_3762}>
          <View style={styles.View_2_3763}>
            <Text style={styles.Text_2_3763}>
              An app inspired by a movement.
            </Text>
          </View>
          <View style={styles.View_2_3764}>
            <View style={styles.View_2_3765}>
              <Text style={styles.Text_2_3765}>
                “I am having so much fun on your app. The 5 min is just enough
                time to figure out if I am compatible with someone. It is a
                better way to do the first date.”
              </Text>
            </View>
            <View style={styles.View_2_3766}>
              <View style={styles.View_2_3767}>
                <Text style={styles.Text_2_3767}>Sandra</Text>
              </View>
              <View style={styles.View_2_3768}>
                <Text style={styles.Text_2_3768}>Kevin</Text>
              </View>
              <View style={styles.View_2_3769}>
                <Text style={styles.Text_2_3769}>Monica</Text>
              </View>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8d82/e002/8c2c4e39f44375c95e2f822245519a25"
            }}
            style={styles.ImageBackground_2_3770}
          />
        </View>
        <View style={styles.View_2_3771}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4733/f288/e190f962b30bd1d6e8949508268715e2"
            }}
            style={styles.ImageBackground_2_3772}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8c4f/b248/0dd835081d844bd8f703068a3e81862a"
            }}
            style={styles.ImageBackground_2_3773}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5708/b009/97df498b0a9f07d8cac9daf1be46a936"
            }}
            style={styles.ImageBackground_2_3774}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5fb6/13b5/b15fe230247e0f410096bf5e83ea8ac7"
            }}
            style={styles.ImageBackground_2_3775}
          />
        </View>
        <View style={styles.View_2_3776}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4e44/809a/a25d5098b783b483767e81598fe0c2a4"
            }}
            style={styles.ImageBackground_2_3777}
          />
          <View style={styles.View_2_3778}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c1da/6ff4/e94eacbac48c0f0ab18c35daaca9270f"
              }}
              style={styles.ImageBackground_2_3779}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6f3c/e0e7/7a24efa6095a8e73188c2b70298525bd"
              }}
              style={styles.ImageBackground_2_3780}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ceaa/22b2/226f65ea820bf683f0d13327085c07ce"
              }}
              style={styles.ImageBackground_2_3781}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/25a7/102f/0c57733b3519bcc286ab5e601329cfc2"
              }}
              style={styles.ImageBackground_2_3782}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0150/3251/eb0f67afc5526148098215f8c848353d"
          }}
          style={styles.ImageBackground_2_3783}
        />
        <View style={styles.View_2_3784}>
          <View style={styles.View_2_3785}>
            <Text style={styles.Text_2_3785}>with David </Text>
          </View>
          <View style={styles.View_2_3786}>
            <Text style={styles.Text_2_3786}>Video Call</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6beb/1ee3/e0f753a37097dafba711e13ada3929ed"
          }}
          style={styles.ImageBackground_2_3787}
        />
        <View style={styles.View_2_3788}>
          <View style={styles.View_I2_3788_2_1818}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/eee6/97be/bd2a5ab79c8ba62a050effce1c22beb9"
              }}
              style={styles.ImageBackground_I2_3788_2_1819}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_2_3789}>
        <Text style={styles.Text_2_3789}>Wren</Text>
      </View>
      <View style={styles.View_2_3790}>
        <Text style={styles.Text_2_3790}>Why the Zero Date?</Text>
      </View>
      <View style={styles.View_2_3791}>
        <View style={styles.View_2_3792}>
          <Text style={styles.Text_2_3792}>
            No messaging, no planning, just dates
          </Text>
        </View>
        <View style={styles.View_2_3793}>
          <Text style={styles.Text_2_3793}>
            “You get the critical first minute of meeting someone, without the
            hard work to get there.”
          </Text>
        </View>
        <View style={styles.View_2_3794}>
          <Text style={styles.Text_2_3794}>01</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b844/7f38/72b67ad31c61a187db3e4a770e149f1b"
          }}
          style={styles.ImageBackground_2_3795}
        />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50bb/55fc/6c84293db87e5b6e28b93e41bc57a98a"
          }}
          style={styles.ImageBackground_2_3796}
        />
      </View>
      <View style={styles.View_2_3797}>
        <View style={styles.View_2_3798}>
          <Text style={styles.Text_2_3798}>It’s Simple</Text>
        </View>
        <View style={styles.View_2_3799}>
          <Text style={styles.Text_2_3799}>
            “It’s so simple to use! I love how I can use my laptop or phone to
            video date”
          </Text>
        </View>
        <View style={styles.View_2_3800}>
          <Text style={styles.Text_2_3800}>
            “Like meeting new people at a party... but you don’t have to wear
            pants.”
          </Text>
        </View>
        <View style={styles.View_2_3801}>
          <Text style={styles.Text_2_3801}>02</Text>
        </View>
      </View>
      <View style={styles.View_2_3802}>
        <View style={styles.View_2_3803}>
          <Text style={styles.Text_2_3803}>It’s fun!</Text>
        </View>
        <View style={styles.View_2_3804}>
          <Text style={styles.Text_2_3804}>03</Text>
        </View>
        <View style={styles.View_2_3805}>
          <Text style={styles.Text_2_3805}>04</Text>
        </View>
      </View>
      <View style={styles.View_2_3806}>
        <Text style={styles.Text_2_3806}>
          The Zero Date is a modern twist to online dating.
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7e5f/babe/9c32e65a49d5fb5da5bd9d3769bd959f"
        }}
        style={styles.ImageBackground_2_3807}
      />
      <View style={styles.View_2_3808}>
        <Text style={styles.Text_2_3808}>-Sam</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a811/076e/cedf34877283624fa9bbc2f85a374752"
        }}
        style={styles.ImageBackground_2_3809}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b12a/e193/1741b6a936096ac18e6657a48946117e"
        }}
        style={styles.ImageBackground_2_3810}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6c62/4bd5/c841145ccc005d24aad346bdf89e1250"
        }}
        style={styles.ImageBackground_2_3811}
      />
      <View style={styles.View_2_3812}>
        <Text style={styles.Text_2_3812}>Start</Text>
      </View>
      <View style={styles.View_2_3813}>
        <Text style={styles.Text_2_3813}>
          Oh yea, did we mention it’s free?
        </Text>
      </View>
      <View style={styles.View_2_3814}>
        <Text style={styles.Text_2_3814}>A no pressure zone.</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fb37/3ff9/2c2bfbbfda42eadcf926173eb22ec5c3"
        }}
        style={styles.ImageBackground_2_3815}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cd84/3542/99f2bb0ca848713536c23cf49352ff79"
        }}
        style={styles.ImageBackground_2_3816}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/05f9/8f34/04e93cdc934473c6cee3eb8e7aedcf83"
        }}
        style={styles.ImageBackground_2_3817}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0549/a274/b514a695e6b0a790887ff062a774ab40"
        }}
        style={styles.ImageBackground_2_3818}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cdd0/624c/cf0c8a6455ca1ba29fe8b52683b90e43"
        }}
        style={styles.ImageBackground_2_3819}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce43/44a3/1c4cefbe189b7aa4cc1e23e447b15f01"
        }}
        style={styles.ImageBackground_2_3820}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/440b/87a3/7874a5a08c29dd89068bfc563237f2c7"
        }}
        style={styles.ImageBackground_2_3821}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c6c9/8bcf/3cb51d7e326d95cbd54c1ab97c4c24b5"
        }}
        style={styles.ImageBackground_2_3822}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4390/4a45/ad587514e51928e95671cd2adbfcf6cf"
        }}
        style={styles.ImageBackground_2_3823}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5953/0a63/ad3db53f69ed211162a61c7702ed8fe6"
        }}
        style={styles.ImageBackground_2_3824}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4016/86af/bc4f2f7de401e5d6a92651553f2cd779"
        }}
        style={styles.ImageBackground_2_3825}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4002/8ebf/27212076d93a05aca7245f03a0829c1f"
        }}
        style={styles.ImageBackground_2_3826}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5a8/ffc4/e2d43a04041317ba9c8c62625bc468c6"
        }}
        style={styles.ImageBackground_2_3827}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7585/f76b/923af2fc577217c22ef6620a47ba5599"
        }}
        style={styles.ImageBackground_2_3828}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3ade/935e/cfa22bf6a6e7eadffff00463a3135490"
        }}
        style={styles.ImageBackground_2_3829}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/73f6/7066/241ad0602e7fef649da138211cc4d2da"
        }}
        style={styles.ImageBackground_2_3830}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a07/4d22/0bf0319a66ef5a836b8851b6d662623a"
        }}
        style={styles.ImageBackground_2_3831}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb61/5679/06d8a4dc64603c4d1f11be91d5a973f4"
        }}
        style={styles.ImageBackground_2_3832}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3d74/f635/94c7f11a848ff732d7a9d719153ab8fe"
        }}
        style={styles.ImageBackground_2_3833}
      />
      <View style={styles.View_2_3834}>
        <Text style={styles.Text_2_3834}>(Yep. You read that right.)</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5121/da93/68fe49750677f5425bdc82b105827252"
        }}
        style={styles.ImageBackground_2_3835}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b5f/8361/3741d0f292e5a070182d65c82992c0bd"
        }}
        style={styles.ImageBackground_2_3836}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0cef/1d6e/cb4070c6000be0377e606ea5771a01d6"
        }}
        style={styles.ImageBackground_2_3837}
      />
      <View style={styles.View_2_3838}>
        <View style={styles.View_2_3839} />
        <View style={styles.View_2_3840} />
        <View style={styles.View_2_3841}>
          <Text style={styles.Text_2_3841}>
            “The zero date (ZD) should be considered prior to any first date,
            eating date, drunk date, nap date , road trip date, hug date, movie
            date, kiss date, or meet the family date.”{" "}
          </Text>
        </View>
        <View style={styles.View_2_3842}>
          <Text style={styles.Text_2_3842}>- Urban Dictionary</Text>
        </View>
      </View>
      <View style={styles.View_2_3843}>
        <View style={styles.View_2_3844}>
          <View style={styles.View_2_3845}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/27ba/4736/e323a65956b8ab4995603f8c559589ce"
              }}
              style={styles.ImageBackground_2_3846}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bca7/5ab1/5dc0043b57b5bf37d3f9a90158ea12d6"
              }}
              style={styles.ImageBackground_2_3847}
            />
          </View>
          <View style={styles.View_2_3848}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3963/ac69/cee1703e37c1a5798353b55d5485ace7"
              }}
              style={styles.ImageBackground_2_3849}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2768/8cee/c9c027d1014f9f867781443e6be70a23"
              }}
              style={styles.ImageBackground_2_3850}
            />
          </View>
          <View style={styles.View_2_3851}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/351f/5c8c/1415e15f7a3ac1b4c32614c50f5a5b35"
              }}
              style={styles.ImageBackground_2_3852}
            />
            <View style={styles.View_2_3853}>
              <Text style={styles.Text_2_3853}>
                Hi Sanvi! love your sweater!{" "}
              </Text>
            </View>
            <View style={styles.View_2_3854} />
          </View>
          <View style={styles.View_2_3855}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/39ff/7561/20864f101d9e4427a81a296ce61a7064"
              }}
              style={styles.ImageBackground_2_3856}
            />
            <View style={styles.View_2_3857}>
              <Text style={styles.Text_2_3857}>
                Hi Sara, Thanks! It’s a bit cold here.{" "}
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_2_3858}>
        <View style={styles.View_2_3859} />
        <View style={styles.View_2_3860} />
        <View style={styles.View_2_3861} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c1f1/bb7b/0ea0460bb912edb2681cff2d87acd705"
          }}
          style={styles.ImageBackground_2_3862}
        />
        <View style={styles.View_2_3863}>
          <Text style={styles.Text_2_3863}> SHOW UP!</Text>
        </View>
        <View style={styles.View_2_3864}>
          <Text style={styles.Text_2_3864}>Pretty simple, huh?</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5117/fcc0/51fc7801a8119c701fb71aaf6e75f75d"
          }}
          style={styles.ImageBackground_2_3865}
        />
        <View style={styles.View_2_3866}>
          <Text style={styles.Text_2_3866}>Click ‘Start’</Text>
        </View>
        <View style={styles.View_2_3867}>
          <Text style={styles.Text_2_3867}>
            Doesn’t get any easier than this!
          </Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9db2/abc8/9a4c610f792c8da938c3fa51214ef595"
          }}
          style={styles.ImageBackground_2_3868}
        />
        <View style={styles.View_2_3869}>
          <Text style={styles.Text_2_3869}>Get Dates</Text>
        </View>
        <View style={styles.View_2_3870}>
          <Text style={styles.Text_2_3870}>That’s it? Yep. That’s it!</Text>
        </View>
      </View>
      <View style={styles.View_2_3871}>
        <Text style={styles.Text_2_3871}>This is the best part!</Text>
      </View>
      <View style={styles.View_2_3872}>
        <Text style={styles.Text_2_3872}>
          Don’t worry. You won’t miss the Bachelor{" "}
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8628/459d/7e51974e4e4caa387c3f45308a4d012c"
        }}
        style={styles.ImageBackground_2_3873}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/27c0/6994/7f20b8186fd3bc9c2c4caa0286cb0694"
        }}
        style={styles.ImageBackground_2_3874}
      />
      <View style={styles.View_2_3875}>
        <View style={styles.View_2_3876}>
          <Text style={styles.Text_2_3876}>How does it work?</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3860/b1ed/72b0f7fa0f62ea4f64f65eff004a2ce6"
        }}
        style={styles.ImageBackground_2_3877}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0727/b5ef/dcb3aa640222119035c9bdc4cd77facf"
        }}
        style={styles.ImageBackground_2_3878}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c6e/1191/efaa00469d7bccc34723dc9024660200"
        }}
        style={styles.ImageBackground_2_3879}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3e99/f69a/e1c615012c9445904d9561606e4f6851"
        }}
        style={styles.ImageBackground_2_3880}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/347d/92d2/b515d708df21e29151287cf5b2689046"
        }}
        style={styles.ImageBackground_2_3881}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1371/90bb/59660ae5e5080b7cb1cad35a359e0cfa"
        }}
        style={styles.ImageBackground_2_3882}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/22ed/255f/af02312c1c1cf433ed3894df67eed11c"
        }}
        style={styles.ImageBackground_2_3883}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3db5/e418/33f0abe7d24e1de15724c4f8e2ff9da3"
        }}
        style={styles.ImageBackground_2_3884}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a48e/2a55/00a13c58eb6a388c08783fcd649f378a"
        }}
        style={styles.ImageBackground_2_3885}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a38a/867e/0939ec49feb298a8599d2b73b8f7ec0b"
        }}
        style={styles.ImageBackground_2_3886}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/98d2/8291/8d0a9457b9b61164424c0be5b7b3559c"
        }}
        style={styles.ImageBackground_2_3887}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7758/677a/a6cdfb5994ee6f54655ec4cfe731e7ec"
        }}
        style={styles.ImageBackground_2_3888}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b17/4c22/904a7d4f9fa2eb545d967c655bb3a323"
        }}
        style={styles.ImageBackground_2_3889}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5bdf/25bf/4c5e93c4a864956cb047b68717632b77"
        }}
        style={styles.ImageBackground_2_3890}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1260/ced4/3e6dee83bff2ce944364d935c01b830b"
        }}
        style={styles.ImageBackground_2_3891}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/339f/88e9/e876c75c3f7d8ce6b98668e38d7c47bd"
        }}
        style={styles.ImageBackground_2_3892}
      />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/82eb/0ecf/2c52818a9322f44b6a3a84f80427a754"
        }}
        style={styles.ImageBackground_2_3893}
      />
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("632%") },
  View_2_3682: {
    flexGrow: 1,
    width: wp("94%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("250%"),
    justifyContent: "center"
  },
  Text_2_3682: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 36,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  ImageBackground_2_3683: {
    width: wp("174%"),
    height: hp("79%"),
    top: hp("551%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-44%")
  },
  View_2_3685: {
    width: wp("14%"),
    height: hp("8%"),
    top: hp("319%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_3686: {
    width: wp("14%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2_3687: {
    width: wp("14%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_3706: {
    width: wp("14%"),
    height: hp("8%"),
    top: hp("319%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_3707: {
    width: wp("14%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2_3708: {
    width: wp("14%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_3711: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_2_3712: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2_3713: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2_3716: {
    width: wp("8%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_2_3725: {
    width: wp("7%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_2_3739: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("611%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_2_3740: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("124%"),
    minHeight: hp("124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_3741: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("124%"),
    minHeight: hp("124%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 0.4000000059604645)",
    overflow: "hidden"
  },
  View_I2_3741_2_1721: {
    flexGrow: 1,
    width: wp("38%"),
    height: hp("75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("29%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_3741_2_1722: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("55%"),
    minHeight: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2_3741_2_1723: {
    width: wp("38%"),
    minWidth: wp("38%"),
    minHeight: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_I2_3741_2_1723: {
    color: "rgba(24, 25, 31, 1)",
    fontSize: 80,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_3741_2_1724: {
    width: wp("38%"),
    minWidth: wp("38%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("43%"),
    justifyContent: "center"
  },
  Text_I2_3741_2_1724: {
    color: "rgba(24, 25, 31, 1)",
    fontSize: 21,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.13,
    textTransform: "none"
  },
  View_I2_3741_2_1725: {
    width: wp("0%"),
    minWidth: wp("0%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("60%"),
    justifyContent: "center"
  },
  Text_I2_3741_2_1725: {
    color: "rgba(255, 38, 246, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.22,
    textTransform: "none"
  },
  View_I2_3741_2_1726: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("69%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I2_3741_2_1727: {
    width: wp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I2_3741_2_1727: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_3741_2_1737: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I2_3741_2_1738: {
    width: wp("100%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I2_3741_2_1739: {
    width: wp("34%"),
    minWidth: wp("34%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2_3741_2_1740: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2_3741_2_1748: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I2_3741_2_1751: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_3741_2_1754: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_3741_2_1756: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    top: hp("2%")
  },
  View_I2_3741_2_1814: {
    width: wp("16%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_I2_3741_2_1814: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 30,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: -0.042773738503456116,
    textTransform: "none"
  },
  View_2_3742: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("74%")
  },
  ImageBackground_2_3743: {
    width: wp("6%"),
    height: hp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2_3746: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("22%"),
    minHeight: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("10%")
  },
  View_2_3747: {
    width: wp("47%"),
    minWidth: wp("47%"),
    height: hp("80%"),
    minHeight: hp("80%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("24%")
  },
  ImageBackground_2_3748: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("5%")
  },
  ImageBackground_2_3749: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("0%")
  },
  ImageBackground_2_3750: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    top: hp("20%")
  },
  ImageBackground_2_3751: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("15%")
  },
  ImageBackground_2_3752: {
    width: wp("37%"),
    minWidth: wp("37%"),
    height: hp("50%"),
    minHeight: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("30%")
  },
  View_2_3753: {
    width: wp("74%"),
    minWidth: wp("74%"),
    height: hp("46%"),
    minHeight: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("566%")
  },
  View_2_3754: {
    width: wp("74%"),
    height: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_2_3755: {
    width: wp("73%"),
    height: hp("40%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_2_3756: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("26%")
  },
  View_2_3757: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_3758: {
    width: wp("14%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_3759: {
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "center"
  },
  Text_2_3759: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_3760: {
    width: wp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("12%"),
    justifyContent: "flex-start"
  },
  Text_2_3760: {
    color: "rgba(18, 18, 18, 1)",
    fontSize: 40,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_2_3761: {
    width: wp("85%"),
    minWidth: wp("85%"),
    height: hp("207%"),
    minHeight: hp("207%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("285%")
  },
  View_2_3762: {
    width: wp("36%"),
    minWidth: wp("36%"),
    height: hp("207%"),
    minHeight: hp("207%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("48%"),
    top: hp("0%")
  },
  View_2_3763: {
    width: wp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_3763: {
    color: "rgba(18, 18, 18, 1)",
    fontSize: 48,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_3764: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("143%"),
    minHeight: hp("143%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("65%")
  },
  View_2_3765: {
    width: wp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_3765: {
    color: "rgba(64, 72, 82, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_3766: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("122%"),
    minHeight: hp("122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20%")
  },
  View_2_3767: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_3767: {
    color: "rgba(39, 50, 64, 1)",
    fontSize: 12,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_2_3768: {
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("92%"),
    justifyContent: "flex-start"
  },
  Text_2_3768: {
    color: "rgba(39, 50, 64, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_2_3769: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("119%"),
    justifyContent: "flex-start"
  },
  Text_2_3769: {
    color: "rgba(39, 50, 64, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  ImageBackground_2_3770: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("52%")
  },
  View_2_3771: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("93%"),
    minHeight: hp("93%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%")
  },
  ImageBackground_2_3772: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("93%"),
    minHeight: hp("93%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_3773: {
    width: wp("28%"),
    minWidth: wp("28%"),
    height: hp("93%"),
    minHeight: hp("93%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_2_3774: {
    width: wp("30%"),
    minWidth: wp("30%"),
    height: hp("99%"),
    minHeight: hp("99%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-2%"),
    top: hp("-2%"),
    resizeMode: "cover"
  },
  ImageBackground_2_3775: {
    width: wp("49%"),
    height: hp("99%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-11%"),
    top: hp("-7%")
  },
  View_2_3776: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("0%")
  },
  ImageBackground_2_3777: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("32%"),
    minHeight: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_3778: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("8%")
  },
  ImageBackground_2_3779: {
    width: wp("8%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2_3780: {
    width: wp("8%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_2_3781: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    resizeMode: "cover"
  },
  ImageBackground_2_3782: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("29%"),
    minHeight: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-5%"),
    top: hp("-8%")
  },
  ImageBackground_2_3783: {
    width: wp("16%"),
    height: hp("11%"),
    top: hp("73%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_3784: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("76%")
  },
  View_2_3785: {
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_2_3785: {
    color: "rgba(44, 58, 75, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "none"
  },
  View_2_3786: {
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_3786: {
    color: "rgba(39, 50, 64, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  ImageBackground_2_3787: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("74%")
  },
  View_2_3788: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("77%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_3788_2_1818: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I2_3788_2_1819: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_3789: {
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("514%"),
    justifyContent: "flex-start"
  },
  Text_2_3789: {
    color: "rgba(39, 50, 64, 1)",
    fontSize: 12,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_2_3790: {
    width: wp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("440%"),
    justifyContent: "flex-start"
  },
  Text_2_3790: {
    color: "rgba(18, 18, 18, 1)",
    fontSize: 40,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "capitalize"
  },
  View_2_3791: {
    width: wp("35%"),
    minWidth: wp("35%"),
    height: hp("52%"),
    minHeight: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("442%")
  },
  View_2_3792: {
    width: wp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_3792: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_3793: {
    width: wp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("15%"),
    justifyContent: "center"
  },
  Text_2_3793: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_3794: {
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_2_3794: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_3795: {
    width: wp("28%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("28%")
  },
  ImageBackground_2_3796: {
    width: wp("28%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("52%")
  },
  View_2_3797: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("47%"),
    minHeight: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("472%")
  },
  View_2_3798: {
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_3798: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_3799: {
    width: wp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_2_3799: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_3800: {
    width: wp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("37%"),
    justifyContent: "flex-start"
  },
  Text_2_3800: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_3801: {
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_3801: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_3802: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("33%"),
    minHeight: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("498%")
  },
  View_2_3803: {
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_3803: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 26,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_3804: {
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_2_3804: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_3805: {
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28%"),
    justifyContent: "flex-start"
  },
  Text_2_3805: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_3806: {
    width: wp("35%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("308%"),
    justifyContent: "flex-start"
  },
  Text_2_3806: {
    color: "rgba(61, 61, 61, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_3807: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("362%")
  },
  View_2_3808: {
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("144%"),
    justifyContent: "flex-start"
  },
  Text_2_3808: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  ImageBackground_2_3809: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("455%")
  },
  ImageBackground_2_3810: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("507%")
  },
  ImageBackground_2_3811: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("482%")
  },
  View_2_3812: {
    width: wp("1%"),
    minWidth: wp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("181%"),
    justifyContent: "center"
  },
  Text_2_3812: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 4,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  View_2_3813: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("61%"),
    top: hp("525%"),
    justifyContent: "flex-start"
  },
  Text_2_3813: {
    color: "rgba(255, 38, 246, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_3814: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("452%"),
    justifyContent: "flex-start"
  },
  Text_2_3814: {
    color: "rgba(255, 38, 246, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_3815: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("439%")
  },
  ImageBackground_2_3816: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("438%")
  },
  ImageBackground_2_3817: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("441%")
  },
  ImageBackground_2_3818: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("441%")
  },
  ImageBackground_2_3819: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("441%")
  },
  ImageBackground_2_3820: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("442%")
  },
  ImageBackground_2_3821: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("527%")
  },
  ImageBackground_2_3822: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("53%"),
    top: hp("526%")
  },
  ImageBackground_2_3823: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("527%")
  },
  ImageBackground_2_3824: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("527%")
  },
  ImageBackground_2_3825: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("528%")
  },
  ImageBackground_2_3826: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("527%")
  },
  ImageBackground_2_3827: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("449%")
  },
  ImageBackground_2_3828: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("451%")
  },
  ImageBackground_2_3829: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("448%")
  },
  ImageBackground_2_3830: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25%"),
    top: hp("451%")
  },
  ImageBackground_2_3831: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("449%")
  },
  ImageBackground_2_3832: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("451%")
  },
  ImageBackground_2_3833: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("451%")
  },
  View_2_3834: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("265%"),
    justifyContent: "center"
  },
  Text_2_3834: {
    color: "rgba(255, 38, 246, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  ImageBackground_2_3835: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    top: hp("265%")
  },
  ImageBackground_2_3836: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("265%")
  },
  ImageBackground_2_3837: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("264%")
  },
  View_2_3838: {
    width: wp("59%"),
    minWidth: wp("59%"),
    height: hp("35%"),
    minHeight: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("391%")
  },
  View_2_3839: {
    width: wp("59%"),
    height: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_2_3840: {
    width: wp("58%"),
    height: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_2_3841: {
    width: wp("48%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_2_3841: {
    color: "rgba(61, 61, 61, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_3842: {
    width: wp("15%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("24%"),
    justifyContent: "flex-start"
  },
  Text_2_3842: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_3843: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("69%"),
    minHeight: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("472%")
  },
  View_2_3844: {
    width: wp("23%"),
    minWidth: wp("23%"),
    height: hp("69%"),
    minHeight: hp("69%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_3845: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_3846: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_3847: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("31%"),
    minHeight: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_3848: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("38%"),
    minHeight: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("30%")
  },
  ImageBackground_2_3849: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("38%"),
    minHeight: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_2_3850: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("38%"),
    minHeight: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_3851: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("6%")
  },
  ImageBackground_2_3852: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%")
  },
  View_2_3853: {
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_2_3853: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_2_3854: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_3855: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("33%")
  },
  ImageBackground_2_3856: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_3857: {
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_2_3857: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_2_3858: {
    width: wp("79%"),
    minWidth: wp("79%"),
    height: hp("70%"),
    minHeight: hp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("170%")
  },
  View_2_3859: {
    width: wp("24%"),
    height: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_2_3860: {
    width: wp("23%"),
    height: hp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_2_3861: {
    width: wp("23%"),
    height: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("0%"),
    backgroundColor: "rgba(18, 18, 18, 1)"
  },
  ImageBackground_2_3862: {
    width: wp("22%"),
    height: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    resizeMode: "cover"
  },
  View_2_3863: {
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("57%"),
    justifyContent: "flex-start"
  },
  Text_2_3863: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_2_3864: {
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("65%"),
    justifyContent: "flex-start"
  },
  Text_2_3864: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_3865: {
    width: wp("21%"),
    height: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("2%"),
    resizeMode: "cover"
  },
  View_2_3866: {
    width: wp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("57%"),
    justifyContent: "flex-start"
  },
  Text_2_3866: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_2_3867: {
    width: wp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("65%"),
    justifyContent: "flex-start"
  },
  Text_2_3867: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "none"
  },
  ImageBackground_2_3868: {
    width: wp("21%"),
    height: hp("51%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("2%"),
    resizeMode: "cover"
  },
  View_2_3869: {
    width: wp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58%"),
    top: hp("57%"),
    justifyContent: "center"
  },
  Text_2_3869: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 32,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1,
    textTransform: "uppercase"
  },
  View_2_3870: {
    width: wp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("65%"),
    justifyContent: "flex-start"
  },
  Text_2_3870: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_3871: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%"),
    top: hp("214%"),
    justifyContent: "flex-start"
  },
  Text_2_3871: {
    color: "rgba(255, 38, 246, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_3872: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("80%"),
    justifyContent: "center"
  },
  Text_2_3872: {
    color: "rgba(255, 38, 246, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.22,
    textTransform: "none"
  },
  ImageBackground_2_3873: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("91%"),
    resizeMode: "cover"
  },
  ImageBackground_2_3874: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("79%")
  },
  View_2_3875: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("140%")
  },
  View_2_3876: {
    width: wp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_2_3876: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 48,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.5,
    textTransform: "uppercase"
  },
  ImageBackground_2_3877: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("148%")
  },
  ImageBackground_2_3878: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("224%")
  },
  ImageBackground_2_3879: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91%"),
    top: hp("223%")
  },
  ImageBackground_2_3880: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91%"),
    top: hp("223%")
  },
  ImageBackground_2_3881: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91%"),
    top: hp("223%")
  },
  ImageBackground_2_3882: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91%"),
    top: hp("223%")
  },
  ImageBackground_2_3883: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("225%")
  },
  ImageBackground_2_3884: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75%"),
    top: hp("226%")
  },
  ImageBackground_2_3885: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74%"),
    top: hp("227%")
  },
  ImageBackground_2_3886: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("225%")
  },
  ImageBackground_2_3887: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("226%")
  },
  ImageBackground_2_3888: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    top: hp("228%")
  },
  ImageBackground_2_3889: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("264%")
  },
  ImageBackground_2_3890: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    top: hp("263%")
  },
  ImageBackground_2_3891: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("261%")
  },
  ImageBackground_2_3892: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("262%")
  },
  ImageBackground_2_3893: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("262%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
