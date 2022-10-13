import { ScrollView, Text } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { PARTNERS } from '../shared/partners';
import { Avatar } from 'react-native-elements';
import { useState } from 'react';
import * as Animatable from 'react-native-animatable';

const ContactScreen = () => {
  return (
    <ScrollView>
      <Animatable.View animation='fadeInDown' duration={2000} delay={1000}>
        <Card wrapperStyle={{ margin: 20 }}>
          <Card.Title>Contact Information</Card.Title>
          <Card.Divider />
          <Text style={{ marginBottom: 10 }}>
            1 Nucamp Way Seattle, WA 98001 U.S.A.
          </Text>
          <Text>Phone: 1-206-55-1234</Text>
          <Text>Email: campsites@nucamp.co</Text>
          <Card.Divider />
        </Card>
      </Animatable.View>
    </ScrollView>
  );
};

export default ContactScreen;
