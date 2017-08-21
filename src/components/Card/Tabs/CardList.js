import React, { Component } from 'react';

import { Container, Content, Card, CardItem, Text, View, Body } from 'native-base';

export default class CardList extends Component {
	render() {
		return (
			<Content padder>
				<Card>
					<CardItem>
						<Body>
							<Text>NativeBase is open source and free.</Text>
						</Body>
					</CardItem>
					<CardItem>
						<Body>
							<Text>Platform specific codebase for components.</Text>
						</Body>
					</CardItem>
					<CardItem>
						<Body>
							<Text>Any native third-party libraries can be included.</Text>
						</Body>
					</CardItem>
				</Card>
			</Content>
		);
	}
}
