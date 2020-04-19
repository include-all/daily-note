import React from 'react';

const asyncComponent = (importComponent) => {
    return class extends React.Component {
        constructor() {
            super();
            this.state = {
                component: null
            }
        }
        componentDidMount() {
            console.log(importComponent())
            importComponent()
                .then(cmp => {
                    console.log(cmp)
                    this.setState({ component: cmp.default });
                });
        }
        render() {
            const C = this.state.component;
            return C ? <C {...this.props} /> : null;
        }
    }
};

export default asyncComponent;