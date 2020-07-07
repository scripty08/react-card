import React from 'react';
import AppstoreOutlined from '@ant-design/icons/lib/icons/AppstoreOutlined';
import EditOutlined from '@ant-design/icons/lib/icons/EditOutlined';
import SaveOutlined from '@ant-design/icons/lib/icons/SaveOutlined';
import CloseOutlined from '@ant-design/icons/lib/icons/CloseOutlined';
import DeleteOutlined from '@ant-design/icons/lib/icons/DeleteOutlined';
import { CloseButton, OkButton } from '@scripty/react-buttons';
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
        extra
    } = props;

    return (
        <div className={'card'} style={{ width, ...style }}>
            <div className={'headline'}>
                <div className={'title'}>{title}</div>
                <div className={'extra'}>
                    {(onEdit) ? <span onClick={onEdit} className={'item'}><EditOutlined  /></span> : null}
                    {(onSave) ? <span onClick={onSave} className={'item'}><SaveOutlined /></span> : null}
                    {(onMove) ? <span onClick={onMove} className={'item'}><AppstoreOutlined onClick={onMove} /></span> : null}
                    {(onClose) ? <span onClick={onClose} className={'item'}><CloseOutlined /></span> : null}
                    {(onDelete) ? <span onClick={onDelete} className={'item'}><DeleteOutlined onClick={onDelete} /></span> : null}
                    <span className={'content'}>{extra}</span>
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
