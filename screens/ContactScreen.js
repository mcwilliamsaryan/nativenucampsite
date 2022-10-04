import { ScrollView, Text } from 'react-native';
import { Card, ListItem } from 'react-native-elements';
import { PARTNERS } from '../shared/partners';
import { Avatar } from 'react-native-elements';
import { useState } from 'react';

const ContactScreen = () => {
  return (
    <ScrollView>
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
    </ScrollView>
  );
};

export default ContactScreen;
