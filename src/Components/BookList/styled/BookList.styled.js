import styled from 'styled-components'

const color = '#3F51B5';

export const BookSection = styled.div`
    background: #F5F5F5;
`;

export const SectionTitle = styled.h3`
    margin: 0px 10% 15px 10%;
    padding: 20px 0;
    color: ${color};
`;

export const List = styled.ul`
    padding: 0;
    list-style-type: none;
`;

export const BookItem = styled.li`

`;

export const GridBook = styled.div` /*Grid*/
    margin: 15px 10%;
    border-bottom: 1px solid #E5E5E5;
    border-radius: 10px;
    padding: 1.5rem;
    background-color: #FFFFFF;
    box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const BookCardRow = styled.div` /*Grid row*/
    display: flex;
`;

export const BookCardColumn = styled.div`
    flex: ${(props) => props.size};
    display: flex;
    align-items: center;
`;

export const BookImage = styled.div`
    i {
        max-width: 50px;
        color: ${color};
    }
`;

export const BookDetails = styled.div`
    color: #616161;
`;

export const BookTitle = styled.div`
    font-weight: 700;
`;

export const BookAuthor = styled.div`
    font-size: 0.8rem;
`;

export const BookOptions = styled.div`
    right: 0px;
    bottom: 0px;
    color: ${color};
`;

export const BookNullMessage = styled.div`
    font-size: 0.8rem;
`;