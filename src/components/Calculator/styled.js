import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: #ccc;
    width: auto;
    height: auto;
    border-radius: 10px;
    padding: 20px;
    border: 1px solid black;       

`;

export const Screen = styled.div`
    
    padding: 5px;
    display: flex;
    align-items: center;
    flex-direction: row-reverse;
    width: 280px;
    height: 100px;
    background-color: white;
    border-radius: 10px;
    margin-bottom: 20px;
    border: 1px solid black;
    font-size: 30px;  
`;

export const Body = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

        

            .columns{
            display: flex;
            justify-content: center;
            align-items: center;

                .numbers{
                display: flex;
                width: 60px;
                height: 60px;
                font-size: 40px;    
                justify-content: center;
                align-items: center;
                border: 1px solid black;
                border-radius: 50%;
                margin: 5px;
                background-color: black;
                color: white;
                cursor: pointer;
                }
            }
        }

        .columns2{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        font-size: 30px;
        margin: 5px;    
        border: 1px solid black;
        border-radius: 50%;
        background-color: black;
        color: white;
        cursor: pointer;

            .columns2:hover{
            background-color: darkgrey;
}
}
`;

export const Left = styled.div`    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;