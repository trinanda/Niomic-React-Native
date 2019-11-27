import React, {Component} from 'react';
import {Image} from 'react-native';
import {
  Content,
  Card,
  CardItem,
  Left,
  Thumbnail,
  Body,
  Text,
  Right,
  Icon,
} from 'native-base';

export default class Contents extends Component {
  render() {
    return (
      <Content>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Parque_Eagle_River%2C_Anchorage%2C_Alaska%2C_Estados_Unidos%2C_2017-09-01%2C_DD_02.jpg/220px-Parque_Eagle_River%2C_Anchorage%2C_Alaska%2C_Estados_Unidos%2C_2017-09-01%2C_DD_02.jpg',
                }}
              />
              <Body>
                <Text>Rizal</Text>
                <Text>Sleman</Text>
              </Body>
            </Left>
            <Right>
              <Icon name="more" />
            </Right>
          </CardItem>
          <CardItem cardBody>
            <Image
              source={{
                uri:
                  'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Parque_Eagle_River%2C_Anchorage%2C_Alaska%2C_Estados_Unidos%2C_2017-09-01%2C_DD_02.jpg/220px-Parque_Eagle_River%2C_Anchorage%2C_Alaska%2C_Estados_Unidos%2C_2017-09-01%2C_DD_02.jpg',
              }}
              style={{height: 200, flex: 1}}
            />
          </CardItem>

          <CardItem>
            <Icon name="heart" />
            <Icon name="apps" />
            <Icon name="paper-plane" />
          </CardItem>
          <CardItem>
            <Left>
              <Icon name="heart" />
              <Text>3 Likes</Text>
            </Left>
          </CardItem>
          <CardItem>
            <Text>Pemandangan yang sangat indah untuk dipandang</Text>
          </CardItem>
        </Card>
      </Content>
    );
  }
}
