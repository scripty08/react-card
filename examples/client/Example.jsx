import React, { Fragment } from 'react';
import { Description } from './Description';
import { Card } from '../../src';

export const Example = () => {

    const onClick = (e) => {
        console.log(e);
    }

    return (
        <Fragment>
            <Description title={'Simple Card'}>
                <Card
                    title={'Simple Card'}
                    width={300}
                    key={1}
                >
                    Simple Card Content
                </Card>
            </Description>


            <Description title={'Card with Actions'}>
                <Card
                    title={'Card with actions 1'}
                    width={300}
                    onEdit={onClick}
                    onClose={onClick}
                    key={2}
                >
                    Simple Card Content Some more text. Some more text.
                    Some more text. Some more text. Some more text. Some more text.
                    Some more text. Some more text. Some more text. Some more text.
                </Card>
            </Description>

            <Description title={'Card with custom actions'}>
                <Card
                    title={'Card with actions 2'}
                    width={300}
                    extra={'custom field'}
                    key={3}
                >
                    Simple Card Content
                </Card>
            </Description>

            <Description title={'Card with ok and cancel buttons'}>
                <Card
                    title={'Card with actions 3'}
                    width={300}
                    onEdit={onClick}
                    onClose={onClick}
                    onOk={onClick}
                    onCancel={onClick}
                    key={4}
                >
                    Simple Card Content
                </Card>
            </Description>
        </Fragment>
    );
};
