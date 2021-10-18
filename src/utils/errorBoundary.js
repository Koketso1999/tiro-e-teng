import React, {Component} from 'react';
import '../css/errorBoundary.less';
import {Button, Result} from 'antd';

class ErrorBoundary extends Component {
    state: { hasError: boolean };

    constructor(props: any) {
        super(props);
        // default has no error
        this.state = {hasError: false}
    }

    // for when an error occurs, set hasError state to true
    static getDerivedStateFromError(error: any) {
        return {hasError: true};
    }

    render() {
        // check if there's an error
        if (this.state.hasError) {
            return (
                <div className={'main-div'}>
                    <Result
                        status="500"
                        title="Oops..."
                        subTitle="Sorry, something went wrong here. Please refresh the page below."
                        extra={<Button type="primary" onClick={() => window.location.reload()}>Refresh Page</Button>}
                    />
                </div>
            )
        }

        // when there's no error, just show the component
        return this.props.children;
    }
}

export default ErrorBoundary;