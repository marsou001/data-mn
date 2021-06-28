import styled from 'styled-components';

export const Container = styled.div`
    background-color: #fff;
    position: relative;
    border-radius: 8px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
    cursor: pointer;
`;

export const Title = styled.p`
    color: #666;
    font-weight: 500;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    margin: 0;
`;

export const Content = styled.span`
    color: #000;
    font-size: 1.4rem;
    font-weight: bold;
`;

export const Option = styled.div`
    text-align: center;
    padding: 10px;
`;

export const Options = styled.ul`
    background-color: #fff;
    text-align: center;
    list-style-type: none;
    position: absolute;
    top: 65px;
    width 100%;
    max-height: 200px;
    overflow-y: auto;
    margin: 0;
    padding-left: 0;
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
    box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.3);
    > li {
        padding: 8px 0;
    }
    > li:first-child {
    border-top: 1px solid #666;
    }
`;