import React, {Component} from 'react';
import ErrorPage from '../../pages/ErrorPage/ErrorPage'


class ErrorBoundary extends Component {
    state = {
        hasError: false
    }
    static getDerivedStateFromError(error) {
        return {hasError: true}
    }

    render() {
        const {children} = this.props
        const {hasError} = this.state

        if (hasError) {
            return <ErrorPage errorType={'500'}/>
        }

        return children;
    }
}

export default ErrorBoundary;
