export const RevenueCard = ({
    title , 
    orderCount , 
    amount
}) => {
    return <div className="bg-white rounded shadow-sm">
        <div>
            {title}
            ?
        </div>
        <div className="flex justify-between" >
            <div>
                Rs {amount}
            </div>
            {orderCount ? <div>
                {orderCount} order(s) {">"}
            </div> : null} 
        </div>
    </div>
}