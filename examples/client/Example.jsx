import React, { Fragment } from 'react';
import { Description } from './Description';
import { Card } from '../../src';
import { EmailInput } from '@scripty/react-inputs'

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
                >
                    Simple Card Content
                </Card>
            </Description>

            <Description title={'Simple Card with input in title'}>
                <Card
                    title={<EmailInput placeholder={'Title'} />}
                    width={600}
                    onEdit={onClick}
                    onClose={onClick}
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
                >
                    Simple Card Content Some more text. Some more text.
                    Some more text. Some more text. Some more text. Some more text.
                    Some more text. Some more text. Some more text. Some more text.
                </Card>
            </Description>

            <Description title={'Card with custom actions'}>
                <Card
                    title={'Card with actions 2'}
                    width={400}
                    extra={'custom field'}
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
                >
                    Simple Card Content
                </Card>
            </Description>
        </Fragment>
    );
};
