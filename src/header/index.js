// @flow
import React, { Component } from 'react';
import { Header, Segment } from 'semantic-ui-react';

class App extends Component {
    render() {
        return (
            <Segment
                inverted
                id='header'
                style={{ padding: 8, backgroundColor: '#2fac66', borderRadius: 0 }}
            >
                <Header
                inverted
                as='h3'
                textAlign='center'
                style={{ margin: 0 }}
                >
                    github-logical-search
                </Header>
            </Segment>
        );
    }
}

export default App;

