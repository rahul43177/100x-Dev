function App() {
    return <div>
        <WrapperComponent>
            <div>
                Hi There
            </div>
            <WrapperComponent>
                <div>
                    rahul mishra
                    <WrapperComponent>
                        <div>Div inside a div insdie a div</div>
                    </WrapperComponent>
                </div>
            </WrapperComponent>
        </WrapperComponent>
        <WrapperComponent>
            <button>Add </button>
        </WrapperComponent>
    </div>
}



function WrapperComponent({children}) {
    return <div 
        style = {{
            padding : 10 , 
            border : "2px solid black" , 
            borderRadius : 50 , 
            margin : 50 
        }}

    >
        {children}
    </div>

}
export default App;