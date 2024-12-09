


export default function App() {
    return (
    <>
        <Wrapper>
            <h1>Hello World!</h1>
            <p>This is a paragraph</p>
            <WrapperOne>
                This is wrapper inside wrapper
            </WrapperOne>
        </Wrapper>
        <WrapperOne>
            <h1>Hello World!</h1>
            <p>This is a paragraph</p>
        </WrapperOne>
    </>

    )
}

const WrapperOne = (props) => {
    return (
        <div style={{
            display : "flex" , 
            border : "2px solid green" , 
            padding : "10px" , 
            margin : 10
        }}>
            {props.children}
        </div>
    )
}

export const Wrapper = (props) => {
    return (
        <div style={{
            border : "2px solid black" , 
            padding : 10 , 
            margin : 10
        }}>
            {props.children}
        </div>
    )
}

