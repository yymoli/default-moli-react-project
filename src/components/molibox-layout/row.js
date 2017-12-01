/**
 * Created by XYC on 2017/11/21.
 */
import classNames from 'classnames';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    componentClass: PropTypes.oneOfType([
        PropTypes.element,
        PropTypes.string
    ])
};

const defaultProps = {
    componentClass: 'div',
    clsPrefix: 'um-row'
};


class Row extends Component {
    render() {
        const { componentClass: Component, clsPrefix, className, ...others } = this.props;

        const bsclass = `${clsPrefix}`;

        return (
            <Component
                {...others}
                className={classNames(bsclass, className)}
            >
                { this.props.children }
            </Component>
        );
    }
}

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default Row;
