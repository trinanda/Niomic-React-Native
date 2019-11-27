import React, {Component} from 'react';
import {Content, Card, CardItem, Thumbnail, Text} from 'native-base';

const dataStory = [
  {
    name: 'Your Story',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Parque_Eagle_River%2C_Anchorage%2C_Alaska%2C_Estados_Unidos%2C_2017-09-01%2C_DD_02.jpg/220px-Parque_Eagle_River%2C_Anchorage%2C_Alaska%2C_Estados_Unidos%2C_2017-09-01%2C_DD_02.jpg',
  },
  {
    name: 'Irwan',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Parque_Eagle_River%2C_Anchorage%2C_Alaska%2C_Estados_Unidos%2C_2017-09-01%2C_DD_02.jpg/220px-Parque_Eagle_River%2C_Anchorage%2C_Alaska%2C_Estados_Unidos%2C_2017-09-01%2C_DD_02.jpg',
  },
  {
    name: 'Betra',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Parque_Eagle_River%2C_Anchorage%2C_Alaska%2C_Estados_Unidos%2C_2017-09-01%2C_DD_02.jpg/220px-Parque_Eagle_River%2C_Anchorage%2C_Alaska%2C_Estados_Unidos%2C_2017-09-01%2C_DD_02.jpg',
  },
  {
    name: 'Julio',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Parque_Eagle_River%2C_Anchorage%2C_Alaska%2C_Estados_Unidos%2C_2017-09-01%2C_DD_02.jpg/220px-Parque_Eagle_River%2C_Anchorage%2C_Alaska%2C_Estados_Unidos%2C_2017-09-01%2C_DD_02.jpg',
  },
  {
    name: 'Fahrul',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Parque_Eagle_River%2C_Anchorage%2C_Alaska%2C_Estados_Unidos%2C_2017-09-01%2C_DD_02.jpg/220px-Parque_Eagle_River%2C_Anchorage%2C_Alaska%2C_Estados_Unidos%2C_2017-09-01%2C_DD_02.jpg',
  },
];

export default class Story extends Component {
  render() {
    return (
      <Content horizontal>
        {dataStory.map((data, index) => {
          return (
            <Card key={index} style={{height: 100}} transparent>
              <CardItem style={{flexDirection: 'column'}}>
                <Thumbnail
                  source={{
                    uri: data.image,
                  }}
                />
                <Text>{data.name}</Text>
              </CardItem>
            </Card>
          );
        })}
      </Content>
    );
  }
}
