import React from 'react'

class ErrorBoundry extends React.Component {
    state = {
        isError: false
    }
    componentDidCatch() {
        this.setState({ isError: true })
    }
    render() {
        const { isError } = this.state
        return isError ?
            <div>Error Indicator</div> :
            this.props.children
    }
}

export default ErrorBoundry