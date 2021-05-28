export const selectPizzas = (reduxState) => {
    const sorted=[...reduxState.pizzas.list];
    return sorted.sort((a,b)=>{
        return b.bought-a.bought
    })
}
