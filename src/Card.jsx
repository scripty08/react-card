import React from 'react';
import { CloseButton, DeleteButton, EditButton, MoveButton, OkButton, SaveButton } from '@scripty/react-buttons';
import './Card.scss';

export const Card = (props) => {
    const {
        title,
        children,
        onEdit,
        onSave,
        onMove,
        onClose,
        onCancel,
        onDelete,
        onOk,
        style,
        width = '100%',
        extra,
        cardCls = 'card',
        headlineCls = 'headline',
        titleCls = 'title',
        extraCls = 'extra',
        id = '',
        ...restProps
    } = props;

    const getButtons = () => {
        const buttons = [];
        if (typeof onEdit !== 'undefined') {
            buttons.push(<EditButton key={'edit-' + id} rounded iconBtn color={'white'} onClick={onEdit}/>);
        }
        if (typeof onSave !== 'undefined') {
            buttons.push(<SaveButton key={'save-' + id} rounded iconBtn color={'white'} onClick={onSave}/>);
        }
        if (typeof onMove !== 'undefined') {
            buttons.push(<MoveButton key={'move-' + id} rounded iconBtn color={'white'} onClick={onMove}/>);
        }
        if (typeof onClose !== 'undefined') {
            buttons.push(<CloseButton key={'close-' + id} rounded iconBtn color={'white'} onClick={onClose}/>);
        }
        if (typeof onDelete !== 'undefined') {
            buttons.push(<DeleteButton key={'delete-' + id} rounded iconBtn color={'white'} onClick={onDelete}/>);
        }

        return buttons;
    }

    return (
        <div {...restProps} className={cardCls} style={{ maxWidth: width, ...style }}>
            <div className={headlineCls}>
                <div className={titleCls}>{title}</div>
                <div className={extraCls}>
                    {getButtons()}
                    <span>{extra}</span>
                </div>
            </div>
            <div className={'content'}>{children}</div>
            {(onOk || onCancel) ? <div className={'toolbar'}>
                <div className={'toolbar-content'}>
                    <OkButton style={{ marginRight: 3 }} onClick={onOk}/>
                    <CloseButton color={'red'} onClick={onCancel}/>
                </div>
            </div> : null}
        </div>
    );
};
