import React from 'react';
class ErrorBoundry extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componenrDidCatch(error, info) {
        this.setState({ hasError: true})
    }

    render() {
        if(this.state.hasError) {
            return <h1>Ooops. This is not good</h1>
        }
        return this.props.children
    }
}
export default ErrorBoundry