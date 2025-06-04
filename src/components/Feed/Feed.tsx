import React from 'react';
import styled from 'styled-components';

export const Feed: React.FC = () => {
    return (
        <Wrapper>
            <ProfileImage />
            <Input placeholder="오늘 무슨일이 있었나요?" />
            <ImageInput type="file" />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    border: 1px solid #e7e7e7;
    background-color: white;
    margin-top: 25px;
    padding: 20px 24px;
`;

const ProfileImage = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 40px;
    background-color: #e7e7e7;
    margin-right: 12px;
`;

const Input = styled.input`
    flex: 1;
    font-size: 12px;
    color: #000;
    border: none;
    &::placeholder {
        color: #000;
    }
`;

const ImageInput = styled.input`
    display: none;
`;
